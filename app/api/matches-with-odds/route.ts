import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://v3.football.api-sports.io";
const API_KEY = process.env.API_FOOTBALL_KEY!;

const COOKIE_TTL_SECONDS = 60 * 60; // 1 hour per date
const COOKIE_NAME_PREFIX = "matches_with_odds_";
const PREFERRED_BOOKMAKER = "1xbet";

type OddsExtract = {
  hasOdds: boolean;
  bookmakerName?: string;
  odds1?: number;
  oddsX?: number;
  odds2?: number;
  odds1X?: number;
  oddsX2?: number;
  odds12?: number;
};

function extractMatchOdds(oddsData: any): OddsExtract {
  if (!oddsData?.bookmakers) return { hasOdds: false };

  const bookmakers = oddsData.bookmakers as any[];

  const preferred = bookmakers.find((bm) =>
    String(bm.name || "").toLowerCase().includes(PREFERRED_BOOKMAKER)
  );
  const mainBook = preferred || bookmakers[0];
  if (!mainBook?.bets) return { hasOdds: false };

  const bets = mainBook.bets as any[];

  const matchWinner = bets.find(
    (b: any) => String(b.name || "").toLowerCase() === "match winner"
  );
  const doubleChance = bets.find(
    (b: any) => String(b.name || "").toLowerCase() === "double chance"
  );

  const getOdd = (bet: any, value: string) => {
    if (!bet?.values) return undefined;
    const found = bet.values.find(
      (v: any) =>
        String(v.value || "").toLowerCase() === value.toLowerCase()
    );
    const num = parseFloat(found?.odd ?? "");
    return Number.isFinite(num) ? num : undefined;
  };

  const odds1 = getOdd(matchWinner, "Home");
  const oddsX = getOdd(matchWinner, "Draw");
  const odds2 = getOdd(matchWinner, "Away");

  const odds1X = getOdd(doubleChance, "Home/Draw");
  const oddsX2 = getOdd(doubleChance, "Draw/Away");
  const odds12 = getOdd(doubleChance, "Home/Away");

  const hasOdds = !!(odds1 || oddsX || odds2 || odds1X || oddsX2 || odds12);

  return {
    hasOdds,
    bookmakerName: mainBook.name,
    odds1,
    oddsX,
    odds2,
    odds1X,
    oddsX2,
    odds12,
  };
}

export async function GET(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API_FOOTBALL_KEY not set" },
      { status: 500 }
    );
  }

  const { searchParams } = new URL(req.url);
  const dateParam = searchParams.get("date"); // yyyy-MM-dd

  const todayIso = new Date().toISOString().slice(0, 10);
  const matchDate = dateParam || todayIso;

  const cacheKey = `${COOKIE_NAME_PREFIX}${matchDate}`;
  const cached = req.cookies.get(cacheKey)?.value;
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.matches)) {
        return NextResponse.json(parsed);
      }
    } catch {
      // ignore
    }
  }

  try {
    const fixturesRes = await fetch(
      `${API_BASE}/fixtures?date=${matchDate}`,
      {
        headers: { "x-apisports-key": API_KEY },
        next: { revalidate: COOKIE_TTL_SECONDS },
      }
    );

    if (!fixturesRes.ok) {
      return NextResponse.json(
        { error: "Failed to load fixtures" },
        { status: fixturesRes.status }
      );
    }

    const fixturesJson = await fixturesRes.json();
    const fixtures = fixturesJson.response || [];

    if (!fixtures.length) {
      return NextResponse.json({
        date: matchDate,
        count: 0,
        matches: [],
      });
    }

    const matchesWithOdds: any[] = [];

    for (const fix of fixtures) {
      const fixtureId = fix.fixture.id;

      const oddsRes = await fetch(
        `${API_BASE}/odds?fixture=${fixtureId}`,
        {
          headers: { "x-apisports-key": API_KEY },
        }
      );

      if (!oddsRes.ok) continue;

      const oddsJson = await oddsRes.json();
      const oddsRaw = oddsJson.response?.[0];

      const extracted = extractMatchOdds(oddsRaw);
      if (!extracted.hasOdds) continue;

      matchesWithOdds.push({
        fixtureId,
        fixture: fix.fixture,
        league: fix.league,
        teams: fix.teams,
        odds: extracted,
      });
    }

    const payload = {
      date: matchDate,
      count: matchesWithOdds.length,
      matches: matchesWithOdds,
    };

    const response = NextResponse.json(payload);
    response.cookies.set({
      name: cacheKey,
      value: JSON.stringify(payload),
      maxAge: COOKIE_TTL_SECONDS,
      path: "/",
      httpOnly: false,
      sameSite: "lax",
    });

    return response;
  } catch (err) {
    console.error("matches-with-odds error", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
