"use client"
import React from 'react';
import svgPaths from "@/imports/svg-au4lahkmtd";
import svgPathsMobile from "@/imports/svg-lc1fofjioj";
import  BetOfTheDayCard  from './BetOfTheDayCard';

// Placeholder image for La Liga logo
const imgLaLiga = "https://images.unsplash.com/photo-1628936274131-de999fec20dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFuaXNoJTIwZm9vdGJhbGwlMjBsZWFndWUlMjBsb2dvJTIwc29jY2VyfGVufDF8fHx8MTc3MTgzNzEzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

function NotoFire() {
  return (
    <>
      {/* Desktop Icon */}
      <div className="hidden md:block relative shrink-0 size-[52px]" data-name="noto:fire">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 52">
          <g id="noto:fire">
            <path d={svgPaths.p33d12980} fill="url(#paint0_radial_10_119334)" id="Vector" />
            <path d={svgPaths.p10cb6340} fill="url(#paint1_radial_10_119334)" id="Vector_2" />
          </g>
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-28.676 -0.124454 -0.20446 47.0515 25.2752 50.4972)" gradientUnits="userSpaceOnUse" id="paint0_radial_10_119334" r="1">
              <stop offset="0.314" stopColor="#FF9800" />
              <stop offset="0.662" stopColor="#FF6D00" />
              <stop offset="0.972" stopColor="#F44336" />
            </radialGradient>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(-0.303057 30.0026 22.5792 0.228043 26.8856 21.9612)" gradientUnits="userSpaceOnUse" id="paint1_radial_10_119334" r="1">
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
      {/* Mobile Icon */}
      <div className="md:hidden relative shrink-0 size-[33.639px]" data-name="noto:fire">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.6392 33.6392">
          <g id="noto:fire">
            <path d={svgPathsMobile.p1e246100} fill="url(#paint0_radial_26_42)" id="Vector" />
            <path d={svgPathsMobile.p20fc7d00} fill="url(#paint1_radial_26_42)" id="Vector_2" />
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
    </>
  );
}

export default function BetOfTheDayPage() {
  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Header Banner */}
      <div className="bg-gradient-to-b content-stretch flex flex-col from-[#fc5f12] gap-[20px] items-start overflow-clip p-[10px] relative rounded-[20px] w-full to-[#96390b]" data-name="listItem">
        <div className="-translate-y-1/2 absolute h-[136.915px] right-[-10.07px] md:right-[-20.07px] top-[calc(50%-1.01px)] md:top-[calc(50%-3.54px)] w-[137.065px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
            <path d={svgPaths.p24c70280} fill="white" id="Vector" opacity="0.17" />
            </svg>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="listFTmatches">
            <div className="content-stretch flex gap-[9.704px] md:gap-[15px] items-center py-[6.469px] md:py-[10px] relative shrink-0 w-full">
                <NotoFire />
                <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
                    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 text-white w-full">
                        <p className="font-sans font-bold leading-[30.004px] md:leading-[53.02px] relative shrink-0 text-[18.753px] md:text-[33.137px]">Bet of The Day</p>
                        <p className="font-sans font-medium leading-[normal] relative shrink-0 text-[11.318px] md:text-[20px]">5th September</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Main Content List - Updated to match ListItemNew design */}
      <div className="bg-[#e9e9ef] content-stretch flex flex-col gap-[5px] items-start overflow-clip p-[10px] relative rounded-[20px] w-full" data-name="listItemNew">
         
         {/* League Header */}
         <div className="relative rounded-[10px] shrink-0 w-full">
            <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between px-[15px] py-[5px] relative w-full">
                    {/* Left side */}
                    <div className="content-stretch flex flex-[1_0_0] gap-[3.667px] md:gap-[5px] items-center min-h-px min-w-px relative">
                        <div className="relative shrink-0 size-[22px] md:size-[30px]">
                            <img alt="League Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLaLiga} />
                        </div>
                        <div className="capitalize content-stretch flex flex-col font-sans font-medium items-start justify-center leading-[normal] relative shrink-0 text-center">
                            <p className="relative shrink-0 text-[#1e1e1e] text-[11.733px] md:text-[16px]">La Liga</p>
                            <p className="relative shrink-0 text-[#757575] text-[8.8px] md:text-[12px]">Spain</p>
                        </div>
                    </div>
                    {/* Right side - New SVG Icon */}
                    <div className="overflow-clip relative shrink-0 size-[18px] md:size-[22px]">
                         <div className="absolute inset-[8.33%]">
                            <div className="absolute inset-[-5%]">
                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.46 16.46">
                                    <g>
                                        <path d={svgPathsMobile.p228f1100} stroke="#767676" strokeLinejoin="round" strokeWidth="1.46" />
                                        <path d={svgPathsMobile.p3c654780} stroke="#767676" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46" />
                                    </g>
                                </svg>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
         </div>
         
         {/* List of Cards */}
         <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            <BetOfTheDayCard />
            <BetOfTheDayCard />
            <BetOfTheDayCard />
            <BetOfTheDayCard />
            <BetOfTheDayCard />
         </div>

      </div>
    </div>
  );
}