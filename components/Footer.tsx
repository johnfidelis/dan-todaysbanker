"use client"
import React from 'react';
import svgPaths from "@/imports/svg-hg69mtg2so";

function Group() {
  return (
    <div className="h-[48.604px] relative shrink-0 w-[56.454px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.4541 48.6042">
        <g id="Group">
          <path d={svgPaths.pa887500} fill="#389C52" id="Vector" />
          <path d={svgPaths.p21de4c00} fill="#389C52" id="Vector_2" />
          <g id="Group_2">
            <path d={svgPaths.p3046ce00} fill="#389C52" id="Vector_3" />
            <path d={svgPaths.p269234f2} fill="#D2AD30" id="Vector_4" />
            <path d={svgPaths.p35a7e600} fill="#D2AD30" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <p className="font-sans leading-[normal] not-italic relative shrink-0 text-[25.996px] md:text-[39.583px] text-white">TodaysBanker</p>
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

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full">
      <Logo />
    </div>
  );
}

function MasterLink({ text }: { text: string }) {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Master Link">
      <p className="font-sans font-normal leading-[20px] relative shrink-0 text-[#f3f3f3] text-[11px] md:text-[16px] text-center">{text}</p>
    </div>
  );
}

function Link({ text }: { text: string }) {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <MasterLink text={text} />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[20px] md:h-full relative shrink-0 w-0">
      <div className="absolute inset-[0_-0.5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 20">
          <path d="M0.5 0V20" id="Vector 17" stroke="#D9D9D9" />
        </svg>
      </div>
    </div>
  );
}

function FooterLinks({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-wrap md:flex-nowrap gap-[9px] items-center justify-center relative w-full md:size-full" data-name="Footer Links">
      <div onClick={() => onNavigate?.('home')} className="cursor-pointer"><Link text="Home" /></div>
      <Separator />
      <div onClick={() => onNavigate?.('terms-of-use')} className="cursor-pointer"><Link text="Terms of Use" /></div>
      <Separator />
      <div onClick={() => onNavigate?.('privacy')} className="cursor-pointer"><Link text="Privacy" /></div>
      <Separator />
      <div onClick={() => onNavigate?.('faq')} className="cursor-pointer"><Link text="FAQ" /></div>
      <Separator />
      <div onClick={() => onNavigate?.('contact-us')} className="cursor-pointer"><Link text="Contact Us" /></div>
      <Separator />
      <div onClick={() => onNavigate?.('blog')} className="cursor-pointer"><Link text="Blog" /></div>
    </div>
  );
}

function Fa6BrandsSquareXTwitter() {
  return (
    <div className="h-[27.084px] relative shrink-0 w-[23.699px]" data-name="fa6-brands:square-x-twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.6987 27.0843">
        <g clipPath="url(#clip0_8_81769)" id="fa6-brands:square-x-twitter">
          <path d={svgPaths.p1a4f5200} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_81769">
            <rect fill="white" height="27.0843" width="23.6987" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame6() {
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
        <g clipPath="url(#clip0_8_81776)" id="simple-icons:telegram">
          <path d={svgPaths.p12d02c00} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_81776">
            <rect fill="white" height="27.0843" width="27.0843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
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
        <g clipPath="url(#clip0_8_81763)" id="simple-icons:facebook">
          <path d={svgPaths.p1d4de000} fill="white" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_8_81763">
            <rect fill="white" height="27.0843" width="27.0843" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[10.157px] items-center relative shrink-0">
      <SimpleIconsFacebook />
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="content-stretch flex gap-[20.066px] items-center justify-center relative shrink-0" data-name="Social Media Container">
      <Frame6 />
      <Frame5 />
      <Frame4 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col md:flex-row gap-[10px] md:gap-0 items-center md:items-start md:justify-between pt-[10px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(235,245,238,0.2)] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-sans font-normal leading-[20px] relative shrink-0 text-[#e6ecef] text-[13px] md:text-[18px]">
        Copyright © 2025 Todaysbanker All Rights Reserved.
      </p>
      <SocialMediaContainer />
    </div>
  );
}

function Frame3({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="relative rounded-[15px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[30px] items-center justify-center px-0 relative w-full">
          <Frame7 />
          <FooterLinks onNavigate={onNavigate} />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function Frame1({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="backdrop-blur-[7.45px] bg-[#0b0c21] relative rounded-[20px] md:rounded-[15px] shrink-0 w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[10px] md:px-[130px] py-[29px] md:py-[40px] relative w-full">
          <Frame3 onNavigate={onNavigate} />
        </div>
      </div>
    </div>
  );
}

export default function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center px-[15px] md:px-[50px] py-[25px] md:py-[20px] relative w-full" data-name="Footer v1">
      <Frame1 onNavigate={onNavigate} />
    </div>
  );
}
