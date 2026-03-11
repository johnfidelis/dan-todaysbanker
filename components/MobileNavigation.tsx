"use client"
import React from 'react';
import svgPaths from "@/imports/svg-3i6rs4ao2x";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  pageId: string;
  isActive: boolean;
  onNavigate?: (page: string) => void;
}

function NavItem({ icon, label, pageId, isActive, onNavigate }: NavItemProps) {
  return (
    <button 
      onClick={() => onNavigate?.(pageId)}
      className={`flex items-center gap-[5px] px-[12px] py-[8px] rounded-[7px] backdrop-blur-[7.25px] whitespace-nowrap shrink-0 ${isActive ? 'bg-white/10' : ''}`}
    >
      {icon}
      <span className={`text-[12px] font-sans ${isActive ? 'font-medium text-white' : 'font-normal text-[#f3f3f3]'}`}>
        {label}
      </span>
      {isActive && <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white rounded-t-sm mx-[10px]" />}
    </button>
  );
}

function SoccerBallIcon() {
  return (
    <div className="w-[17.45px] h-[17.45px]">
      <svg className="w-full h-full" viewBox="0 0 17.4545 17.4545" fill="none">
        <path d={svgPaths.p2e6f6100} fill="white" />
      </svg>
    </div>
  );
}

function FireIcon() {
  return (
    <div className="w-[17.45px] h-[17.45px]">
      <svg className="w-full h-full" viewBox="0 0 17.4545 17.4545" fill="none">
        <path d={svgPaths.p226b80c0} fill="#F3F3F3" />
      </svg>
    </div>
  );
}

function NewspaperIcon() {
  return (
    <div className="w-[16px] h-[16px]">
      <svg className="w-full h-full" viewBox="0 0 15 15" fill="none">
        <path d={svgPaths.p375e3100} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p3633bb80} stroke="white" strokeLinejoin="round" />
        <path d={svgPaths.p1f648d18} stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path d={svgPaths.p24564af0} stroke="white" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function TrophyIcon() {
  return (
    <div className="w-[16px] h-[16px]">
       <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    </div>
  );
}

interface MobileNavigationProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export default function MobileNavigation({ onNavigate, currentPage = 'home' }: MobileNavigationProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide px-[10px] py-[10px] bg-[#1e2749]/50 backdrop-blur-[3px]">
      <div className="flex gap-[10px]">
        <NavItem 
          icon={<SoccerBallIcon />} 
          label="Home" 
          pageId="home" 
          isActive={currentPage === 'home'} 
          onNavigate={onNavigate}
        />
        <NavItem 
          icon={<FireIcon />} 
          label="Bet of The Day" 
          pageId="bet-of-the-day" 
          isActive={currentPage === 'bet-of-the-day'} 
          onNavigate={onNavigate}
        />
        <NavItem 
          icon={<NewspaperIcon />} 
          label="Blog" 
          pageId="blog" 
          isActive={currentPage === 'blog'} 
          onNavigate={onNavigate}
        />
        <NavItem 
          icon={<TrophyIcon />} 
          label="Leagues" 
          pageId="leagues" 
          isActive={currentPage === 'leagues'} 
          onNavigate={onNavigate}
        />
      </div>
    </div>
  );
}
