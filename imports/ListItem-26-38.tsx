import svgPaths from "./svg-mv18xz1v47";

function NotoFire() {
  return (
    <div className="relative shrink-0 size-[33.639px]" data-name="noto:fire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6392 33.6392">
        <g id="noto:fire">
          <path d={svgPaths.p1e246100} fill="url(#paint0_radial_26_42)" id="Vector" />
          <path d={svgPaths.p20fc7d00} fill="url(#paint1_radial_26_42)" id="Vector_2" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-18.5507 -0.08051 -0.132266 30.438 16.3504 32.6671)" gradientUnits="userSpaceOnUse" id="paint0_radial_26_42" r="1">
            <stop offset="0.314" stopColor="#FF9800" />
            <stop offset="0.662" stopColor="#FF6D00" />
            <stop offset="0.972" stopColor="#F44336" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.19605 19.4089 14.6067 0.147522 17.3924 14.2067)" gradientUnits="userSpaceOnUse" id="paint1_radial_26_42" r="1">
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

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-white w-full">
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[30.004px] relative shrink-0 text-[18.753px]">Bef of The Day</p>
      <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[11.318px]">5th September</p>
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
      <NotoFire />
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