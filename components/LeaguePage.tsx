"use client"
import React from 'react';
import svgPaths from "@/imports/svg-6k4rt4ue33";
import MobileLeaguePage  from './MobileLeaguePage';

// Placeholder images
const imgSerieA = "https://images.unsplash.com/photo-1709873582570-4f17d43921d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJpZSUyMGElMjBsZWFndWUlMjBsb2dvJTIwc29jY2VyfGVufDF8fHx8MTc3MTg0NDUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgCrystalPalace = "https://images.unsplash.com/photo-1769952529152-88b736e04daf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjbHViJTIwbG9nbyUyMGdlbmVyaWN8ZW58MXx8fHwxNzcxODQ0NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgManUtd = "https://images.unsplash.com/photo-1602737131820-eafac4dd6f5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5jaGVzdGVyJTIwdW5pdGVkJTIwZm9vdGJhbGx8ZW58MXx8fHwxNzcxODQ0NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

// SVG Paths for charts
const chartPaths = {
  full: "M57.465 0C25.73 0 0 25.73 0 57.465C0 89.2 25.73 114.93 57.465 114.93C89.2 114.93 114.93 89.2 114.93 57.465C114.93 25.73 89.2 0 57.465 0Z",
  part70: "M57.465 0V57.465L98.09 98.09C114.93 81.25 114.93 33.68 98.09 16.84L57.465 57.465Z", // Simplified arc
  part30: "M57.465 0V57.465H0C0 25.73 25.73 0 57.465 0Z" // Simplified arc
};

// Reusable Components

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="flex gap-[10px] items-center cursor-pointer hover:opacity-80"
    >
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

function StatCircle({ percentage, label, subtext, color, path1, path2 }: { percentage: string, label: string, subtext: string, color: string, path1: string, path2: string }) {
  return (
    <div className="flex flex-col items-center gap-[10px] w-full max-w-[250px]">
      <div className="relative w-[115px] h-[115px] flex items-center justify-center">
        <div className="absolute inset-0">
          <svg className="block w-full h-full" viewBox="0 0 114.93 114.93">
            <path d={path1} fill={color} />
            <path d={path2} fill={color} />
          </svg>
        </div>
        <span className="relative font-sans font-bold text-[22px] text-[#1e1e1e] z-10">{percentage}</span>
      </div>
      
      <div className="flex flex-col gap-[7px] w-full">
        <div className={`h-[29px] w-full rounded-[6px] flex items-center justify-center relative`} style={{ backgroundColor: color }}>
           <span className="font-sans font-bold text-[14px] text-white capitalize text-center px-2">{label}</span>
        </div>
        <p className="font-sans font-medium text-[15px] text-[#1e1e1e] text-center leading-normal">
          {subtext}
        </p>
      </div>
    </div>
  );
}

function MatchRow({ isPast = false }: { isPast?: boolean }) {
  return (
    <div className="bg-white rounded-[10px] p-[10px] w-full border-b border-[#eaeaea] last:border-0">
      <div className="flex flex-col md:flex-row gap-[15px] items-center justify-center w-full">
        
        {/* Teams and Time */}
        <div className="flex items-center justify-center gap-[10px] w-full md:w-auto">
          {/* Home Team */}
          <div className="flex-1 flex flex-col items-end gap-[5px]">
             {/* Logo would go here if we had different ones, using placeholder for now */}
             <div className="flex items-center gap-[10px] justify-end">
                <div className="flex flex-col items-end">
                    <span className="font-sans font-bold text-[14px] text-[#1e1e1e] text-right">Crystal Palace</span>
                    <div className="flex gap-[2px]">
                        <div className="w-[12px] h-[12px] bg-[#ec1c24] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#68d100] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#ec1c24] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#68d100] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#ffc501] rounded-full"></div>
                    </div>
                </div>
                <img src={imgCrystalPalace} className="w-[40px] h-[50px] object-contain" alt="Crystal Palace" />
             </div>
          </div>

          {/* Time / Score */}
          <div className="flex flex-col items-center min-w-[60px]">
             {isPast ? (
                 <div className="flex flex-col items-center">
                     <span className="font-sans font-normal text-[12px] text-[#757575]">14/02/25</span>
                     <span className="font-sans font-bold text-[16px] text-[#1e1e1e]">3 - 5</span>
                 </div>
             ) : (
                 <div className="bg-[#f5f5f5] px-[8px] py-[4px] rounded-[5px]">
                    <span className="font-sans font-bold text-[14px] text-[#1a1919]">13:00</span>
                 </div>
             )}
          </div>

          {/* Away Team */}
          <div className="flex-1 flex flex-col items-start gap-[5px]">
             <div className="flex items-center gap-[10px]">
                <img src={imgManUtd} className="w-[50px] h-[50px] object-contain" alt="Man Utd" />
                <div className="flex flex-col items-start">
                    <span className="font-sans font-bold text-[14px] text-[#1e1e1e]">Manchester United</span>
                    <div className="flex gap-[2px]">
                        <div className="w-[12px] h-[12px] bg-[#ec1c24] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#68d100] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#ec1c24] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#68d100] rounded-full"></div>
                        <div className="w-[12px] h-[12px] bg-[#ffc501] rounded-full"></div>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Odds & Predictions */}
        <div className="flex items-center gap-[10px] w-full md:w-auto justify-center mt-[10px] md:mt-0">
            {/* Odds */}
            <div className="bg-[#dddee7] p-[2px] rounded-[6px] flex items-center h-[34px]">
                <div className="px-[8px] h-full flex items-center justify-center">
                    <span className="font-sans font-medium text-[12px] text-[#5a5a5a] uppercase">ODDS</span>
                </div>
                <div className="bg-white rounded-[5px] h-full flex items-center px-[5px] gap-[5px]">
                    <div className="flex items-center gap-[5px] px-[5px]">
                        <span className="text-[#767676] text-[13px]">1</span>
                        <span className="font-sans font-medium text-[12px] text-[#1e1e1e] bg-[#f5f5f5] px-[6px] py-[4px] rounded-[4px]">{isPast ? '2.04' : '-'}</span>
                    </div>
                    <div className="flex items-center gap-[5px] px-[5px]">
                        <span className="text-[#767676] text-[13px]">X</span>
                        <span className="font-sans font-medium text-[12px] text-[#1e1e1e] bg-[#f5f5f5] px-[6px] py-[4px] rounded-[4px]">{isPast ? '3.14' : '-'}</span>
                    </div>
                    <div className="flex items-center gap-[5px] px-[5px]">
                        <span className="text-[#767676] text-[13px]">2</span>
                        <span className="font-sans font-medium text-[12px] text-[#1e1e1e] bg-[#f5f5f5] px-[6px] py-[4px] rounded-[4px]">{isPast ? '2.00' : '-'}</span>
                    </div>
                </div>
            </div>

            {/* Predictions Button */}
            <div className="bg-[#1e225d] p-[2px] rounded-[6px] flex items-center h-[34px]">
                 <div className="px-[8px] h-full flex items-center justify-center">
                    <span className="font-sans font-medium text-[12px] text-[#e9e9ef] uppercase">PREDICTIONS</span>
                </div>
                <div className="bg-white rounded-[5px] h-full flex items-center px-[5px] gap-[5px]">
                     <div className="flex items-center gap-[5px] px-[5px]">
                        <span className="text-[#767676] text-[13px]">1X2</span>
                        <span className="font-sans font-bold text-[12px] text-[#1e225d] bg-[#f5f5f5] px-[6px] py-[4px] rounded-[4px]">{isPast ? '1X' : '-'}</span>
                    </div>
                     <div className="flex items-center gap-[5px] px-[5px]">
                        <span className="text-[#767676] text-[13px]">Goals</span>
                        <span className="font-sans font-bold text-[12px] text-[#1e225d] bg-[#f5f5f5] px-[6px] py-[4px] rounded-[4px]">{isPast ? 'U' : '-'}</span>
                    </div>
                     <div className="flex items-center gap-[5px] px-[5px]">
                        <span className="text-[#767676] text-[13px]">Scores</span>
                        <span className="font-sans font-bold text-[12px] text-[#1e225d] bg-[#f5f5f5] px-[6px] py-[4px] rounded-[4px]">{isPast ? '2-1' : '-'}</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}


function StatusDots() {
  return (
    <div className="flex gap-[2.5px] items-center justify-center">
      <div className="bg-[#ec1c24] w-[12px] h-[12px] rounded-full" />
      <div className="bg-[#68d100] w-[12px] h-[12px] rounded-full" />
      <div className="bg-[#ec1c24] w-[12px] h-[12px] rounded-full" />
      <div className="bg-[#68d100] w-[12px] h-[12px] rounded-full" />
      <div className="bg-[#ffc501] w-[12px] h-[12px] rounded-full" />
    </div>
  );
}

function UpcomingMatchRow() {
  return (
    <div className="bg-white py-[10px] rounded-[18px] w-full">
      <div className="w-full flex justify-center">
        <div className="flex gap-[10px] items-start justify-center px-[10px] w-full relative">
          
          {/* Left Logo */}
          <div className="relative shrink-0 w-[41px] h-[51px] top-[9px]">
            <img src={imgCrystalPalace} alt="Crystal Palace" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Center Content */}
          <div className="flex flex-1 flex-col gap-[10px] items-center min-w-0">
            
            {/* Teams Row */}
            <div className="flex gap-[15px] items-center w-full justify-center">
              {/* Home Team Name & Status */}
              <div className="flex flex-1 gap-[5px] items-center justify-end min-w-0">
                 <div className="flex flex-col gap-[2px] items-end">
                    <p className="font-sans font-bold text-[#1e1e1e] text-[14px] leading-[18px] text-right truncate">Crystal Palace</p>
                    <StatusDots />
                 </div>
              </div>

              {/* Time */}
              <div className="flex flex-col gap-[2px] items-center shrink-0">
                 <div className="bg-[#f5f5f5] py-[4px] px-[7px] rounded-[5px] flex flex-col items-center justify-center">
                    <p className="font-sans font-bold text-[#1a1919] text-[14px] text-center tracking-[0.2px]">13:00</p>
                 </div>
              </div>

              {/* Away Team Name & Status */}
              <div className="flex flex-1 gap-[5px] items-center justify-start min-w-0">
                 <div className="flex flex-col gap-[2px] items-start">
                    <p className="font-sans font-bold text-[#1e1e1e] text-[14px] leading-[18px] truncate">Manchester United</p>
                    <StatusDots />
                 </div>
              </div>
            </div>

            {/* Odds & Predictions Row */}
            <div className="flex gap-[8px] h-[35px] items-center overflow-hidden w-full justify-center">
              
              {/* Odds Block */}
              <div className="bg-[#dddee7] flex h-full items-center justify-center p-[2.6px] rounded-[8.7px]">
                 <div className="flex h-full items-center justify-center px-[8.7px] rounded-[4.3px]">
                    <span className="font-sans font-medium text-[#5a5a5a] text-[12px] tracking-[0.02px] uppercase">ODDS</span>
                 </div>
                 <div className="bg-white flex h-full items-center rounded-[6.9px]">
                    <div className="flex items-center justify-center px-[4.3px]">
                       <div className="flex flex-col justify-center text-[#767676] text-[13px] capitalize leading-[0]">
                          <p>1</p>
                       </div>
                       <div className="flex items-center justify-center px-[6px] py-[4.8px] rounded-[4.3px]">
                          <p className="font-sans font-medium text-[#1e1e1e] text-[12px] tracking-[0.17px] leading-[15.6px]">-</p>
                       </div>
                    </div>
                    <div className="flex items-center justify-center px-[4.3px]">
                       <div className="flex flex-col justify-center text-[#767676] text-[13px] capitalize leading-[0]">
                          <p>X</p>
                       </div>
                       <div className="flex items-center justify-center px-[6px] py-[4.8px] rounded-[4.3px]">
                          <p className="font-sans font-medium text-[#1e1e1e] text-[12px] tracking-[0.17px] leading-[15.6px]">-</p>
                       </div>
                    </div>
                    <div className="flex items-center justify-center px-[4.3px]">
                       <div className="flex flex-col justify-center text-[#767676] text-[13px] capitalize leading-[0]">
                          <p>2</p>
                       </div>
                       <div className="flex items-center justify-center px-[6px] py-[4.8px] rounded-[4.3px]">
                          <p className="font-sans font-medium text-[#1e1e1e] text-[12px] tracking-[0.17px] leading-[15.6px]">-</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Predictions Block */}
              <div className="bg-[#1e225d] flex h-full items-center justify-center p-[2.6px] rounded-[8.7px]">
                 <div className="flex h-full items-center justify-center px-[8.7px] rounded-[4.3px]">
                    <span className="font-sans font-medium text-[#e9e9ef] text-[12px] tracking-[0.02px] uppercase">predictions</span>
                 </div>
                 <div className="bg-white flex h-full items-center rounded-[6.9px]">
                    <div className="flex items-center justify-center px-[8.7px]">
                       <div className="flex flex-col justify-center text-[#767676] text-[13px] capitalize leading-[0]">
                          <p>1X2</p>
                       </div>
                       <div className="flex items-center justify-center px-[6px] py-[4.8px] rounded-[4.3px]">
                          <p className="font-sans font-bold text-[#1e225d] text-[12px] tracking-[0.17px] leading-[15.6px]">-</p>
                       </div>
                    </div>
                    <div className="flex items-center justify-center px-[4.3px]">
                       <div className="flex flex-col justify-center text-[#767676] text-[13px] capitalize leading-[0]">
                          <p>goals</p>
                       </div>
                       <div className="flex items-center justify-center px-[6px] py-[4.8px] rounded-[4.3px]">
                          <p className="font-sans font-bold text-[#1e225d] text-[12px] tracking-[0.17px] leading-[15.6px]">-</p>
                       </div>
                    </div>
                    <div className="flex items-center justify-center px-[4.3px]">
                       <div className="flex flex-col justify-center text-[#767676] text-[13px] capitalize leading-[0]">
                          <p>Scores</p>
                       </div>
                       <div className="flex items-center justify-center px-[6px] py-[4.8px] rounded-[4.3px]">
                          <p className="font-sans font-bold text-[#1e225d] text-[12px] tracking-[0.17px] leading-[15.6px]">:</p>
                       </div>
                    </div>
                 </div>
              </div>

            </div>
          </div>

          {/* Right Logo */}
          <div className="relative shrink-0 w-[50px] h-[51px] top-[9px]">
            <img src={imgManUtd} alt="Manchester United" className="absolute inset-0 w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default function LeaguePage({ onBack }: { onBack?: () => void }) {
  return (
    <>
      <div className="md:hidden">
         <MobileLeaguePage onBack={onBack} />
      </div>

      <div className="hidden md:flex w-full flex-col gap-[20px]">
        
        {/* Top Navigation */}
        <div className="flex justify-between items-center w-full">
          <BackButton onClick={onBack} />
          <Breadcrumb />
        </div>

        {/* Main League Card */}
        <div className="w-full bg-gradient-to-b from-white to-[#abacb5] rounded-[20px] p-[20px] relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute right-[-75px] top-1/2 -translate-y-1/2 opacity-[0.04] w-[500px] h-[500px] pointer-events-none">
               <svg className="block w-full h-full" viewBox="0 0 500.32 499.771">
                <path d={svgPaths.p3548b880} fill="#1E225D" />
              </svg>
          </div>

          {/* League Header Info */}
          <div className="flex items-center gap-[15px] mb-[20px] relative z-10">
              <div className="w-[80px] h-[80px] shrink-0">
                  <img src={imgSerieA} alt="Serie A" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-[10px]">
                  <div className="flex flex-col">
                      <h1 className="font-sans font-bold text-[#1e1e1e] text-[33px]">Serie A</h1>
                      <p className="font-sans font-medium text-[#1e1e1e] text-[20px]">Italy</p>
                  </div>
                  <div className="bg-white rounded-[10px] shadow-sm px-[15px] py-[10px] flex items-center justify-between min-w-[200px] cursor-pointer">
                      <span className="font-sans text-[#303030] text-[20px]">Serie A (2025/26)</span>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d={svgPaths.p3abfff70} stroke="black" strokeWidth="2" strokeLinejoin="round"/>
                      </svg>
                  </div>
              </div>
          </div>

          {/* Stats Section */}
          <div className="bg-white/40 backdrop-blur-[2px] rounded-[28px] border-2 border-[#1e225d] p-[20px] md:p-[40px] relative z-10">
              <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-[30px] w-full">
                  <StatCircle 
                      percentage="70%" 
                      label="Home Team Wins" 
                      subtext="In 38.28% of the game played at home."
                      color="#009951" // Green
                      path1={chartPaths.full}
                      path2={chartPaths.part70}
                  />
                  <StatCircle 
                      percentage="70%" 
                      label="Number Of Draws" 
                      subtext="In 38.28% of the game played away."
                      color="#5a5a5a" // Grey
                      path1={chartPaths.full}
                      path2={chartPaths.part70}
                  />
                  <StatCircle 
                      percentage="30%" 
                      label="Away Team Wins" 
                      subtext="Liga 2023/2024. 20.31% of games finish as draw"
                      color="#0088FF" // Blue
                      path1={chartPaths.full}
                      path2={chartPaths.part30}
                  />
              </div>
          </div>
        </div>

        {/* Upcoming Predictions */}
        <div className="bg-white rounded-[20px] p-[15px] md:p-[20px] flex flex-col gap-[15px]">
            <div className="flex flex-col md:flex-row items-baseline gap-[10px]">
                <h2 className="font-sans font-medium text-[20px] text-[#1e1e1e]">Upcoming Predictions</h2>
                <span className="font-sans font-normal text-[16px] text-[#5a5a5a]">(Last 21 Games)</span>
            </div>
            <div className="flex flex-col gap-[10px]">
                <UpcomingMatchRow />
                <UpcomingMatchRow />
                <UpcomingMatchRow />
                <UpcomingMatchRow />
                <UpcomingMatchRow />
            </div>
        </div>

        {/* Past Predictions */}
        <div className="bg-white rounded-[20px] p-[15px] md:p-[20px] flex flex-col gap-[15px]">
           <div className="flex items-baseline gap-[10px]">
               <h2 className="font-sans font-medium text-[20px] text-[#1e1e1e]">Past Predictions</h2>
               <span className="font-sans font-normal text-[16px] text-[#5a5a5a]">(Last 21 Games)</span>
           </div>
           <div className="flex flex-col gap-[10px]">
               <MatchRow isPast={true} />
               <MatchRow isPast={true} />
               <MatchRow isPast={true} />
               <MatchRow isPast={true} />
               <MatchRow isPast={true} />
           </div>
        </div>

      </div>
    </>
  );
}
