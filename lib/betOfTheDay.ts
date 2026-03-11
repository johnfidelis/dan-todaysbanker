// lib/betOfTheDay.ts1233
import { getMatchesWithOdds } from "@/lib/getMatchesWithOdds";
import type { NormalizedMatch } from "@/components/MatchList";

// same top leagues as homepage
export const BET_LEAGUE_PRIORITY: { leagueId: number; name: string }[] = [
  { leagueId: 39, name: "Premier League" },
  { leagueId: 140, name: "La Liga" },
  { leagueId: 135, name: "Serie A" },
  { leagueId: 61, name: "Ligue 1" },
  { leagueId: 78, name: "Bundesliga" },
];

export const BET_LEAGUE_INDEX: Record<number, number> =
  BET_LEAGUE_PRIORITY.reduce((acc, item, idx) => {
    acc[item.leagueId] = idx;
    return acc;
  }, {} as Record<number, number>);

// copy of normalizeMatch from homepage, but shared
export function normalizeMatch(m: any): NormalizedMatch {
  if (!m.league || !m.fixture || !m.teams?.home || !m.teams?.away) {
    throw new Error("Invalid match object in normalizeMatch");
  }

  return {
    id: m.fixtureId,
    date: m.fixture.date,
    status: {
      short: m.status?.short ?? m.fixture.status?.short ?? null,
      long: m.status?.long ?? m.fixture.status?.long ?? null,
      elapsed: m.status?.elapsed ?? m.fixture.status?.elapsed ?? null,
    },
    goals: {
      home: m.goals?.home ?? m.fixture?.goals?.home ?? null,
      away: m.goals?.away ?? m.fixture?.goals?.away ?? null,
    },
    leagueId: m.league.id,
    leagueName: m.league.name,
    leagueCountry: m.league.country,
    leagueLogo: m.league.logo,
    homeTeam: m.teams.home,
    awayTeam: m.teams.away,
    odds: m.odds,
    homeForm: m.homeForm ?? null,
    awayForm: m.awayForm ?? null,
  };
}

export async function getTodayBetMatches(): Promise<{
  dateIso: string;
  leagues: {
    leagueId: number;
    leagueName: string;
    leagueCountry: string;
    matches: NormalizedMatch[];
  }[];
}> {
  const todayIso = new Date().toISOString().slice(0, 10); // yyyy‑MM‑dd[web:293]
  const data = await getMatchesWithOdds(todayIso);
  const rawMatches: any[] = data.matches || [];

  const normalized: NormalizedMatch[] = rawMatches
    .map(normalizeMatch)
    .filter((m) => BET_LEAGUE_INDEX[m.leagueId] !== undefined);

  const leaguesMap = new Map<
    number,
    {
      leagueId: number;
      leagueName: string;
      leagueCountry: string;
      matches: NormalizedMatch[];
    }
  >();

  for (const m of normalized) {
    const existing = leaguesMap.get(m.leagueId);
    if (existing) {
      existing.matches.push(m);
    } else {
      leaguesMap.set(m.leagueId, {
        leagueId: m.leagueId,
        leagueName: m.leagueName,
        leagueCountry: m.leagueCountry,
        matches: [m],
      });
    }
  }

  const grouped = Array.from(leaguesMap.values()).sort((a, b) => {
    const ap = BET_LEAGUE_INDEX[a.leagueId] ?? 999;
    const bp = BET_LEAGUE_INDEX[b.leagueId] ?? 999;
    return ap - bp;
  });

  return { dateIso: todayIso, leagues: grouped };
}

export function formatTodayLong(): string {
  const today = new Date(); // current date[web:293]
  const day = today.getDate();
  const suffix =
    day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th";
  const month = today.toLocaleString("en-GB", { month: "long" }); // "March"[web:298]
  const year = today.getFullYear(); // 2026
  return `${day}${suffix} ${month} ${year}`;
}
