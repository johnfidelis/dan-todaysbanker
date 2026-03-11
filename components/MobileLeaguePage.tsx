"use client"
import React from 'react';
import svgPaths from "@/imports/svg-6k4rt4ue33";
import svgPathsCharts from "@/imports/svg-rytgxua2ld";

import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";

const imgSerieA = "https://images.unsplash.com/photo-1709873582570-4f17d43921d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJpZSUyMGElMjBsZWFndWUlMjBsb2dvJTIwc29jY2VyfGVufDF8fHx8MTc3MTg0NDUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// SVG Paths for charts
const chartPaths = {
  full: "M57.465 0C25.73 0 0 25.73 0 57.465C0 89.2 25.73 114.93 57.465 114.93C89.2 114.93 114.93 89.2 114.93 57.465C114.93 25.73 89.2 0 57.465 0Z",
  part70: "M57.465 0V57.465L98.09 98.09C114.93 81.25 114.93 33.68 98.09 16.84L57.465 57.465Z", // Simplified arc
  part30: "M57.465 0V57.465H0C0 25.73 25.73 0 57.465 0Z" // Simplified arc
};

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex gap-[10px] items-center cursor-pointer hover:opacity-80 text-white"
    >
      <div className="relative w-[24px] h-[24px]">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 32 32">
          <path d={svgPaths.p10050200} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </svg>
      </div>
    </button>
  );
}

function StatCircle({ percentage, label, subtext, color, path1, path2 }: { percentage: string, label: string, subtext: string, color: string, path1: string, path2: string }) {
  return (
    <div className="flex flex-col gap-[5px] items-center justify-center w-[120px] shrink-0">
        <div className="relative w-[79px] h-[79px] shrink-0">
             <div className="absolute inset-0 flex items-center justify-center">
                 <span className="font-sans font-bold text-[15px] text-[#1e1e1e]">{percentage}</span>
             </div>
             <svg className="absolute inset-0 w-full h-full" viewBox="0 0 79 79" fill="none">
                 <path d={path1} fill={color} />
                 <path d={path2} fill={color} />
             </svg>
        </div>
        
        <div className="w-full py-[5px] rounded-[5px] flex items-center justify-center" style={{ backgroundColor: color }}>
            <span className="font-sans font-bold text-[10px] text-white capitalize">{label}</span>
        </div>

        <div className="flex flex-col items-center justify-center w-full">
             <p className="font-sans font-medium text-[10px] text-[#1e1e1e] text-center whitespace-pre-wrap leading-normal">
                {subtext}
             </p>
        </div>
    </div>
  );
}

function FormDots({ statuses }: { statuses: ('win' | 'loss' | 'draw')[] }) {
  const getColor = (status: 'win' | 'loss' | 'draw') => {
    switch(status) {
      case 'win': return '#68d100';
      case 'loss': return '#ec1c24';
      case 'draw': return '#ffc501';
      default: return '#dddee7';
    }
  };
  return (
    <div className="flex gap-[1.65px] items-center justify-center relative shrink-0">
      {statuses.map((s, i) => (
        <div key={i} className="h-[7.88px] w-[7.88px] rounded-[24px] shrink-0" style={{ backgroundColor: getColor(s) }} />
      ))}
    </div>
  );
}

function MatchRow({ isPast = false }: { isPast?: boolean }) {
  return (
    <div className="bg-white flex flex-col items-start py-[10px] relative rounded-[18px] w-full" data-name="listItemNew">
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row justify-center size-full">
          <div className="flex gap-[10px] items-start justify-center px-[10px] relative w-full">
            {/* Left Logo */}
            <div className="overflow-clip relative shrink-0 size-[34.6px]" data-name="premier leagues">
              <div className="absolute h-[25.7px] left-[7.06px] top-[4.5px] w-[20.6px]" data-name="Crystal Palace 1">
                <img alt="Crystal Palace" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
              </div>
            </div>

            {/* Center Content */}
            <div className="flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
              {/* Teams and Time/Score */}
              <div className="flex gap-[10px] items-center relative shrink-0 w-full">
                {/* Home Team */}
                <div className="flex flex-[1_0_0] flex-col gap-[2px] items-end relative">
                  <p className="font-sans font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
                  <FormDots statuses={['loss', 'win', 'loss', 'win', 'draw']} />
                </div>

                {/* Center Time/Score */}
                <div className="bg-[#eaeaea] flex flex-col items-center py-[4px] px-[7px] relative rounded-[5px] shrink-0">
                  <p className="font-sans font-bold leading-normal relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] whitespace-pre-wrap">
                    {isPast ? "3 - 5" : "13:00"}
                  </p>
                </div>

                {/* Away Team */}
                <div className="flex flex-[1_0_0] flex-col gap-[2px] items-start relative">
                  <p className="font-sans font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
                  <FormDots statuses={['loss', 'win', 'loss', 'win', 'draw']} />
                </div>
              </div>

              {/* Odds & Predictions Buttons */}
              <div className="flex gap-[5.94px] h-[23.77px] items-center overflow-clip relative shrink-0">
                {/* Odds Button */}
                <div className="bg-[#dddee7] flex h-full items-center justify-center p-[1.78px] relative rounded-[5.94px] shrink-0" data-name="Odds">
                   <div className="flex h-full items-center justify-center px-[5.94px] relative rounded-[2.97px] shrink-0">
                    <p className="font-sans font-medium text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase">ODDS</p>
                  </div>
                  <div className="bg-white flex h-full items-center relative rounded-[4.75px] shrink-0 overflow-hidden">
                    <div className="flex items-center justify-center px-[2.97px] h-full">
                       <span className="capitalize font-sans font-normal text-[#767676] text-[8.9px] text-center mr-[2px]">1</span>
                       <p className="font-sans font-medium leading-none text-[#1e1e1e] text-[8.32px] text-center tracking-[0.11px]">2.04</p>
                    </div>
                    <div className="flex items-center justify-center px-[2.97px] h-full">
                       <span className="capitalize font-sans font-normal text-[#767676] text-[8.9px] text-center mr-[2px]">X</span>
                       <p className="font-sans font-medium leading-none text-[#1e1e1e] text-[8.32px] text-center tracking-[0.11px]">3.14</p>
                    </div>
                    <div className="flex items-center justify-center px-[2.97px] h-full">
                       <span className="capitalize font-sans font-normal text-[#767676] text-[8.9px] text-center mr-[2px]">2</span>
                       <p className="font-sans font-medium leading-none text-[#1e1e1e] text-[8.32px] text-center tracking-[0.11px]">2.00</p>
                    </div>
                  </div>
                </div>

                {/* Predictions Button */}
                <div className="bg-[#1e225d] flex h-full items-center justify-center p-[1.78px] relative rounded-[5.94px] shrink-0" data-name="Predictions">
                  <div className="flex h-full items-center justify-center px-[5.94px] relative rounded-[2.97px] shrink-0">
                    <p className="font-sans font-medium text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase">PREDICTIONS</p>
                  </div>
                  <div className="bg-white flex h-full items-center relative rounded-[4.75px] shrink-0 overflow-hidden">
                    <div className="flex items-center justify-center px-[5.94px] h-full">
                       <span className="capitalize font-sans font-normal text-[#767676] text-[8.9px] text-center mr-[4px]">1X2</span>
                       <p className="font-sans font-bold leading-none text-[#1e225d] text-[8.32px] text-center tracking-[0.11px]">1X</p>
                    </div>
                    <div className="flex items-center justify-center px-[2.97px] h-full">
                       <span className="capitalize font-sans font-normal text-[#767676] text-[8.9px] text-center mr-[2px]">GOALS</span>
                       <p className="font-sans font-bold leading-none text-[#1e225d] text-[8.32px] text-center tracking-[0.11px]">U</p>
                    </div>
                    <div className="flex items-center justify-center px-[2.97px] h-full">
                       <span className="capitalize font-sans font-normal text-[#767676] text-[8.9px] text-center mr-[2px]">SCORES</span>
                       <p className="font-sans font-bold leading-none text-[#1e225d] text-[8.32px] text-center tracking-[0.11px]">:</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Logo */}
            <div className="overflow-clip relative shrink-0 size-[34.6px]" data-name="premier leagues">
              <div className="absolute h-[25.7px] left-[4.6px] top-[4.5px] w-[25.3px]" data-name="Manchester United 1">
                <img alt="Manchester United" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MobileLeaguePage({ onBack }: { onBack?: () => void }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f5f5] pb-[20px]">
       {/* Mobile Header with Back Button */}
       <div className="flex items-center gap-[10px] p-[15px] bg-[#1e2749] text-white sticky top-0 z-50">
          <BackButton onClick={onBack} />
          <div className="flex items-center gap-[10px]">
              <div className="w-[24px] h-[24px]">
                 <img src={imgSerieA} alt="Serie A" className="w-full h-full object-contain" />
              </div>
              <h1 className="font-sans font-bold text-[18px]">Serie A</h1>
          </div>
       </div>
       
       {/* Content */}
       <div className="flex flex-col gap-[15px] p-[10px]">
          
          {/* Stats Section - Horizontal Scroll */}
          <div className="flex overflow-x-auto gap-[10px] pb-[5px] scrollbar-hide">
              <StatCircle 
                  percentage="70%" 
                  label="Home Team Wins" 
                  subtext="In 38.28% of the game played at home."
                  color="#009951" 
                  path1={svgPathsCharts.p297c9740}
                  path2={svgPathsCharts.p36709500}
              />
              <StatCircle 
                  percentage="70%" 
                  label="Number Of Draws" 
                  subtext="In 38.28% of the game played away."
                  color="#5a5a5a" 
                  path1={svgPathsCharts.p20315100}
                  path2={svgPathsCharts.p25e00a70}
              />
              <StatCircle 
                  percentage="30%" 
                  label="Away Team Wins" 
                  subtext="Liga 2023/2024. 20.31% of games finish as draw"
                  color="#0088FF" 
                  path1={svgPathsCharts.p20315100}
                  path2={svgPathsCharts.p250a2000}
              />
          </div>

          {/* Upcoming Predictions */}
          <div className="bg-[#e9e9ef] relative rounded-[20px] shrink-0 w-full overflow-hidden">
              <div className="flex flex-col gap-[5px] items-start p-[5px] w-full">
                  {/* Header */}
                  <div className="relative rounded-[10px] shrink-0 w-full">
                      <div className="flex flex-row items-center w-full justify-between px-[10px] py-[5px]">
                          <div className="flex-1 font-sans font-medium text-[#1e1e1e] whitespace-pre-wrap">
                              <p className="mb-0 text-[17px] capitalize">Upcoming Predictions  </p>
                              <p className="text-[#5a5a5a] text-[13px]">(Last 21 games)</p>
                          </div>
                      </div>
                  </div>

                  {/* List of Matches */}
                  <div className="flex flex-col gap-[5px] w-full items-start relative shrink-0">
                       <MatchRow />
                       <MatchRow />
                       <MatchRow />
                       <MatchRow />
                       <MatchRow />
                  </div>
              </div>
          </div>

          {/* Past Predictions */}
          <div className="flex flex-col gap-[10px]">
             <div className="flex items-baseline justify-between">
                 <h2 className="font-sans font-bold text-[16px] text-[#1e1e1e]">Past Results</h2>
                 <span className="font-sans font-normal text-[12px] text-[#5a5a5a]">(Last 21)</span>
             </div>
             <div className="flex flex-col gap-[10px]">
                 <MatchRow isPast={true} />
                 <MatchRow isPast={true} />
                 <MatchRow isPast={true} />
             </div>
          </div>
       </div>
    </div>
  )
}