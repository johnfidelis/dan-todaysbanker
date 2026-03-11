"use client"
import React from 'react';
import svgPaths from "../imports/svg-3i6rs4ao2x";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-[30.411px] w-[35.322px] relative shrink-0">
        <svg className="block w-full h-full" fill="none" viewBox="0 0 35.3222 30.4106">
          <path d={svgPaths.p39b9d700} fill="#389C52" />
          <path d={svgPaths.p2b56700} fill="#389C52" />
          <g>
            <path d={svgPaths.p1d5b51f0} fill="#389C52" />
            <path d={svgPaths.p35da6880} fill="#D2AD30" />
            <path d={svgPaths.pa434600} fill="#D2AD30" />
          </g>
        </svg>
      </div>
      <span className="font-sans text-[24px] text-white">TodaysBanker</span>
    </div>
  );
}

function TelegramIcon() {
  return (
    <div className="relative shrink-0 w-[32px] h-[32px]">
      <svg className="block w-full h-full" fill="none" viewBox="0 0 32 32">
        <defs>
          <linearGradient id="telegram_grad" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2AABEE" />
            <stop offset="1" stopColor="#229ED9" />
          </linearGradient>
        </defs>
        <path d={svgPaths.p1417db40} fill="url(#telegram_grad)" />
        <path d={svgPaths.p365edfc0} fill="white" />
      </svg>
    </div>
  );
}

export default function MobileHeader() {
  return (
    <div className="flex items-center justify-between px-[24px] py-[15px] w-full bg-[#1e2749]">
      <Logo />
      <div className="backdrop-blur-[7.25px] p-[5px] rounded-[7px]">
        <TelegramIcon />
      </div>
    </div>
  );
}
