

// // lib/getMatchesWithOdds.ts

// const API_BASE = "https://v3.football.api-sports.io";
// const API_KEY = process.env.API_FOOTBALL_KEY!;
// const PREFERRED_BOOKMAKER = "1xbet";

// export type OddsExtract = {
//   hasOdds: boolean;
//   bookmakerName?: string;
//   odds1?: number;
//   oddsX?: number;
//   odds2?: number;
//   odds1X?: number;
//   oddsX2?: number;
//   odds12?: number;
// };

// type TeamForm = {
//   teamId: number;
//   form: string | null; // e.g. "WDLWW"
// };

// // ---------- ODDS EXTRACTION ----------

// function extractMatchOdds(oddsData: any): OddsExtract {
//   if (!oddsData?.bookmakers || !Array.isArray(oddsData.bookmakers)) {
//     return { hasOdds: false };
//   }

//   const bookmakers = oddsData.bookmakers as any[];

//   const preferred = bookmakers.find((bm: any) =>
//     String(bm.name || "").toLowerCase().includes(PREFERRED_BOOKMAKER)
//   );

//   const mainBook = preferred || bookmakers[0];
//   if (!mainBook?.bets || !Array.isArray(mainBook.bets)) {
//     return { hasOdds: false };
//   }

//   const bets = mainBook.bets as any[];

//   const matchWinner = bets.find(
//     (b: any) => b.name === "Match Winner"
//   );

//   const doubleChance = bets.find(
//     (b: any) => b.name === "Double Chance"
//   );

//   const getOdd = (bet: any, value: string) => {
//     if (!bet?.values || !Array.isArray(bet.values)) return undefined;
//     const found = bet.values.find((v: any) => v.value === value);
//     const num = parseFloat(found?.odd ?? "");
//     return Number.isFinite(num) ? num : undefined;
//   };

//   const odds1 = getOdd(matchWinner, "Home");
//   const oddsX = getOdd(matchWinner, "Draw");
//   const odds2 = getOdd(matchWinner, "Away");

//   const odds1X = getOdd(doubleChance, "Home/Draw");
//   const oddsX2 = getOdd(doubleChance, "Draw/Away");
//   const odds12 = getOdd(doubleChance, "Home/Away");

//   const hasOdds =
//     odds1 !== undefined || oddsX !== undefined || odds2 !== undefined;

//   return {
//     hasOdds,
//     bookmakerName: mainBook.name,
//     odds1,
//     oddsX,
//     odds2,
//     odds1X,
//     oddsX2,
//     odds12,
//   };
// }

// // ---------- TEAM FORM VIA /teams/statistics (single) ----------

// async function getSingleTeamForm(params: {
//   leagueId: number;
//   season: number;
//   teamId: number;
//   dateLimit: string;
// }): Promise<TeamForm> {
//   const { leagueId, season, teamId, dateLimit } = params;

//   const url = new URL(`${API_BASE}/teams/statistics`);
//   url.searchParams.set("league", String(leagueId));
//   url.searchParams.set("season", String(season));
//   url.searchParams.set("team", String(teamId));
//   url.searchParams.set("date", dateLimit);

//   try {
//     const res = await fetch(url.toString(), {
//       headers: { "x-apisports-key": API_KEY },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       const txt = await res.text();
//       console.warn(
//         "teams/statistics failed",
//         { leagueId, season, teamId, dateLimit },
//         res.status,
//         txt
//       );
//       return { teamId, form: null };
//     }

//     const json = await res.json();
//     const form = json.response?.form ?? null;
//     return { teamId, form };
//   } catch (e) {
//     console.warn(
//       "teams/statistics error",
//       { leagueId, season, teamId, dateLimit },
//       e
//     );
//     return { teamId, form: null };
//   }
// }

// // ---------- MAIN: PER-FIXTURE FETCH ----------

// export async function getMatchesWithOdds(date: string) {
//   if (!API_KEY) {
//     throw new Error("API_FOOTBALL_KEY not set");
//   }

//   // 1) fixtures for the day
//   const fixturesRes = await fetch(`${API_BASE}/fixtures?date=${date}`, {
//     headers: { "x-apisports-key": API_KEY },
//     cache: "no-store",
//   });

//   if (!fixturesRes.ok) {
//     const txt = await fixturesRes.text();
//     console.error("fixtures?date error", fixturesRes.status, txt);
//     throw new Error("Failed fixtures fetch");
//   }

//   const fixturesJson = await fixturesRes.json();
//   const fixtures = fixturesJson.response || [];

//   if (!fixtures.length) {
//     return { matches: [] };
//   }

//   const matchesWithOdds: any[] = [];

//   // 2) For each fixture, fetch odds + home form + away form in parallel
//   for (const fix of fixtures) {
//     const fixtureId = fix.fixture?.id;
//     if (
//       !fixtureId ||
//       !fix.league ||
//       !fix.teams?.home ||
//       !fix.teams?.away
//     ) {
//       continue;
//     }

//     const leagueId = fix.league.id as number;
//     const season = fix.league.season as number;
//     const dateStr =
//       (fix.fixture.date as string)?.slice(0, 10) || date;

//     const homeId = fix.teams.home.id as number;
//     const awayId = fix.teams.away.id as number;

//     try {
//       const [oddsRes, homeFormRes, awayFormRes] = await Promise.all([
//         fetch(`${API_BASE}/odds?fixture=${fixtureId}`, {
//           headers: { "x-apisports-key": API_KEY },
//           cache: "no-store",
//         }),
//         getSingleTeamForm({
//           leagueId,
//           season,
//           teamId: homeId,
//           dateLimit: dateStr,
//         }),
//         getSingleTeamForm({
//           leagueId,
//           season,
//           teamId: awayId,
//           dateLimit: dateStr,
//         }),
//       ]);

//       if (!oddsRes.ok) {
//         continue;
//       }

//       const oddsJson = await oddsRes.json();
//       const oddsRaw = oddsJson.response?.[0];
//       if (!oddsRaw) continue;

//       const extracted = extractMatchOdds(oddsRaw);
//       if (!extracted.hasOdds) continue;

//       matchesWithOdds.push({
//         fixtureId,
//         fixture: fix.fixture,
//         league: fix.league,
//         teams: fix.teams,
//         odds: extracted,
//         homeForm: (homeFormRes as TeamForm).form,
//         awayForm: (awayFormRes as TeamForm).form,
//       });
//     } catch (e) {
//       console.warn("Error fetching odds/forms for fixture", fixtureId, e);
//       continue;
//     }
//   }

//   return {
//     matches: matchesWithOdds,
//   };
// }



// lib/getMatchesWithOdds.ts

const API_BASE = "https://v3.football.api-sports.io";
const API_KEY = process.env.API_FOOTBALL_KEY!;
const PREFERRED_BOOKMAKER = "1xbet";

export type OddsExtract = {
  hasOdds: boolean;
  bookmakerName?: string;
  odds1?: number;
  oddsX?: number;
  odds2?: number;
  odds1X?: number;
  oddsX2?: number;
  odds12?: number;
};

type TeamForm = {
  teamId: number;
  form: string | null;
};

/* ==============================
   ODDS EXTRACTION
============================== */

function extractMatchOdds(oddsData: any): OddsExtract {
  if (!oddsData?.bookmakers) {
    return { hasOdds: false };
  }

  const bookmakers = oddsData.bookmakers;

  const preferred = bookmakers.find((bm: any) =>
    String(bm.name || "").toLowerCase().includes(PREFERRED_BOOKMAKER)
  );

  const mainBook = preferred || bookmakers[0];

  if (!mainBook?.bets) {
    return { hasOdds: false };
  }

  const bets = mainBook.bets;

  const matchWinner = bets.find((b: any) => b.name === "Match Winner");

  const doubleChance = bets.find((b: any) => b.name === "Double Chance");

  const getOdd = (bet: any, value: string) => {
    const found = bet?.values?.find((v: any) => v.value === value);
    const num = parseFloat(found?.odd);
    return Number.isFinite(num) ? num : undefined;
  };

  const odds1 = getOdd(matchWinner, "Home");
  const oddsX = getOdd(matchWinner, "Draw");
  const odds2 = getOdd(matchWinner, "Away");

  const odds1X = getOdd(doubleChance, "Home/Draw");
  const oddsX2 = getOdd(doubleChance, "Draw/Away");
  const odds12 = getOdd(doubleChance, "Home/Away");

  const hasOdds =
    odds1 !== undefined ||
    oddsX !== undefined ||
    odds2 !== undefined;

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

/* ==============================
   TEAM FORM CACHE
============================== */

const formCache = new Map<string, Promise<TeamForm>>();

function getFormCacheKey(
  leagueId: number,
  season: number,
  teamId: number,
  dateLimit: string
) {
  return `${leagueId}-${season}-${teamId}-${dateLimit}`;
}

async function getSingleTeamForm(params: {
  leagueId: number;
  season: number;
  teamId: number;
  dateLimit: string;
}): Promise<TeamForm> {

  const { leagueId, season, teamId, dateLimit } = params;

  const key = getFormCacheKey(
    leagueId,
    season,
    teamId,
    dateLimit
  );

  if (formCache.has(key)) {
    return formCache.get(key)!;
  }

  const promise = (async () => {

    const url = new URL(`${API_BASE}/teams/statistics`);

    url.searchParams.set("league", String(leagueId));
    url.searchParams.set("season", String(season));
    url.searchParams.set("team", String(teamId));
    url.searchParams.set("date", dateLimit);

    try {

      const res = await fetch(url.toString(), {
        headers: { "x-apisports-key": API_KEY },
        cache: "no-store",
      });

      if (!res.ok) {
        return { teamId, form: null };
      }

      const json = await res.json();

      return {
        teamId,
        form: json.response?.form ?? null,
      };

    } catch {

      return {
        teamId,
        form: null,
      };

    }

  })();

  formCache.set(key, promise);

  return promise;
}

/* ==============================
   MAIN ENGINE (FAST VERSION)
============================== */

export async function getMatchesWithOdds(date: string) {

  if (!API_KEY) {
    throw new Error("API_FOOTBALL_KEY not set");
  }

  /* ---------- FIXTURES ---------- */

  const fixturesRes = await fetch(
    `${API_BASE}/fixtures?date=${date}`,
    {
      headers: { "x-apisports-key": API_KEY },
      cache: "no-store",
    }
  );

  if (!fixturesRes.ok) {
    console.log({ fixturesRes });
    throw new Error("Fixtures fetch failed");
  }

  const fixturesJson = await fixturesRes.json();

  const fixtures = fixturesJson.response || [];

  if (!fixtures.length) {
    return { matches: [] };
  }

  /* ---------- PARALLEL PROCESSING ---------- */

  const matches = await Promise.all(

    fixtures.map(async (fix: any) => {

      const fixtureId = fix.fixture?.id;

      if (!fixtureId) return null;

      const leagueId = fix.league.id;
      const season = fix.league.season;

      const dateStr =
        fix.fixture.date?.slice(0, 10) || date;

      const homeId = fix.teams.home.id;
      const awayId = fix.teams.away.id;

      try {

        const oddsPromise = fetch(
          `${API_BASE}/odds?fixture=${fixtureId}`,
          {
            headers: { "x-apisports-key": API_KEY },
            cache: "no-store",
          }
        );

        const homeFormPromise = getSingleTeamForm({
          leagueId,
          season,
          teamId: homeId,
          dateLimit: dateStr,
        });

        const awayFormPromise = getSingleTeamForm({
          leagueId,
          season,
          teamId: awayId,
          dateLimit: dateStr,
        });

        const [oddsRes, homeForm, awayForm] =
          await Promise.all([
            oddsPromise,
            homeFormPromise,
            awayFormPromise,
          ]);

        if (!oddsRes.ok) return null;

        const oddsJson = await oddsRes.json();

        const oddsRaw =
          oddsJson.response?.[0];

        if (!oddsRaw) return null;

        const extracted =
          extractMatchOdds(oddsRaw);

        if (!extracted.hasOdds) return null;

        return {
          fixtureId,
          fixture: fix.fixture,
          league: fix.league,
          teams: fix.teams,
          odds: extracted,
          homeForm: homeForm.form,
          awayForm: awayForm.form,
        };

      } catch {

        return null;

      }

    })

  );

  return {
    matches: matches.filter(Boolean),
  };
}