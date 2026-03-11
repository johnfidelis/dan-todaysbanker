

// components/MatchList.tsx
"use client";

import React from "react";
import svgPaths from "@/imports/svg-te84uy6lfv";

export interface NormalizedMatch {
  id: number;
  date: string;
  status: any;
  goals: any;
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

interface MatchListProps {
  title: string;
  league: string;
  matches: NormalizedMatch[];
  onNavigate?: (page: string) => void;
}

/* ---------- Prediction from odds ---------- */

function computePredictionCode(odds: {
  odds1?: number;
  oddsX?: number;
  odds2?: number;
}): "1" | "X" | "2" | "1X" | "X2" | "12" | "-" {
  const { odds1, oddsX, odds2 } = odds;

  if (
    odds1 == null ||
    odds2 == null ||
    !Number.isFinite(odds1) ||
    !Number.isFinite(odds2)
  ) {
    return "-";
  }

  if (odds1 < 1.5 || odds2 < 1.5) {
    if (odds1 < odds2) return "1";
    if (odds2 < odds1) return "2";
    return "12";
  }

  const isHomeFav = odds1 < odds2;
  const isAwayFav = odds2 < odds1;
  const homeInRange = odds1 >= 1.5 && odds1 <= 1.9;
  const awayInRange = odds2 >= 1.5 && odds2 <= 1.9;

  if (isHomeFav && homeInRange) return "1X";
  if (isAwayFav && awayInRange) return "X2";

  const diff = Math.abs(odds1 - odds2);
  if (odds1 >= 2 && odds2 >= 2 && diff <= 0.3) return "12";

  if (isHomeFav) return "1";
  if (isAwayFav) return "2";
  return "-";
}

/* Small helper: render recent form dots */

function FormDots({ form }: { form?: string | null }) {
  const letters = form ? form.split("").slice(-5) : [];

  const getColor = (ch: string | null) => {
    if (!ch) return "#b0b0b0";
    const c = ch.toUpperCase();
    if (c === "W") return "#68d100";
    if (c === "D") return "#ffc501";
    if (c === "L") return "#ec1c24";
    return "#b0b0b0";
  };

  const slots: (string | null)[] =
    letters.length > 0
      ? [...Array(Math.max(0, 5 - letters.length)).fill(null), ...letters]
      : Array(5).fill(null);

  return (
    <div className="content-stretch flex gap-[2px] items-center justify-center relative shrink-0">
      {slots.map((ch, idx) => (
        <div
          key={idx}
          className="content-stretch flex h-[10px] items-center justify-center px-[3px] py-[1px] rounded-[30px] shrink-0 w-[10px]"
          style={{ backgroundColor: getColor(ch) }}
        />
      ))}
    </div>
  );
}

/* HEADER FRAMES */

function Frame490({ title, league }: { title: string; league: string }) {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[14px]">{title}</p>
      <p className="relative shrink-0 text-[#757575] text-[11px]">{league}</p>
    </div>
  );
}

function Frame489({
  title,
  league,
  leagueLogo,
}: {
  title: string;
  league: string;
  leagueLogo?: string;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[26px]" data-name="image 214">
        {leagueLogo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={leagueLogo}
          />
        ) : (
          <div className="absolute inset-0 bg-[#eee] rounded-full" />
        )}
      </div>
      <Frame490 title={title} league={league} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 20.1667 20.1667"
        >
          <g id="Group">
            <path
              d={svgPaths.p115f580}
              id="Vector"
              stroke="var(--stroke-0, #767676)"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
            <path
              d={svgPaths.p27c7ac00}
              id="Vector_2"
              stroke="var(--stroke-0, #767676)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[18px]"
      data-name="icon-park-outline:right-c"
    >
      <Group />
    </div>
  );
}

function Frame307({
  title,
  league,
  leagueLogo,
}: {
  title: string;
  league: string;
  leagueLogo?: string;
}) {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[11px] py-[5px] relative w-full">
          <Frame489 title={title} league={league} leagueLogo={leagueLogo} />
          {/* <IconParkOutlineRightC /> */}
        </div>
      </div>
    </div>
  );
}

/* MATCH CARD FRAMES – TEAM NAMES, TIME, ODDS, PREDICTIONS */

function Frame19({
  homeName,
  homeForm,
}: {
  homeName: string;
  homeForm?: string | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis text-right tracking-[0.18px]">
        {homeName}
      </p>
      <FormDots form={homeForm} />
    </div>
  );
}

function Frame17(props: { homeName: string; homeForm?: string | null }) {
  const { homeName, homeForm } = props;
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame19 homeName={homeName} homeForm={homeForm} />
    </div>
  );
}

function Frame31({ time }: { time: string }) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[6px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[13px] text-center tracking-[0.18px] w-full whitespace-pre-wrap">
        {time}
      </p>
    </div>
  );
}

function Vs({ time }: { time: string }) {
  return (
    <div
      className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[3px] relative rounded-[4px] shrink-0"
      data-name="vs"
    >
      <Frame31 time={time} />
    </div>
  );
}

function Frame15({ time }: { time: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs time={time} />
    </div>
  );
}

function Frame16({ time }: { time: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame15 time={time} />
    </div>
  );
}

function Frame20({
  awayName,
  awayForm,
}: {
  awayName: string;
  awayForm?: string | null;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[16px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[13px] text-ellipsis tracking-[0.18px]">
        {awayName}
      </p>
      <FormDots form={awayForm} />
    </div>
  );
}

function Frame18(props: { awayName: string; awayForm?: string | null }) {
  const { awayName, awayForm } = props;
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame20 awayName={awayName} awayForm={awayForm} />
    </div>
  );
}

function Frame28({
  homeName,
  awayName,
  time,
  homeForm,
  awayForm,
}: {
  homeName: string;
  awayName: string;
  time: string;
  homeForm?: string | null;
  awayForm?: string | null;
}) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame17 homeName={homeName} homeForm={homeForm} />
      <Frame16 time={time} />
      <Frame18 awayName={awayName} awayForm={awayForm} />
    </div>
  );
}

/* ODDS BLOCK */

function Frame29() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[7px] relative rounded-[3.8px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[11px] text-center tracking-[0.02px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame22({ value }: { value: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative rounded-[3.8px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1e1e1e] text-[11px] text-center tracking-[0.15px]">
        {value}
      </p>
    </div>
  );
}

function Frame2({ value }: { value: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.8px] relative shrink-0">
      <Frame5 />
      <Frame22 value={value} />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame23({ value }: { value: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative rounded-[3.8px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1e1e1e] text-[11px] text-center tracking-[0.15px]">
        {value}
      </p>
    </div>
  );
}

function Frame7({ value }: { value: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.8px] relative shrink-0">
      <Frame11 />
      <Frame23 value={value} />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame24({ value }: { value: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative rounded-[3.8px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[14px] relative shrink-0 text-[#1e1e1e] text-[11px] text-center tracking-[0.15px]">
        {value}
      </p>
    </div>
  );
}

function Frame8({ value }: { value: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.8px] relative shrink-0">
      <Frame12 />
      <Frame24 value={value} />
    </div>
  );
}

function Frame32({
  odd1,
  oddX,
  odd2,
}: {
  odd1: string;
  oddX: string;
  odd2: string;
}) {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6px] shrink-0">
      <Frame2 value={odd1} />
      <Frame7 value={oddX} />
      <Frame8 value={odd2} />
    </div>
  );
}

function OddsBlock({
  odd1,
  oddX,
  odd2,
}: {
  odd1: string;
  oddX: string;
  odd2: string;
}) {
  return (
    <div
      className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.3px] relative rounded-[8px] shrink-0"
      data-name="Odds"
    >
      <Frame29 />
      <Frame32 odd1={odd1} oddX={oddX} odd2={odd2} />
    </div>
  );
}

/* Predictions block – same UI, smaller sizes */

function Frame30() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[7.5px] relative rounded-[3.8px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[11px] text-center tracking-[0.02px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame25({ prediction }: { prediction: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative rounded-[3.8px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#1e225d] text-[11px] text-center tracking-[0.15px]">
        {prediction}
      </p>
    </div>
  );
}

function Frame3({ prediction }: { prediction: string }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[7.5px] relative shrink-0">
      <Frame6 />
      <Frame25 prediction={prediction} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative rounded-[3.8px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#1e225d] text-[11px] text-center tracking-[0.15px]">
        U
      </p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.8px] relative shrink-0">
      <Frame13 />
      <Frame26 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[12px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5px] py-[4px] relative rounded-[3.8px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[14px] relative shrink-0 text-[#1e225d] text-[11px] text-center tracking-[0.15px]">
        :
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.8px] relative shrink-0">
      <Frame14 />
      <Frame27 />
    </div>
  );
}

function Frame34({ prediction }: { prediction: string }) {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6px] shrink-0">
      <Frame3 prediction={prediction} />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Odds1({ prediction }: { prediction: string }) {
  return (
    <div
      className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.3px] relative rounded-[8px] shrink-0"
      data-name="Odds"
    >
      <Frame30 />
      <Frame34 prediction={prediction} />
    </div>
  );
}

function Frame4({
  odd1,
  oddX,
  odd2,
  prediction,
}: {
  odd1: string;
  oddX: string;
  odd2: string;
  prediction: string;
}) {
  return (
    <div className="content-stretch flex gap-[7px] h-[30px] items-center overflow-clip relative shrink-0">
      <OddsBlock odd1={odd1} oddX={oddX} odd2={odd2} />
      <Odds1 prediction={prediction} />
    </div>
  );
}

function Frame33({
  homeName,
  awayName,
  time,
  odd1,
  oddX,
  odd2,
  homeForm,
  awayForm,
  prediction,
}: {
  homeName: string;
  awayName: string;
  time: string;
  odd1: string;
  oddX: string;
  odd2: string;
  homeForm?: string | null;
  awayForm?: string | null;
  prediction: string;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px relative">
      <Frame28
        homeName={homeName}
        awayName={awayName}
        time={time}
        homeForm={homeForm}
        awayForm={awayForm}
      />
      <Frame4 odd1={odd1} oddX={oddX} odd2={odd2} prediction={prediction} />
    </div>
  );
}

/* Frame21 – make logos responsive and allow stacking on small screens */

function Frame21({
  homeName,
  awayName,
  time,
  odd1,
  oddX,
  odd2,
  homeLogo,
  awayLogo,
  homeForm,
  awayForm,
  prediction,
}: {
  homeName: string;
  awayName: string;
  time: string;
  odd1: string;
  oddX: string;
  odd2: string;
  homeLogo?: string;
  awayLogo?: string;
  homeForm?: string | null;
  awayForm?: string | null;
  prediction: string;
}) {
  return (
    <div className="relative shrink-0 w-full">
      {/* flex-col on very small screens, row from sm up */}
      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-stretch size-full gap-2 sm:gap-0">
        <div className="content-stretch flex gap-[8px] items-start justify-center px-[8px] w-full">
          {/* Home logo */}
          <div
            className="overflow-clip relative shrink-0 size-[50px] sm:size-[60px]"
            data-name="home-logo"
          >
            <div className="absolute h-[40px] sm:h-[45px] left-[8px] top-[6px] sm:left-[10px] sm:top-[8px] w-[36px] sm:w-[40px]">
              {homeLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={homeName}
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                  src={homeLogo}
                />
              ) : (
                <div className="absolute inset-0 bg-[#eee] rounded-full" />
              )}
            </div>
          </div>

          <Frame33
            homeName={homeName}
            awayName={awayName}
            time={time}
            odd1={odd1}
            oddX={oddX}
            odd2={odd2}
            homeForm={homeForm}
            awayForm={awayForm}
            prediction={prediction}
          />

          {/* Away logo */}
          <div
            className="overflow-clip relative shrink-0 size-[50px] sm:size-[60px]"
            data-name="away-logo"
          >
            <div className="absolute h-[40px] sm:h-[45px] left-[6px] top-[6px] sm:left-[8px] sm:top-[8px] w-[38px] sm:w-[44px]">
              {awayLogo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  alt={awayName}
                  className="absolute inset-0 max-w-none object-contain pointer-events-none size-full"
                  src={awayLogo}
                />
              ) : (
                <div className="absolute inset-0 bg-[#eee] rounded-full" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Card wrapper */

function MatchCard({
  match,
  onClick,
  className,
}: {
  match: NormalizedMatch;
  onClick?: () => void;
  className?: string;
}) {
  const { homeTeam, awayTeam, date, odds, homeForm, awayForm } = match;

  const kickoff = new Date(date).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const odd1 = odds.odds1 != null ? odds.odds1.toFixed(2) : "-";
  const oddX = odds.oddsX != null ? odds.oddsX.toFixed(2) : "-";
  const odd2 = odds.odds2 != null ? odds.odds2.toFixed(2) : "-";

  const predictionCode = computePredictionCode(odds);

  return (
    <div
      className={`bg-white content-stretch flex flex-col items-start py-[8px] relative rounded-[16px] w-full ${
        className || ""
      }`}
      data-name="listItemNew"
      onClick={onClick}
    >
      <Frame21
        homeName={homeTeam.name}
        awayName={awayTeam.name}
        time={kickoff}
        odd1={odd1}
        oddX={oddX}
        odd2={odd2}
        homeLogo={homeTeam.logo}
        awayLogo={awayTeam.logo}
        homeForm={homeForm}
        awayForm={awayForm}
        prediction={predictionCode}
      />
    </div>
  );
}

/* MAIN LIST COMPONENT – width responsive */

export default function MatchList({
  title,
  league,
  matches,
  onNavigate,
}: MatchListProps) {
  const sorted = [...matches].sort(
    (a, b) => +new Date(a.date) - +new Date(b.date)
  );
  const leagueLogo = sorted[0]?.leagueLogo;

  return (
    <div className="bg-[#e9e9ef] flex flex-col gap-[6px] items-center sm:items-start overflow-clip p-[8px] relative rounded-[18px] w-full sm:w-4/5 mx-auto">
      <Frame307 title={title} league={league} leagueLogo={leagueLogo} />

      <div className="flex flex-col items-start relative shrink-0 w-full rounded-[16px] overflow-hidden bg-white">
        {sorted.length === 0 ? (
          <div className="px-3 py-2 text-[11px] text-[#777]">
            No matches with odds for this league.
          </div>
        ) : (
          sorted.map((m, idx) => (
            <React.Fragment key={m.id}>
              <MatchCard
                match={m}
                className={
                  idx === 0
                    ? "rounded-t-[16px] cursor-pointer hover:bg-gray-50 transition-colors"
                    : idx === sorted.length - 1
                    ? "rounded-b-[16px] cursor-pointer hover:bg-gray-50 transition-colors"
                    : "cursor-pointer hover:bg-gray-50 transition-colors"
                }
                onClick={() => onNavigate && onNavigate("match-details")}
              />
              {idx !== sorted.length - 1 && (
                <div className="w-full h-[1px] bg-[#e9e9ef] mx-3" />
              )}
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  );
}
