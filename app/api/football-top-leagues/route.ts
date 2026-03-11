// // app/api/football-top-leagues/route.ts
// import { NextRequest, NextResponse } from "next/server";

// const API_BASE = "https://v3.football.api-sports.io";
// const API_KEY = process.env.API_FOOTBALL_KEY!;

// const COOKIE_TTL_SECONDS = 60 * 60 * 24 * 7; // ~7 days
// const COOKIE_NAME = "football_top_leagues_cache";

// // We care about Europe top 5
// const TARGET_LEAGUE_NAMES = [
//   "Premier League",
//   "La Liga",
//   "Bundesliga",
//   "Serie A",
//   "Ligue 1",
// ];

// export async function GET(req: NextRequest) {
//   if (!API_KEY) {
//     return NextResponse.json(
//       { error: "API_FOOTBALL_KEY not set" },
//       { status: 500 }
//     );
//   }

//   // 1) Try cookie cache
//   const cached = req.cookies.get(COOKIE_NAME)?.value;
//   if (cached) {
//     try {
//       const parsed = JSON.parse(cached);
//       if (parsed && Array.isArray(parsed.response)) {
//         return NextResponse.json(parsed);
//       }
//     } catch {
//       // ignore
//     }
//   }

//   // 2) Fetch leagues from API-Football
//   const res = await fetch(`${API_BASE}/leagues?type=League&current=true`, {
//     headers: { "x-apisports-key": API_KEY },
//     next: { revalidate: COOKIE_TTL_SECONDS },
//   });

//   if (!res.ok) {
//     return NextResponse.json(
//       { error: "Failed to fetch leagues" },
//       { status: res.status }
//     );
//   }

//   const json = await res.json();
//   const all = json.response || [];

//   // Filter: only the core top leagues by name
//   const filtered = all.filter((item: any) => {
//     const name = item.league?.name || "";
//     return TARGET_LEAGUE_NAMES.includes(name);
//   });

//   const payload = { response: filtered };

//   const response = NextResponse.json(payload);
//   response.cookies.set({
//     name: COOKIE_NAME,
//     value: JSON.stringify(payload),
//     maxAge: COOKIE_TTL_SECONDS,
//     path: "/",
//     httpOnly: false,
//     sameSite: "lax",
//   });

//   return response;
// }



// app/api/football-top-leagues/route.ts
import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://v3.football.api-sports.io";
const API_KEY = process.env.API_FOOTBALL_KEY!;

const COOKIE_TTL_SECONDS = 60 * 60 * 24 * 7; // ~7 days
const COOKIE_NAME = "football_top_leagues_cache";

// Core Europe top-5 league IDs (API-Football)
const TARGET_LEAGUE_IDS = [39, 140, 78, 135, 61];

export async function GET(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API_FOOTBALL_KEY not set" },
      { status: 500 }
    );
  }

  // 1) Try cookie cache
  const cached = req.cookies.get(COOKIE_NAME)?.value;
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.response)) {
        return NextResponse.json(parsed);
      }
    } catch {
      // ignore and fall through
    }
  }

  // 2) Fetch leagues from API-Football
  const res = await fetch(`${API_BASE}/leagues?type=League&current=true`, {
    headers: { "x-apisports-key": API_KEY },
    next: { revalidate: COOKIE_TTL_SECONDS },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch leagues" },
      { status: res.status }
    );
  }

  const json = await res.json();
  const all = json.response || [];

  // Filter by league id
  const filtered = all.filter((item: any) => {
    const id = item.league?.id;
    return TARGET_LEAGUE_IDS.includes(id);
  });

  const payload = { response: filtered };

  const response = NextResponse.json(payload);
  response.cookies.set({
    name: COOKIE_NAME,
    value: JSON.stringify(payload),
    maxAge: COOKIE_TTL_SECONDS,
    path: "/",
    httpOnly: false,
    sameSite: "lax",
  });

  return response;
}
