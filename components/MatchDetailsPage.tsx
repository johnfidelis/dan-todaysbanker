"use client"
import React from 'react';
import ListItem from "@/imports/ListItem-126-15750";
import LatestGames from "@/imports/Frame1618874982";
import CompareTeams from "@/imports/Frame1618874984";
import LeagueTable from "@/imports/Frame1618874354";
import MobileMatchDetails from "@/imports/Frame1000011597";
import svgPaths from "@/imports/svg-ubgvnkkesn";

// --- Sub-components ---

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex gap-[10px] items-center cursor-pointer hover:opacity-80">
      <div className="relative w-[32px] h-[32px]">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p10050200} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.pfe02460} stroke="white" strokeMiterlimit="10" strokeWidth="1.5" />
        </svg>
      </div>
      <p className="font-sans font-bold text-[20px] text-white">Back</p>
    </button>
  );
}

function Breadcrumb() {
  return (
    <div className="flex items-center text-white text-[20px]">
      <span className="font-sans font-bold">Europe</span>
      <div className="w-[24px] h-[24px] flex items-center justify-center">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M10 17L15 12L10 7V17Z" fill="white" />
        </svg>
      </div>
      <span className="font-sans font-normal">Leagues</span>
    </div>
  );
}

function MatchHeader() {
  return (
    <div className="bg-gradient-to-b from-white to-[#abacb5] rounded-[28px] w-full p-[3px] relative overflow-hidden">
        <ListItem />
    </div>
  );
}

export default function MatchDetailsPage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="w-full">
      
      {/* Mobile View */}
      <div className="md:hidden w-full relative">
        {/* Overlay for Back Button functionality since the imported frame doesn't accept props */}
        <div 
            className="absolute top-[20px] left-[10px] w-[80px] h-[40px] cursor-pointer z-50" 
            onClick={onBack}
            role="button"
            aria-label="Go back"
        />
        <MobileMatchDetails />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col gap-[20px]">
        {/* Top Navigation */}
        <div className="flex justify-between items-center w-full">
            <BackButton onClick={onBack} />
            <Breadcrumb />
        </div>

        {/* Main Match Header */}
        <MatchHeader />

        {/* Latest 10 Games */}
        <LatestGames />

        {/* Compare Teams & Previous Meetings */}
        <CompareTeams />

        {/* English Premier League Table */}
        <LeagueTable />
      </div>

    </div>
  );
}