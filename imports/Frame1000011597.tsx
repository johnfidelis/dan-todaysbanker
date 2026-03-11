"use client"
import React from 'react';
import svgPaths from "./svg-2qrbuv78br";
import svgPathsCompare from "./svg-54yszqfsqe";
import svgPathsOld from "./svg-ngukn1b4i0";
import imgImage215 from "@/assets/3a2d13044dc4ec547c7b9bea156f29381bfc2a98.png";
import imgImage214 from "@/assets/9769675da9b28a88ecd6ab6b199f13e5eadad1df.png";
import imgChelsea1 from "@/assets/28182cc962a4de02219a33f540b36353a5e85b02.png";
import imgEverton1 from "@/assets/190594ab913b9a4fbd800b55e4f241c8a9f34cf7.png";
import imgCrystalPalace1 from "@/assets/1a190356142cc287742c7bd9853122361b8c30d2.png";
import imgManchesterUnited1 from "@/assets/7cd90e038f6d01ddbb012d1529459c6d26568468.png";
import imgLiverpool1 from "@/assets/cb0a59cb76b20bf14ac25778ab20775669d8a465.png";
import imgManchesterCity1 from "@/assets/350e3d351cb287d50ac7c3e53cb997d0142a63f6.png";
import imgArsenal1 from "@/assets/d4ccef3007a73594bc8423fc390c525ea97499d7.png";
import imgBrentford1 from "@/assets/b58c6678b8c218f8a54d98a358a0bbb79b7c5192.png";
import imgNewcastleUnited1 from "@/assets/894625297a64ce8a308c78984077ae25792eb279.png";
import imgLutonTown1 from "@/assets/2b4fbbb7c7d327abf54f4d5ddb0c2b00083c394a.png";
import imgFulham1 from "@/assets/36f7ec0e28e60267be4a67baac450dc1ff3bd233.png";
import imgBurnley1 from "@/assets/f519a68f1e560f602c2ee1b46fe05c3494716774.png";

// --- Reusable Components ---

const MatchStatus = ({ status }: { status: string }) => {
  const bg = status === 'L' ? 'bg-[#ec1c24]' : status === 'W' ? 'bg-[#68d100]' : 'bg-[#ffc501]';
  return (
    <div className={`${bg} content-stretch flex h-[16.961px] items-center justify-center px-[5.14px] py-[2.056px] relative rounded-[2.135px] shrink-0 w-[16.958px]`}>
      <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[11.947px] text-white uppercase">{status}</p>
    </div>
  );
};

const TableRow = ({ rank, team, logo, gp, form, pts, gd, goals }: any) => (
  <div className="relative shrink-0 w-full">
    <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
      <div className="content-stretch flex items-center px-[10px] py-[5px] relative w-full">
        {/* Rank */}
        <div className="content-stretch flex items-center relative shrink-0 w-[30px]">
          <div className="content-stretch flex items-center justify-center px-[10px] relative rounded-[28px] shrink-0">
            <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#767676] text-[14px] uppercase">{rank}</p>
          </div>
        </div>
        {/* Team */}
        <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-center min-h-px min-w-px relative">
          <div className="overflow-clip relative shrink-0 size-[33.5px]">
            <div className="absolute inset-0 m-auto flex items-center justify-center">
               <img alt={team} className="max-w-full max-h-full object-contain" src={logo} />
            </div>
          </div>
          <p className="flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[18px] min-h-px min-w-px overflow-hidden relative text-[#1e1e1e] text-[14px] text-ellipsis tracking-[0.2px] whitespace-nowrap">{team}</p>
        </div>
        {/* Stats */}
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[126px]">
           <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[10px] py-[5px] relative w-full">
                  <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] uppercase">{gp}</p>
                </div>
              </div>
           </div>
           <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center p-[5px] relative w-full">
                  <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] uppercase">{goals}</p>
                </div>
              </div>
           </div>
           <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[28px]">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center px-[10px] py-[5px] relative w-full">
                  <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] uppercase">{pts}</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
    <div aria-hidden="true" className="absolute border-[#f3f3f3] border-b border-solid inset-0 pointer-events-none" />
    <div aria-hidden="true" className={`absolute border-l-3 border-solid inset-0 pointer-events-none ${rank <= 4 ? 'border-[#14ae5c]' : rank === 5 ? 'border-[#08f]' : 'border-[#ec221f]'}`} />
  </div>
);

// --- Header Component ---
function Header() {
  return (
    <div className="content-stretch flex items-center justify-between overflow-clip py-[10px] relative shrink-0 w-full">
      <button className="content-stretch cursor-pointer flex gap-[10px] items-center relative shrink-0">
        <div className="relative shrink-0 size-[24px]">
          <svg className="block size-full" fill="none" viewBox="0 0 24 24">
             <path d={svgPathsOld.p1acb28c0} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
             <path d={svgPathsOld.p237b9d00} stroke="white" strokeMiterlimit="10" strokeWidth="1.5" />
          </svg>
        </div>
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[14px] text-left text-white">Back</p>
      </button>
      <div className="content-stretch flex items-center relative shrink-0">
        <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[14px] text-white">Europe</p>
        <div className="relative shrink-0 size-[24px]">
           <svg className="block size-full" fill="none" viewBox="0 0 24 24"><path d="M10 17L15 12L10 7V17Z" fill="white" /></svg>
        </div>
        <p className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[27px] relative shrink-0 text-[14px] text-white">Leagues</p>
      </div>
      <div className="content-stretch flex gap-[10px] items-center opacity-0 relative shrink-0">
         <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[27px] relative shrink-0 text-[14px] text-white">Back</p>
      </div>
    </div>
  );
}

// --- Main Prediction Card (Updated) ---
function PredictionCard() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-white gap-[10px] items-start overflow-clip p-[10px] relative rounded-[20px] size-full to-[#abacb5]">
      {/* Background Vector */}
      <div className="-translate-y-1/2 absolute h-[429.771px] right-[-183.24px] top-[calc(50%-2.83px)] w-[430.243px]" data-name="Vector">
        <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 430.243 429.771">
          <path d={svgPaths.p2ae6c500} fill="var(--fill-0, #1E225D)" id="Vector" opacity="0.04" />
        </svg>
      </div>

      {/* Header Info */}
      <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full">
        <div className="content-stretch flex items-center py-[5.7px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
            <div className="content-stretch flex gap-[5px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[29.415px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage215} />
              </div>
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-[85.265px]">
                <div className="content-stretch flex flex-col items-start justify-center leading-[normal] relative shrink-0 text-[#1e1e1e] w-full">
                  <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold relative shrink-0 text-[15.982px]">Serie A</p>
                  <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium relative shrink-0 text-[9.646px]">Italy</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[3.959px] items-start justify-center py-[6.598px] relative shrink-0">
              {/* Date */}
              <div className="content-stretch flex gap-[3.959px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[10.557px]">
                  <div className="absolute inset-[12.5%]">
                    <svg className="block size-full absolute inset-[-4.17%]" fill="none" preserveAspectRatio="none" viewBox="0 0 8.57751 8.57751">
                      <path d={svgPaths.p7605d80} stroke="#5A5A5A" strokeWidth="0.66" />
                      <path d={svgPaths.p261c9b80} fill="#5A5A5A" />
                      <path d={svgPaths.p144b13e0} stroke="#5A5A5A" strokeLinecap="round" strokeWidth="0.66" />
                      <path d={svgPaths.p1ae0c100} fill="#5A5A5A" />
                      <path d={svgPaths.p3461c500} fill="#5A5A5A" />
                      <path d={svgPaths.p7aa8400} fill="#5A5A5A" />
                      <path d={svgPaths.p1ca4a780} fill="#5A5A5A" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#303030] text-[9.237px] text-center tracking-[0.132px]">Jul 29 2025</p>
              </div>
              {/* Separator */}
              <div className="relative self-stretch shrink-0 w-0">
                <div className="absolute inset-[0_-0.33px]"><svg className="block size-full" fill="none" viewBox="0 0 0.659808 13"><path d="M0.329904 13V0" stroke="#D9D9D9" strokeWidth="0.66" /></svg></div>
              </div>
              {/* Time */}
              <div className="content-stretch flex gap-[3.959px] items-center relative shrink-0">
                <div className="overflow-clip relative shrink-0 size-[10.557px]">
                  <div className="absolute inset-[8.33%]">
                    <svg className="block size-full absolute inset-[-7.5%]" fill="none" viewBox="0 0 10.1171 10.1171">
                      <path d={svgPaths.p1c052c00} stroke="#5A5A5A" strokeLinecap="square" strokeWidth="1.32" />
                      <path d={svgPaths.p24e2da40} stroke="#5A5A5A" strokeLinecap="square" strokeWidth="1.32" />
                    </svg>
                  </div>
                </div>
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#303030] text-[9.237px] text-center tracking-[0.132px]">7:00 PM</p>
              </div>
              {/* Separator */}
              <div className="relative self-stretch shrink-0 w-0">
                <div className="absolute inset-[0_-0.33px]"><svg className="block size-full" fill="none" viewBox="0 0 0.659808 13"><path d="M0.329904 13V0" stroke="#D9D9D9" strokeWidth="0.66" /></svg></div>
              </div>
              {/* Stadium */}
              <div className="content-stretch flex gap-[3.959px] items-center relative shrink-0">
                <div className="relative shrink-0 size-[10.557px]">
                  <svg className="absolute block inset-0" fill="none" viewBox="0 0 10.5569 10.5569"><path d={svgPaths.p6b20d00} fill="#5A5A5A" /></svg>
                </div>
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#303030] text-[9.237px] text-center tracking-[0.132px]">Sandford Bridge</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Match Teams & Info Box */}
      <div className="backdrop-blur-[2px] bg-[rgba(255,255,255,0.42)] relative rounded-[20px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute border-2 border-[#1e225d] border-solid inset-0 pointer-events-none rounded-[20px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between p-[10px] relative w-full">
            {/* Chelsea Column */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[10px] relative rounded-[22px]">
              <div className="overflow-clip relative shrink-0 size-[98px]">
                <img alt="" className="absolute left-[12.7px] size-[72.593px] top-[12.7px]" src={imgChelsea1} />
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center p-[5px] relative shrink-0 w-[86px]">
                  <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] text-center">Chelsea</p>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                  <div className="content-stretch flex gap-[3.558px] items-center justify-center relative shrink-0">
                    {['L','W','L','D','W'].map((s,i) => <MatchStatus key={i} status={s} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Center Info */}
            <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0">
              <div className="content-stretch flex gap-[10.643px] items-center relative shrink-0">
                <p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#303030] text-[12px] text-center tracking-[0.3548px]">5 Jan</p>
              </div>
              <div className="content-stretch flex flex-col gap-[3.166px] items-center relative shrink-0">
                <div className="bg-white content-stretch flex items-start justify-center p-[5px] relative rounded-[7.916px] shrink-0">
                  <p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#303030] text-[14px] text-center tracking-[0.3548px]">7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Everton Column */}
            <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px pb-[10px] relative rounded-[22px]">
              <div className="overflow-clip relative shrink-0 size-[98px]">
                <img alt="" className="absolute h-[72.593px] left-[13.43px] top-[12.7px] w-[70.995px]" src={imgEverton1} />
              </div>
              <div className="content-stretch flex flex-col items-center relative shrink-0">
                <div className="content-stretch flex items-center justify-center p-[5px] relative shrink-0 w-[85px]">
                  <p className="capitalize font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#1e1e1e] text-[14px] text-center">Everton</p>
                </div>
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
                  <div className="content-stretch flex gap-[3.558px] items-center justify-center relative shrink-0">
                    {['L','W','L','D','W'].map((s,i) => <MatchStatus key={i} status={s} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer: Odds & Predictions */}
      <div className="content-stretch flex flex-col gap-[5.943px] items-center overflow-clip relative shrink-0 w-full">
        {/* Odds Row */}
        <div className="content-stretch flex gap-[7.226px] h-[35.561px] items-center relative shrink-0">
          {/* 1X2 Odds */}
          <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.147px] relative rounded-[7.157px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center px-[7.157px] relative rounded-[3.578px] shrink-0">
              <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[10.019px] text-center tracking-[0.02px] uppercase whitespace-nowrap">
                <p className="leading-[normal]">ODDS</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex h-full items-center relative rounded-[5.725px] shrink-0">
              <div className="content-stretch flex items-center justify-center px-[3.578px] relative shrink-0">
                <div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.735px] text-center"><p className="leading-[normal]">1</p></div>
                <div className="flex items-center justify-center px-[5.01px] py-[3.975px] rounded-[3.578px]"><p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[12.882px] text-[#1e1e1e] text-[10.019px]">2.04</p></div>
              </div>
              <div className="content-stretch flex items-center justify-center px-[3.578px] relative shrink-0">
                <div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.735px] text-center"><p className="leading-[normal]">X</p></div>
                <div className="flex items-center justify-center px-[5.01px] py-[3.975px] rounded-[3.578px]"><p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[12.882px] text-[#1e1e1e] text-[10.019px]">3.14</p></div>
              </div>
              <div className="content-stretch flex items-center justify-center px-[3.578px] relative shrink-0">
                <div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.735px] text-center"><p className="leading-[normal]">2</p></div>
                <div className="flex items-center justify-center px-[5.01px] py-[3.975px] rounded-[3.578px]"><p className="font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[12.882px] text-[#1e1e1e] text-[10.019px]">2.00</p></div>
              </div>
            </div>
          </div>

          {/* Prob % */}
          <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[2.05px] relative rounded-[6.832px] shrink-0">
            <div className="content-stretch flex h-full items-center justify-center px-[6.832px] relative rounded-[3.416px] shrink-0">
              <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[9.565px] text-center tracking-[0.0191px] uppercase whitespace-nowrap">
                <p className="leading-[normal]">Prob. %</p>
              </div>
            </div>
            <div className="bg-white content-stretch flex h-full items-center relative rounded-[5.466px] shrink-0">
              {/* 1 */}
              <div className="content-stretch flex items-center justify-center px-[1.284px] relative shrink-0">
                <div className="flex items-center justify-center px-[5px]"><div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.248px]"><p className="leading-[normal]">1</p></div></div>
                <div className="flex items-center justify-center px-[4.783px] rounded-[3.416px]">
                  <div className="flex flex-col items-start relative shrink-0">
                    <div className="relative shrink-0 size-[19.547px]">
                      <svg className="absolute block inset-0" fill="none" viewBox="0 0 19.5472 19.5471">
                        <path d={svgPaths.p80644c0} fill="#E6E6E6" />
                        <path d={svgPaths.p35a33770} fill="#14AE5C" />
                      </svg>
                    </div>
                    <p className="-translate-x-1/2 absolute font-bold leading-[6.836px] left-[calc(50%+0.59px)] text-[#1e1e1e] text-[4.844px] text-center top-[calc(50%-3.26px)] tracking-[0.076px]">80%</p>
                  </div>
                </div>
              </div>
              {/* X */}
              <div className="content-stretch flex items-center justify-center px-[1.284px] relative shrink-0">
                <div className="flex items-center justify-center"><div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.248px]"><p className="leading-[normal]">X</p></div></div>
                <div className="flex items-center justify-center px-[4.783px] rounded-[3.416px]">
                  <div className="flex flex-col items-start relative shrink-0">
                    <div className="relative shrink-0 size-[19.547px]">
                      <svg className="absolute block inset-0" fill="none" viewBox="0 0 19.5472 19.5471">
                        <path d={svgPaths.pe48dc80} fill="#E6E6E6" />
                        <path d={svgPaths.p33e34680} fill="#E8B931" />
                      </svg>
                    </div>
                    <p className="-translate-x-1/2 absolute font-bold leading-[6.836px] left-[calc(50%+1.09px)] text-[#1e1e1e] text-[4.844px] text-center top-[calc(50%-3.26px)] tracking-[0.076px]">40%</p>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="content-stretch flex items-center justify-center px-[1.284px] relative shrink-0">
                <div className="flex items-center justify-center"><div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.248px]"><p className="leading-[normal]">2</p></div></div>
                <div className="flex items-center justify-center px-[4.783px] rounded-[3.416px]">
                  <div className="flex flex-col items-start relative shrink-0">
                    <div className="relative shrink-0 size-[19.547px]">
                      <svg className="absolute block inset-0" fill="none" viewBox="0 0 19.5472 19.5471">
                        <path d={svgPaths.p8b5d00} fill="#E6E6E6" />
                        <path d={svgPaths.pcce80} fill="#EC221F" />
                      </svg>
                    </div>
                    <p className="-translate-x-1/2 absolute font-bold leading-[6.836px] left-[calc(50%+0.59px)] text-[#1e1e1e] text-[4.844px] text-center top-[calc(50%-3.26px)] tracking-[0.076px]">20%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Predictions Row */}
        <div className="bg-[#1e225d] content-stretch flex h-[35.561px] items-center justify-center p-[2.147px] relative rounded-[7.157px] shrink-0 w-full">
          <div className="content-stretch flex h-full items-center justify-center px-[7.157px] relative rounded-[3.578px] shrink-0">
            <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[10.019px] text-center tracking-[0.02px] uppercase whitespace-nowrap">
              <p className="leading-[normal]">predictions</p>
            </div>
          </div>
          <div className="bg-white content-stretch flex h-full items-center relative rounded-[5.725px] shrink-0">
            {/* 1X2 */}
            <div className="content-stretch flex items-center justify-center px-[7.157px] relative shrink-0">
              <div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.735px] text-center"><p className="leading-[normal]">1X2</p></div>
              <div className="flex items-center justify-center px-[5.01px] py-[3.975px] rounded-[3.578px]"><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[12.882px] text-[#1e225d] text-[10.019px]">1X</p></div>
            </div>
            {/* Goals */}
            <div className="content-stretch flex items-center justify-center px-[3.578px] relative shrink-0">
              <div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.735px] text-center"><p className="leading-[normal]">goals</p></div>
              <div className="flex items-center justify-center px-[5.01px] py-[3.975px] rounded-[3.578px]"><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[12.882px] text-[#1e225d] text-[10.019px]">U</p></div>
            </div>
            {/* Scores */}
            <div className="content-stretch flex items-center justify-center px-[3.578px] relative shrink-0">
              <div className="flex flex-col justify-center leading-[0] text-[#767676] text-[10.735px] text-center"><p className="leading-[normal]">Scores</p></div>
              <div className="flex items-center justify-center px-[5.01px] py-[3.975px] rounded-[3.578px]"><p className="font-['Space_Grotesk:Bold',sans-serif] font-bold leading-[12.882px] text-[#1e225d] text-[10.019px]">:</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Latest 10 Games Section ---
function Latest10Games() {
  const ProbabilityCircle = ({ val, color = "#1E225D" }: { val: number, color?: string }) => (
    <div className="relative size-[30px] flex items-center justify-center">
        <svg className="size-full rotate-[-90deg]" viewBox="0 0 36 36">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#F5F5F5" strokeWidth="4" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={color} strokeWidth="4" strokeDasharray={`${val}, 100`} />
        </svg>
        <span className="absolute text-[6px] font-bold" style={{color}}>{val}%</span>
    </div>
  );

  const StatBlock = ({ headerBg, color }: { headerBg: string, color: string }) => (
      <div className="flex-1 rounded-[10px] overflow-hidden border border-[#f3f3f3]">
          <div className={`${headerBg} py-[3px] flex justify-center`}>
              <span className="text-[8px] text-white font-normal uppercase tracking-[0.02em]">Over in % of games</span>
          </div>
          <div className="bg-white flex justify-center items-center gap-[10px] p-[5px]">
              <div className="flex flex-col items-center gap-[2px]">
                  <span className="text-[8px] text-[#1e1e1e]">1.5</span>
                  <ProbabilityCircle val={40} color={color} />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                  <span className="text-[8px] text-[#1e1e1e]">2.5</span>
                  <ProbabilityCircle val={40} color={color} />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                  <span className="text-[8px] text-[#1e1e1e]">3.5</span>
                  <ProbabilityCircle val={40} color={color} />
              </div>
          </div>
      </div>
  );

  return (
    <div className="bg-[#e9e9ef] rounded-[20px] w-full p-[10px] flex flex-col gap-[10px]">
        <div className="w-full text-[17px] font-medium text-[#1e1e1e] px-[5px]">Latest 10 Games</div>
        
        {/* Crystal Palace Row */}
        <div className="bg-white rounded-[18px] p-[10px] flex items-center gap-[10px]">
            <img src={imgCrystalPalace1} className="w-[40px] h-[40px] object-contain" />
            <div className="flex flex-col gap-[5px] flex-1">
                <StatBlock headerBg="bg-[#1e225d]" color="#1e225d" />
                <StatBlock headerBg="bg-[#14ae5c]" color="#14ae5c" />
            </div>
        </div>

        {/* Man Utd Row */}
        <div className="bg-white rounded-[18px] p-[10px] flex items-center gap-[10px]">
            <img src={imgManchesterUnited1} className="w-[40px] h-[40px] object-contain" />
            <div className="flex flex-col gap-[5px] flex-1">
                <StatBlock headerBg="bg-[#1e225d]" color="#1e225d" />
                <StatBlock headerBg="bg-[#14ae5c]" color="#14ae5c" />
            </div>
        </div>
    </div>
  );
}

// --- Compare Teams Section ---

function CT_StatusBar({ statuses }: { statuses: string[] }) {
  const getBg = (s: string) => {
    switch(s) {
      case 'W': return 'bg-[#68d100]';
      case 'L': return 'bg-[#ec1c24]';
      default: return 'bg-[#ffc501]';
    }
  };

  return (
    <div className="content-stretch flex gap-[2.749px] items-center justify-center relative shrink-0">
      {statuses.map((status, i) => (
        <div key={i} className={`${getBg(status)} content-stretch flex h-[13.105px] items-center justify-center px-[3.971px] py-[1.588px] relative rounded-[1.65px] shrink-0 w-[13.103px]`}>
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[5.08px] text-white uppercase" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {status}
          </p>
        </div>
      ))}
    </div>
  );
}

function CT_DonutChart() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[54px]">
        <div className="absolute bottom-0 left-[12.85%] right-0 top-1/2">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47.0636 27">
            <path d={svgPathsCompare.p29b35580} fill="var(--fill-0, #14AE5C)" id="Ellipse 13" />
          </svg>
        </div>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[54px]">
        <div className="absolute bottom-1/2 left-[57.11%] right-0 top-[0.7%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.1617 26.6211">
            <path d={svgPathsCompare.p21bb2100} fill="var(--fill-0, #C00F0C)" id="Ellipse 14" />
          </svg>
        </div>
      </div>
      <div className="col-1 ml-0 mt-0 relative row-1 size-[54px]">
        <div className="absolute inset-[0_41.83%_16.29%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.41 45.2027">
            <path d={svgPathsCompare.p2877c700} fill="var(--fill-0, #B3B3B3)" id="Ellipse 15" />
          </svg>
        </div>
      </div>
      <div className="col-1 content-stretch flex flex-col h-[22.925px] items-center justify-center ml-[14.77px] mt-[15.54px] relative row-1 w-[24.453px]">
        <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[12.226px] text-center w-full">
          <p className="leading-[normal] whitespace-pre-wrap">10</p>
        </div>
        <div className="relative shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#d9d9d9] border-solid border-t-[0.255px] inset-0 pointer-events-none" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[2.547px] relative w-full">
              <div className="flex flex-col font-['Space_Grotesk:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[5.901px] text-center whitespace-nowrap">
                <p className="leading-[normal]">Matches</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CT_StatRow({ type, count, label }: { type: 'win' | 'draw' | 'loss', count: number, label: string }) {
  const icon = type === 'win' ? (
    <div className="h-[8.774px] relative shrink-0 w-[7.678px]"><svg className="block size-full" fill="none" viewBox="0 0 7.67761 8.77441"><g clipPath="url(#clip0_138_723)"><path d={svgPathsCompare.p17049180} fill="white" /></g><defs><clipPath id="clip0_138_723"><rect fill="white" height="8.77441" width="7.67761" /></clipPath></defs></svg></div>
  ) : type === 'draw' ? (
    <div className="relative shrink-0 size-[8.57px]"><svg className="block size-full" fill="none" viewBox="0 0 8.57036 8.57036"><g><path d="M1.60654 4.28531H6.96302Z" fill="white" /><path d="M1.60654 4.28531H6.96302" stroke="white" strokeLinecap="round" strokeWidth="1.28071" /></g></svg></div>
  ) : (
    <div className="relative shrink-0 size-[8.57px]"><svg className="block size-full" fill="none" viewBox="0 0 8.57036 8.57036"><path d={svgPathsCompare.p2e3ddf80} fill="white" /></svg></div>
  );

  const bg = type === 'win' ? 'bg-[#5dba00]' : type === 'draw' ? 'bg-[#b3b3b3]' : 'bg-[#da2a30]';

  return (
    <div className={`content-stretch flex gap-[5.856px] items-${type === 'loss' ? 'end' : 'start'} relative shrink-0 w-full`}>
      <div className={`${bg} content-stretch flex flex-col gap-[0.982px] items-center justify-center relative rounded-[19.921px] shrink-0 size-[13.518px]`}>
        {icon}
      </div>
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[0px] whitespace-nowrap">
        <p className="text-[10.397px]">
          <span className="leading-[normal]">{`${count} - ${label} `}</span>
          <span className="font-['Space_Grotesk:Regular',sans-serif] font-normal leading-[normal]">in last 0 games</span>
        </p>
      </div>
    </div>
  );
}

function CT_TeamCard({ teamName, logo, statuses }: { teamName: string, logo: string, statuses: string[] }) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[18px]">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-center justify-center pb-[15px] pt-[10px] px-[10px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[40.426px]">
            <div className="absolute inset-0">
               <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={logo} />
            </div>
          </div>
          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
            <CT_StatusBar statuses={statuses} />
          </div>
          <div className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0 w-full">
            <CT_DonutChart />
            <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0">
              <CT_StatRow type="win" count={10} label="Wins" />
              <CT_StatRow type="draw" count={10} label="Draws" />
              <CT_StatRow type="loss" count={10} label="Losses" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompareTeams() {
  return (
    <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[10px] relative rounded-[20px] size-full">
      {/* Header */}
      <div className="relative rounded-[10px] shrink-0 w-full">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[10px] py-[5px] relative w-full">
            <p className="capitalize flex-[1_0_0] font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px relative text-[#1e1e1e] text-[17px] whitespace-pre-wrap">Compare Teams</p>
          </div>
        </div>
      </div>
      
      {/* Team Cards */}
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
        <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
          <CT_TeamCard 
            teamName="Crystal Palace" 
            logo={imgCrystalPalace1} 
            statuses={['L', 'W', 'L', 'D', 'W']}
          />
          <CT_TeamCard 
            teamName="Manchester United" 
            logo={imgManchesterUnited1} 
            statuses={['L', 'W', 'L', 'D', 'W']}
          />
        </div>
      </div>
    </div>
  );
}

// --- Previous Meetings Section ---
function PM_MatchRow({ 
  league = "Spain: La Liga", 
  date = "14/02/25", 
  score = "3 - 5", 
  team1Name = "Crystal Palace", 
  team1Logo = imgCrystalPalace1,
  team1Status = "W",
  team2Name = "Manchester United",
  team2Logo = imgManchesterUnited1,
  team2Status = "L" 
}: {
  league?: string,
  date?: string,
  score?: string,
  team1Name?: string,
  team1Logo?: string,
  team1Status?: string,
  team2Name?: string,
  team2Logo?: string,
  team2Status?: string
}) {
  const getStatusBg = (s: string) => s === 'W' ? 'bg-[#68d100]' : s === 'L' ? 'bg-[#ec1c24]' : 'bg-[#b3b3b3]';

  return (
    <div className="bg-white rounded-[10px] w-full p-[5px] flex flex-col gap-[5px]">
        {/* League Header */}
        <div className="flex items-center justify-center gap-[5px] pb-[5px] border-b border-[#f3f3f3]">
             <img src={imgImage214} className="size-[12px] object-contain" />
             <p className="font-['Space_Grotesk:Medium',sans-serif] text-[9px] text-[#1e1e1e] capitalize">{league}</p>
        </div>

        {/* Match Row */}
        <div className="flex items-center justify-between w-full">
            {/* Team 1 (Right aligned text) */}
            <div className="flex items-center justify-end gap-[5px] flex-1">
                <p className="font-['Space_Grotesk:Bold',sans-serif] text-[11px] text-[#1e1e1e] text-right font-bold truncate">{team1Name}</p>
                <div className="size-[28px] relative shrink-0">
                    <img src={team1Logo} className="object-contain size-full" />
                </div>
                <div className={`${getStatusBg(team1Status)} w-[14px] h-[14px] flex items-center justify-center rounded-[2px] shrink-0`}>
                    <p className="text-[8px] font-bold text-white">{team1Status}</p>
                </div>
            </div>

            {/* Date / Score */}
            <div className="flex flex-col items-center gap-[2px] mx-[5px] min-w-[40px]">
                <p className="text-[8px] text-[#757575]">{date}</p>
                <div className="bg-[#f5f5f5] rounded-[4px] px-[6px] py-[2px]">
                    <p className="text-[9px] font-bold text-[#1a1919]">{score}</p>
                </div>
            </div>

            {/* Team 2 (Left aligned text) */}
            <div className="flex items-center justify-start gap-[5px] flex-1">
                <div className={`${getStatusBg(team2Status)} w-[14px] h-[14px] flex items-center justify-center rounded-[2px] shrink-0`}>
                    <p className="text-[8px] font-bold text-white">{team2Status}</p>
                </div>
                <div className="size-[28px] relative shrink-0">
                    <img src={team2Logo} className="object-contain size-full" />
                </div>
                <p className="font-['Space_Grotesk:Bold',sans-serif] text-[11px] text-[#1e1e1e] text-left font-bold truncate">{team2Name}</p>
            </div>
        </div>
    </div>
  );
}

function PreviousMeetings({ title = "Previous Meetings", teamName, logo }: { title?: string, teamName?: string, logo?: string }) {
    return (
        <div className="bg-[#e9e9ef] rounded-[20px] w-full p-[10px] flex flex-col gap-[10px]">
            {teamName ? (
                <div className="flex items-center gap-[10px] px-[5px]">
                    <div className="size-[40px] relative shrink-0">
                        <img src={logo} className="object-contain size-full" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-['Space_Grotesk:Medium',sans-serif] text-[15px] text-[#1e1e1e] leading-tight font-medium capitalize">{teamName}</p>
                        <p className="font-['Space_Grotesk:Regular',sans-serif] text-[12px] text-[#5a5a5a] leading-tight capitalize">Previous Matches</p>
                    </div>
                </div>
            ) : (
                <div className="w-full text-[17px] font-medium text-[#1e1e1e] px-[5px] font-['Space_Grotesk:Medium',sans-serif] capitalize">{title}</div>
            )}
            
            <div className="flex flex-col gap-[5px]">
                <PM_MatchRow team1Status="W" team2Status="L" />
                <PM_MatchRow team1Status="W" team2Status="L" />
                <PM_MatchRow team1Status="W" team2Status="L" />
                <PM_MatchRow team1Status="W" team2Status="L" />
                <PM_MatchRow team1Status="W" team2Status="L" />
            </div>
        </div>
    );
}

// --- League Table Component ---
function LeagueTable() {
  const teams = [
    { rank: 1, team: "Liverpool", logo: imgLiverpool1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 2, team: "Chelsea", logo: imgChelsea1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 3, team: "Man City", logo: imgManchesterCity1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 4, team: "Man Utd", logo: imgManchesterUnited1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 5, team: "Arsenal", logo: imgArsenal1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 6, team: "Brentford", logo: imgBrentford1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 6, team: "Newcastle", logo: imgNewcastleUnited1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 6, team: "Luton", logo: imgLutonTown1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 6, team: "Everton", logo: imgEverton1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 18, team: "Fulham", logo: imgFulham1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 19, team: "Burnley", logo: imgBurnley1, gp: 14, goals: "40 - 14", pts: 22 },
    { rank: 20, team: "Crystal Palace", logo: imgCrystalPalace1, gp: 14, goals: "40 - 14", pts: 22 },
  ];

  return (
    <div className="bg-[#e9e9ef] relative rounded-[20px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[5px] items-start p-[5px] relative w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-end relative shrink-0 w-full">
           <div className="relative rounded-t-[15px] shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[5px] items-start justify-center px-[15px] py-[10px] relative w-full">
                 <p className="capitalize font-['Space_Grotesk:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#1e1e1e] text-[17px]">English Premier League Table</p>
              </div>
           </div>
           <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full">
              {/* Table Header */}
              <div className="relative shrink-0 w-full">
                 <div className="content-stretch flex items-center px-[10px] py-[5px] relative w-full">
                    <div className="w-[36px] text-center text-[#757575] text-[14px]">#</div>
                    <div className="flex-1 text-[#757575] text-[15px] pl-[10px]">Team</div>
                    <div className="flex gap-[20px] w-[124px] justify-between px-[10px] text-[#757575] text-[15px] font-medium uppercase">
                       <span>GP</span>
                       <span>GD</span>
                       <span>P</span>
                    </div>
                 </div>
                 <div className="absolute border-[#f3f3f3] border-b border-solid inset-0 pointer-events-none" />
              </div>
              
              {/* Rows */}
              <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full">
                 {teams.map((t, i) => <TableRow key={i} {...t} />)}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Export ---
export default function Frame128() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <Header />
          
          {/* Main Prediction Card Section - Replaces previous simplified version */}
          <PredictionCard />
          
          <div className="w-full flex flex-col gap-[20px]">
             <div className="bg-[#e9e9ef] rounded-[20px] w-full p-[10px] flex flex-col gap-[10px]">
        <div className="w-full text-[17px] font-medium text-[#1e1e1e] px-[5px]">Latest 10 Games</div>
        
        {/* Crystal Palace Row */}
        <div className="bg-white rounded-[18px] p-[10px] flex items-center gap-[10px]">
            <img src={imgCrystalPalace1} className="w-[40px] h-[40px] object-contain" />
            <div className="flex flex-col gap-[5px] flex-1">
                <div className="flex-1 rounded-[10px] overflow-hidden border border-[#f3f3f3]">
                    <div className="bg-[#1e225d] py-[3px] flex justify-center">
                        <span className="text-[8px] text-white font-normal uppercase tracking-[0.02em]">Over in % of games</span>
                    </div>
                    <div className="bg-white flex justify-center items-center gap-[10px] p-[5px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">1.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p1876b100} fill="#F5F5F5" />
                                    <path d={svgPaths.p2dd9900} fill="#1E225D" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#1e225d]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">2.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p2f345b80} fill="#F5F5F5" />
                                    <path d={svgPaths.p1a5f700} fill="#1E225D" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#1e225d]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">3.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p7ff8e80} fill="#F5F5F5" />
                                    <path d={svgPaths.p2a7e1c00} fill="#1E225D" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#1e225d]">40.00%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 rounded-[10px] overflow-hidden border border-[#f3f3f3]">
                    <div className="bg-[#14ae5c] py-[3px] flex justify-center">
                        <span className="text-[8px] text-white font-normal uppercase tracking-[0.02em]">Over in % of games</span>
                    </div>
                    <div className="bg-white flex justify-center items-center gap-[10px] p-[5px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">1.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p1876b100} fill="#F5F5F5" />
                                    <path d={svgPaths.p2dd9900} fill="#14AE5C" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#009951]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">2.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p2f345b80} fill="#F5F5F5" />
                                    <path d={svgPaths.p1a5f700} fill="#14AE5C" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#009951]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">3.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p7ff8e80} fill="#F5F5F5" />
                                    <path d={svgPaths.p2a7e1c00} fill="#14AE5C" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#009951]">40.00%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Man Utd Row */}
        <div className="bg-white rounded-[18px] p-[10px] flex items-center gap-[10px]">
            <img src={imgManchesterUnited1} className="w-[40px] h-[40px] object-contain" />
            <div className="flex flex-col gap-[5px] flex-1">
                <div className="flex-1 rounded-[10px] overflow-hidden border border-[#f3f3f3]">
                    <div className="bg-[#1e225d] py-[3px] flex justify-center">
                        <span className="text-[8px] text-white font-normal uppercase tracking-[0.02em]">Over in % of games</span>
                    </div>
                    <div className="bg-white flex justify-center items-center gap-[10px] p-[5px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">1.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p1876b100} fill="#F5F5F5" />
                                    <path d={svgPaths.p2dd9900} fill="#1E225D" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#1e225d]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">2.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p2f345b80} fill="#F5F5F5" />
                                    <path d={svgPaths.p1a5f700} fill="#1E225D" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#1e225d]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">3.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p7ff8e80} fill="#F5F5F5" />
                                    <path d={svgPaths.p2a7e1c00} fill="#1E225D" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#1e225d]">40.00%</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="flex-1 rounded-[10px] overflow-hidden border border-[#f3f3f3]">
                    <div className="bg-[#14ae5c] py-[3px] flex justify-center">
                        <span className="text-[8px] text-white font-normal uppercase tracking-[0.02em]">Over in % of games</span>
                    </div>
                    <div className="bg-white flex justify-center items-center gap-[10px] p-[5px]">
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">1.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p1876b100} fill="#F5F5F5" />
                                    <path d={svgPaths.p2dd9900} fill="#14AE5C" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#009951]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">2.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p2f345b80} fill="#F5F5F5" />
                                    <path d={svgPaths.p1a5f700} fill="#14AE5C" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#009951]">40.00%</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-[2px]">
                            <span className="text-[8px] text-[#1e1e1e]">3.5</span>
                            <div className="relative size-[30px] flex items-center justify-center">
                                <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
                                    <path d={svgPaths.p7ff8e80} fill="#F5F5F5" />
                                    <path d={svgPaths.p2a7e1c00} fill="#14AE5C" />
                                </svg>
                                <span className="absolute text-[6px] font-bold text-[#009951]">40.00%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
             <CompareTeams />
             <PreviousMeetings title="Previous Matches" />
             <PreviousMeetings teamName="Crystal Palace" logo={imgCrystalPalace1} />
             <PreviousMeetings teamName="Manchester United" logo={imgManchesterUnited1} />
          </div>

          <div className="backdrop-blur-[2px] bg-white relative rounded-[20px] shrink-0 w-full p-[5px] flex flex-col gap-[20px]">
             <LeagueTable />
          </div>
        </div>
      </div>
    </div>
  );
}