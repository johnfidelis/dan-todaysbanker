// lib/matches.ts
import { getMatchesWithOdds } from "@/lib/getMatchesWithOdds";

export interface NormalizedMatch {
  id: number;
  date: string;
  status: any;
  leagueId: number;
  leagueName: string;
  leagueCountry: string;
  leagueLogo?: string;
  homeTeam: { id: number; name: string; logo?: string };
  awayTeam: { id: number; name: string; logo?: string };
  odds: {
    bookmakerName?: string;
    odds1?: number;
    oddsX?: number;
    odds2?: number;
    odds1X?: number;
    oddsX2?: number;
    odds12?: number;
  };
  homeForm?: string | null;
  awayForm?: string | null;
}

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

export async function getDailyMatches(date: string): Promise<NormalizedMatch[]> {
  const data = await getMatchesWithOdds(date);
  const rawMatches: any[] = data.matches || [];
  return rawMatches.map(normalizeMatch);
}
