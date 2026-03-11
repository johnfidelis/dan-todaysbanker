

// app/(website)/page.tsx
export const dynamic = "force-dynamic";

import MatchOfTheDay from "@/components/MatchOfTheDay";
import MatchList, { NormalizedMatch } from "@/components/MatchList";
import MobileHomePage from "@/components/MobileHomePage";
import { getMatchesWithOdds } from "@/lib/getMatchesWithOdds";

export async function generateMetadata() {
  return {
    title:
      "Sure Forebet Football Predictions for Today, Livescore, Stats & Results",
    description:
      "Win daily with Forebet Free Sure Football Predictions. We provide accurate football stats, tips, and predictions including 1x2, over & under 2.5, correct score, GG/BTTS for football fans worldwide.",
    keywords: "forebet, forebet football predictions, forebet today",
    alternates: {
      canonical: "https://forebetpredict.com/",
      languages: {
        en: "https://forebetpredict.com/",
        fr: "https://forebetpredict.com/fr",
        es: "https://forebetpredict.com/es",
      },
      openGraph: {
        title:
          "Sure Forebet Football Predictions for Today, Livescore, Stats & Results",
        description:
          "Win daily with Forebet Free Sure Football Predictions. We provide accurate football stats, tips, and predictions including 1x2, over & under 2.5, correct score, GG/BTTS for football fans worldwide.",
        url: "https://forebetpredict.com/",
        siteName: "Forebet Prediction and Football Stats",
      },
      twitter: {
        card: "summary_large_image",
        title:
          "Sure Forebet Football Predictions for Today, Livescore, Stats & Results",
        description:
          "Win daily with Forebet Free Sure Football Predictions. We provide accurate football stats, tips, and predictions including 1x2, over & under 2.5, correct score, GG/BTTS for football fans worldwide.",
      },
    },
  };
}

function normalizeMatch(m: any): NormalizedMatch {
  if (!m.league || !m.fixture || !m.teams?.home || !m.teams?.away) {
    console.warn("Skipping invalid match in normalizeMatch", m);
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


function pickMatchOfTheDay(leagues: {
  leagueId: number;
  leagueName: string;
  leagueCountry: string;
  matches: NormalizedMatch[];
}[]): NormalizedMatch | null {
  if (!leagues.length) return null;

  let best: { match: NormalizedMatch; leagueScore: number; oddsScore: number } | null =
    null;

  for (const lg of leagues) {
    const leaguePriority =
      TOP_LEAGUE_INDEX[lg.leagueId] !== undefined
        ? TOP_LEAGUE_INDEX[lg.leagueId]
        : 999; // non‑top leagues

    for (const m of lg.matches) {
      const { odds1, odds2 } = m.odds;

      // basic odds sanity
      if (
        odds1 == null ||
        odds2 == null ||
        !Number.isFinite(odds1) ||
        !Number.isFinite(odds2)
      ) {
        continue;
      }

      // We want the strongest favourite: min(odds1, odds2)
      const favouriteOdds = Math.min(odds1, odds2);

      const candidate = {
        match: m,
        leagueScore: leaguePriority,
        oddsScore: favouriteOdds,
      };

      if (!best) {
        best = candidate;
      } else {
        // 1) Prefer better (lower) leagueScore
        if (candidate.leagueScore < best.leagueScore) {
          best = candidate;
        } else if (candidate.leagueScore === best.leagueScore) {
          // 2) Within same league tier, prefer lower favourite odds
          if (candidate.oddsScore < best.oddsScore) {
            best = candidate;
          }
        }
      }
    }
  }

  return best?.match ?? null;
}


// ---------------- League priority and sorting ----------------

const TOP_LEAGUE_PRIORITY: { leagueId: number; name: string }[] = [
  { leagueId: 2, name: "UEFA Champions League" },
  { leagueId: 39, name: "Premier League" },
  { leagueId: 140, name: "La Liga" },
  { leagueId: 135, name: "Serie A" },
  { leagueId: 61, name: "Ligue 1" },
  { leagueId: 78, name: "Bundesliga" },
  { leagueId: 3, name: "UEFA Europa League" },
  { leagueId: 848, name: "UEFA Europa Conference League" },
];

const TOP_LEAGUE_INDEX: Record<number, number> = TOP_LEAGUE_PRIORITY.reduce(
  (acc, item, idx) => {
    acc[item.leagueId] = idx;
    return acc;
  },
  {} as Record<number, number>
);

function sortLeagues(
  a: { leagueId: number; leagueCountry: string },
  b: { leagueId: number; leagueCountry: string }
) {
  const aPri = TOP_LEAGUE_INDEX[a.leagueId];
  const bPri = TOP_LEAGUE_INDEX[b.leagueId];

  const aIsTop = aPri !== undefined;
  const bIsTop = bPri !== undefined;

  if (aIsTop && bIsTop) {
    return aPri - bPri;
  }
  if (aIsTop) return -1;
  if (bIsTop) return 1;

  const countryCmp = a.leagueCountry.localeCompare(b.leagueCountry);
  if (countryCmp !== 0) return countryCmp;

  return 0;
}

// ---------------- Page ----------------

export default async function HomePage() {
  const today = new Date().toISOString().slice(0, 10); // yyyy-MM-dd
  // const today = "2026-02-25"; // yyyy-MM-dd

  const data = await getMatchesWithOdds(today);
  const rawMatches: any[] = data.matches || [];

  const normalized: NormalizedMatch[] = rawMatches.map(normalizeMatch);

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

const groupedLeagues = Array.from(leaguesMap.values()).sort(sortLeagues);

const matchOfTheDay = pickMatchOfTheDay(groupedLeagues);

// const groupedLeagues = Array.from(leaguesMap.values()).sort(sortLeagues);

// const matchOfTheDay = pickMatchOfTheDay(groupedLeagues);

const filteredLeagues =
  matchOfTheDay
    ? groupedLeagues
        .map((lg) => ({
          ...lg,
          matches: lg.matches.filter((m) => m.id !== matchOfTheDay.id),
        }))
        .filter((lg) => lg.matches.length > 0)
    : groupedLeagues;


  return (
    <>
      <div className="md:hidden">
        <MobileHomePage />
      </div>

      <div  
      className="hidden md:block bg-white flex flex-col gap-[6px] items-start overflow-clip p-[8px] relative rounded-[18px] w-full" 
      >
        {matchOfTheDay && <MatchOfTheDay match={matchOfTheDay} />}
        <div className="flex flex-col gap-[20px] mt-[20px]">
          {filteredLeagues.map((lg) => (
            <MatchList
              key={lg.leagueId}
              title={lg.leagueName}
              league={lg.leagueCountry}
              matches={lg.matches}
            />
          ))}
        </div>
      </div>
    </>
  );
}
