import svgPaths from "./svg-gkp2t2ojjk";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";

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

function Frame4() {
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
    <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
      <div className="absolute h-[25.664px] left-[7.06px] top-[4.49px] w-[20.573px]" data-name="Crystal Palace 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
      </div>
    </div>
  );
}

function TeamMatchStatus() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus1() {
  return <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus2() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus3() {
  return <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus4() {
  return <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <TeamMatchStatus />
      <TeamMatchStatus1 />
      <TeamMatchStatus2 />
      <TeamMatchStatus3 />
      <TeamMatchStatus4 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
      <Frame />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
      <Frame20 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
    </div>
  );
}

function Vs() {
  return (
    <div className="bg-[#eaeaea] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0" data-name="vs">
      <Frame32 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Vs />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
      <Frame16 />
    </div>
  );
}

function TeamMatchStatus5() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus6() {
  return <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus7() {
  return <div className="bg-[#ec1c24] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus8() {
  return <div className="bg-[#68d100] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function TeamMatchStatus9() {
  return <div className="bg-[#ffc501] content-stretch flex h-[7.879px] items-center justify-center px-[2.388px] py-[0.955px] rounded-[24.211px] shrink-0 w-[7.878px]" data-name="TeamMatchStatus" />;
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[1.653px] items-center justify-center relative shrink-0">
      <TeamMatchStatus5 />
      <TeamMatchStatus6 />
      <TeamMatchStatus7 />
      <TeamMatchStatus8 />
      <TeamMatchStatus9 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] text-ellipsis tracking-[0.2px]">Manchester United</p>
      <Frame1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
      <Frame21 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
      <Frame18 />
      <Frame17 />
      <Frame19 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">ODDS</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.04</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame6 />
      <Frame23 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">X</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">3.14</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame12 />
      <Frame24 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">2</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[10.697px] relative shrink-0 text-[#1e1e1e] text-[8.32px] text-center tracking-[0.1189px]">2.00</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame13 />
      <Frame25 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame2 />
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Odds() {
  return (
    <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame30 />
      <Frame33 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex h-full items-center justify-center px-[5.943px] relative rounded-[2.971px] shrink-0">
      <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[8.32px] text-center tracking-[0.0166px] uppercase whitespace-nowrap">
        <p className="leading-[normal]">predictions</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">1X2</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">1X</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[5.943px] relative shrink-0">
      <Frame7 />
      <Frame26 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">goals</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">U</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame14 />
      <Frame27 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <div className="capitalize flex flex-col font-['Space_Grotesk:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.914px] text-center whitespace-nowrap">
        <p className="leading-[normal]">Scores</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4.16px] py-[3.301px] relative rounded-[2.971px] shrink-0">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[10.697px] relative shrink-0 text-[#1e225d] text-[8.32px] text-center tracking-[0.1189px]">:</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center px-[2.971px] relative shrink-0">
      <Frame15 />
      <Frame28 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.754px] shrink-0">
      <Frame3 />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Odds1() {
  return (
    <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.783px] relative rounded-[5.943px] shrink-0" data-name="Odds">
      <Frame31 />
      <Frame35 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[5.943px] h-[23.771px] items-center overflow-clip relative shrink-0">
      <Odds />
      <Odds1 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
      <Frame29 />
      <Frame5 />
    </div>
  );
}

function PremierLeagues1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[34.647px]" data-name="premier leagues">
      <div className="absolute h-[25.664px] left-[4.62px] top-[4.49px] w-[25.327px]" data-name="Manchester United 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
          <PremierLeagues />
          <Frame34 />
          <PremierLeagues1 />
        </div>
      </div>
    </div>
  );
}

function ListItemNew() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full" data-name="listItemNew">
      <Frame22 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
      <Frame4 />
      <ListItemNew />
    </div>
  );
}

export default function ListItem() {
  return (
    <div className="bg-[#1e225d] content-stretch flex flex-col gap-[20px] items-start overflow-clip p-[5px] relative rounded-[20px] size-full" data-name="listItem">
      <div className="absolute bottom-[-0.09px] h-[238.738px] right-0 w-[239px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 239 238.738">
          <path d={svgPaths.p20e94e80} fill="var(--fill-0, #0068A8)" id="Vector" opacity="0.17" />
        </svg>
      </div>
      <ListFTmatches />
    </div>
  );
}