"use client"
import React from 'react';
import svgPaths from "@/imports/svg-a3y7g6yuor";
import imgImage208 from "@/assets/f18502c5cbc1c7359eac6b063087bad7ba8a8a90.png";
import imgImage207 from "@/assets/dab43234bff6c5bc6cd864cb4d5dcec57ed7c424.png";
import imgImage209 from "@/assets/d69ef419c9591a170a5a3bb3a8853a239bf6ba5e.png";
import imgImage210 from "@/assets/575f4f2760c501db7b15e26b259a050f34433e28.png";

function Breadcrumb() {
  return (
    <div className="bg-[rgba(255,255,255,0.09)] flex font-sans font-semibold gap-[6px] items-start justify-center py-[10px] px-[20px] rounded-[47px] shrink-0 text-[16px] w-fit">
      <p className="text-[#1e1e1e]">Home</p>
      <p className="text-[#767676]">/</p>
      <p className="text-[#328748]">Blog</p>
    </div>
  );
}

function SocialIcon({ path, viewBox }: { path: string, viewBox: string }) {
  return (
    <div className="relative shrink-0 w-[24px] h-[24px]">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox={viewBox}>
        <path d={path} fill="#5A5A5A" />
      </svg>
    </div>
  );
}

function SocialMediaContainer() {
  return (
    <div className="flex gap-[20px] items-center shrink-0">
      {/* Twitter/X */}
      <SocialIcon path={svgPaths.p1a4f5200} viewBox="0 0 23.6987 27.0843" />
      {/* Telegram */}
      <SocialIcon path={svgPaths.p12d02c00} viewBox="0 0 27.0843 27.0843" />
      {/* Facebook */}
      <SocialIcon path={svgPaths.p1d4de000} viewBox="0 0 27.0843 27.0843" />
    </div>
  );
}

function RelatedPostCard({ image, title, date }: { image: string, title: string, date: string }) {
  return (
    <div className="flex flex-col gap-[10px] w-full border-b border-[#d9d9d9] pb-[20px] last:border-0 last:pb-0">
      <div className="flex gap-[20px] items-start">
        <div className="w-[171px] h-[100px] rounded-[9px] overflow-hidden shrink-0">
          <img alt="" className="object-cover w-full h-full" src={image} />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-sans font-normal text-[#767676] text-[14px]">{date}</p>
          <p className="font-sans font-semibold text-[#1e1e1e] text-[16px] line-clamp-3">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetailsPage() {
  const relatedPosts = [
    {
      title: "Alejandro Garnacho: Unwanted Manchester United star changes name ahead of exit",
      date: "Blog • 5d",
      image: imgImage207
    },
    {
      title: "A combined XI of star footballers to play for both Arsenal and Chelsea",
      date: "Blog • 5d",
      image: imgImage209
    },
    {
      title: "Ronaldinho: The football legend who became a penniless prisoner",
      date: "Blog • 5d",
      image: imgImage210
    },
    {
      title: "Ronaldinho: The football legend who became a penniless prisoner",
      date: "Blog • 5d",
      image: imgImage210
    },
    {
      title: "Ronaldinho: The football legend who became a penniless prisoner",
      date: "Blog • 5d",
      image: imgImage210
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white rounded-[30px] p-[30px] md:p-[50px]">
      {/* Header Section */}
      <div className="flex flex-col gap-[20px] w-full mb-[30px]">
        <div className="flex justify-between items-start w-full">
          <Breadcrumb />
          <button className="hidden md:flex bg-gradient-to-b from-[#1c729e] to-[#176288] gap-[10px] items-center justify-center px-[20px] py-[10px] rounded-[47px] text-white font-semibold shadow-sm hover:opacity-90 transition-opacity">
            <div className="w-[22px] h-[22px]">
              <svg className="block w-full h-full" fill="none" viewBox="0 0 22 22">
                <path d={svgPaths.p224f4200} fill="white" />
                <path d={svgPaths.p252b6900} fill="#5A5A5A" />
              </svg>
            </div>
            Join Telegram Now!
          </button>
        </div>
        
        <h1 className="font-sans font-medium text-[#1e1e1e] text-[32px] md:text-[52px] leading-tight">
          10 of the most wasted talents in football. The world at their feet
        </h1>
      </div>

      {/* Main Image */}
      <div className="w-full h-[300px] md:h-[500px] rounded-[20px] overflow-hidden relative mb-[20px]">
        <img alt="Main Article Image" className="object-cover w-full h-full" src={imgImage208} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />
      </div>

      {/* Article Meta */}
      <div className="flex flex-col gap-[20px] mb-[40px]">
        <p className="font-sans text-[#757575] text-[16px]">
          Arsenal came out victorious in the 2024-25 UEFA Women's Champions League final against Barcelona. / IMAGO/BSR Agency
        </p>
        
        <div className="flex justify-between items-center w-full border-b border-[#eaeaea] pb-[20px]">
          <div className="flex gap-[8px] items-center">
            <div className="w-[24px] h-[24px]">
              <svg className="block w-full h-full" fill="none" viewBox="0 0 24 24">
                <path d={svgPaths.p3a1d5a00} fill="black" />
                <path d={svgPaths.p31f1d700} fill="black" opacity="0.5" />
                <path d={svgPaths.p3c007e80} fill="black" />
              </svg>
            </div>
            <p className="font-sans text-[#757575] text-[16px]">21 Jan 2025</p>
          </div>
          <SocialMediaContainer />
        </div>
      </div>

      {/* Article Content & Related Posts Grid */}
      <div className="flex flex-col lg:flex-row gap-[50px]">
        {/* Article Body */}
        <div className="flex-1 flex flex-col gap-[30px] font-light text-[17px] leading-[30px] text-black">
          <p>
            As training camps heat up and the Qualifiers loom large, all eyes are naturally drawn to the big names — first-round picks, high-profile trades, and breakout stars from last season. But behind the curtain of hype and headlines, there’s a quieter storm brewing: the rise of under-the-radar rookies. These are the players who may not have dominated mock drafts or grabbed headlines on draft day, but have quietly turned heads in OTAs, mini-camps, or pre-season scrimmages.
          </p>
          <p>
            In this camp preview, we take a closer look at the rookies flying under the radar — the sleepers with potential to make noise as the Qualifiers draw near.
          </p>
          
          <div className="flex gap-[34px] items-start my-[20px]">
            <div className="w-[200px] md:w-[300px] shrink-0 rounded-[10px] overflow-hidden shadow-lg">
              <img alt="Article Inset" className="w-full h-auto object-cover" src={imgImage207} />
            </div>
            <div className="flex-1">
              <p className="mb-[12px]">
                As training camps heat up and the Qualifiers loom large, all eyes are naturally drawn to the big names — first-round picks, high-profile trades, and breakout stars from last season. But behind the curtain of hype and headlines, there’s a quieter storm brewing.
              </p>
              <p>
                In this camp preview, we take a closer look at the rookies flying under the radar — the sleepers with potential to make noise as the Qualifiers draw near.
              </p>
            </div>
          </div>

          <p>
            As training camps heat up and the Qualifiers loom large, all eyes are naturally drawn to the big names — first-round picks, high-profile trades, and breakout stars from last season. But behind the curtain of hype and headlines, there’s a quieter storm brewing: the rise of under-the-radar rookies. These are the players who may not have dominated mock drafts or grabbed headlines on draft day, but have quietly turned heads in OTAs, mini-camps, or pre-season scrimmages.
          </p>
          <p>
            In this camp preview, we take a closer look at the rookies flying under the radar — the sleepers with potential to make noise as the Qualifiers draw near.
          </p>
        </div>

        {/* Related Posts Sidebar (or Bottom on mobile) */}
        <div className="w-full lg:w-[400px] shrink-0 flex flex-col gap-[20px]">
          {relatedPosts.map((post, index) => (
            <RelatedPostCard 
              key={index}
              image={post.image}
              title={post.title}
              date={post.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
