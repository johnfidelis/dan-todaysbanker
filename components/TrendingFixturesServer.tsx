// components/TrendingFixturesServer.tsx
import { getDailyMatches } from "@/lib/matches";
import { pickTrendingFixtures } from "@/lib/pickTrendingFixtures";
import TrendingFixtures from "@/components/TrendingFixtures";
import type { NormalizedMatch } from "@/lib/matches";

function addDays(base: Date, offset: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
}

async function fetchTrendingFixtures(): Promise<NormalizedMatch[]> {
  const today = new Date();
  const daysToFetch = 5;

  const dates = Array.from({ length: daysToFetch }, (_, i) => addDays(today, i));
  const allArrays = await Promise.all(dates.map((d) => getDailyMatches(d)));
  const allMatches = allArrays.flat();

  return pickTrendingFixtures(allMatches, 15);
}

export default async function TrendingFixturesServer() {
  const fixtures = await fetchTrendingFixtures();
  if (!fixtures.length) return null;
  return <TrendingFixtures fixtures={fixtures} />;
}
