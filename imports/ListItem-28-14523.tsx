import svgPaths from "./svg-xzqa0bxf57";

function QlementineIconsFaq() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="qlementine-icons:faq-16">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g clipPath="url(#clip0_28_14527)" id="qlementine-icons:faq-16">
          <path d={svgPaths.p1b7cf780} fill="var(--fill-0, white)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p145ce580} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_28_14527">
            <rect fill="white" height="35" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[30.004px] relative shrink-0 text-[18.753px] text-white">Frequently Asked Questions</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[181.657px]">
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[9.704px] items-center py-[6.469px] relative shrink-0 w-full">
      <QlementineIconsFaq />
      <Frame2 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
      <Frame1 />
    </div>
  );
}

export default function ListItem() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fc5f12] gap-[20px] items-start overflow-clip p-[10px] relative rounded-[20px] size-full to-[#96390b]" data-name="listItem">
      <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] top-[calc(50%-0.51px)] w-[137.065px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
          <path d={svgPaths.p24c70280} fill="var(--fill-0, white)" id="Vector" opacity="0.17" />
        </svg>
      </div>
      <ListFTmatches />
    </div>
  );
}