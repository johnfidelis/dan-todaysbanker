import svgPaths from "./svg-iu97jmbr1f";
import imgIPhone14Plus9 from "@/assets/070bda708d1c0e0967303e9923d436b89001c09b.png";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";
import imgImage214 from "@/assets/9769675da9b28a88ecd6ab6b199f13e5eadad1df.png";

function Wifi() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[17px]" data-name="Wifi">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Wifi">
          <g id="Path" />
          <g id="Rectangle" />
          <g id="Path_2" />
          <path d={svgPaths.p34567080} fill="var(--fill-0, white)" id="Path_3" opacity="0.1" />
        </g>
      </svg>
    </div>
  );
}

function Signal() {
  return (
    <div className="col-1 ml-[34.78%] mt-0 relative row-1 size-[17px]" data-name="Signal">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
        <g id="Signal">
          <g id="Path" />
          <path d={svgPaths.p112c6500} fill="var(--fill-0, white)" id="Path_2" />
        </g>
      </svg>
    </div>
  );
}

function Battery() {
  return (
    <div className="col-1 h-[15px] ml-[38px] mt-px relative row-1 w-[8px]" data-name="Battery">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
        <g id="Battery">
          <path d={svgPaths.p2dfd100} fill="var(--fill-0, white)" id="Base" opacity="0.3" />
          <path d={svgPaths.p2657cc00} fill="var(--fill-0, white)" id="Charge" />
        </g>
      </svg>
    </div>
  );
}

function RightIcons() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="right icons">
      <Wifi />
      <Signal />
      <Battery />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30.411px] relative shrink-0 w-[35.322px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.4541 48.6042">
        <g id="Group">
          <path d={svgPaths.pa887500} fill="var(--fill-0, #389C52)" id="Vector" />
          <path d={svgPaths.p21de4c00} fill="var(--fill-0, #389C52)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p3046ce00} fill="var(--fill-0, #389C52)" id="Vector_3" />
            <path d={svgPaths.p269234f2} fill="var(--fill-0, #D2AD30)" id="Vector_4" />
            <path d={svgPaths.p35a7e600} fill="var(--fill-0, #D2AD30)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <p className="font-['voltus_(_free_Version_):Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24.77px] text-white">TodaysBanker</p>
    </div>
  );
}

function LogosTelegram() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="logos:telegram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_158_5275)" id="logos:telegram">
          <path d={svgPaths.p1417db40} fill="url(#paint0_linear_158_5275)" id="Vector" />
          <path d={svgPaths.p365edfc0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_158_5275" x1="1600" x2="1600" y1="0" y2="3200">
            <stop stopColor="#2AABEE" />
            <stop offset="1" stopColor="#229ED9" />
          </linearGradient>
          <clipPath id="clip0_158_5275">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[5px] items-center justify-center p-[10px] relative rounded-[7px] shrink-0">
      <LogosTelegram />
    </div>
  );
}

function Frame481() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <Frame39 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="items">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
        <Group />
        <Frame />
      </div>
      <Frame481 />
    </div>
  );
}

function MenuHeader() {
  return (
    <div className="relative shrink-0 w-full" data-name="MenuHeader">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[17px] items-center justify-center p-[15px] relative w-full">
          <Items />
        </div>
      </div>
    </div>
  );
}

function PhSoccerBallFill() {
  return (
    <div className="relative shrink-0 size-[17.455px]" data-name="ph:soccer-ball-fill">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g id="ph:soccer-ball-fill">
          <path d={svgPaths.p2e6f6100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[5px] items-center justify-center px-[9px] py-[10px] relative shrink-0">
      <div aria-hidden="true" className="absolute border-b-3 border-solid border-white inset-0 pointer-events-none" />
      <PhSoccerBallFill />
      <p className="font-['Lexend:Medium',sans-serif] font-medium leading-[21.64px] relative shrink-0 text-[12px] text-white">Home</p>
    </div>
  );
}

function BiFire() {
  return (
    <div className="relative shrink-0 size-[17.455px]" data-name="bi:fire">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g clipPath="url(#clip0_158_5267)" id="bi:fire">
          <path d={svgPaths.p226b80c0} fill="var(--fill-0, #F3F3F3)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_158_5267">
            <rect fill="white" height="17.4545" width="17.4545" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <BiFire />
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[21.64px] relative shrink-0 text-[#f3f3f3] text-[12px]">Bef of The Day</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[10px] items-center justify-center px-[9px] py-[10px] relative rounded-[7px] shrink-0">
      <Frame341 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Group">
      <div className="absolute inset-[-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.9999">
          <g id="Group">
            <path d={svgPaths.p375e3100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3633bb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            <path d={svgPaths.p1f648d18} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p24564af0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlinePlumpNewsPaper() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="streamline-plump:news-paper">
      <Group1 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[5px] items-center justify-center px-[9px] py-[10px] relative rounded-[7px] shrink-0">
      <StreamlinePlumpNewsPaper />
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[21.64px] relative shrink-0 text-[#f3f3f3] text-[12px]">Blog</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[6.25%]" data-name="Group">
      <div className="absolute inset-[-3.57%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14.9999">
          <g id="Group">
            <path d={svgPaths.p375e3100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3633bb80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
            <path d={svgPaths.p1f648d18} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p24564af0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function StreamlinePlumpNewsPaper1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="streamline-plump:news-paper">
      <Group2 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[5px] items-center justify-center px-[9px] py-[10px] relative rounded-[7px] shrink-0">
      <StreamlinePlumpNewsPaper1 />
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[21.64px] relative shrink-0 text-[#f3f3f3] text-[12px]">Leagues</p>
    </div>
  );
}

function MenuHeader1() {
  return (
    <div className="backdrop-blur-[3.15px] bg-[rgba(0,0,0,0.25)] relative shrink-0 w-full" data-name="MenuHeader">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[17px] items-center p-[10px] relative w-full">
          <Frame36 />
          <Frame38 />
          <Frame37 />
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] relative w-full">
          <p className="flex-[1_0_0] font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] min-h-px min-w-px relative text-[#f3f3f3] text-[16px] tracking-[0.2px] whitespace-pre-wrap">Trending Fixtures</p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#0d0f2a] content-stretch flex items-center justify-center overflow-clip py-[10px] relative rounded-[10px] shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function MingcuteRightLine() {
  return (
    <div className="overflow-clip relative size-[17.684px]" data-name="mingcute:right-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6842 17.6842">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p275bff00} fill="var(--fill-0, #5A5A5A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame519() {
  return (
    <div className="bg-white content-stretch flex items-center p-[3.684px] relative rounded-[14.737px]">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <MingcuteRightLine />
        </div>
      </div>
    </div>
  );
}

function Frame521() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] h-full items-center justify-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p73a3c70} fill="var(--fill-0, #FFCC00)" id="Vector" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p73a3c70} fill="var(--fill-0, #B9BACD)" id="Vector" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p73a3c70} fill="var(--fill-0, #B9BACD)" id="Vector" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p73a3c70} fill="var(--fill-0, #B9BACD)" id="Vector" />
        </svg>
      </div>
      <div className="relative shrink-0 size-[10px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={svgPaths.p73a3c70} fill="var(--fill-0, #B9BACD)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function MingcuteRightLine1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[17.684px]" data-name="mingcute:right-line">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.6842 17.6842">
        <g id="Group">
          <g id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p275bff00} fill="var(--fill-0, #5A5A5A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame520() {
  return (
    <div className="bg-white content-stretch flex items-center p-[3.684px] relative rounded-[14.737px]">
      <MingcuteRightLine1 />
    </div>
  );
}

function DateSelector() {
  return (
    <div className="h-[36px] relative rounded-[40px] shrink-0 w-full" data-name="date_selector">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[15px] items-center justify-center p-[5px] relative size-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Frame519 />
            </div>
          </div>
          <Frame521 />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none">
              <Frame520 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[3.12%]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.125 13.125">
        <g id="Group">
          <path d={svgPaths.p7d3e300} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p28af9700} fill="var(--fill-0, #CE1124)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function EmojioneFlagEngland() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="emojione:flag-england">
      <Group3 />
    </div>
  );
}

function Frame359() {
  return (
    <div className="content-stretch flex gap-[5px] items-center py-[10px] relative shrink-0">
      <EmojioneFlagEngland />
      <p className="capitalize font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#f3f3f3] text-[12px] text-center">England Premier League</p>
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[18px] overflow-hidden relative shrink-0 text-[#f3f3f3] text-[14px] text-center text-ellipsis tracking-[0.2px]">Crystal Palace</p>
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex items-center relative rounded-[15px] shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[42px]" data-name="premier leagues">
        <div className="absolute h-[31.111px] left-[8.56px] top-[5.44px] w-[24.939px]" data-name="Crystal Palace 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
        </div>
      </div>
      <Frame337 />
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[18px] overflow-hidden relative shrink-0 text-[#f3f3f3] text-[14px] text-ellipsis tracking-[0.2px]">Man. United</p>
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex items-center relative rounded-[15px] shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[42px]" data-name="premier leagues">
        <div className="absolute h-[31.111px] left-[5.6px] top-[5.44px] w-[30.702px]" data-name="Manchester United 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
        </div>
      </div>
      <Frame338 />
    </div>
  );
}

function Frame575() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame268 />
      <Frame269 />
    </div>
  );
}

function Frame472() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center leading-[normal] px-[7px] relative shrink-0 text-[#f3f3f3] text-[14px] text-center tracking-[0.2px] whitespace-pre-wrap">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal relative shrink-0 w-full">14 Jan</p>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 w-full">13:00</p>
    </div>
  );
}

function Vs() {
  return (
    <div className="content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame472 />
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame271 />
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame270 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame266 />
    </div>
  );
}

function Frame392() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[15px] items-center justify-center min-h-px min-w-px relative">
      <Frame575 />
      <Frame267 />
    </div>
  );
}

function Frame265() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pr-[10px] relative w-full">
          <Frame392 />
        </div>
      </div>
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.08)] border-b border-solid border-t inset-0 pointer-events-none" />
      <Frame265 />
    </div>
  );
}

function Frame522() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame359 />
      <Frame264 />
    </div>
  );
}

function Frame443() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame364() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame93 />
      <Frame364 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame365() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame198 />
      <Frame365 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame366() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame199 />
      <Frame366 />
    </div>
  );
}

function Frame569() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame41 />
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Odds() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-[34.693px] items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame443 />
      <Frame569 />
    </div>
  );
}

function Frame357() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-center relative rounded-[10px] shrink-0 w-full">
      <Frame522 />
      <Odds />
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full" data-name="listItem" style={{ backgroundImage: "linear-gradient(-19.147deg, rgb(0, 47, 76) 0.25392%, rgb(0, 92, 149) 99.353%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
          <div className="absolute bottom-[-0.04px] h-[238.738px] right-0 w-[239px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 238.738">
              <path d={svgPaths.p20e94e80} fill="var(--fill-0, #0068A8)" id="Vector" opacity="0.17" />
            </svg>
          </div>
          <Frame357 />
        </div>
      </div>
    </div>
  );
}

function Frame576() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame35 />
      <DateSelector />
      <ListItem />
    </div>
  );
}

function NotoFire() {
  return (
    <div className="relative size-[18px]" data-name="noto:fire">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="noto:fire">
          <path d={svgPaths.p1016aac0} fill="url(#paint0_radial_158_11082)" id="Vector" />
          <path d={svgPaths.p1ae6b780} fill="url(#paint1_radial_158_11082)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-9.9263 -0.0430801 -0.0707745 16.2871 8.74909 17.4798)" gradientUnits="userSpaceOnUse" id="paint0_radial_158_11082" r="1">
            <stop offset="0.314" stopColor="#FF9800" />
            <stop offset="0.662" stopColor="#FF6D00" />
            <stop offset="0.972" stopColor="#F44336" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.104904 10.3855 7.81589 0.0789379 9.30656 7.60196)" gradientUnits="userSpaceOnUse" id="paint1_radial_158_11082" r="1">
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

function Frame75() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-center justify-center px-[11px] py-[5px] relative w-full">
          <div className="capitalize flex flex-col font-['Lato:ExtraBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#fafcff] text-[16px] text-center whitespace-nowrap">
            <p className="leading-[normal]">MATCH OF THE DAY</p>
          </div>
          <div className="flex items-center justify-center relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <NotoFire />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame3 />
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame339 />
    </div>
  );
}

function Frame473() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs1() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame473 />
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs1 />
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame274 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame4 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame340 />
    </div>
  );
}

function Frame393() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame272 />
      <Frame273 />
      <Frame275 />
    </div>
  );
}

function Frame444() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame367() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame94 />
      <Frame367 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame368() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame200 />
      <Frame368 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame369() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame201 />
      <Frame369 />
    </div>
  );
}

function Frame571() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame42 />
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Odds1() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame444 />
      <Frame571 />
    </div>
  );
}

function Frame445() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame370() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame95 />
      <Frame370 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame202 />
      <Frame371 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame203 />
      <Frame372 />
    </div>
  );
}

function Frame572() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame43 />
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Odds2() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame445 />
      <Frame572 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds1 />
      <Odds2 />
    </div>
  );
}

function Frame570() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame393 />
      <Frame77 />
    </div>
  );
}

function Frame363() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame570 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
      <Frame75 />
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame363 />
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="bg-[#1e225d] relative rounded-[20px] shrink-0 w-full" data-name="listItem">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[5px] relative w-full">
          <div className="absolute bottom-[-0.09px] h-[238.738px] right-0 w-[239px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 238.738">
              <path d={svgPaths.p20e94e80} fill="var(--fill-0, #0068A8)" id="Vector" opacity="0.17" />
            </svg>
          </div>
          <ListFTmatches />
        </div>
      </div>
    </div>
  );
}

function Frame574() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[11.733px]">La Liga</p>
      <p className="relative shrink-0 text-[#757575] text-[8.8px]">Spain</p>
    </div>
  );
}

function Frame573() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.667px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[22px]" data-name="image 214">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage214} />
      </div>
      <Frame574 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-4.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4598 16.4598">
          <g id="Group">
            <path d={svgPaths.p228f1100} id="Vector" stroke="var(--stroke-0, #767676)" strokeLinejoin="round" strokeWidth="1.45984" />
            <path d={svgPaths.p3c654780} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45984" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon-park-outline:right-c">
      <Group4 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
          <Frame573 />
          <IconParkOutlineRightC />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame5 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame342 />
    </div>
  );
}

function Frame474() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs2() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame474 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs2 />
    </div>
  );
}

function Frame278() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame279 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame343() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame6 />
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame343 />
    </div>
  );
}

function Frame394() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame277 />
      <Frame278 />
      <Frame280 />
    </div>
  );
}

function Frame446() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame374() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame96 />
      <Frame374 />
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame375() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame204 />
      <Frame375 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame376() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame205 />
      <Frame376 />
    </div>
  );
}

function Frame579() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame44 />
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Odds3() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame446 />
      <Frame579 />
    </div>
  );
}

function Frame447() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame377() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame97 />
      <Frame377 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame206 />
      <Frame378 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame379() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame207 />
      <Frame379 />
    </div>
  );
}

function Frame580() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame45 />
      <Frame110 />
      <Frame111 />
    </div>
  );
}

function Odds4() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame447 />
      <Frame580 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds3 />
      <Odds4 />
    </div>
  );
}

function Frame578() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame394 />
      <Frame78 />
    </div>
  );
}

function Frame373() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame578 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame7 />
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame344 />
    </div>
  );
}

function Frame475() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs3() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame475 />
    </div>
  );
}

function Frame283() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs3 />
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame283 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame8 />
    </div>
  );
}

function Frame284() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame345 />
    </div>
  );
}

function Frame395() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame281 />
      <Frame282 />
      <Frame284 />
    </div>
  );
}

function Frame448() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame381() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame98 />
      <Frame381 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame208 />
      <Frame382 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame383() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame209 />
      <Frame383 />
    </div>
  );
}

function Frame582() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame46 />
      <Frame112 />
      <Frame113 />
    </div>
  );
}

function Odds5() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame448 />
      <Frame582 />
    </div>
  );
}

function Frame449() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame99 />
      <Frame384 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame385() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame210 />
      <Frame385 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame211 />
      <Frame386 />
    </div>
  );
}

function Frame583() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame47 />
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Odds6() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame449 />
      <Frame583 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds5 />
      <Odds6 />
    </div>
  );
}

function Frame581() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame395 />
      <Frame79 />
    </div>
  );
}

function Frame380() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame581 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame346() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame9 />
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame346 />
    </div>
  );
}

function Frame476() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs4() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame476 />
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs4 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame287 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame10 />
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame347 />
    </div>
  );
}

function Frame396() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame285 />
      <Frame286 />
      <Frame288 />
    </div>
  );
}

function Frame450() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame388() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame100 />
      <Frame388 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame212 />
      <Frame389 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame390() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame213 />
      <Frame390 />
    </div>
  );
}

function Frame585() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame48 />
      <Frame116 />
      <Frame117 />
    </div>
  );
}

function Odds7() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame450 />
      <Frame585 />
    </div>
  );
}

function Frame451() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame101 />
      <Frame391 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame397() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame214 />
      <Frame397 />
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame215 />
      <Frame398 />
    </div>
  );
}

function Frame586() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame49 />
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Odds8() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame451 />
      <Frame586 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds7 />
      <Odds8 />
    </div>
  );
}

function Frame584() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame396 />
      <Frame80 />
    </div>
  );
}

function Frame387() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame584 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame11 />
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame348 />
    </div>
  );
}

function Frame477() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs5() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame477 />
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs5 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame291 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame349() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame12 />
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame349 />
    </div>
  );
}

function Frame400() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame289 />
      <Frame290 />
      <Frame292 />
    </div>
  );
}

function Frame452() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame401() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame120 />
      <Frame401 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame402() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame216 />
      <Frame402 />
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame403() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame217 />
      <Frame403 />
    </div>
  );
}

function Frame588() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame50 />
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Odds9() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame452 />
      <Frame588 />
    </div>
  );
}

function Frame453() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame404() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame123 />
      <Frame404 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame405() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame218 />
      <Frame405 />
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame406() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame219 />
      <Frame406 />
    </div>
  );
}

function Frame589() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame51 />
      <Frame124 />
      <Frame125 />
    </div>
  );
}

function Odds10() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame453 />
      <Frame589 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds9 />
      <Odds10 />
    </div>
  );
}

function Frame587() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame400 />
      <Frame81 />
    </div>
  );
}

function Frame399() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame587 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame13 />
    </div>
  );
}

function Frame293() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame350 />
    </div>
  );
}

function Frame478() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs6() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame478 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs6 />
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame295 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame351() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame14 />
    </div>
  );
}

function Frame296() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame351 />
    </div>
  );
}

function Frame408() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame293 />
      <Frame294 />
      <Frame296 />
    </div>
  );
}

function Frame454() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame409() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame126 />
      <Frame409 />
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame410() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame220 />
      <Frame410 />
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame411() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame221 />
      <Frame411 />
    </div>
  );
}

function Frame591() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame52 />
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Odds11() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame454 />
      <Frame591 />
    </div>
  );
}

function Frame455() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame412() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame129 />
      <Frame412 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame413() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame222 />
      <Frame413 />
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame223 />
      <Frame414 />
    </div>
  );
}

function Frame592() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame53 />
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Odds12() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame455 />
      <Frame592 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds11 />
      <Odds12 />
    </div>
  );
}

function Frame590() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame408 />
      <Frame82 />
    </div>
  );
}

function Frame407() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame590 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame486() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame373 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame380 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame387 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame399 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame407 />
      </div>
    </div>
  );
}

function Frame594() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[11.733px]">La Liga</p>
      <p className="relative shrink-0 text-[#757575] text-[8.8px]">Spain</p>
    </div>
  );
}

function Frame593() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.667px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[22px]" data-name="image 214">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage214} />
      </div>
      <Frame594 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-4.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4598 16.4598">
          <g id="Group">
            <path d={svgPaths.p228f1100} id="Vector" stroke="var(--stroke-0, #767676)" strokeLinejoin="round" strokeWidth="1.45984" />
            <path d={svgPaths.p3c654780} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45984" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon-park-outline:right-c">
      <Group5 />
    </div>
  );
}

function Frame360() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
          <Frame593 />
          <IconParkOutlineRightC1 />
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame352() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame15 />
    </div>
  );
}

function Frame297() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame352 />
    </div>
  );
}

function Frame479() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs7() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame479 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs7 />
    </div>
  );
}

function Frame298() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame299 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame353() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame16 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame353 />
    </div>
  );
}

function Frame416() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame297 />
      <Frame298 />
      <Frame300 />
    </div>
  );
}

function Frame456() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame417() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame132 />
      <Frame417 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame418() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame224 />
      <Frame418 />
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame419() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame225 />
      <Frame419 />
    </div>
  );
}

function Frame596() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame54 />
      <Frame133 />
      <Frame134 />
    </div>
  );
}

function Odds13() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame456 />
      <Frame596 />
    </div>
  );
}

function Frame457() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame420() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame135 />
      <Frame420 />
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame421() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame226 />
      <Frame421 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame422() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame227 />
      <Frame422 />
    </div>
  );
}

function Frame597() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame55 />
      <Frame136 />
      <Frame137 />
    </div>
  );
}

function Odds14() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame457 />
      <Frame597 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds13 />
      <Odds14 />
    </div>
  );
}

function Frame595() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame416 />
      <Frame83 />
    </div>
  );
}

function Frame415() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame595 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame17 />
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame354 />
    </div>
  );
}

function Frame480() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs8() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame480 />
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs8 />
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame303 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame18 />
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame356 />
    </div>
  );
}

function Frame424() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame301 />
      <Frame302 />
      <Frame304 />
    </div>
  );
}

function Frame458() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame425() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame138 />
      <Frame425 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame426() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame228 />
      <Frame426 />
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame427() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame229 />
      <Frame427 />
    </div>
  );
}

function Frame599() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame56 />
      <Frame139 />
      <Frame140 />
    </div>
  );
}

function Odds15() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame458 />
      <Frame599 />
    </div>
  );
}

function Frame459() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame428() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame141 />
      <Frame428 />
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame429() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame230 />
      <Frame429 />
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame430() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame231 />
      <Frame430 />
    </div>
  );
}

function Frame600() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame57 />
      <Frame142 />
      <Frame143 />
    </div>
  );
}

function Odds16() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame459 />
      <Frame600 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds15 />
      <Odds16 />
    </div>
  );
}

function Frame598() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame424 />
      <Frame84 />
    </div>
  );
}

function Frame423() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame598 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame19 />
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame361 />
    </div>
  );
}

function Frame482() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs9() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame482 />
    </div>
  );
}

function Frame307() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs9 />
    </div>
  );
}

function Frame306() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame307 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame362() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame20 />
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame362 />
    </div>
  );
}

function Frame432() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame305 />
      <Frame306 />
      <Frame308 />
    </div>
  );
}

function Frame460() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame433() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame144 />
      <Frame433 />
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame434() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame232 />
      <Frame434 />
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame435() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame233 />
      <Frame435 />
    </div>
  );
}

function Frame602() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame58 />
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function Odds17() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame460 />
      <Frame602 />
    </div>
  );
}

function Frame461() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame436() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame147 />
      <Frame436 />
    </div>
  );
}

function Frame234() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame437() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame234 />
      <Frame437 />
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame438() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame235 />
      <Frame438 />
    </div>
  );
}

function Frame603() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame59 />
      <Frame148 />
      <Frame149 />
    </div>
  );
}

function Odds18() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame461 />
      <Frame603 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds17 />
      <Odds18 />
    </div>
  );
}

function Frame601() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame432 />
      <Frame85 />
    </div>
  );
}

function Frame431() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame601 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame441() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame21 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame441 />
    </div>
  );
}

function Frame483() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs10() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame483 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs10 />
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame311 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame442() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame22 />
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame442 />
    </div>
  );
}

function Frame440() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame309 />
      <Frame310 />
      <Frame312 />
    </div>
  );
}

function Frame462() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame463() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame150 />
      <Frame463 />
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame464() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame236 />
      <Frame464 />
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame465() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame237 />
      <Frame465 />
    </div>
  );
}

function Frame605() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame60 />
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Odds19() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame462 />
      <Frame605 />
    </div>
  );
}

function Frame466() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame467() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame153 />
      <Frame467 />
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame468() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame238 />
      <Frame468 />
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame469() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame239 />
      <Frame469 />
    </div>
  );
}

function Frame606() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame61 />
      <Frame154 />
      <Frame155 />
    </div>
  );
}

function Odds20() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame466 />
      <Frame606 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds19 />
      <Odds20 />
    </div>
  );
}

function Frame604() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame440 />
      <Frame86 />
    </div>
  );
}

function Frame439() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame604 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame484() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame23 />
    </div>
  );
}

function Frame313() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame484 />
    </div>
  );
}

function Frame485() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs11() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame485 />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs11 />
    </div>
  );
}

function Frame314() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame315 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame488() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame24 />
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame488 />
    </div>
  );
}

function Frame471() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame313 />
      <Frame314 />
      <Frame316 />
    </div>
  );
}

function Frame489() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame490() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame156 />
      <Frame490 />
    </div>
  );
}

function Frame240() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame491() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame240 />
      <Frame491 />
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame492() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame241 />
      <Frame492 />
    </div>
  );
}

function Frame608() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame62 />
      <Frame157 />
      <Frame158 />
    </div>
  );
}

function Odds21() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame489 />
      <Frame608 />
    </div>
  );
}

function Frame493() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame494() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame159 />
      <Frame494 />
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame495() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame242 />
      <Frame495 />
    </div>
  );
}

function Frame243() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame496() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame243 />
      <Frame496 />
    </div>
  );
}

function Frame609() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame63 />
      <Frame160 />
      <Frame161 />
    </div>
  );
}

function Odds22() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame493 />
      <Frame609 />
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds21 />
      <Odds22 />
    </div>
  );
}

function Frame607() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame471 />
      <Frame87 />
    </div>
  );
}

function Frame470() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame607 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame487() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame415 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame423 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame431 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame439 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame470 />
      </div>
    </div>
  );
}

function Frame611() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[11.733px]">La Liga</p>
      <p className="relative shrink-0 text-[#757575] text-[8.8px]">Spain</p>
    </div>
  );
}

function Frame610() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[3.667px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[22px]" data-name="image 214">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage214} />
      </div>
      <Frame611 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-4.87%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4598 16.4598">
          <g id="Group">
            <path d={svgPaths.p228f1100} id="Vector" stroke="var(--stroke-0, #767676)" strokeLinejoin="round" strokeWidth="1.45984" />
            <path d={svgPaths.p3c654780} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.45984" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="icon-park-outline:right-c">
      <Group6 />
    </div>
  );
}

function Frame497() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
          <Frame610 />
          <IconParkOutlineRightC2 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame501() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame25 />
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame501 />
    </div>
  );
}

function Frame502() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs12() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame502 />
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs12 />
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame319 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame503() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame26 />
    </div>
  );
}

function Frame320() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame503 />
    </div>
  );
}

function Frame500() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame317 />
      <Frame318 />
      <Frame320 />
    </div>
  );
}

function Frame504() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame505() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame162 />
      <Frame505 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame506() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame244 />
      <Frame506 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame507() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame245 />
      <Frame507 />
    </div>
  );
}

function Frame613() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame64 />
      <Frame163 />
      <Frame164 />
    </div>
  );
}

function Odds23() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame504 />
      <Frame613 />
    </div>
  );
}

function Frame508() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame509() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame165 />
      <Frame509 />
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame510() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame246 />
      <Frame510 />
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame511() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame247 />
      <Frame511 />
    </div>
  );
}

function Frame614() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame65 />
      <Frame166 />
      <Frame167 />
    </div>
  );
}

function Odds24() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame508 />
      <Frame614 />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds23 />
      <Odds24 />
    </div>
  );
}

function Frame612() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame500 />
      <Frame88 />
    </div>
  );
}

function Frame499() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame612 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame514() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame27 />
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame514 />
    </div>
  );
}

function Frame515() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs13() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame515 />
    </div>
  );
}

function Frame323() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs13 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame323 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame516() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame28 />
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame516 />
    </div>
  );
}

function Frame513() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame321 />
      <Frame322 />
      <Frame324 />
    </div>
  );
}

function Frame517() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame518() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame168 />
      <Frame518 />
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame523() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame248 />
      <Frame523 />
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame524() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame249 />
      <Frame524 />
    </div>
  );
}

function Frame616() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame66 />
      <Frame169 />
      <Frame170 />
    </div>
  );
}

function Odds25() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame517 />
      <Frame616 />
    </div>
  );
}

function Frame525() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame526() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame171 />
      <Frame526 />
    </div>
  );
}

function Frame250() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame527() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame250 />
      <Frame527 />
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame528() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame251 />
      <Frame528 />
    </div>
  );
}

function Frame617() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame67 />
      <Frame172 />
      <Frame173 />
    </div>
  );
}

function Odds26() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame525 />
      <Frame617 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds25 />
      <Odds26 />
    </div>
  );
}

function Frame615() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame513 />
      <Frame89 />
    </div>
  );
}

function Frame512() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame615 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame531() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame29 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame531 />
    </div>
  );
}

function Frame532() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs14() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame532 />
    </div>
  );
}

function Frame327() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs14 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame327 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame533() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame30 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame533 />
    </div>
  );
}

function Frame530() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame325 />
      <Frame326 />
      <Frame328 />
    </div>
  );
}

function Frame534() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame535() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame174 />
      <Frame535 />
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame536() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame252 />
      <Frame536 />
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame537() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame253 />
      <Frame537 />
    </div>
  );
}

function Frame619() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame68 />
      <Frame175 />
      <Frame176 />
    </div>
  );
}

function Odds27() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame534 />
      <Frame619 />
    </div>
  );
}

function Frame538() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame539() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame177 />
      <Frame539 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame540() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame254 />
      <Frame540 />
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame541() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame255 />
      <Frame541 />
    </div>
  );
}

function Frame620() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame69 />
      <Frame178 />
      <Frame179 />
    </div>
  );
}

function Odds28() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame538 />
      <Frame620 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds27 />
      <Odds28 />
    </div>
  );
}

function Frame618() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame530 />
      <Frame90 />
    </div>
  );
}

function Frame529() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame618 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame544() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame31 />
    </div>
  );
}

function Frame329() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame544 />
    </div>
  );
}

function Frame545() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs15() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame545 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs15 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame331 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame546() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame32 />
    </div>
  );
}

function Frame332() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame546 />
    </div>
  );
}

function Frame543() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame329 />
      <Frame330 />
      <Frame332 />
    </div>
  );
}

function Frame547() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame548() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame180 />
      <Frame548 />
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame549() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame256 />
      <Frame549 />
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame550() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame257 />
      <Frame550 />
    </div>
  );
}

function Frame622() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame70 />
      <Frame181 />
      <Frame182 />
    </div>
  );
}

function Odds29() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame547 />
      <Frame622 />
    </div>
  );
}

function Frame551() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame552() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame183 />
      <Frame552 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame553() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame258 />
      <Frame553 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame554() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame259 />
      <Frame554 />
    </div>
  );
}

function Frame623() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame71 />
      <Frame184 />
      <Frame185 />
    </div>
  );
}

function Odds30() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame551 />
      <Frame623 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds29 />
      <Odds30 />
    </div>
  );
}

function Frame621() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame543 />
      <Frame91 />
    </div>
  );
}

function Frame542() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame621 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame557() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame33 />
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame557 />
    </div>
  );
}

function Frame558() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs16() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame558 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs16 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame335 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
      <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />
    </div>
  );
}

function Frame559() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame34 />
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame559 />
    </div>
  );
}

function Frame556() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame333 />
      <Frame334 />
      <Frame336 />
    </div>
  );
}

function Frame560() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame561() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame186 />
      <Frame561 />
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame562() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame260 />
      <Frame562 />
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame563() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame261 />
      <Frame563 />
    </div>
  );
}

function Frame625() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame72 />
      <Frame187 />
      <Frame188 />
    </div>
  );
}

function Odds31() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame560 />
      <Frame625 />
    </div>
  );
}

function Frame564() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame565() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame189 />
      <Frame565 />
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame566() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame262 />
      <Frame566 />
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame567() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame263 />
      <Frame567 />
    </div>
  );
}

function Frame626() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame73 />
      <Frame190 />
      <Frame191 />
    </div>
  );
}

function Odds32() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame564 />
      <Frame626 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds31 />
      <Odds32 />
    </div>
  );
}

function Frame624() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame556 />
      <Frame92 />
    </div>
  );
}

function Frame555() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame624 />
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame498() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame499 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame512 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame529 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame542 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame555 />
      </div>
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[5px] relative rounded-[20px] shrink-0 w-[398px]" data-name="listItemNewmobile">
        <Frame358 />
        <Frame486 />
      </div>
      <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[5px] relative rounded-[20px] shrink-0 w-[398px]" data-name="listItemNewmobile">
        <Frame360 />
        <Frame487 />
      </div>
      <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[5px] relative rounded-[20px] shrink-0 w-[398px]" data-name="listItemNewmobile">
        <Frame497 />
        <Frame498 />
      </div>
    </div>
  );
}

function Frame577() {
  return (
    <div className="backdrop-blur-[2px] bg-white relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[5px] relative w-full">
        <ListItem1 />
        <Frame276 />
      </div>
    </div>
  );
}

function Frame568() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[25px] relative shrink-0 text-[#1e1e1e] text-[20px]">Quick Tip</p>
      <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#303030] text-[0px] text-[14px] w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "\'YTLC\' 500, \'wdth\' 100" }}>
        <p className="font-['Space_Grotesk:Regular',sans-serif] mb-[12px]">{`The main types of bets are 1, X 2. In this context 1 stands for the Home team X denotes a draw and 2 represents the team. Additionally, 1X indicates a bet on either the Home team or a draw outcome; while X2 is for betting on either the Away team or a draw result. For example if someone mentions "1 @ 2.15 " it means they are wagering on the home team with odds of 2.15. Therefore if you bet $10 your potential payout would be $21.50 with a profit of $11.50. `}</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] mb-[12px]">{`Our aim is to provide reliable information. However it's important to note that with top-notch advice, at your disposal not everyone possesses what it takes to excel as a punter. `}</p>
        <p className="mb-[12px]">&nbsp;</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold">Best of luck!</p>
      </div>
    </div>
  );
}

function Ques() {
  return (
    <div className="content-stretch flex gap-[40px] items-start relative shrink-0 w-full" data-name="QUES">
      <Frame568 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_0px_11.7px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="FAQ">
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Ques />
      </div>
    </div>
  );
}

function Frame355() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
        <Frame576 />
        <Frame577 />
        <Faq />
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full">
      <Frame355 />
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[48.604px] relative shrink-0 w-[56.454px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.4541 48.6042">
        <g id="Group">
          <path d={svgPaths.pa887500} fill="var(--fill-0, #389C52)" id="Vector" />
          <path d={svgPaths.p21de4c00} fill="var(--fill-0, #389C52)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p3046ce00} fill="var(--fill-0, #389C52)" id="Vector_3" />
            <path d={svgPaths.p269234f2} fill="var(--fill-0, #D2AD30)" id="Vector_4" />
            <path d={svgPaths.p35a7e600} fill="var(--fill-0, #D2AD30)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <p className="font-['voltus_(_free_Version_):Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[25.996px] text-white">TodaysBanker</p>
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
        <Group7 />
        <Frame1 />
      </div>
    </div>
  );
}

function MasterLink() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] text-center">Home</p>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink />
    </div>
  );
}

function MasterLink1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] text-center">Terms of Use</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink1 />
    </div>
  );
}

function MasterLink2() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] text-center">Privacy</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink2 />
    </div>
  );
}

function MasterLink3() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] text-center">FAQ</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink3 />
    </div>
  );
}

function MasterLink4() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] text-center">Contact Us</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink4 />
    </div>
  );
}

function MasterLink5() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] text-center">Blog</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink5 />
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="content-center flex flex-wrap gap-[10px_8px] items-center justify-center relative shrink-0 w-full" data-name="Footer Links">
      <Link />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link1 />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link2 />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link3 />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link4 />
      <div className="h-[20px] relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
            <path d="M0.5 0V20" id="Vector 17" stroke="var(--stroke-0, #D9D9D9)" />
          </svg>
        </div>
      </div>
      <Link5 />
    </div>
  );
}

function Fa6BrandsSquareXTwitter() {
  return (
    <div className="h-[27.084px] relative shrink-0 w-[23.699px]" data-name="fa6-brands:square-x-twitter">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6987 27.0843">
        <g clipPath="url(#clip0_158_5155)" id="fa6-brands:square-x-twitter">
          <path d={svgPaths.p1a4f5200} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_158_5155">
            <rect fill="white" height="27.0843" width="23.6987" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <Fa6BrandsSquareXTwitter />
    </div>
  );
}

function SimpleIconsTelegram() {
  return (
    <div className="relative shrink-0 size-[27.084px]" data-name="simple-icons:telegram">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0843 27.0843">
        <g clipPath="url(#clip0_158_5095)" id="simple-icons:telegram">
          <path d={svgPaths.p12d02c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_158_5095">
            <rect fill="white" height="27.0843" width="27.0843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <SimpleIconsTelegram />
    </div>
  );
}

function SimpleIconsFacebook() {
  return (
    <div className="relative shrink-0 size-[27.084px]" data-name="simple-icons:facebook">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0843 27.0843">
        <g clipPath="url(#clip0_158_5251)" id="simple-icons:facebook">
          <path d={svgPaths.p1d4de000} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_158_5251">
            <rect fill="white" height="27.0843" width="27.0843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <SimpleIconsFacebook />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[20.066px] items-center justify-center relative shrink-0" data-name="Social Media Container">
      <Frame194 />
      <Frame195 />
      <Frame196 />
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center pt-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(235,245,238,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e6ecef] text-[13px]" style={{ fontVariationSettings: "\'opsz\' 14" }}>
        Copyright © 2025 Todaysbanker All Rights Reserved.
      </p>
      <SocialMediaContainer />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative rounded-[15px] shrink-0 w-full">
      <Frame197 />
      <FooterLinks />
      <Frame193 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="backdrop-blur-[7.45px] bg-[#0b0c21] relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[10px] py-[29px] relative w-full">
          <Frame192 />
        </div>
      </div>
    </div>
  );
}

export default function IPhone14Plus() {
  return (
    <div className="content-stretch flex flex-col items-center pb-px relative size-full" data-name="iPhone 14 Plus - 9">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#171a46] inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-10 size-full" src={imgIPhone14Plus9} />
      </div>
      <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[428px]" data-name="headermobile">
        <div className="content-stretch flex h-[52px] items-end justify-between leading-[0] px-[24px] py-[10px] relative shrink-0 w-[412px]" data-name="Building Blocks/status-bar">
          <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: "\'wdth\' 100", fontFeatureSettings: "\'ss02\', \'dlig\', \'lnum\', \'pnum\'" }}>
            <p className="leading-[20px]">9:30</p>
          </div>
          <RightIcons />
        </div>
        <MenuHeader />
        <MenuHeader1 />
      </div>
      <Frame76 />
      <div className="content-stretch flex flex-col gap-[18px] items-center mb-[-1px] overflow-clip px-[15px] py-[25px] relative shrink-0 w-[428px]" data-name="Footer v1">
        <Frame74 />
      </div>
    </div>
  );
}