// lib/leagues.ts
export const TOP_LEAGUE_PRIORITY: { leagueId: number; name: string }[] = [
  { leagueId: 2, name: "UEFA Champions League" },
  { leagueId: 39, name: "Premier League" },
  { leagueId: 140, name: "La Liga" },
  { leagueId: 135, name: "Serie A" },
  { leagueId: 61, name: "Ligue 1" },
  { leagueId: 78, name: "Bundesliga" },
  { leagueId: 3, name: "UEFA Europa League" },
  { leagueId: 848, name: "UEFA Europa Conference League" },
];

export const TOP_LEAGUE_INDEX: Record<number, number> =
  TOP_LEAGUE_PRIORITY.reduce((acc, item, idx) => {
    acc[item.leagueId] = idx;
    return acc;
  }, {} as Record<number, number>);
