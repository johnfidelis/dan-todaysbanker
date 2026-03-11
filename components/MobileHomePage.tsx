"use client"
import React from 'react';
import svgPaths from "@/imports/svg-iu97jmbr1f";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";
import ListItem from "@/imports/ListItem-220-15459";

// --- SVG Components ---

function Wifi() {
  return (
    <div className="size-[17px] relative">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 17 17">
        <path d={svgPaths.p34567080} fill="white" opacity="0.1" />
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="size-[17px] relative">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 17 17">
        <path d={svgPaths.p112c6500} fill="white" />
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="h-[15px] w-[8px] relative">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 8 15">
        <path d={svgPaths.p2dfd100} fill="white" opacity="0.3" />
        <path d={svgPaths.p2657cc00} fill="white" />
      </svg>
    </div>
  );
}

function LogoIcon() {
  return (
    <div className="h-[30.411px] w-[35.322px] relative shrink-0">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 56.4541 48.6042">
        <path d={svgPaths.pa887500} fill="#389C52" />
        <path d={svgPaths.p21de4c00} fill="#389C52" />
        <path d={svgPaths.p3046ce00} fill="#389C52" />
        <path d={svgPaths.p269234f2} fill="#D2AD30" />
        <path d={svgPaths.p35a7e600} fill="#D2AD30" />
      </svg>
    </div>
  );
}

function TelegramIcon() {
  return (
    <div className="size-[32px] relative shrink-0">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_telegram)">
          <path d={svgPaths.p1417db40} fill="#2AABEE" />
          <path d={svgPaths.p365edfc0} fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_telegram">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

// --- Header Components ---

function NavTab({ iconPath, label, active = false }: { iconPath: string, label: string, active?: boolean }) {
  return (
    <div className="flex gap-[5px] items-center justify-center px-[9px] py-[10px] relative shrink-0">
      {active && <div className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />}
      <div className="size-[17.455px] relative shrink-0">
        <svg className="absolute block size-full" fill="none" viewBox="0 0 17.4545 17.4545">
            <path d={iconPath} fill={active ? "white" : "#F3F3F3"} />
        </svg>
      </div>
      <p className={`font-['Lexend',sans-serif] ${active ? 'font-medium' : 'font-normal'} leading-[21.64px] text-[12px] ${active ? 'text-white' : 'text-[#f3f3f3]'}`}>
        {label}
      </p>
    </div>
  );
}

function TopBar() {
  return (
    <div className="w-full relative shrink-0 z-20">

    </div>
  );
}

function NavBar() {
  return (
    <div className="backdrop-blur-[3.15px] bg-[rgba(0,0,0,0.25)] w-full shrink-0 z-10">

    </div>
  );
}

// --- Trending Components ---

function TeamRow({ name, logo }: { name: string, logo: string }) {
  return (
    <div className="flex items-center w-full rounded-[15px] relative">
      <div className="size-[42px] relative shrink-0 overflow-clip">
         <img src={logo} className="absolute inset-0 object-cover w-full h-full p-[5px]" />
      </div>
      <p className="font-['Space_Grotesk',sans-serif] font-medium text-[14px] text-[#f3f3f3] tracking-[0.2px] ml-[5px]">
        {name}
      </p>
    </div>
  );
}

function OddsBox({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-center relative shrink-0">
       <div className="flex flex-col justify-center shrink-0 w-[20px]">
          <p className="font-['Space_Grotesk',sans-serif] text-[13px] text-[#767676] text-center">{label}</p>
       </div>
       <div className="bg-white/50 rounded-[4px] px-[6px] py-[5px] ml-[2px]">
          <p className="font-['Space_Grotesk',sans-serif] font-medium text-[12px] text-[#1e1e1e] text-center">{value}</p>
       </div>
    </div>
  );
}

function TrendingCard() {
  return (
    <div className="relative w-full rounded-[20px] overflow-hidden" style={{ backgroundImage: "linear-gradient(-19.147deg, rgb(0, 47, 76) 0.25%, rgb(0, 92, 149) 99.35%)" }}>
       {/* Background Vector */}
       <div className="absolute right-0 bottom-0 w-[239px] h-[238px] opacity-[0.17]">
          <svg className="block w-full h-full" viewBox="0 0 239 239">
             <path d={svgPaths.p20e94e80} fill="#0068A8" />
          </svg>
       </div>

       <div className="relative z-10 p-[15px] flex flex-col gap-[15px]">
          {/* League Header */}
          <div className="flex items-center justify-center gap-[5px]">
             <div className="size-[14px] overflow-clip">
                <svg viewBox="0 0 13 13" className="size-full">
                    <path d={svgPaths.p7d3e300} fill="white" />
                    <path d={svgPaths.p28af9700} fill="#CE1124" />
                </svg>
             </div>
             <p className="font-['Space_Grotesk',sans-serif] text-[12px] text-[#f3f3f3] capitalize">England Premier League</p>
          </div>

          {/* Teams and Time */}
          <div className="flex items-center justify-center w-full border-y border-[rgba(255,255,255,0.08)] py-[10px]">
             <div className="flex flex-col gap-[10px] flex-1">
                <TeamRow name="Crystal Palace" logo={imgCrystalPalace1} />
                <TeamRow name="Man. United" logo={imgManchesterUnited1} />
             </div>
             <div className="flex flex-col items-center justify-center text-[#f3f3f3] text-[14px] px-[10px]">
                <p className="font-normal">14 Jan</p>
                <p className="font-bold">13:00</p>
             </div>
          </div>

          {/* Odds */}
          <div className="bg-[#dddee7] rounded-[9px] p-[3px] flex items-center justify-between h-[35px]">
             <div className="px-[8px]">
                <p className="font-['Space_Grotesk',sans-serif] font-medium text-[12px] text-[#5a5a5a] uppercase">ODDS</p>
             </div>
             <div className="bg-white rounded-[7px] flex items-center px-[5px] h-full gap-[5px]">
                <OddsBox label="1" value="2.04" />
                <OddsBox label="X" value="3.14" />
                <OddsBox label="2" value="2.00" />
             </div>
          </div>
       </div>
    </div>
  );
}

// --- Match List Components ---

function MatchStatusDots({ form }: { form: string[] }) {
    // Mock dots for visual fidelity
    return (
        <div className="flex gap-[2px]">
            {form.map((s, i) => (
                <div key={i} className={`w-[8px] h-[8px] rounded-full ${s === 'W' ? 'bg-[#68d100]' : s === 'L' ? 'bg-[#ec1c24]' : 'bg-[#ffc501]'}`} />
            ))}
        </div>
    );
}

function MatchCard({ 
    team1Name = "Crystal Palace", 
    team1Logo = imgCrystalPalace1, 
    team2Name = "Manchester United", 
    team2Logo = imgManchesterUnited1 
}) {
    return (
        <div className="bg-white rounded-[15px] p-[10px] flex flex-col gap-[10px]">
            {/* Teams Row */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[5px] w-[35%] justify-end">
                     <div className="flex flex-col items-end gap-[2px]">
                        <p className="font-['Space_Grotesk',sans-serif] font-bold text-[11px] text-[#1e1e1e] text-right truncate w-full">{team1Name}</p>
                        <MatchStatusDots form={['L','W','L','W','D']} />
                     </div>
                     <img src={team1Logo} className="size-[35px] object-contain" />
                </div>

                <div className="bg-[#eaeaea] rounded-[5px] px-[8px] py-[4px] min-w-[50px] flex justify-center">
                    <p className="font-['Space_Grotesk',sans-serif] font-bold text-[11px] text-[#1a1919]">13:00</p>
                </div>

                <div className="flex items-center gap-[5px] w-[35%] justify-start">
                     <img src={team2Logo} className="size-[35px] object-contain" />
                     <div className="flex flex-col items-start gap-[2px]">
                        <p className="font-['Space_Grotesk',sans-serif] font-bold text-[11px] text-[#1e1e1e] text-left truncate w-full">{team2Name}</p>
                        <MatchStatusDots form={['L','W','L','W','D']} />
                     </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-center gap-[6px] h-[24px]">
                {/* Odds */}
                <div className="bg-[#dddee7] rounded-[6px] p-[2px] flex items-center h-full">
                    <div className="px-[6px]">
                        <p className="font-['Space_Grotesk',sans-serif] font-medium text-[8px] text-[#5a5a5a] uppercase">ODDS</p>
                    </div>
                    <div className="bg-white rounded-[5px] flex items-center px-[3px] h-full gap-[3px]">
                        <div className="flex items-center gap-[1px]"><span className="text-[9px] text-[#767676]">1</span><div className="bg-[#f5f5f5] rounded-[3px] px-[4px] py-[2px]"><span className="text-[8px] font-medium">2.04</span></div></div>
                        <div className="flex items-center gap-[1px]"><span className="text-[9px] text-[#767676]">X</span><div className="bg-[#f5f5f5] rounded-[3px] px-[4px] py-[2px]"><span className="text-[8px] font-medium">3.14</span></div></div>
                        <div className="flex items-center gap-[1px]"><span className="text-[9px] text-[#767676]">2</span><div className="bg-[#f5f5f5] rounded-[3px] px-[4px] py-[2px]"><span className="text-[8px] font-medium">2.00</span></div></div>
                    </div>
                </div>

                {/* Predictions */}
                <div className="bg-[#1e225d] rounded-[6px] p-[2px] flex items-center h-full">
                    <div className="px-[6px]">
                        <p className="font-['Space_Grotesk',sans-serif] font-medium text-[8px] text-[#e9e9ef] uppercase">PREDICTIONS</p>
                    </div>
                    <div className="bg-white rounded-[5px] flex items-center px-[3px] h-full gap-[3px]">
                        <div className="flex items-center gap-[1px]"><span className="text-[9px] text-[#767676]">1X2</span><div className="bg-[#f5f5f5] rounded-[3px] px-[4px] py-[2px]"><span className="text-[8px] font-bold text-[#1e225d]">1X</span></div></div>
                        <div className="flex items-center gap-[1px]"><span className="text-[9px] text-[#767676]">Goals</span><div className="bg-[#f5f5f5] rounded-[3px] px-[4px] py-[2px]"><span className="text-[8px] font-bold text-[#1e225d]">U</span></div></div>
                        <div className="flex items-center gap-[1px]"><span className="text-[9px] text-[#767676]">Scores</span><div className="bg-[#f5f5f5] rounded-[3px] px-[4px] py-[2px]"><span className="text-[8px] font-bold text-[#1e225d]">:</span></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Sections ---

function QuickTip() {
  return (
    <div className="bg-white rounded-[20px] p-[20px] flex flex-col gap-[10px]">
       <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-[18px] text-[#1e1e1e]">Quick Tip</h3>
       <p className="font-['Space_Grotesk',sans-serif] font-normal text-[12px] text-[#5a5a5a] leading-[18px] text-justify">
          The main types of bets are 1, X, 2. In this context 1 stands for the Home team X denotes a draw and 2 represents the team. Additionally, 1X indicates a bet on either the Home team or a draw outcome; while X2 is for betting on either the Away team or a draw result. For example if someone mentions "1 @ 2.15 " it means they are wagering on the home team with odds of 2.15. Therefore if you bet $10 your potential payout would be $21.50 with a profit of $11.50.
          <br /><br />
          Our aim is to provide reliable information. However it's important to note that with top-notch advice, at your disposal not everyone possesses what it takes to excel as a punter.
       </p>
       <p className="font-['Space_Grotesk',sans-serif] font-bold text-[12px] text-[#1e1e1e] mt-[10px]">Best of luck!</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0d0f2a] rounded-[20px] p-[20px] flex flex-col items-center gap-[20px] mx-[15px] mb-[20px] mt-[10px]">
       <div className="flex items-center gap-[5px]">
          <LogoIcon />
          <p className="font-sans text-[20px] text-white">TodaysBanker</p>
       </div>
       <div className="flex flex-wrap justify-center gap-[10px] text-[10px] text-[#f3f3f3] uppercase font-['Space_Grotesk',sans-serif]">
          <span>Home</span>
          <span>|</span>
          <span>Terms of Use</span>
          <span>|</span>
          <span>Privacy</span>
          <span>|</span>
          <span>FAQ</span>
          <span>|</span>
          <span>Contact Us</span>
          <span>|</span>
          <span>Blog</span>
       </div>
       <p className="text-[10px] text-[#767676] font-['Space_Grotesk',sans-serif] text-center">
          Copyright © 2026 TodaysBanker All Rights Reserved.
       </p>
       <div className="flex gap-[15px]">
          {/* Social Icons Mock */}
          <div className="size-[24px] bg-white rounded-[5px] flex items-center justify-center text-black font-bold text-[12px]">X</div>
          <div className="size-[24px] bg-white rounded-full flex items-center justify-center text-black font-bold text-[12px]">T</div>
          <div className="size-[24px] bg-white rounded-full flex items-center justify-center text-black font-bold text-[12px]">F</div>
       </div>
    </div>
  );
}

export default function MobileHomePage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#1e2749] pb-[80px]">
      <div className="sticky top-0 z-50">
        <TopBar />
        <NavBar />
      </div>
      
      <div className="flex flex-col gap-[20px] p-[15px]">
         {/* Trending Fixtures Section */}
         <div className="flex flex-col gap-[10px]">
            <div className="bg-[#0d0f2a] rounded-[10px] py-[10px] flex items-center justify-center">
                <p className="text-white font-bold text-[16px] font-['Space_Grotesk',sans-serif]">Trending Fixtures</p>
            </div>
            
            {/* Carousel Dots Mock */}
            <div className="flex justify-center gap-[5px] py-[5px]">
                <div className="w-[10px] h-[10px] rounded-full bg-[#FFCC00]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#B9BACD]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#B9BACD]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#B9BACD]" />
                <div className="w-[10px] h-[10px] rounded-full bg-[#B9BACD]" />
            </div>

            <TrendingCard />
         </div>

         {/* Match of the Day Section */}
         <div className="bg-[#e9e9ef] rounded-[20px] p-[10px] flex flex-col gap-[10px]">
            {/* Header */}
            <ListItem />

            <MatchCard />
            
            {/* League Divider */}
            <div className="flex items-center justify-between px-[5px] py-[5px]">
                 <div className="flex items-center gap-[5px]">
                    <div className="size-[14px]">
                        <svg viewBox="0 0 13 13" className="size-full">
                            <path d={svgPaths.p7d3e300} fill="black" /> {/* Fallback color */}
                            <path d={svgPaths.p28af9700} fill="#CE1124" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-[10px] text-[#ec1c24]">La Liga</span>
                        <span className="text-[8px] text-[#767676]">Spain</span>
                    </div>
                 </div>
                 <div className="rotate-90 text-[#767676] text-[12px]">{'>'}</div>
            </div>

            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />

            {/* League Divider 2 */}
            <div className="flex items-center justify-between px-[5px] py-[5px] mt-[10px]">
                 <div className="flex items-center gap-[5px]">
                    <div className="size-[14px]">
                        <svg viewBox="0 0 13 13" className="size-full">
                            <path d={svgPaths.p7d3e300} fill="black" />
                            <path d={svgPaths.p28af9700} fill="#CE1124" />
                        </svg>
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-[10px] text-[#ec1c24]">La Liga</span>
                        <span className="text-[8px] text-[#767676]">Spain</span>
                    </div>
                 </div>
                 <div className="rotate-90 text-[#767676] text-[12px]">{'>'}</div>
            </div>

            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
         </div>

         {/* Quick Tip */}
         <QuickTip />


      </div>
    </div>
  );
}