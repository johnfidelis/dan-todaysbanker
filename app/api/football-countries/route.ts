// // app/api/football-countries/route.ts
// import { NextRequest, NextResponse } from "next/server";

// const API_BASE = "https://v3.football.api-sports.io";
// const API_KEY = process.env.API_FOOTBALL_KEY!;

// export async function GET(_req: NextRequest) {
//   if (!API_KEY) {
//     return NextResponse.json(
//       { error: "API_FOOTBALL_KEY not set" },
//       { status: 500 }
//     );
//   }

//   const res = await fetch(`${API_BASE}/countries`, {
//     headers: { "x-apisports-key": API_KEY },
//     // next: { revalidate: 60 },
//         next: { revalidate: 60 * 60 * 24 * 30 },

//   });

//   if (!res.ok) {
//     return NextResponse.json(
//       { error: "Failed to fetch countries" },
//       { status: res.status }
//     );
//   }

//   const json = await res.json();
//   return NextResponse.json(json);
// }




// app/api/football-countries/route.ts
import { NextRequest, NextResponse } from "next/server";

const API_BASE = "https://v3.football.api-sports.io";
const API_KEY = process.env.API_FOOTBALL_KEY!;

const COOKIE_TTL_SECONDS = 60 * 60 * 24 * 30; // ~30 days
const COOKIE_NAME = "football_countries_cache";

export async function GET(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json(
      { error: "API_FOOTBALL_KEY not set" },
      { status: 500 }
    );
  }

  // 1) Try read from cookie
  const cached = req.cookies.get(COOKIE_NAME)?.value;
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed && Array.isArray(parsed.response)) {
        return NextResponse.json(parsed);
      }
    } catch {
      // ignore bad cookie and fall through
    }
  }

  // 2) Fetch fresh from API-Football
  const res = await fetch(`${API_BASE}/countries`, {
    headers: { "x-apisports-key": API_KEY },
    next: { revalidate: COOKIE_TTL_SECONDS },
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch countries" },
      { status: res.status }
    );
  }

  const json = await res.json();

  // 3) Create response and set cookie on it
  const response = NextResponse.json(json);

  response.cookies.set({
    name: COOKIE_NAME,
    value: JSON.stringify(json),
    maxAge: COOKIE_TTL_SECONDS,
    path: "/",
    httpOnly: false, // keep false if you want to see/read it in browser JS
    sameSite: "lax",
  });

  return response;
}
