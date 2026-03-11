"use client"
import React from 'react';
import svgPaths from "@/imports/svg-ghlhl4y30n";
import svgPathsMobile from "@/imports/svg-lc1fofjioj";

// Placeholder images from Unsplash to prevent "Failed to fetch" errors with invalid figma assets
const imgCrystalPalace1 = "https://images.unsplash.com/photo-1715545226118-dc42faf8d6f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBiYWxsJTIwZm9vdGJhbGwlMjBtYXRjaHxlbnwxfHx8fDE3NzE4MzY3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";
const imgManchesterUnited1 = "https://images.unsplash.com/photo-1549923015-badf41b04831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMG1hdGNoJTIwY3Jvd2R8ZW58MXx8fHwxNzcxODExMDM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

const colors = ["bg-[#ec1c24]", "bg-[#68d100]", "bg-[#ec1c24]", "bg-[#68d100]", "bg-[#ffc501]"];

function FormDots() {
    return (
        <div className="content-stretch flex gap-[1.653px] md:gap-[2.515px] items-center justify-center relative shrink-0">
            {colors.map((c, i) => (
                <div key={i} className={`${c} content-stretch flex h-[7.879px] md:h-[11.989px] items-center justify-center px-[2.388px] md:px-[3.633px] py-[0.955px] md:py-[1.453px] rounded-[24.211px] md:rounded-[36.842px] shrink-0 w-[7.878px] md:w-[11.988px]`} />
            ))}
        </div>
    );
}

function DonutChart({ percent, color }: { percent: string, color: string }) {
    // Mobile paths (using svgPathsMobile) have different viewBox and paths than desktop (svgPaths)
    // We render both and switch visibility
    return (
        <div className="content-stretch flex flex-col items-start relative shrink-0">
            <div className="relative shrink-0 size-[16.231px] md:size-[24.814px]">
                {/* Desktop SVG */}
                <svg className="hidden md:block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24.8142 24.8142">
                    <g>
                        <path d={svgPaths.p24298800} fill="#E6E6E6" />
                        <path d={svgPaths.p262bb980} fill={color} />
                    </g>
                </svg>
                {/* Mobile SVG - paths and viewBox from mobile export */}
                 <svg className="md:hidden block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2314 16.2314">
                    <g>
                        <path d={svgPathsMobile.p258ded00} fill="#E6E6E6" />
                        <path d={svgPathsMobile.p3dd89c00} fill={color} />
                    </g>
                </svg>
            </div>
            <p className="-translate-x-1/2 absolute font-sans font-bold leading-[5.676px] md:leading-[8.677px] left-[calc(50%+0.84px)] md:left-[calc(50%+0.91px)] text-[#1e1e1e] text-[4.022px] md:text-[6.149px] text-center top-[calc(50%-2.71px)] md:top-[calc(50%-4.14px)] tracking-[0.0631px] md:tracking-[0.0964px]">{percent}</p>
        </div>
    )
}

function ProbabilityGroup() {
    return (
        <div className="bg-[#dddee7] content-stretch flex h-full items-center justify-center p-[1.702px] md:p-[2.602px] relative rounded-[5.673px] md:rounded-[8.673px] shrink-0">
            {/* Label */}
            <div className="content-stretch flex h-full items-center justify-center px-[5.673px] md:px-[8.673px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#5a5a5a] text-[7.943px] md:text-[12.143px] text-center tracking-[0.0159px] md:tracking-[0.0243px] uppercase whitespace-nowrap">
                    <p className="leading-[normal]">Prob. %</p>
                </div>
            </div>
            {/* Values */}
            <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.539px] md:rounded-[6.939px] shrink-0">
                {/* 1 */}
                <div className="content-stretch flex items-center justify-center px-[1.066px] md:px-[4.337px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="capitalize flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.51px] md:text-[13.01px] text-center whitespace-nowrap">
                            <p className="leading-[normal]">1</p>
                        </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center px-[3.971px] md:px-[6.071px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                        <DonutChart percent="80%" color="#14AE5C" />
                    </div>
                </div>
                {/* X */}
                <div className="content-stretch flex items-center justify-center px-[1.066px] md:px-[4.337px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="capitalize flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.51px] md:text-[13.01px] text-center whitespace-nowrap">
                            <p className="leading-[normal]">X</p>
                        </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center px-[3.971px] md:px-[6.071px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                         <DonutChart percent="40%" color="#E8B931" />
                    </div>
                </div>
                {/* 2 */}
                <div className="content-stretch flex items-center justify-center px-[1.066px] md:px-[4.337px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="capitalize flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.51px] md:text-[13.01px] text-center whitespace-nowrap">
                             <p className="leading-[normal]">2</p>
                        </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center px-[3.971px] md:px-[6.071px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                        <DonutChart percent="20%" color="#EC221F" />
                    </div>
                </div>
            </div>
        </div>
    )
}

function PredictionsGroup() {
    return (
        <div className="bg-[#1e225d] content-stretch flex h-full items-center justify-center p-[1.702px] md:p-[2.602px] relative rounded-[5.673px] md:rounded-[8.673px] shrink-0">
            {/* Label */}
             <div className="content-stretch flex h-full items-center justify-center px-[5.673px] md:px-[8.673px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                <div className="flex flex-col font-sans font-medium justify-center leading-[0] relative shrink-0 text-[#e9e9ef] text-[7.943px] md:text-[12.143px] text-center tracking-[0.0159px] md:tracking-[0.0243px] uppercase whitespace-nowrap">
                    <p className="leading-[normal]">predictions</p>
                </div>
            </div>
            {/* Content */}
            <div className="bg-white content-stretch flex h-full items-center relative rounded-[4.539px] md:rounded-[6.939px] shrink-0">
                {/* Pick */}
                <div className="content-stretch flex items-center justify-center px-[3.199px] md:px-[8.673px] relative shrink-0">
                    <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="capitalize flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.51px] md:text-[13.01px] text-center whitespace-nowrap">
                            <p className="leading-[normal]">pick On</p>
                        </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center px-[3.971px] md:px-[6.071px] py-[3.151px] md:py-[4.817px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                        <p className="font-sans font-bold leading-[10.212px] md:leading-[15.612px] relative shrink-0 text-[#009951] text-[7.943px] md:text-[12.143px] text-center tracking-[0.1135px] md:tracking-[0.1735px]">Man. United Win</p>
                    </div>
                </div>
                {/* Odds */}
                <div className="content-stretch flex items-center justify-center px-[1.066px] md:px-[4.337px] relative shrink-0">
                     <div className="content-stretch flex items-center justify-center relative shrink-0">
                        <div className="capitalize flex flex-col font-sans font-normal justify-center leading-[0] relative shrink-0 text-[#767676] text-[8.51px] md:text-[13.01px] text-center whitespace-nowrap">
                            <p className="leading-[normal]">Odds</p>
                        </div>
                    </div>
                    <div className="content-stretch flex items-center justify-center px-[3.971px] md:px-[6.071px] py-[3.151px] md:py-[4.817px] relative rounded-[2.837px] md:rounded-[4.337px] shrink-0">
                         <p className="font-sans font-bold leading-[10.212px] md:leading-[15.612px] relative shrink-0 text-[#1e225d] text-[7.943px] md:text-[12.143px] text-center tracking-[0.1135px] md:tracking-[0.1735px]">2.4</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function BetOfTheDayCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start py-[10px] relative rounded-[18px] shrink-0 w-full shadow-sm">
        <div className="relative shrink-0 w-full">
             <div className="flex flex-row justify-center size-full">
                <div className="content-stretch flex gap-[10px] items-start justify-center px-[10px] relative w-full">
                    
                    {/* Home Logo */}
                    <div className="overflow-clip relative shrink-0 size-[34.647px] md:size-[69px]">
                        <div className="absolute h-[25.664px] md:h-[51.111px] left-[7.06px] md:left-[14.06px] top-[4.49px] md:top-[8.95px] w-[20.573px] md:w-[40.971px]">
                            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCrystalPalace1} />
                        </div>
                    </div>

                    {/* Middle Section */}
                    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-center min-h-px min-w-px relative">
                        
                        {/* Teams and Time */}
                        <div className="content-stretch flex gap-[10px] md:gap-[15px] items-center relative shrink-0 w-full">
                            {/* Home Name */}
                            <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center justify-end min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col gap-[2px] items-end relative shrink-0">
                                    <p className="font-sans font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] md:text-[14px] text-ellipsis text-right tracking-[0.2px]">Crystal Palace</p>
                                    <FormDots />
                                </div>
                            </div>
                            
                            {/* Time */}
                            <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0">
                                <div className="bg-[#eaeaea] md:bg-[#f5f5f5] content-stretch flex flex-col items-center py-[4px] relative rounded-[5px] shrink-0">
                                     <div className="content-stretch flex flex-col items-center justify-center px-[7px] relative shrink-0">
                                        <p className="font-sans font-bold leading-[normal] relative shrink-0 text-[#1a1919] text-[11px] md:text-[14px] text-center tracking-[0.2px] w-full whitespace-pre-wrap">13:00</p>
                                    </div>
                                </div>
                            </div>

                            {/* Away Name */}
                            <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative">
                                <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                                    <p className="font-sans font-bold leading-[18px] overflow-hidden relative shrink-0 text-[#1e1e1e] text-[11px] md:text-[14px] text-ellipsis tracking-[0.2px]">Manchester United</p>
                                    <FormDots />
                                </div>
                            </div>
                        </div>

                        {/* Odds and Predictions Row */}
                        <div className="content-stretch flex gap-[5.673px] md:gap-[8.673px] h-[22.693px] md:h-[34.693px] items-center overflow-clip relative shrink-0 w-full overflow-x-auto scrollbar-hide">
                            <ProbabilityGroup />
                            <PredictionsGroup />
                        </div>

                    </div>

                    {/* Away Logo */}
                    <div className="overflow-clip relative shrink-0 size-[34.647px] md:size-[69px]">
                        <div className="absolute h-[25.664px] md:h-[51.111px] left-[4.62px] md:left-[9.2px] top-[4.49px] md:top-[8.95px] w-[25.327px] md:w-[50.439px]">
                             <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgManchesterUnited1} />
                        </div>
                    </div>

                </div>
             </div>
        </div>
    </div>
  );
}