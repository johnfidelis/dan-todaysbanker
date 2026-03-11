import svgPaths from "./svg-rftikhspjl";
import imgIPhone14Plus23 from "@/assets/070bda708d1c0e0967303e9923d436b89001c09b.png";

function Wifi() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[17px]" data-name="Wifi">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 15">
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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid items-[start] justify-items-[start] relative shrink-0" data-name="right icons">
      <Wifi />
      <Signal />
      <Battery />
    </div>
  );
}

function BuildingBlocksStatusBar() {
  return (
    <div className="content-stretch flex h-[52px] items-end justify-between leading-[0] px-[24px] py-[10px] relative shrink-0 w-[412px]" data-name="Building Blocks/status-bar">
      <div className="flex flex-col font-['Roboto:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100", fontFeatureSettings: "'ss02', 'dlig', 'lnum', 'pnum'" }}>
        <p className="leading-[20px]">9:30</p>
      </div>
      <RightIcons />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30.411px] relative shrink-0 w-[35.322px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.3222 30.4106">
        <g id="Group">
          <path d={svgPaths.p39b9d700} fill="var(--fill-0, #389C52)" id="Vector" />
          <path d={svgPaths.p2b56700} fill="var(--fill-0, #389C52)" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p1d5b51f0} fill="var(--fill-0, #389C52)" id="Vector_3" />
            <path d={svgPaths.p35da6880} fill="var(--fill-0, #D2AD30)" id="Vector_4" />
            <path d={svgPaths.pa434600} fill="var(--fill-0, #D2AD30)" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <p className="font-['voltus_(_free_Version_):Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24.766px] text-white">TodaysBanker</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <Group />
      <Frame />
    </div>
  );
}

function LogosTelegram() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="logos:telegram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_10_94714)" id="logos:telegram">
          <path d={svgPaths.p1417db40} fill="url(#paint0_linear_10_94714)" id="Vector" />
          <path d={svgPaths.p365edfc0} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_94714" x1="1600" x2="1600" y1="0" y2="3200">
            <stop stopColor="#2AABEE" />
            <stop offset="1" stopColor="#229ED9" />
          </linearGradient>
          <clipPath id="clip0_10_94714">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[5px] items-center justify-center p-[10px] relative rounded-[7px] shrink-0">
      <LogosTelegram />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-end relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Items() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="items">
      <Logo />
      <Frame30 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g id="ph:soccer-ball-fill">
          <path d={svgPaths.p2e6f6100} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.4545 17.4545">
        <g clipPath="url(#clip0_10_94687)" id="bi:fire">
          <path d={svgPaths.p226b80c0} fill="var(--fill-0, #F3F3F3)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_10_94687">
            <rect fill="white" height="17.4545" width="17.4545" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
      <BiFire />
      <p className="font-['Lexend:Regular',sans-serif] font-normal leading-[21.64px] relative shrink-0 text-[#f3f3f3] text-[12px]">Bef of The Day</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="backdrop-blur-[7.25px] content-stretch flex gap-[10px] items-center justify-center px-[9px] py-[10px] relative rounded-[7px] shrink-0">
      <Frame22 />
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

function Frame3() {
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

function Frame6() {
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
          <Frame2 />
          <Frame4 />
          <Frame3 />
          <Frame6 />
        </div>
      </div>
    </div>
  );
}

function Headermobile() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-[428px]" data-name="headermobile">
      <BuildingBlocksStatusBar />
      <MenuHeader />
      <MenuHeader1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute inset-[12.5%_12.5%_8.33%_8.33%]" data-name="Group">
      <div className="absolute inset-[-3.61%_-3.59%_-3.01%_-3.01%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.4446 35.4519">
          <g id="Group">
            <g id="Vector" />
            <path d={svgPaths.paf95400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="square" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TdesignCall() {
  return (
    <div className="overflow-clip relative shrink-0 size-[42px]" data-name="tdesign:call-1">
      <Group3 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-white w-full">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[30.004px] relative shrink-0 text-[18.753px]">Contact Us</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[11.318px]">Get in touch with Todaysbanker</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.657px]">
      <Frame18 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[9.704px] items-center py-[6.469px] relative shrink-0 w-full">
      <TdesignCall />
      <Frame21 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[251px]" data-name="listFTmatches">
      <Frame19 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="bg-gradient-to-b from-[#fc5f12] relative rounded-[20px] shrink-0 to-[#96390b] w-full" data-name="listItem">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[10px] relative w-full">
          <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] top-[calc(50%-1.01px)] w-[137.065px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
              <path d={svgPaths.p24c70280} fill="var(--fill-0, white)" id="Vector" opacity="0.17" />
            </svg>
          </div>
          <ListFTmatches />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Nunito_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#303030] text-[0px] w-full whitespace-pre-wrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold mb-[12px] text-[22px]">Get in Touch</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold mb-[12px] text-[15px]">General Inquiries</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] mb-[12px] text-[15px]">Have a question about how Todaysbanker works or need help with your account?</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold mb-[12px] text-[#1e225d] text-[15px]">Email: support@todaysbanker.com</p>
        <p className="mb-[12px] text-[15px]">&nbsp;</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold mb-[12px] text-[15px]">{`Business & Partnerships`}</p>
        <p className="font-['Space_Grotesk:Regular',sans-serif] mb-[12px] text-[15px]">Want to collaborate or discuss advertising and sponsorship opportunities?</p>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[#1e225d] text-[15px]">Email: partnerships@todaysbanker.com</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#1e1e1e] text-[22px]">
        <p className="leading-[normal] whitespace-pre-wrap">Contact Us</p>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-h-px min-w-px relative text-[#303030] text-[15px] tracking-[0.2px] whitespace-pre-wrap">Name</p>
    </div>
  );
}

function InputName() {
  return (
    <div className="bg-white relative rounded-[30px] shrink-0 w-full" data-name="Input name">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[20px] relative w-full">
          <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#b3b3b3] text-[15px] tracking-[0.2px] whitespace-pre-wrap">Enter name</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-[31px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame26 />
      <InputName />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-h-px min-w-px relative text-[#303030] text-[15px] tracking-[0.2px] whitespace-pre-wrap">Email</p>
    </div>
  );
}

function InputName1() {
  return (
    <div className="bg-white relative rounded-[30px] shrink-0 w-full" data-name="Input name">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center p-[20px] relative w-full">
          <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#b3b3b3] text-[15px] tracking-[0.2px] whitespace-pre-wrap">e.g myemail@gmail.com</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-[31px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
      <Frame28 />
      <InputName1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal h-[24px] leading-[24px] min-h-px min-w-px relative text-[#303030] text-[15px] tracking-[0.2px] whitespace-pre-wrap">Write your message</p>
    </div>
  );
}

function InputName2() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[30px] w-full" data-name="Input name">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-start p-[20px] relative size-full">
          <p className="flex-[1_0_0] font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[24px] min-h-px min-w-px relative text-[#b3b3b3] text-[15px] tracking-[0.2px] whitespace-pre-wrap">Tell us about your needs</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-[31px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] h-[217px] items-start relative shrink-0 w-full">
      <Frame29 />
      <InputName2 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="form">
      <Frame7 />
      <Frame27 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-[#1e225d] h-[51px] relative rounded-[53px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[32px] py-[18px] relative size-full">
          <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[15px] text-white tracking-[0.2px]">Send</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Form />
      <Buttons />
    </div>
  );
}

function LoginModal() {
  return (
    <div className="relative rounded-[30px] shrink-0 w-full" data-name="LoginModal">
      <div aria-hidden="true" className="absolute border border-[#d9d9d9] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <div className="content-stretch flex flex-col items-start p-[20px] relative w-full">
        <Frame25 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-full">
      <Frame31 />
      <LoginModal />
    </div>
  );
}

function Frame24() {
  return (
    <div className="bg-white relative rounded-[15px] shadow-[0px_0px_26px_0px_rgba(0,0,0,0.1)] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[20px] py-[30px] relative w-full">
        <ListItem />
        <Frame23 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="mb-[-1px] relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[10px] py-[20px] relative w-full">
        <Frame24 />
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[48.604px] relative shrink-0 w-[56.454px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.4541 48.6042">
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

function Logo1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Logo">
      <Group4 />
      <Frame1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <Logo1 />
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
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6987 27.0843">
        <g clipPath="url(#clip0_1_29735)" id="fa6-brands:square-x-twitter">
          <path d={svgPaths.p1a4f5200} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_29735">
            <rect fill="white" height="27.0843" width="23.6987" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <Fa6BrandsSquareXTwitter />
    </div>
  );
}

function SimpleIconsTelegram() {
  return (
    <div className="relative shrink-0 size-[27.084px]" data-name="simple-icons:telegram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0843 27.0843">
        <g clipPath="url(#clip0_1_28523)" id="simple-icons:telegram">
          <path d={svgPaths.p12d02c00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_28523">
            <rect fill="white" height="27.0843" width="27.0843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <SimpleIconsTelegram />
    </div>
  );
}

function SimpleIconsFacebook() {
  return (
    <div className="relative shrink-0 size-[27.084px]" data-name="simple-icons:facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.0843 27.0843">
        <g clipPath="url(#clip0_1_26621)" id="simple-icons:facebook">
          <path d={svgPaths.p1d4de000} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_26621">
            <rect fill="white" height="27.0843" width="27.0843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <SimpleIconsFacebook />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[20.066px] items-center justify-center relative shrink-0" data-name="Social Media Container">
      <Frame17 />
      <Frame16 />
      <Frame15 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center pt-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(235,245,238,0.25)] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e6ecef] text-[13px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Copyright © 2025 Todaysbanker All Rights Reserved.
      </p>
      <SocialMediaContainer />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center justify-center relative rounded-[15px] shrink-0 w-full">
      <Frame20 />
      <FooterLinks />
      <Frame13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="backdrop-blur-[7.45px] bg-[#0b0c21] relative rounded-[20px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[10px] py-[29px] relative w-full">
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function FooterV() {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center mb-[-1px] overflow-clip px-[15px] py-[25px] relative shrink-0 w-[428px]" data-name="Footer v1">
      <Frame8 />
    </div>
  );
}

export default function IPhone14Plus() {
  return (
    <div className="content-stretch flex flex-col items-center pb-px relative size-full" data-name="iPhone 14 Plus - 23">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#171a46] inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-10 size-full" src={imgIPhone14Plus23} />
      </div>
      <Headermobile />
      <Frame9 />
      <FooterV />
    </div>
  );
}