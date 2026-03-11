// lib/pickTrendingFixtures.ts
import type { NormalizedMatch } from "@/lib/matches";
import { TOP_LEAGUE_PRIORITY, TOP_LEAGUE_INDEX } from "@/lib/leagues";

const MAX_PER_LEAGUE = 3;

const LEAGUE_WEIGHT = 0.5;
const ODDS_WEIGHT = 0.3;
const FORM_WEIGHT = 0.2;

function leaguePriority(leagueId: number): number {
  const idx = TOP_LEAGUE_INDEX[leagueId];
  return idx !== undefined ? idx : 999;
}

function allowedLeagues(): Set<number> {
  return new Set(TOP_LEAGUE_PRIORITY.map((l) => l.leagueId));
}

function hasValidOdds(m: NormalizedMatch): boolean {
  return Number.isFinite(m.odds.odds1) && Number.isFinite(m.odds.odds2);
}

function favouriteOdds(m: NormalizedMatch): number {
  const o1 = m.odds.odds1 ?? Infinity;
  const o2 = m.odds.odds2 ?? Infinity;
  return Math.min(o1, o2);
}

function formScore(form: string | null | undefined): number {
  if (!form) return 0.5;
  let score = 0;
  for (const c of form) {
    if (c === "W") score += 1;
    else if (c === "D") score += 0.5;
  }
  return score / form.length;
}

function matchFormScore(m: NormalizedMatch): number {
  const home = formScore(m.homeForm);
  const away = formScore(m.awayForm);
  return Math.max(home, away);
}

function leagueScore(m: NormalizedMatch): number {
  const priority = leaguePriority(m.leagueId);
  return 1 / (priority + 1);
}

function oddsScore(m: NormalizedMatch): number {
  const fav = favouriteOdds(m);
  if (!Number.isFinite(fav)) return 0;
  const normalized = 1 / fav;
  return Math.min(normalized, 1);
}

function trendingScore(m: NormalizedMatch): number {
  return (
    leagueScore(m) * LEAGUE_WEIGHT +
    oddsScore(m) * ODDS_WEIGHT +
    matchFormScore(m) * FORM_WEIGHT
  );
}

export function pickTrendingFixtures(
  allMatches: NormalizedMatch[],
  maxCount = 15
): NormalizedMatch[] {
  if (!allMatches.length) return [];

  const leagues = allowedLeagues();
  const filtered = allMatches.filter(
    (m) => leagues.has(m.leagueId) && hasValidOdds(m)
  );
  if (!filtered.length) return [];

  const scored = filtered.map((match) => ({
    match,
    score: trendingScore(match),
    time: +new Date(match.date),
    leaguePriority: leaguePriority(match.leagueId),
  }));

  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    if (a.leaguePriority !== b.leaguePriority)
      return a.leaguePriority - b.leaguePriority;
    return a.time - b.time;
  });

  const result: NormalizedMatch[] = [];
  const leagueUsage = new Map<number, number>();

  for (const item of scored) {
    if (result.length >= maxCount) break;
    const match = item.match;
    const used = leagueUsage.get(match.leagueId) ?? 0;
    if (used >= MAX_PER_LEAGUE) continue;
    result.push(match);
    leagueUsage.set(match.leagueId, used + 1);
  }

  return result;
}
