// lib/getMatchesWithOdds.ts
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { userDb } from "@/config/firebaseUser";

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

// Firestore document shape coming from admin tool
type PredictionDoc = {
  fixtureId: number;
  matchDay: string;
  fixture: any;
  teams: any;
  league: any;
  advice: string;
  predictionType: string; // "1","2","1X","2X","12"
  categories?: string[];
  homeForm?: string[];
  awayForm?: string[];
  homeOdds?: number | null;
  drawOdds?: number | null;
  awayOdds?: number | null;
  bookmaker?: string;
};

// map Firestore doc → OddsExtract + forms
function mapDocToMatch(doc: PredictionDoc) {
  const odds1 = doc.homeOdds ?? undefined;
  const oddsX = doc.drawOdds ?? undefined;
  const odds2 = doc.awayOdds ?? undefined;

  const extracted: OddsExtract = {
    hasOdds:
      odds1 !== undefined ||
      oddsX !== undefined ||
      odds2 !== undefined,
    bookmakerName: doc.bookmaker || "1xBet",
    odds1,
    oddsX,
    odds2,
    odds1X: undefined,
    oddsX2: undefined,
    odds12: undefined,
  };

  const homeFormStr = Array.isArray(doc.homeForm)
    ? doc.homeForm.join("")
    : null;
  const awayFormStr = Array.isArray(doc.awayForm)
    ? doc.awayForm.join("")
    : null;

  return {
    fixtureId: doc.fixtureId,
    fixture: doc.fixture,
    league: doc.league,
    teams: doc.teams,
    odds: extracted,
    homeForm: homeFormStr,
    awayForm: awayFormStr,
    categories: doc.categories || [],
    advice: doc.advice,
    predictionType: doc.predictionType,
  };
}

/**
 * Fetch matches WITH odds for a given date from Firestore only.
 * This replaces the old API‑Football implementation.
 */
export async function getMatchesWithOdds(date: string) {
  // date is "yyyy‑MM‑dd"
  const predictionsRef = collection(userDb, "predictions");
  const q = query(predictionsRef, where("matchDay", "==", date));
  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return { matches: [] };
  }

  const matches = snapshot.docs
    .map((snap) => snap.data() as PredictionDoc)
    .map(mapDocToMatch);

  return { matches };
}
