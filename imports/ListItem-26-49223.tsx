import svgPaths from "./svg-p9e6o63udr";

function Group() {
  return (
    <div className="absolute inset-[8.33%_12.5%]" data-name="Group">
      <div className="absolute inset-[-2.86%_-3.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.5 37">
          <g id="Group">
            <path d={svgPaths.p39c49a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p10f83300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SolarShieldUpBroken() {
  return (
    <div className="overflow-clip relative shrink-0 size-[42px]" data-name="solar:shield-up-broken">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-white w-full">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[30.004px] relative shrink-0 text-[18.753px]">Terms and Conditions</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[11.318px]">{`Last Updated: May 23, 2024 `}</p>
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
      <SolarShieldUpBroken />
      <Frame2 />
    </div>
  );
}

function ListFTmatches() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-[251px]" data-name="listFTmatches">
      <Frame1 />
    </div>
  );
}

export default function ListItem() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fc5f12] gap-[20px] items-start overflow-clip p-[10px] relative rounded-[20px] size-full to-[#96390b]" data-name="listItem">
      <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] top-[calc(50%-1.01px)] w-[137.065px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
          <path d={svgPaths.p24c70280} fill="var(--fill-0, white)" id="Vector" opacity="0.17" />
        </svg>
      </div>
      <ListFTmatches />
    </div>
  );
}