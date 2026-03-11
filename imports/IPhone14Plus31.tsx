import svgPaths from "./svg-8fm8yqir9k";
import imgIPhone14Plus31 from "@/assets/070bda708d1c0e0967303e9923d436b89001c09b.png";
import imgImage215 from "@/assets/3a2d13044dc4ec547c7b9bea156f29381bfc2a98.png";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";

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

function Frame25() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[5px] items-center justify-center p-[10px] relative rounded-[7px] shrink-0">
      <LogosTelegram />
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <Frame25 />
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
      <Frame347 />
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

function Frame22() {
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

function Frame216() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <BiFire />
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[21.64px] relative shrink-0 text-[#f3f3f3] text-[12px]">Bef of The Day</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[10px] items-center justify-center px-[9px] py-[10px] relative rounded-[7px] shrink-0">
      <Frame216 />
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

function Frame23() {
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

function Frame26() {
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
          <Frame22 />
          <Frame24 />
          <Frame23 />
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function IonArrowBackCircleOutline() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ion:arrow-back-circle-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ion:arrow-back-circle-outline">
          <path d={svgPaths.p1acb28c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p237b9d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame399() {
  return (
    <button className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0">
      <IonArrowBackCircleOutline />
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[14px] text-left text-white">Back</p>
    </button>
  );
}

function MdiMenuRight() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:menu-right">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:menu-right">
          <path d="M10 17L15 12L10 7V17Z" fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[14px] text-white">Europe</p>
      <MdiMenuRight />
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[14px] text-white">Leagues</p>
    </div>
  );
}

function IonArrowBackCircleOutline1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ion:arrow-back-circle-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ion:arrow-back-circle-outline">
          <path d={svgPaths.p1acb28c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p237b9d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Frame400() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-0 relative shrink-0">
      <IonArrowBackCircleOutline1 />
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[14px] text-white">Back</p>
    </div>
  );
}

function TextField() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[10px] relative shrink-0 w-full" data-name="Text field 3">
      <Frame399 />
      <Frame398 />
      <Frame400 />
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[normal] relative shrink-0 text-[#1e1e1e] w-full">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[18.888px]">Serie A</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[11.4px]">Italy</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame124 />
    </div>
  );
}

function IconParkSolidDownOne() {
  return (
    <div className="relative shrink-0 size-[10.26px]" data-name="icon-park-solid:down-one">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.26 10.26">
        <g clipPath="url(#clip0_158_5188)" id="icon-park-solid:down-one">
          <path d={svgPaths.p37781b10} fill="var(--fill-0, black)" id="Vector" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.14" />
        </g>
        <defs>
          <clipPath id="clip0_158_5188">
            <rect fill="white" height="10.26" width="10.26" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame402() {
  return (
    <div className="bg-white content-stretch flex items-center justify-between p-[5.7px] relative rounded-[5.7px] shadow-[0px_0.57px_3.762px_0px_rgba(0,0,0,0.15)] shrink-0 w-[137.37px]">
      <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#303030] text-[11.4px]">Serie A (2025/26)</p>
      <IconParkSolidDownOne />
    </div>
  );
}

function Frame401() {
  return (
    <div className="content-stretch flex gap-[5.7px] items-start relative shrink-0 w-[490.77px]">
      <Frame170 />
      <Frame402 />
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex gap-[8.55px] items-center py-[5.7px] relative shrink-0 w-full">
      <div className="relative shrink-0 size-[45.6px]" data-name="image 215">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage215} />
      </div>
      <Frame401 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
      <Frame125 />
    </div>
  );
}

function Frame363() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[1.75px] relative shrink-0 w-full">
      <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[15.031px] text-center">70%</p>
    </div>
  );
}

function Frame362() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.17px)] p-[5.234px] top-[calc(50%+0.17px)]">
      <Frame363 />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute left-0 size-[79px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79 79">
        <g id="Group 469271">
          <path d={svgPaths.p297c9740} fill="var(--fill-0, #14AE5C)" id="Ellipse 144" />
          <path d={svgPaths.p36709500} fill="var(--fill-0, #14AE5C)" id="Ellipse 145" />
        </g>
      </svg>
    </div>
  );
}

function Frame364() {
  return (
    <div className="relative shrink-0 size-[79px]">
      <Frame362 />
      <Group4 />
    </div>
  );
}

function Frame370() {
  return (
    <div className="bg-[#009951] content-stretch flex flex-col items-center justify-center py-[5px] relative rounded-[5px] shrink-0 w-full">
      <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.845px] relative shrink-0 text-[10px] text-center text-white">Home team wins</p>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex flex-col gap-[1.58px] items-start justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">In 38.28% of the game played at home.</p>
      </div>
    </div>
  );
}

function Frame403() {
  return (
    <div className="content-stretch flex flex-col gap-[4.625px] items-center justify-center relative shrink-0 w-[119.8px]">
      <Frame364 />
      <Frame370 />
      <Frame126 />
    </div>
  );
}

function Frame366() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[1.75px] relative shrink-0 w-full">
      <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[15.031px] text-center">70%</p>
    </div>
  );
}

function Frame365() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.17px)] p-[5.234px] top-[calc(50%+0.17px)]">
      <Frame366 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute left-0 size-[79px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.0002 79.0001">
        <g id="Group 469271">
          <path d={svgPaths.p20315100} fill="var(--fill-0, #5A5A5A)" id="Ellipse 144" />
          <path d={svgPaths.p25e00a70} fill="var(--fill-0, #5A5A5A)" id="Ellipse 145" />
        </g>
      </svg>
    </div>
  );
}

function Frame367() {
  return (
    <div className="relative shrink-0 size-[79px]">
      <Frame365 />
      <Group5 />
    </div>
  );
}

function Frame371() {
  return (
    <div className="bg-[#5a5a5a] content-stretch flex flex-col items-center justify-center py-[5px] relative rounded-[5px] shrink-0 w-full">
      <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.845px] relative shrink-0 text-[#f3f3f3] text-[10px] text-center">Number of draws</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex flex-col gap-[1.58px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">In 38.28% of the game played away.</p>
      </div>
    </div>
  );
}

function Frame404() {
  return (
    <div className="content-stretch flex flex-col gap-[4.625px] items-center justify-center relative shrink-0 w-[119.8px]">
      <Frame367 />
      <Frame371 />
      <Frame127 />
    </div>
  );
}

function Frame372() {
  return (
    <div className="content-stretch flex items-center justify-center pb-[1.75px] relative shrink-0 w-full">
      <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[15.031px] text-center">30%</p>
    </div>
  );
}

function Frame369() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-[calc(50%-0.17px)] p-[5.234px] top-[calc(50%+0.17px)]">
      <Frame372 />
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute left-0 size-[79px] top-0">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 79.0002 79.0001">
        <g id="Group 469271">
          <path d={svgPaths.p20315100} fill="var(--fill-0, #0088FF)" id="Ellipse 144" />
          <path d={svgPaths.p250a2000} fill="var(--fill-0, #0088FF)" id="Ellipse 145" />
        </g>
      </svg>
    </div>
  );
}

function Frame368() {
  return (
    <div className="relative shrink-0 size-[79px]">
      <Frame369 />
      <Group6 />
    </div>
  );
}

function Frame374() {
  return (
    <div className="bg-[#08f] content-stretch flex flex-col items-center justify-center py-[5px] relative rounded-[5px] shrink-0 w-full">
      <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.845px] relative shrink-0 text-[10px] text-center text-white">Away team wins</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex flex-col gap-[1.58px] items-end justify-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[10px] text-center w-[min-content]">
        <p className="leading-[normal] whitespace-pre-wrap">Liga 2023/2024. 20.31% of games finish as draw</p>
      </div>
    </div>
  );
}

function Frame405() {
  return (
    <div className="content-stretch flex flex-col gap-[4.625px] items-center justify-center relative shrink-0 w-[119.8px]">
      <Frame368 />
      <Frame374 />
      <Frame128 />
    </div>
  );
}

function Frame373() {
  return (
    <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.42)] relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-2 border-[#1e225d] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
          <Frame403 />
          <Frame404 />
          <Frame405 />
        </div>
      </div>
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-gradient-to-b from-white relative rounded-[20px] shrink-0 to-[#abacb5] w-full" data-name="listItem">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <div className="-translate-y-1/2 absolute h-[429.771px] right-[-183.24px] top-[calc(50%-3.24px)] w-[430.243px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 430.243 429.771">
              <path d={svgPaths.p2ae6c500} fill="var(--fill-0, #1E225D)" id="Vector" opacity="0.04" />
            </svg>
          </div>
          <ListFTmatches />
          <Frame373 />
        </div>
      </div>
    </div>
  );
}

function Frame233() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[5px] relative w-full">
          <div className="capitalize flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#1e1e1e] text-[0px] whitespace-pre-wrap">
            <p className="mb-0 text-[17px]">{`Upcoming Predictions  `}</p>
            <p className="text-[#5a5a5a] text-[13px]">(Last 21 games)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
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

function Frame212() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame2 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame212 />
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame338 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs />
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame171 />
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

function Frame213() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame3 />
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame213 />
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame173 />
      <Frame172 />
      <Frame174 />
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame59 />
      <Frame237 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame130 />
      <Frame238 />
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame131 />
      <Frame239 />
    </div>
  );
}

function Frame355() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame27 />
      <Frame68 />
      <Frame69 />
    </div>
  );
}

function Odds() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame316 />
      <Frame355 />
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame240() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame60 />
      <Frame240 />
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame132 />
      <Frame241 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame133 />
      <Frame242 />
    </div>
  );
}

function Frame357() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame28 />
      <Frame70 />
      <Frame71 />
    </div>
  );
}

function Odds1() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame317 />
      <Frame357 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds />
      <Odds1 />
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame265 />
      <Frame49 />
    </div>
  );
}

function Frame236() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame356 />
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

function Frame214() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame4 />
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame214 />
    </div>
  );
}

function Frame339() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs1() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame339 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs1 />
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame178 />
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

function Frame215() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame5 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame215 />
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame176 />
      <Frame177 />
      <Frame179 />
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame61 />
      <Frame244 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame134 />
      <Frame245 />
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame135 />
      <Frame246 />
    </div>
  );
}

function Frame359() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame29 />
      <Frame72 />
      <Frame73 />
    </div>
  );
}

function Odds2() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame318 />
      <Frame359 />
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame62 />
      <Frame247 />
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame136 />
      <Frame248 />
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame137 />
      <Frame249 />
    </div>
  );
}

function Frame360() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame30 />
      <Frame74 />
      <Frame75 />
    </div>
  );
}

function Odds3() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame319 />
      <Frame360 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds2 />
      <Odds3 />
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame266 />
      <Frame50 />
    </div>
  );
}

function Frame243() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame358 />
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

function Frame217() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame6 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame217 />
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs2() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame340 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs2 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame182 />
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

function Frame218() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame7 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame218 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame180 />
      <Frame181 />
      <Frame183 />
    </div>
  );
}

function Frame320() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame63 />
      <Frame251 />
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame138 />
      <Frame252 />
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame139 />
      <Frame253 />
    </div>
  );
}

function Frame375() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame31 />
      <Frame76 />
      <Frame77 />
    </div>
  );
}

function Odds4() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame320 />
      <Frame375 />
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame64 />
      <Frame254 />
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame140 />
      <Frame255 />
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame141 />
      <Frame256 />
    </div>
  );
}

function Frame376() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame32 />
      <Frame78 />
      <Frame79 />
    </div>
  );
}

function Odds5() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame321 />
      <Frame376 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds4 />
      <Odds5 />
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame267 />
      <Frame51 />
    </div>
  );
}

function Frame250() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame361 />
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

function Frame219() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame8 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame219 />
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs3() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame341 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs3 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame186 />
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

function Frame220() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame9 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame220 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame184 />
      <Frame185 />
      <Frame187 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame65 />
      <Frame258 />
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame142 />
      <Frame259 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame143 />
      <Frame260 />
    </div>
  );
}

function Frame378() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame33 />
      <Frame80 />
      <Frame81 />
    </div>
  );
}

function Odds6() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame322 />
      <Frame378 />
    </div>
  );
}

function Frame323() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame66 />
      <Frame261 />
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame144 />
      <Frame262 />
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame145 />
      <Frame263 />
    </div>
  );
}

function Frame379() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame34 />
      <Frame82 />
      <Frame83 />
    </div>
  );
}

function Odds7() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame323 />
      <Frame379 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds6 />
      <Odds7 />
    </div>
  );
}

function Frame377() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame268 />
      <Frame52 />
    </div>
  );
}

function Frame257() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame377 />
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

function Frame221() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame10 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame221 />
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs4() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame342 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs4 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame190 />
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

function Frame222() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame11 />
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame222 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame188 />
      <Frame189 />
      <Frame191 />
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame67 />
      <Frame270 />
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame146 />
      <Frame271 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame147 />
      <Frame272 />
    </div>
  );
}

function Frame381() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame35 />
      <Frame84 />
      <Frame85 />
    </div>
  );
}

function Odds8() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame324 />
      <Frame381 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame86 />
      <Frame273 />
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame148 />
      <Frame274 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame149 />
      <Frame275 />
    </div>
  );
}

function Frame382() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame36 />
      <Frame87 />
      <Frame88 />
    </div>
  );
}

function Odds9() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame325 />
      <Frame382 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds8 />
      <Odds9 />
    </div>
  );
}

function Frame380() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame269 />
      <Frame53 />
    </div>
  );
}

function Frame264() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame380 />
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

function Frame352() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame236 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame243 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame250 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame257 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame264 />
      </div>
    </div>
  );
}

function ListItemNew() {
  return (
    <div className="bg-[#e9e9ef] relative rounded-[20px] shrink-0 w-full" data-name="listItemNew">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start p-[5px] relative w-full">
          <Frame233 />
          <Frame352 />
        </div>
      </div>
    </div>
  );
}

function Frame234() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[10px] py-[5px] relative w-full">
          <div className="capitalize flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#1e1e1e] text-[0px] whitespace-pre-wrap">
            <p className="mb-0 text-[17px]">Past Predictions</p>
            <p className="text-[#5a5a5a] text-[13px]">(Last 21 games)</p>
          </div>
        </div>
      </div>
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

function Frame223() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame12 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame223 />
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">14/02/25</p>
      </div>
    </div>
  );
}

function Frame343() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">3 - 5</p>
    </div>
  );
}

function Vs5() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0 w-full" data-name="vs">
      <Frame343 />
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Vs5 />
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame337 />
      <Frame194 />
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

function Frame224() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame13 />
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame224 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame192 />
      <Frame193 />
      <Frame195 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame278() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.04</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame89 />
      <Frame278 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">3.14</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame150 />
      <Frame279 />
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.00</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame151 />
      <Frame280 />
    </div>
  );
}

function Frame384() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame37 />
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Odds10() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame326 />
      <Frame384 />
    </div>
  );
}

function Frame327() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">1X</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.667px] relative shrink-0">
      <Frame92 />
      <Frame281 />
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">U</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame152 />
      <Frame282 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame283() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">2 - 1</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame153 />
      <Frame283 />
    </div>
  );
}

function Frame385() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame38 />
      <Frame93 />
      <Frame94 />
    </div>
  );
}

function Odds11() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame327 />
      <Frame385 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[5.667px] h-[22.669px] items-center overflow-clip relative shrink-0">
      <Odds10 />
      <Odds11 />
    </div>
  );
}

function Frame383() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame277 />
      <Frame54 />
    </div>
  );
}

function Frame276() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame383 />
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

function Frame225() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame14 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame225 />
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">14/02/25</p>
      </div>
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">3 - 5</p>
    </div>
  );
}

function Vs6() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0 w-full" data-name="vs">
      <Frame345 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Vs6 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame344 />
      <Frame198 />
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

function Frame226() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame15 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame226 />
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame196 />
      <Frame197 />
      <Frame199 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame286() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.04</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame95 />
      <Frame286 />
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">3.14</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame154 />
      <Frame287 />
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.00</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame155 />
      <Frame288 />
    </div>
  );
}

function Frame387() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame39 />
      <Frame96 />
      <Frame97 />
    </div>
  );
}

function Odds12() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame328 />
      <Frame387 />
    </div>
  );
}

function Frame329() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">1X</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.667px] relative shrink-0">
      <Frame98 />
      <Frame289 />
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">U</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame156 />
      <Frame290 />
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">2 - 1</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame157 />
      <Frame291 />
    </div>
  );
}

function Frame388() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame40 />
      <Frame99 />
      <Frame100 />
    </div>
  );
}

function Odds13() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame329 />
      <Frame388 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[5.667px] h-[22.669px] items-center overflow-clip relative shrink-0">
      <Odds12 />
      <Odds13 />
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame285 />
      <Frame55 />
    </div>
  );
}

function Frame284() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame386 />
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

function Frame227() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame16 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame227 />
    </div>
  );
}

function Frame346() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">14/02/25</p>
      </div>
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">3 - 5</p>
    </div>
  );
}

function Vs7() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0 w-full" data-name="vs">
      <Frame348 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Vs7 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame346 />
      <Frame202 />
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

function Frame228() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame17 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame228 />
    </div>
  );
}

function Frame293() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame200 />
      <Frame201 />
      <Frame203 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.04</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame101 />
      <Frame294 />
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">3.14</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame158 />
      <Frame295 />
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame296() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.00</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame159 />
      <Frame296 />
    </div>
  );
}

function Frame390() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame41 />
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Odds14() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame330 />
      <Frame390 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame297() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">1X</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.667px] relative shrink-0">
      <Frame104 />
      <Frame297 />
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame298() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">U</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame160 />
      <Frame298 />
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame299() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">2 - 1</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame161 />
      <Frame299 />
    </div>
  );
}

function Frame391() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame42 />
      <Frame105 />
      <Frame106 />
    </div>
  );
}

function Odds15() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame331 />
      <Frame391 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[5.667px] h-[22.669px] items-center overflow-clip relative shrink-0">
      <Odds14 />
      <Odds15 />
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame293 />
      <Frame56 />
    </div>
  );
}

function Frame292() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame389 />
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

function Frame229() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame18 />
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame229 />
    </div>
  );
}

function Frame349() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">14/02/25</p>
      </div>
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">3 - 5</p>
    </div>
  );
}

function Vs8() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0 w-full" data-name="vs">
      <Frame350 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Vs8 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame349 />
      <Frame206 />
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

function Frame231() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame19 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame231 />
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame204 />
      <Frame205 />
      <Frame207 />
    </div>
  );
}

function Frame332() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.04</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame107 />
      <Frame302 />
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">3.14</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame162 />
      <Frame303 />
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.00</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame163 />
      <Frame304 />
    </div>
  );
}

function Frame393() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame43 />
      <Frame108 />
      <Frame109 />
    </div>
  );
}

function Odds16() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame332 />
      <Frame393 />
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">1X</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.667px] relative shrink-0">
      <Frame110 />
      <Frame305 />
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame306() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">U</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame164 />
      <Frame306 />
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">2 - 1</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame165 />
      <Frame308 />
    </div>
  );
}

function Frame394() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame44 />
      <Frame111 />
      <Frame112 />
    </div>
  );
}

function Odds17() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame333 />
      <Frame394 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[5.667px] h-[22.669px] items-center overflow-clip relative shrink-0">
      <Odds16 />
      <Odds17 />
    </div>
  );
}

function Frame392() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame301 />
      <Frame57 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame392 />
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

function Frame232() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame20 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame232 />
    </div>
  );
}

function Frame351() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#757575] text-[11px] text-center tracking-[0.2px] whitespace-nowrap">
        <p className="leading-[normal]">14/02/25</p>
      </div>
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">3 - 5</p>
    </div>
  );
}

function Vs9() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0 w-full" data-name="vs">
      <Frame354 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-full">
      <Vs9 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Frame351 />
      <Frame210 />
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

function Frame235() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame21 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame235 />
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame208 />
      <Frame209 />
      <Frame211 />
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.04</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame113 />
      <Frame311 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">3.14</p>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame166 />
      <Frame312 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame313() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.201px] relative shrink-0 text-[#1e1e1e] text-[7.934px] text-center tracking-[0.1133px]">2.00</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame167 />
      <Frame313 />
    </div>
  );
}

function Frame396() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame45 />
      <Frame114 />
      <Frame115 />
    </div>
  );
}

function Odds18() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame334 />
      <Frame396 />
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.667px] relative rounded-[2.834px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[7.934px] text-center tracking-[0.0159px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame314() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">1X</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.667px] relative shrink-0">
      <Frame116 />
      <Frame314 />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">U</p>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame168 />
      <Frame315 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.501px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3.967px] py-[3.148px] relative rounded-[2.834px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.201px] relative shrink-0 text-[#1e225d] text-[7.934px] text-center tracking-[0.1133px]">2 - 1</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.834px] relative shrink-0">
      <Frame169 />
      <Frame336 />
    </div>
  );
}

function Frame397() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.534px] shrink-0">
      <Frame46 />
      <Frame117 />
      <Frame118 />
    </div>
  );
}

function Odds19() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.7px] relative rounded-[5.667px] shrink-0" data-name="Odds">
      <Frame335 />
      <Frame397 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[5.667px] h-[22.669px] items-center overflow-clip relative shrink-0">
      <Odds18 />
      <Odds19 />
    </div>
  );
}

function Frame395() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame310 />
      <Frame58 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
            <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
            </div>
          </div>
          <Frame395 />
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

function Frame353() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame276 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame284 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame292 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame300 />
      </div>
      <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
        <Frame309 />
      </div>
    </div>
  );
}

function ListItemNew1() {
  return (
    <div className="bg-[#e9e9ef] relative rounded-[20px] shrink-0 w-full" data-name="listItemNew">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start p-[5px] relative w-full">
          <Frame234 />
          <Frame353 />
        </div>
      </div>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <ListItemNew />
      <ListItemNew1 />
    </div>
  );
}

function Frame307() {
  return (
    <div className="backdrop-blur-[2px] bg-white relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[5px] relative w-full">
        <Frame175 />
      </div>
    </div>
  );
}

function Frame230() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
        <TextField />
        <ListItem />
        <Frame307 />
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full">
      <Frame230 />
    </div>
  );
}

function Group3() {
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

function Frame129() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
        <Group3 />
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

function Frame122() {
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

function Frame121() {
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

function Frame123() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <SimpleIconsFacebook />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[20.066px] items-center justify-center relative shrink-0" data-name="Social Media Container">
      <Frame122 />
      <Frame121 />
      <Frame123 />
    </div>
  );
}

function Frame120() {
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

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative rounded-[15px] shrink-0 w-full">
      <Frame129 />
      <FooterLinks />
      <Frame120 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="backdrop-blur-[7.45px] bg-[#0b0c21] relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[10px] py-[29px] relative w-full">
          <Frame119 />
        </div>
      </div>
    </div>
  );
}

export default function IPhone14Plus() {
  return (
    <div className="content-stretch flex flex-col items-center pb-px relative size-full" data-name="iPhone 14 Plus - 31">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#171a46] inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-10 size-full" src={imgIPhone14Plus31} />
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
      <Frame48 />
      <div className="content-stretch flex flex-col gap-[18px] items-center mb-[-1px] overflow-clip px-[15px] py-[25px] relative shrink-0 w-[428px]" data-name="Footer v1">
        <Frame47 />
      </div>
    </div>
  );
}