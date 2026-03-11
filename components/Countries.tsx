"use client"
import React from 'react';

interface Country {
  id: number;
  name: string;
  flag: string;
}

const countries: Country[] = [
  { id: 1, name: "Albania", flag: "🇦🇱" },
  { id: 2, name: "Algeria", flag: "🇩🇿" },
  { id: 3, name: "Andorra", flag: "🇦🇩" },
  { id: 4, name: "Angola", flag: "🇦🇴" },
  { id: 5, name: "Argentina", flag: "🇦🇷" },
];

export default function Countries({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className="bg-[rgba(219,227,231,0.19)] flex items-center justify-center py-[10px] rounded-[10px] w-full">
        <h3 className="text-[#f3f3f3] text-[16px] font-bold tracking-[0.2px]">
          COUNTRIES
        </h3>
      </div>
      <div className="flex flex-col gap-1 pr-2 max-h-60 overflow-y-auto custom-scrollbar">
        {countries.map((country) => (
          <div 
            key={country.id} 
            className="flex items-center gap-3 py-2 px-2 rounded hover:bg-white/5 cursor-pointer transition-colors group"
            onClick={() => onNavigate?.('league-page')}
          >
            <span className="text-lg w-6 flex justify-center">{country.flag}</span>
            <span className="text-white/90 text-sm font-medium group-hover:text-white">{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
