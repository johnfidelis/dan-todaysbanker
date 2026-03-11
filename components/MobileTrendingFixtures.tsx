"use client"
import React from 'react';
import svgPaths from "@/imports/svg-elrrov68z6";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";
import imgImage214 from "@/assets/9769675da9b28a88ecd6ab6b199f13e5eadad1df.png";

// --- Shared Components ---

function TeamMatchStatus() {
  const colors = ["bg-[#ec1c24]", "bg-[#68d100]", "bg-[#ec1c24]", "bg-[#68d100]", "bg-[#ffc501]"];
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      {colors.map((bg, i) => (
        <div key={i} className={`${bg} content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]`} />
      ))}
    </div>
  );
}

function NotoFire() {
  return (
    <div className="relative size-[18px]">
      <svg className="block size-full" fill="none" viewBox="0 0 18 18">
        <g>
          <path d={svgPaths.p1016aac0} fill="url(#paint0_radial_fire)" />
          <path d={svgPaths.p1ae6b780} fill="url(#paint1_radial_fire)" />
        </g>
        <defs>
          <radialGradient id="paint0_radial_fire" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-9.9263 -0.0430801 -0.0707745 16.2871 8.74909 17.4798)">
            <stop offset="0.314" stopColor="#FF9800" />
            <stop offset="0.662" stopColor="#FF6D00" />
            <stop offset="0.972" stopColor="#F44336" />
          </radialGradient>
          <radialGradient id="paint1_radial_fire" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-0.104904 10.3855 7.81589 0.0789379 9.30656 7.60196)">
            <stop offset="0.214" stopColor="#FFF176" />
            <stop offset="0.328" stopColor="#FFF27D" />
            <stop offset="0.487" stopColor="#FFF48F" />
            <stop offset="0.672" stopColor="#FFF7AD" />
            <stop offset="0.793" stopColor="#FFF9C4" />
            <stop offset="0.822" stopColor="#FFF8BD" stopOpacity="0.804" />
            <stop offset="0.863" stopColor="#FFF6AB" stopOpacity="0.529" />
            <stop offset="0.91" stopColor="#FFF38D" stopOpacity="0.209" />
            <stop offset="0.941" stopColor="#FFF176" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

// --- Header Section ---

function TrendingHeader() {
  return (
    <div className="bg-[#0d0f2a] content-stretch flex items-center justify-center overflow-clip py-[10px] relative rounded-[10px] shrink-0 w-full">
      <div className="flex-[1_0_0] min-h-px min-w-px relative">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center px-[10px] relative w-full">
            <p className="flex-[1_0_0] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#f3f3f3] text-[16px] tracking-[0.2px] whitespace-pre-wrap">Trending Fixtures</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateSelector() {
  return (
    <div className="h-[36px] relative rounded-[40px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center p-[5px] relative size-full">
          {/* Left Arrow */}
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180 bg-white p-[3.684px] rounded-[14.737px]">
               <svg className="block size-[17.684px]" fill="none" viewBox="0 0 18 18">
                 <path clipRule="evenodd" d={svgPaths.p275bff00} fill="#5A5A5A" fillRule="evenodd" />
               </svg>
            </div>
          </div>
          {/* Dots */}
          <div className="content-stretch flex flex-[1_0_0] gap-[5px] h-full items-center justify-center min-h-px min-w-px relative">
            <div className="size-[10px]"><svg className="block size-full" viewBox="0 0 10 10"><path d={svgPaths.p73a3c70} fill="#FFCC00" /></svg></div>
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="size-[10px]"><svg className="block size-full" viewBox="0 0 10 10"><path d={svgPaths.p73a3c70} fill="#B9BACD" /></svg></div>
            ))}
          </div>
          {/* Right Arrow */}
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none bg-white p-[3.684px] rounded-[14.737px]">
               <svg className="block size-[17.684px]" fill="none" viewBox="0 0 18 18">
                 <path clipRule="evenodd" d={svgPaths.p275bff00} fill="#5A5A5A" fillRule="evenodd" />
               </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Cards & Lists ---

function OddsColumn({ label, value, isDark }: { label: string, value: string, isDark?: boolean }) {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <div className="content-stretch flex items-center justify-center relative shrink-0">
        <div className={`capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap`}>
          <p className="leading-[normal]">{label}</p>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
        <p className={`font-['Space_Grotesk:${isDark ? 'Bold' : 'Medium'}',sans-serif] ${isDark ? 'font-bold text-[#1e225d]' : 'font-medium text-[#1e1e1e]'} leading-[10.697px] relative shrink-0 text-[8.32px] text-center tracking-[0.1189px]`}>{value}</p>
      </div>
    </div>
  );
}

function MatchStats({ showPredictions = false }: { showPredictions?: boolean }) {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0 w-full overflow-x-auto scrollbar-hide justify-center">
      {/* ODDS */}
      <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0">
        <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
          <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase leading-[0]">ODDS</p>
        </div>
        <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
          <OddsColumn label="1" value="2.04" />
          <OddsColumn label="X" value="3.14" />
          <OddsColumn label="2" value="2.00" />
        </div>
      </div>
      {/* PREDICTIONS */}
      {showPredictions && (
        <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0">
          <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
            <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase leading-[0]">predictions</p>
          </div>
          <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
            <OddsColumn label="1X2" value="1X" isDark />
            <OddsColumn label="goals" value="U" isDark />
            <OddsColumn label="Scores" value=":" isDark />
          </div>
        </div>
      )}
    </div>
  );
}

function MobileMatchCard({ isFirst = false, isLast = false, hasBorder = true, showPredictions = true }: { isFirst?: boolean, isLast?: boolean, hasBorder?: boolean, showPredictions?: boolean }) {
  return (
    <div className={`bg-white content-stretch flex flex-col items-start py-[10px] relative w-full ${isFirst ? 'rounded-t-[18px]' : ''} ${isLast ? 'rounded-b-[18px]' : ''}`}>
      {hasBorder && !isFirst && <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#f0f0f0] mx-[10px]" />}
      <div className="relative shrink-0 w-full">
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
            <div className="overflow-clip relative shrink-0 size-[34.647px]">
              <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]">
                <img className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} alt="" />
              </div>
            </div>
            
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                {/* Team 1 */}
                <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
                    <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
                    <TeamMatchStatus />
                  </div>
                </div>
                {/* Time */}
                <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
                  <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0">
                    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
                      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
                    </div>
                  </div>
                </div>
                {/* Team 2 */}
                <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
                  <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                    <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
                    <TeamMatchStatus />
                  </div>
                </div>
              </div>
              <MatchStats showPredictions={showPredictions} />
            </div>

            <div className="overflow-clip relative shrink-0 size-[34.647px]">
              <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]">
                <img className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Cards ---

function EnglandPremierLeagueCard() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#002F4C] to-[#005C95]" style={{ backgroundImage: "linear-gradient(-19.147deg, rgb(0, 47, 76) 0.25392%, rgb(0, 92, 149) 99.353%)" }} />
      {/* Background Vector */}
      <div className="absolute bottom-0 right-0 h-[238px] w-[239px] pointer-events-none">
         <svg className="block size-full" fill="none" viewBox="0 0 239 239">
           <path d={svgPaths.p20e94e80} fill="#0068A8" opacity="0.17" />
         </svg>
      </div>

      <div className="relative content-stretch flex flex-col gap-[11px] items-center p-[10px] w-full">
        {/* Header */}
        <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[5px] items-center py-[10px] relative shrink-0">
            <div className="size-[14px]"><svg viewBox="0 0 14 14" className="block size-full"><g><path d={svgPaths.p7d3e300} fill="white"/><path d={svgPaths.p28af9700} fill="#CE1124"/></g></svg></div>
            <p className="capitalize font-['Space_Grotesk:Regular',sans-serif] font-normal text-[#f3f3f3] text-[12px] text-center">England Premier League</p>
          </div>
          <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
             <div className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
             <div className="flex-[1_0_0] relative py-[10px]">
                <div className="flex items-center justify-center gap-[15px]">
                   <div className="flex flex-col items-center flex-1">
                      <div className="size-[42px] relative mb-2">
                         <img src={imgCrystalPalace1} className="object-contain size-full" />
                      </div>
                      <p className="font-['Space_Grotesk:Medium',sans-serif] text-[#f3f3f3] text-[14px]">Crystal Palace</p>
                   </div>
                   <div className="flex flex-col items-center justify-center text-[#f3f3f3]">
                      <p className="font-['Space_Grotesk:Regular',sans-serif] text-[14px]">14 Jan</p>
                      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[14px]">13:00</p>
                   </div>
                   <div className="flex flex-col items-center flex-1">
                      <div className="size-[42px] relative mb-2">
                         <img src={imgManchesterUnited1} className="object-contain size-full" />
                      </div>
                      <p className="font-['Space_Grotesk:Medium',sans-serif] text-[#f3f3f3] text-[14px]">Man. United</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
        
        {/* Odds */}
        <div className="bg-[#dddee7] content-stretch flex h-[34.693px] items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0">
           <div className="px-[8px]"><p className="text-[#5a5a5a] text-[12px] font-['Space_Grotesk:Medium',sans-serif] uppercase">ODDS</p></div>
           <div className="bg-white flex h-full items-center rounded-[6px]">
              <OddsColumn label="1" value="2.04" />
              <OddsColumn label="X" value="3.14" />
              <OddsColumn label="2" value="2.00" />
           </div>
        </div>
      </div>
    </div>
  );
}

function MatchOfTheDayMobile() {
  return (
    <div className="bg-[#1e225d] relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="absolute bottom-[-0.09px] h-[238px] right-0 w-[239px]">
        <svg className="block size-full" fill="none" viewBox="0 0 239 239">
          <path d={svgPaths.p20e94e80} fill="#0068A8" opacity="0.17" />
        </svg>
      </div>
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[5px] relative w-full">
        {/* Header */}
        <div className="flex justify-center w-full py-[5px] items-center gap-[10px]">
           <p className="font-['Lato:ExtraBold',sans-serif] text-[#fafcff] text-[16px] uppercase leading-none">MATCH OF THE DAY</p>
           <div className="-scale-y-100 rotate-180"><NotoFire /></div>
        </div>
        {/* Card */}
        <div className="bg-white rounded-[18px] w-full p-[5px]">
           <MobileMatchCard isFirst isLast hasBorder={false} showPredictions={true} />
        </div>
      </div>
    </div>
  );
}

function LaLigaList() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      {/* Header */}
      <div className="bg-[#e9e9ef] w-full rounded-[10px] p-[5px]">
         <div className="flex items-center justify-between px-[10px] py-[2px]">
            <div className="flex items-center gap-[5px]">
               <img src={imgImage214} className="size-[22px]" />
               <div className="flex flex-col items-center">
                  <p className="font-['Space_Grotesk:Medium',sans-serif] text-[#1e1e1e] text-[12px] leading-none">La Liga</p>
                  <p className="text-[#757575] text-[9px] leading-none">Spain</p>
               </div>
            </div>
            <div className="size-[18px]"><svg className="size-full" viewBox="0 0 17 17"><path d={svgPaths.p228f1100} stroke="#767676"/><path d={svgPaths.p3c654780} stroke="#767676"/></svg></div>
         </div>
      </div>
      {/* List */}
      <div className="flex flex-col w-full rounded-[18px] overflow-hidden bg-white">
         <MobileMatchCard isFirst hasBorder={false} />
         <MobileMatchCard />
         <MobileMatchCard />
         <MobileMatchCard />
         <MobileMatchCard isLast />
      </div>
    </div>
  );
}

function QuickTip() {
  return (
    <div className="bg-white p-[20px] rounded-[20px] mt-[20px]">
      <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[18px] mb-[10px] text-[#1e1e1e]">Quick Tip</h3>
      <div className="text-[#1e1e1e] text-[14px] leading-[1.6] font-['Space_Grotesk:Regular',sans-serif]">
        <p className="mb-[15px]">
          The main types of bets are 1, X, 2. In this context 1 stands for the Home team X denotes a draw and 2 represents the team. Additionally, 1X indicates a bet on either the Home team or a draw outcome; while X2 is for betting on either the Away team or a draw result. For example if someone mentions "1 @ 2.15" it means they are wagering on the home team with odds of 2.15. Therefore if you bet $10 your potential payout would be $21.50 with a profit of $11.50.
        </p>
        <p className="mb-[15px]">
          Our aim is to provide reliable information. However it's important to note that with top-notch advice, at your disposal not everyone possesses what it takes to excel as a punter.
        </p>
        <p className="font-bold">Best of luck!</p>
      </div>
    </div>
  );
}

export default function MobileTrendingFixtures() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative size-full pb-[20px]">
      <TrendingHeader />
      <DateSelector />
      <EnglandPremierLeagueCard />
      <MatchOfTheDayMobile />
      <LaLigaList />
      <LaLigaList />
      <LaLigaList />
      <QuickTip />
    </div>
  );
}
