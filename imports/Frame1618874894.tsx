import svgPaths from "./svg-lg5v0lsgc4";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";
import imgImage214 from "@/assets/9769675da9b28a88ecd6ab6b199f13e5eadad1df.png";

function NotoFire() {
  return (
    <div className="relative size-[18px]" data-name="noto:fire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="noto:fire">
          <path d={svgPaths.p1016aac0} fill="url(#paint0_radial_1_28446)" id="Vector" />
          <path d={svgPaths.p1ae6b780} fill="url(#paint1_radial_1_28446)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-9.9263 -0.0430801 -0.0707745 16.2871 8.74909 17.4798)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_28446" r="1">
            <stop offset="0.314" stopColor="#FF9800" />
            <stop offset="0.662" stopColor="#FF6D00" />
            <stop offset="0.972" stopColor="#F44336" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.104904 10.3855 7.81589 0.0789379 9.30656 7.60196)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_28446" r="1">
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

function Frame64() {
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

function PremierLeagues() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus1() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus2() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus3() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus4() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus />
      <TeamMatchStatus1 />
      <TeamMatchStatus2 />
      <TeamMatchStatus3 />
      <TeamMatchStatus4 />
    </div>
  );
}

function Frame306() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame />
    </div>
  );
}

function Frame243() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame306 />
    </div>
  );
}

function Frame441() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame441 />
    </div>
  );
}

function Frame241() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs />
    </div>
  );
}

function Frame242() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame241 />
    </div>
  );
}

function TeamMatchStatus5() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus6() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus7() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus8() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus9() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus5 />
      <TeamMatchStatus6 />
      <TeamMatchStatus7 />
      <TeamMatchStatus8 />
      <TeamMatchStatus9 />
    </div>
  );
}

function Frame307() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame1 />
    </div>
  );
}

function Frame244() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame307 />
    </div>
  );
}

function Frame361() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame243 />
      <Frame242 />
      <Frame244 />
    </div>
  );
}

function Frame412() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame333() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame81 />
      <Frame333 />
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame334() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame177 />
      <Frame334 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame335() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame178 />
      <Frame335 />
    </div>
  );
}

function Frame523() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame32 />
      <Frame90 />
      <Frame91 />
    </div>
  );
}

function Odds() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame412 />
      <Frame523 />
    </div>
  );
}

function Frame413() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame336() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame82 />
      <Frame336 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame337() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame179 />
      <Frame337 />
    </div>
  );
}

function Frame180() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame338() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame180 />
      <Frame338 />
    </div>
  );
}

function Frame525() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame33 />
      <Frame92 />
      <Frame93 />
    </div>
  );
}

function Odds1() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame413 />
      <Frame525 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds />
      <Odds1 />
    </div>
  );
}

function Frame524() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame361 />
      <Frame65 />
    </div>
  );
}

function PremierLeagues1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame332() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues />
          <Frame524 />
          <PremierLeagues1 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame332 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
      <Frame64 />
      <ListItemNew />
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-[#1e225d] relative rounded-[20px] shrink-0 w-full" data-name="listItem">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
          <div className="absolute bottom-[-0.06px] h-[238.738px] right-[-0.17px] w-[239px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 238.738">
              <path d={svgPaths.p20e94e80} fill="var(--fill-0, #0068A8)" id="Vector" opacity="0.17" />
            </svg>
          </div>
          <ListFTmatches />
        </div>
      </div>
    </div>
  );
}

function Frame527() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[16px]">La Liga</p>
      <p className="relative shrink-0 text-[#757575] text-[12px]">Spain</p>
    </div>
  );
}

function Frame526() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[30px]" data-name="image 214">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage214} />
      </div>
      <Frame527 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1667 20.1667">
          <g id="Group">
            <path d={svgPaths.p115f580} id="Vector" stroke="var(--stroke-0, #767676)" strokeLinejoin="round" strokeWidth="1.83333" />
            <path d={svgPaths.p27c7ac00} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-park-outline:right-c">
      <Group />
    </div>
  );
}

function Frame327() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
          <Frame526 />
          <IconParkOutlineRightC />
        </div>
      </div>
    </div>
  );
}

function PremierLeagues2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus10() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus11() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus12() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus13() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus14() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus10 />
      <TeamMatchStatus11 />
      <TeamMatchStatus12 />
      <TeamMatchStatus13 />
      <TeamMatchStatus14 />
    </div>
  );
}

function Frame308() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame2 />
    </div>
  );
}

function Frame246() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame308 />
    </div>
  );
}

function Frame442() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs1() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame442 />
    </div>
  );
}

function Frame248() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs1 />
    </div>
  );
}

function Frame247() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame248 />
    </div>
  );
}

function TeamMatchStatus15() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus16() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus17() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus18() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus19() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus15 />
      <TeamMatchStatus16 />
      <TeamMatchStatus17 />
      <TeamMatchStatus18 />
      <TeamMatchStatus19 />
    </div>
  );
}

function Frame309() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame3 />
    </div>
  );
}

function Frame249() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame309 />
    </div>
  );
}

function Frame362() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame246 />
      <Frame247 />
      <Frame249 />
    </div>
  );
}

function Frame414() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame340() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame83 />
      <Frame340 />
    </div>
  );
}

function Frame181() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame341() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame181 />
      <Frame341 />
    </div>
  );
}

function Frame182() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame342() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame182 />
      <Frame342 />
    </div>
  );
}

function Frame529() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame34 />
      <Frame94 />
      <Frame95 />
    </div>
  );
}

function Odds2() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame414 />
      <Frame529 />
    </div>
  );
}

function Frame415() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame343() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame84 />
      <Frame343 />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame344() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame183 />
      <Frame344 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame345() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame184 />
      <Frame345 />
    </div>
  );
}

function Frame530() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame35 />
      <Frame96 />
      <Frame97 />
    </div>
  );
}

function Odds3() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame415 />
      <Frame530 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds2 />
      <Odds3 />
    </div>
  );
}

function Frame528() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame362 />
      <Frame66 />
    </div>
  );
}

function PremierLeagues3() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame339() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues2 />
          <Frame528 />
          <PremierLeagues3 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame339 />
    </div>
  );
}

function PremierLeagues4() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus20() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus21() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus22() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus23() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus24() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus20 />
      <TeamMatchStatus21 />
      <TeamMatchStatus22 />
      <TeamMatchStatus23 />
      <TeamMatchStatus24 />
    </div>
  );
}

function Frame310() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame4 />
    </div>
  );
}

function Frame250() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame310 />
    </div>
  );
}

function Frame443() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs2() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame443 />
    </div>
  );
}

function Frame252() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs2 />
    </div>
  );
}

function Frame251() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame252 />
    </div>
  );
}

function TeamMatchStatus25() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus26() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus27() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus28() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus29() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus25 />
      <TeamMatchStatus26 />
      <TeamMatchStatus27 />
      <TeamMatchStatus28 />
      <TeamMatchStatus29 />
    </div>
  );
}

function Frame311() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame5 />
    </div>
  );
}

function Frame253() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame311 />
    </div>
  );
}

function Frame363() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame250 />
      <Frame251 />
      <Frame253 />
    </div>
  );
}

function Frame416() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame347() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame85 />
      <Frame347 />
    </div>
  );
}

function Frame185() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame348() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame185 />
      <Frame348 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame349() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame186 />
      <Frame349 />
    </div>
  );
}

function Frame533() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame36 />
      <Frame98 />
      <Frame99 />
    </div>
  );
}

function Odds4() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame416 />
      <Frame533 />
    </div>
  );
}

function Frame417() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame350() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame86 />
      <Frame350 />
    </div>
  );
}

function Frame187() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame351() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame187 />
      <Frame351 />
    </div>
  );
}

function Frame188() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame352() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame188 />
      <Frame352 />
    </div>
  );
}

function Frame534() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame37 />
      <Frame100 />
      <Frame101 />
    </div>
  );
}

function Odds5() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame417 />
      <Frame534 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds4 />
      <Odds5 />
    </div>
  );
}

function Frame532() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame363 />
      <Frame67 />
    </div>
  );
}

function PremierLeagues5() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame346() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues4 />
          <Frame532 />
          <PremierLeagues5 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew3() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame346 />
    </div>
  );
}

function PremierLeagues6() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus30() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus31() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus32() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus33() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus34() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus30 />
      <TeamMatchStatus31 />
      <TeamMatchStatus32 />
      <TeamMatchStatus33 />
      <TeamMatchStatus34 />
    </div>
  );
}

function Frame312() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame6 />
    </div>
  );
}

function Frame254() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame312 />
    </div>
  );
}

function Frame444() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs3() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame444 />
    </div>
  );
}

function Frame256() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs3 />
    </div>
  );
}

function Frame255() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame256 />
    </div>
  );
}

function TeamMatchStatus35() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus36() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus37() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus38() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus39() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus35 />
      <TeamMatchStatus36 />
      <TeamMatchStatus37 />
      <TeamMatchStatus38 />
      <TeamMatchStatus39 />
    </div>
  );
}

function Frame313() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame7 />
    </div>
  );
}

function Frame257() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame313 />
    </div>
  );
}

function Frame364() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame254 />
      <Frame255 />
      <Frame257 />
    </div>
  );
}

function Frame418() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame354() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame87 />
      <Frame354 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame355() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame189 />
      <Frame355 />
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame356() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame190 />
      <Frame356 />
    </div>
  );
}

function Frame536() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame38 />
      <Frame102 />
      <Frame103 />
    </div>
  );
}

function Odds6() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame418 />
      <Frame536 />
    </div>
  );
}

function Frame419() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame357() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame88 />
      <Frame357 />
    </div>
  );
}

function Frame191() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame358() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame191 />
      <Frame358 />
    </div>
  );
}

function Frame192() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame359() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame192 />
      <Frame359 />
    </div>
  );
}

function Frame537() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame39 />
      <Frame104 />
      <Frame105 />
    </div>
  );
}

function Odds7() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame419 />
      <Frame537 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds6 />
      <Odds7 />
    </div>
  );
}

function Frame535() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame364 />
      <Frame68 />
    </div>
  );
}

function PremierLeagues7() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame353() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues6 />
          <Frame535 />
          <PremierLeagues7 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew4() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame353 />
    </div>
  );
}

function PremierLeagues8() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus40() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus41() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus42() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus43() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus44() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus40 />
      <TeamMatchStatus41 />
      <TeamMatchStatus42 />
      <TeamMatchStatus43 />
      <TeamMatchStatus44 />
    </div>
  );
}

function Frame314() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame8 />
    </div>
  );
}

function Frame258() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame314 />
    </div>
  );
}

function Frame445() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs4() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame445 />
    </div>
  );
}

function Frame260() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs4 />
    </div>
  );
}

function Frame259() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame260 />
    </div>
  );
}

function TeamMatchStatus45() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus46() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus47() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus48() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus49() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus45 />
      <TeamMatchStatus46 />
      <TeamMatchStatus47 />
      <TeamMatchStatus48 />
      <TeamMatchStatus49 />
    </div>
  );
}

function Frame315() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame9 />
    </div>
  );
}

function Frame261() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame315 />
    </div>
  );
}

function Frame365() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame258 />
      <Frame259 />
      <Frame261 />
    </div>
  );
}

function Frame420() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame366() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame89 />
      <Frame366 />
    </div>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame367() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame193 />
      <Frame367 />
    </div>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame368() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame194 />
      <Frame368 />
    </div>
  );
}

function Frame539() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame40 />
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Odds8() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame420 />
      <Frame539 />
    </div>
  );
}

function Frame421() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame369() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame108 />
      <Frame369 />
    </div>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame370() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame195 />
      <Frame370 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame371() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame196 />
      <Frame371 />
    </div>
  );
}

function Frame540() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame41 />
      <Frame109 />
      <Frame110 />
    </div>
  );
}

function Odds9() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame421 />
      <Frame540 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds8 />
      <Odds9 />
    </div>
  );
}

function Frame538() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame365 />
      <Frame69 />
    </div>
  );
}

function PremierLeagues9() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame360() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues8 />
          <Frame538 />
          <PremierLeagues9 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew5() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame360 />
    </div>
  );
}

function PremierLeagues10() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus50() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus51() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus52() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus53() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus54() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus50 />
      <TeamMatchStatus51 />
      <TeamMatchStatus52 />
      <TeamMatchStatus53 />
      <TeamMatchStatus54 />
    </div>
  );
}

function Frame316() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame10 />
    </div>
  );
}

function Frame262() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame316 />
    </div>
  );
}

function Frame446() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs5() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame446 />
    </div>
  );
}

function Frame264() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs5 />
    </div>
  );
}

function Frame263() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame264 />
    </div>
  );
}

function TeamMatchStatus55() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus56() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus57() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus58() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus59() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus55 />
      <TeamMatchStatus56 />
      <TeamMatchStatus57 />
      <TeamMatchStatus58 />
      <TeamMatchStatus59 />
    </div>
  );
}

function Frame317() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame11 />
    </div>
  );
}

function Frame265() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame317 />
    </div>
  );
}

function Frame373() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame262 />
      <Frame263 />
      <Frame265 />
    </div>
  );
}

function Frame422() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame374() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame111 />
      <Frame374 />
    </div>
  );
}

function Frame197() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame375() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame197 />
      <Frame375 />
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame376() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame198 />
      <Frame376 />
    </div>
  );
}

function Frame542() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame42 />
      <Frame112 />
      <Frame113 />
    </div>
  );
}

function Odds10() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame422 />
      <Frame542 />
    </div>
  );
}

function Frame423() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame114() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame377() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame114 />
      <Frame377 />
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame378() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame115() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame199 />
      <Frame378 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame379() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame116() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame200 />
      <Frame379 />
    </div>
  );
}

function Frame543() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame43 />
      <Frame115 />
      <Frame116 />
    </div>
  );
}

function Odds11() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame423 />
      <Frame543 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds10 />
      <Odds11 />
    </div>
  );
}

function Frame541() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame373 />
      <Frame70 />
    </div>
  );
}

function PremierLeagues11() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame372() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues10 />
          <Frame541 />
          <PremierLeagues11 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew6() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame372 />
    </div>
  );
}

function Frame455() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <ListItemNew2 />
      <ListItemNew3 />
      <ListItemNew4 />
      <ListItemNew5 />
      <ListItemNew6 />
    </div>
  );
}

function ListItemNew1() {
  return (
    <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[956px]" data-name="listItemNew">
      <Frame327 />
      <Frame455 />
    </div>
  );
}

function Frame545() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[16px]">La Liga</p>
      <p className="relative shrink-0 text-[#757575] text-[12px]">Spain</p>
    </div>
  );
}

function Frame544() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[30px]" data-name="image 214">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage214} />
      </div>
      <Frame545 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1667 20.1667">
          <g id="Group">
            <path d={svgPaths.p115f580} id="Vector" stroke="var(--stroke-0, #767676)" strokeLinejoin="round" strokeWidth="1.83333" />
            <path d={svgPaths.p27c7ac00} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-park-outline:right-c">
      <Group1 />
    </div>
  );
}

function Frame328() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
          <Frame544 />
          <IconParkOutlineRightC1 />
        </div>
      </div>
    </div>
  );
}

function PremierLeagues12() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus60() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus61() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus62() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus63() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus64() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus60 />
      <TeamMatchStatus61 />
      <TeamMatchStatus62 />
      <TeamMatchStatus63 />
      <TeamMatchStatus64 />
    </div>
  );
}

function Frame318() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame12 />
    </div>
  );
}

function Frame266() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame318 />
    </div>
  );
}

function Frame447() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs6() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame447 />
    </div>
  );
}

function Frame268() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs6 />
    </div>
  );
}

function Frame267() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame268 />
    </div>
  );
}

function TeamMatchStatus65() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus66() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus67() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus68() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus69() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus65 />
      <TeamMatchStatus66 />
      <TeamMatchStatus67 />
      <TeamMatchStatus68 />
      <TeamMatchStatus69 />
    </div>
  );
}

function Frame319() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame13 />
    </div>
  );
}

function Frame269() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame319 />
    </div>
  );
}

function Frame381() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame266 />
      <Frame267 />
      <Frame269 />
    </div>
  );
}

function Frame424() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame382() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame117 />
      <Frame382 />
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame383() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame201 />
      <Frame383 />
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame384() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame202 />
      <Frame384 />
    </div>
  );
}

function Frame547() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame44 />
      <Frame118 />
      <Frame119 />
    </div>
  );
}

function Odds12() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame424 />
      <Frame547 />
    </div>
  );
}

function Frame425() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame120() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame385() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame120 />
      <Frame385 />
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame386() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame121() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame203 />
      <Frame386 />
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame387() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame204 />
      <Frame387 />
    </div>
  );
}

function Frame548() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame45 />
      <Frame121 />
      <Frame122 />
    </div>
  );
}

function Odds13() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame425 />
      <Frame548 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds12 />
      <Odds13 />
    </div>
  );
}

function Frame546() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame381 />
      <Frame71 />
    </div>
  );
}

function PremierLeagues13() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame380() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues12 />
          <Frame546 />
          <PremierLeagues13 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew8() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame380 />
    </div>
  );
}

function PremierLeagues14() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus70() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus71() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus72() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus73() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus74() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus70 />
      <TeamMatchStatus71 />
      <TeamMatchStatus72 />
      <TeamMatchStatus73 />
      <TeamMatchStatus74 />
    </div>
  );
}

function Frame320() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame14 />
    </div>
  );
}

function Frame270() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame320 />
    </div>
  );
}

function Frame448() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs7() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame448 />
    </div>
  );
}

function Frame272() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs7 />
    </div>
  );
}

function Frame271() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame272 />
    </div>
  );
}

function TeamMatchStatus75() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus76() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus77() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus78() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus79() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus75 />
      <TeamMatchStatus76 />
      <TeamMatchStatus77 />
      <TeamMatchStatus78 />
      <TeamMatchStatus79 />
    </div>
  );
}

function Frame321() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame15 />
    </div>
  );
}

function Frame273() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame321 />
    </div>
  );
}

function Frame389() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame270 />
      <Frame271 />
      <Frame273 />
    </div>
  );
}

function Frame426() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame390() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame123 />
      <Frame390 />
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame391() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame124() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame205 />
      <Frame391 />
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame392() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame206 />
      <Frame392 />
    </div>
  );
}

function Frame550() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame46 />
      <Frame124 />
      <Frame125 />
    </div>
  );
}

function Odds14() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame426 />
      <Frame550 />
    </div>
  );
}

function Frame427() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame126() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame393() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame126 />
      <Frame393 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame394() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame207 />
      <Frame394 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame395() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame128() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame208 />
      <Frame395 />
    </div>
  );
}

function Frame551() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame47 />
      <Frame127 />
      <Frame128 />
    </div>
  );
}

function Odds15() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame427 />
      <Frame551 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds14 />
      <Odds15 />
    </div>
  );
}

function Frame549() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame389 />
      <Frame72 />
    </div>
  );
}

function PremierLeagues15() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame388() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues14 />
          <Frame549 />
          <PremierLeagues15 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew9() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame388 />
    </div>
  );
}

function PremierLeagues16() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus80() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus81() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus82() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus83() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus84() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus80 />
      <TeamMatchStatus81 />
      <TeamMatchStatus82 />
      <TeamMatchStatus83 />
      <TeamMatchStatus84 />
    </div>
  );
}

function Frame322() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame16 />
    </div>
  );
}

function Frame274() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame322 />
    </div>
  );
}

function Frame449() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs8() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame449 />
    </div>
  );
}

function Frame276() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs8 />
    </div>
  );
}

function Frame275() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame276 />
    </div>
  );
}

function TeamMatchStatus85() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus86() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus87() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus88() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus89() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus85 />
      <TeamMatchStatus86 />
      <TeamMatchStatus87 />
      <TeamMatchStatus88 />
      <TeamMatchStatus89 />
    </div>
  );
}

function Frame323() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame17 />
    </div>
  );
}

function Frame277() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame323 />
    </div>
  );
}

function Frame397() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame274 />
      <Frame275 />
      <Frame277 />
    </div>
  );
}

function Frame428() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame398() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame129 />
      <Frame398 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame399() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame130() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame209 />
      <Frame399 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame400() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame210 />
      <Frame400 />
    </div>
  );
}

function Frame553() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame48 />
      <Frame130 />
      <Frame131 />
    </div>
  );
}

function Odds16() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame428 />
      <Frame553 />
    </div>
  );
}

function Frame429() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame401() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame132 />
      <Frame401 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame402() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame133() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame211 />
      <Frame402 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame404() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame212 />
      <Frame404 />
    </div>
  );
}

function Frame554() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame49 />
      <Frame133 />
      <Frame134 />
    </div>
  );
}

function Odds17() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame429 />
      <Frame554 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds16 />
      <Odds17 />
    </div>
  );
}

function Frame552() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame397 />
      <Frame73 />
    </div>
  );
}

function PremierLeagues17() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame396() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues16 />
          <Frame552 />
          <PremierLeagues17 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew10() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame396 />
    </div>
  );
}

function PremierLeagues18() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus90() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus91() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus92() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus93() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus94() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus90 />
      <TeamMatchStatus91 />
      <TeamMatchStatus92 />
      <TeamMatchStatus93 />
      <TeamMatchStatus94 />
    </div>
  );
}

function Frame324() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame18 />
    </div>
  );
}

function Frame278() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame324 />
    </div>
  );
}

function Frame450() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs9() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame450 />
    </div>
  );
}

function Frame280() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs9 />
    </div>
  );
}

function Frame279() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame280 />
    </div>
  );
}

function TeamMatchStatus95() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus96() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus97() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus98() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus99() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus95 />
      <TeamMatchStatus96 />
      <TeamMatchStatus97 />
      <TeamMatchStatus98 />
      <TeamMatchStatus99 />
    </div>
  );
}

function Frame325() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame19 />
    </div>
  );
}

function Frame281() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame325 />
    </div>
  );
}

function Frame406() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame278 />
      <Frame279 />
      <Frame281 />
    </div>
  );
}

function Frame430() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame135() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame407() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame135 />
      <Frame407 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame408() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame136() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame213 />
      <Frame408 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame409() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame137() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame214 />
      <Frame409 />
    </div>
  );
}

function Frame556() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame50 />
      <Frame136 />
      <Frame137 />
    </div>
  );
}

function Odds18() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame430 />
      <Frame556 />
    </div>
  );
}

function Frame431() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame138() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame410() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame138 />
      <Frame410 />
    </div>
  );
}

function Frame215() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame411() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame139() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame215 />
      <Frame411 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame432() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame140() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame216 />
      <Frame432 />
    </div>
  );
}

function Frame557() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame51 />
      <Frame139 />
      <Frame140 />
    </div>
  );
}

function Odds19() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame431 />
      <Frame557 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds18 />
      <Odds19 />
    </div>
  );
}

function Frame555() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame406 />
      <Frame74 />
    </div>
  );
}

function PremierLeagues19() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame405() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues18 />
          <Frame555 />
          <PremierLeagues19 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew11() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame405 />
    </div>
  );
}

function PremierLeagues20() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus100() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus101() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus102() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus103() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus104() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus100 />
      <TeamMatchStatus101 />
      <TeamMatchStatus102 />
      <TeamMatchStatus103 />
      <TeamMatchStatus104 />
    </div>
  );
}

function Frame326() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame20 />
    </div>
  );
}

function Frame282() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame326 />
    </div>
  );
}

function Frame451() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs10() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame451 />
    </div>
  );
}

function Frame284() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs10 />
    </div>
  );
}

function Frame283() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame284 />
    </div>
  );
}

function TeamMatchStatus105() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus106() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus107() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus108() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus109() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus105 />
      <TeamMatchStatus106 />
      <TeamMatchStatus107 />
      <TeamMatchStatus108 />
      <TeamMatchStatus109 />
    </div>
  );
}

function Frame329() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame21 />
    </div>
  );
}

function Frame285() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame329 />
    </div>
  );
}

function Frame434() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame282 />
      <Frame283 />
      <Frame285 />
    </div>
  );
}

function Frame435() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame436() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame141 />
      <Frame436 />
    </div>
  );
}

function Frame217() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame437() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame142() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame217 />
      <Frame437 />
    </div>
  );
}

function Frame218() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame438() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame143() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame218 />
      <Frame438 />
    </div>
  );
}

function Frame559() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame52 />
      <Frame142 />
      <Frame143 />
    </div>
  );
}

function Odds20() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame435 />
      <Frame559 />
    </div>
  );
}

function Frame439() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame440() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame144 />
      <Frame440 />
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame452() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame145() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame219 />
      <Frame452 />
    </div>
  );
}

function Frame220() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame453() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame220 />
      <Frame453 />
    </div>
  );
}

function Frame560() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame53 />
      <Frame145 />
      <Frame146 />
    </div>
  );
}

function Odds21() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame439 />
      <Frame560 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds20 />
      <Odds21 />
    </div>
  );
}

function Frame558() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame434 />
      <Frame75 />
    </div>
  );
}

function PremierLeagues21() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame433() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues20 />
          <Frame558 />
          <PremierLeagues21 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew12() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame433 />
    </div>
  );
}

function Frame456() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <ListItemNew8 />
      <ListItemNew9 />
      <ListItemNew10 />
      <ListItemNew11 />
      <ListItemNew12 />
    </div>
  );
}

function ListItemNew7() {
  return (
    <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[956px]" data-name="listItemNew">
      <Frame328 />
      <Frame456 />
    </div>
  );
}

function Frame562() {
  return (
    <div className="capitalize content-stretch flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
      <p className="relative shrink-0 text-[#1e1e1e] text-[16px]">La Liga</p>
      <p className="relative shrink-0 text-[#757575] text-[12px]">Spain</p>
    </div>
  );
}

function Frame561() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <div className="relative shrink-0 size-[30px]" data-name="image 214">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage214} />
      </div>
      <Frame562 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.1667 20.1667">
          <g id="Group">
            <path d={svgPaths.p115f580} id="Vector" stroke="var(--stroke-0, #767676)" strokeLinejoin="round" strokeWidth="1.83333" />
            <path d={svgPaths.p27c7ac00} id="Vector_2" stroke="var(--stroke-0, #767676)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconParkOutlineRightC2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="icon-park-outline:right-c">
      <Group2 />
    </div>
  );
}

function Frame330() {
  return (
    <div className="relative rounded-[10px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
          <Frame561 />
          <IconParkOutlineRightC2 />
        </div>
      </div>
    </div>
  );
}

function PremierLeagues22() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus110() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus111() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus112() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus113() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus114() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus110 />
      <TeamMatchStatus111 />
      <TeamMatchStatus112 />
      <TeamMatchStatus113 />
      <TeamMatchStatus114 />
    </div>
  );
}

function Frame331() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame22 />
    </div>
  );
}

function Frame286() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame331 />
    </div>
  );
}

function Frame459() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs11() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame459 />
    </div>
  );
}

function Frame288() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs11 />
    </div>
  );
}

function Frame287() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame288 />
    </div>
  );
}

function TeamMatchStatus115() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus116() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus117() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus118() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus119() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame23() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus115 />
      <TeamMatchStatus116 />
      <TeamMatchStatus117 />
      <TeamMatchStatus118 />
      <TeamMatchStatus119 />
    </div>
  );
}

function Frame460() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame23 />
    </div>
  );
}

function Frame289() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame460 />
    </div>
  );
}

function Frame458() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame286 />
      <Frame287 />
      <Frame289 />
    </div>
  );
}

function Frame461() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame462() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame147 />
      <Frame462 />
    </div>
  );
}

function Frame221() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame463() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame148() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame221 />
      <Frame463 />
    </div>
  );
}

function Frame222() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame464() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame149() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame222 />
      <Frame464 />
    </div>
  );
}

function Frame564() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame54 />
      <Frame148 />
      <Frame149 />
    </div>
  );
}

function Odds22() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame461 />
      <Frame564 />
    </div>
  );
}

function Frame465() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame150() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame466() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame150 />
      <Frame466 />
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame467() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame151() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame223 />
      <Frame467 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame468() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame224 />
      <Frame468 />
    </div>
  );
}

function Frame565() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame55 />
      <Frame151 />
      <Frame152 />
    </div>
  );
}

function Odds23() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame465 />
      <Frame565 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds22 />
      <Odds23 />
    </div>
  );
}

function Frame563() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame458 />
      <Frame76 />
    </div>
  );
}

function PremierLeagues23() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame454() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues22 />
          <Frame563 />
          <PremierLeagues23 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame454 />
    </div>
  );
}

function PremierLeagues24() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus120() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus121() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus122() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus123() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus124() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus120 />
      <TeamMatchStatus121 />
      <TeamMatchStatus122 />
      <TeamMatchStatus123 />
      <TeamMatchStatus124 />
    </div>
  );
}

function Frame471() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame24 />
    </div>
  );
}

function Frame290() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame471 />
    </div>
  );
}

function Frame472() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs12() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame472 />
    </div>
  );
}

function Frame292() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs12 />
    </div>
  );
}

function Frame291() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame292 />
    </div>
  );
}

function TeamMatchStatus125() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus126() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus127() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus128() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus129() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus125 />
      <TeamMatchStatus126 />
      <TeamMatchStatus127 />
      <TeamMatchStatus128 />
      <TeamMatchStatus129 />
    </div>
  );
}

function Frame473() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame25 />
    </div>
  );
}

function Frame293() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame473 />
    </div>
  );
}

function Frame470() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame290 />
      <Frame291 />
      <Frame293 />
    </div>
  );
}

function Frame474() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame475() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame153 />
      <Frame475 />
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame476() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame154() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame225 />
      <Frame476 />
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame477() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame155() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame226 />
      <Frame477 />
    </div>
  );
}

function Frame567() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame56 />
      <Frame154 />
      <Frame155 />
    </div>
  );
}

function Odds24() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame474 />
      <Frame567 />
    </div>
  );
}

function Frame478() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame156() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame479() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame156 />
      <Frame479 />
    </div>
  );
}

function Frame227() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame480() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame157() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame227 />
      <Frame480 />
    </div>
  );
}

function Frame228() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame481() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame158() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame228 />
      <Frame481 />
    </div>
  );
}

function Frame568() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame57 />
      <Frame157 />
      <Frame158 />
    </div>
  );
}

function Odds25() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame478 />
      <Frame568 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds24 />
      <Odds25 />
    </div>
  );
}

function Frame566() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame470 />
      <Frame77 />
    </div>
  );
}

function PremierLeagues25() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame469() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues24 />
          <Frame566 />
          <PremierLeagues25 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew15() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame469 />
    </div>
  );
}

function PremierLeagues26() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus130() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus131() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus132() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus133() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus134() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus130 />
      <TeamMatchStatus131 />
      <TeamMatchStatus132 />
      <TeamMatchStatus133 />
      <TeamMatchStatus134 />
    </div>
  );
}

function Frame484() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame26 />
    </div>
  );
}

function Frame294() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame484 />
    </div>
  );
}

function Frame485() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs13() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame485 />
    </div>
  );
}

function Frame296() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs13 />
    </div>
  );
}

function Frame295() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame296 />
    </div>
  );
}

function TeamMatchStatus135() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus136() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus137() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus138() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus139() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus135 />
      <TeamMatchStatus136 />
      <TeamMatchStatus137 />
      <TeamMatchStatus138 />
      <TeamMatchStatus139 />
    </div>
  );
}

function Frame486() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame27 />
    </div>
  );
}

function Frame297() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame486 />
    </div>
  );
}

function Frame483() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame294 />
      <Frame295 />
      <Frame297 />
    </div>
  );
}

function Frame487() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame159() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame488() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame159 />
      <Frame488 />
    </div>
  );
}

function Frame229() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame489() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame160() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame229 />
      <Frame489 />
    </div>
  );
}

function Frame230() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame490() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame161() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame230 />
      <Frame490 />
    </div>
  );
}

function Frame570() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame58 />
      <Frame160 />
      <Frame161 />
    </div>
  );
}

function Odds26() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame487 />
      <Frame570 />
    </div>
  );
}

function Frame491() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame492() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame162 />
      <Frame492 />
    </div>
  );
}

function Frame231() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame493() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame231 />
      <Frame493 />
    </div>
  );
}

function Frame232() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame494() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame232 />
      <Frame494 />
    </div>
  );
}

function Frame571() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame59 />
      <Frame163 />
      <Frame164 />
    </div>
  );
}

function Odds27() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame491 />
      <Frame571 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds26 />
      <Odds27 />
    </div>
  );
}

function Frame569() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame483 />
      <Frame78 />
    </div>
  );
}

function PremierLeagues27() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame482() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues26 />
          <Frame569 />
          <PremierLeagues27 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew16() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame482 />
    </div>
  );
}

function PremierLeagues28() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus140() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus141() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus142() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus143() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus144() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus140 />
      <TeamMatchStatus141 />
      <TeamMatchStatus142 />
      <TeamMatchStatus143 />
      <TeamMatchStatus144 />
    </div>
  );
}

function Frame497() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame28 />
    </div>
  );
}

function Frame298() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame497 />
    </div>
  );
}

function Frame498() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs14() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame498 />
    </div>
  );
}

function Frame300() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs14 />
    </div>
  );
}

function Frame299() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame300 />
    </div>
  );
}

function TeamMatchStatus145() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus146() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus147() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus148() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus149() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus145 />
      <TeamMatchStatus146 />
      <TeamMatchStatus147 />
      <TeamMatchStatus148 />
      <TeamMatchStatus149 />
    </div>
  );
}

function Frame499() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame29 />
    </div>
  );
}

function Frame301() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame499 />
    </div>
  );
}

function Frame496() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame298 />
      <Frame299 />
      <Frame301 />
    </div>
  );
}

function Frame500() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame501() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame165 />
      <Frame501 />
    </div>
  );
}

function Frame233() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame502() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame233 />
      <Frame502 />
    </div>
  );
}

function Frame234() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame503() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame234 />
      <Frame503 />
    </div>
  );
}

function Frame573() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame60 />
      <Frame166 />
      <Frame167 />
    </div>
  );
}

function Odds28() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame500 />
      <Frame573 />
    </div>
  );
}

function Frame504() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame505() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame168 />
      <Frame505 />
    </div>
  );
}

function Frame235() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame506() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame235 />
      <Frame506 />
    </div>
  );
}

function Frame236() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame507() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame170() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame236 />
      <Frame507 />
    </div>
  );
}

function Frame574() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame61 />
      <Frame169 />
      <Frame170 />
    </div>
  );
}

function Odds29() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame504 />
      <Frame574 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds28 />
      <Odds29 />
    </div>
  );
}

function Frame572() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame496 />
      <Frame79 />
    </div>
  );
}

function PremierLeagues29() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame495() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues28 />
          <Frame572 />
          <PremierLeagues29 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew17() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame495 />
    </div>
  );
}

function PremierLeagues30() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[14.06px] top-[8.95px] w-[40.971px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus150() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus151() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus152() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus153() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus154() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus150 />
      <TeamMatchStatus151 />
      <TeamMatchStatus152 />
      <TeamMatchStatus153 />
      <TeamMatchStatus154 />
    </div>
  );
}

function Frame510() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame30 />
    </div>
  );
}

function Frame302() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame510 />
    </div>
  );
}

function Frame511() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs15() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame511 />
    </div>
  );
}

function Frame304() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs15 />
    </div>
  );
}

function Frame303() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame304 />
    </div>
  );
}

function TeamMatchStatus155() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus156() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus157() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus158() {
  return <div className="bg-[#68d100] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus159() {
  return <div className="bg-[#ffc501] content-stretch flex h-[11.989px] items-center justify-center px-[3.633px] py-[1.453px] rounded-[36.842px] shrink-0 w-[11.988px]" data-name="TeamMatchStatus" />;
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[2.515px] items-center justify-center relative shrink-0">
      <TeamMatchStatus155 />
      <TeamMatchStatus156 />
      <TeamMatchStatus157 />
      <TeamMatchStatus158 />
      <TeamMatchStatus159 />
    </div>
  );
}

function Frame512() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame31 />
    </div>
  );
}

function Frame305() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame512 />
    </div>
  );
}

function Frame509() {
  return (
    <div className="content-stretch flex gap-[15px] items-center relative shrink-0 w-full">
      <Frame302 />
      <Frame303 />
      <Frame305 />
    </div>
  );
}

function Frame513() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame514() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.04</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame171 />
      <Frame514 />
    </div>
  );
}

function Frame237() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame515() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">3.14</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame237 />
      <Frame515 />
    </div>
  );
}

function Frame238() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame516() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[15.612px] relative shrink-0 text-[#1e1e1e] text-[12.143px] text-center tracking-[0.1735px]">2.00</p>
    </div>
  );
}

function Frame173() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame238 />
      <Frame516 />
    </div>
  );
}

function Frame576() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame62 />
      <Frame172 />
      <Frame173 />
    </div>
  );
}

function Odds30() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame513 />
      <Frame576 />
    </div>
  );
}

function Frame517() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[8.673px] relative rounded-[4.337px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[12.143px] text-center tracking-[0.0243px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame518() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">1X</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8.673px] relative shrink-0">
      <Frame174 />
      <Frame518 />
    </div>
  );
}

function Frame239() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame519() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">U</p>
    </div>
  );
}

function Frame175() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame239 />
      <Frame519 />
    </div>
  );
}

function Frame240() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[13.01px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame520() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6.071px] py-[4.817px] relative rounded-[4.337px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[15.612px] relative shrink-0 text-[#1e225d] text-[12.143px] text-center tracking-[0.1735px]">:</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.337px] relative shrink-0">
      <Frame240 />
      <Frame520 />
    </div>
  );
}

function Frame577() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[6.939px] shrink-0">
      <Frame63 />
      <Frame175 />
      <Frame176 />
    </div>
  );
}

function Odds31() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[2.602px] relative rounded-[8.673px] shrink-0" data-name="Odds">
      <Frame517 />
      <Frame577 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8.673px] h-[34.693px] items-center overflow-clip relative shrink-0">
      <Odds30 />
      <Odds31 />
    </div>
  );
}

function Frame575() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame509 />
      <Frame80 />
    </div>
  );
}

function PremierLeagues31() {
  return (
    <div className="overflow-clip relative shrink-0 size-[69px]" data-name="premier leagues">
      <div className="absolute h-[51.111px] left-[9.2px] top-[8.95px] w-[50.439px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame508() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues30 />
          <Frame575 />
          <PremierLeagues31 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew18() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame508 />
    </div>
  );
}

function Frame457() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <ListItemNew14 />
      <ListItemNew15 />
      <ListItemNew16 />
      <ListItemNew17 />
      <ListItemNew18 />
    </div>
  );
}

function ListItemNew13() {
  return (
    <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[10px] relative rounded-[20px] shrink-0 w-[956px]" data-name="listItemNew">
      <Frame330 />
      <Frame457 />
    </div>
  );
}

function Frame245() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <ListItemNew1 />
      <ListItemNew7 />
      <ListItemNew13 />
    </div>
  );
}

function Frame403() {
  return (
    <div className="backdrop-blur-[2px] bg-white h-[1975.922px] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative size-full">
        <ListItem />
        <Frame245 />
      </div>
    </div>
  );
}

function Frame522() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start leading-[25px] min-h-px min-w-px relative">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[#1e1e1e] text-[24px]">Quick Tip</p>
      <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal min-w-full relative shrink-0 text-[#303030] text-[0px] text-[17px] text-justify w-[min-content] whitespace-pre-wrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
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
      <Frame522 />
    </div>
  );
}

function Faq() {
  return (
    <div className="bg-white relative rounded-[20px] shadow-[0px_0px_11.7px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="FAQ">
      <div className="content-stretch flex flex-col items-start p-[40px] relative w-full">
        <Ques />
      </div>
    </div>
  );
}

function Frame521() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Faq />
    </div>
  );
}

export default function Frame531() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative size-full">
      <Frame403 />
      <Frame521 />
    </div>
  );
}