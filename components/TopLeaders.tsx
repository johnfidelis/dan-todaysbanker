"use client"
import React from 'react';

interface Leader {
  id: number;
  name: string;
  flag: string;
}

const leaders: Leader[] = [
  { id: 1, name: "League 1", flag: "🇫🇷" },
  { id: 2, name: "Premier League", flag: "🇬🇧" },
  { id: 3, name: "Bundesliga", flag: "🇩🇪" },
  { id: 4, name: "Serie A", flag: "🇮🇹" },
  { id: 5, name: "Eredivise", flag: "🇳🇱" },
  { id: 6, name: "La Liga", flag: "🇪🇸" },
];

export default function TopLeaders({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className="bg-[rgba(219,227,231,0.19)] flex items-center justify-center py-[10px] rounded-[10px] w-full">
        <h3 className="text-[#f3f3f3] text-[16px] font-bold tracking-[0.2px]">
          TOP LEAGUES
        </h3>
      </div>
      <div className="flex flex-col gap-[25px] pt-[10px] px-[5px]">
        {leaders.map((leader) => (
          <div 
            key={leader.id} 
            className="flex gap-[15px] items-center shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onNavigate?.('league-page')}
          >
            <span className="text-[14px] leading-[normal]">{leader.flag}</span>
            <span className="font-sans font-normal text-[#f3f3f3] text-[16px] tracking-[0.2px]">{leader.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
