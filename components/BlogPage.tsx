"use client"
import React from 'react';
import svgPaths from "@/imports/svg-mqm0yt87ki";
import imgListItem from "@/assets/1d4fc0585345b2870076a3ce59424f543ddaf2ca.png";
import imgRectangle3 from "@/assets/e2b995a770cad0da4381eee72cc26c5e5938eff5.png";

function BlogHeader() {
  return (
    <div className="relative rounded-[20px] shrink-0 w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none rounded-[20px]">
        <div className="absolute bg-gradient-to-b from-[#fc5f12] inset-0 rounded-[20px] to-[#96390b]" />
        <img alt="" className="absolute max-w-none object-cover opacity-20 rounded-[20px] size-full" src={imgListItem} />
      </div>
      <div className="relative w-full p-[30px] flex flex-col justify-center min-h-[120px]">
        <div className="-translate-y-1/2 absolute h-[136.915px] right-[-20.07px] top-[calc(50%-3.04px)] w-[137.065px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 137.065 136.915">
            <path d={svgPaths.p24c70280} fill="white" opacity="0.17" />
          </svg>
        </div>
        <div className="flex gap-[15px] items-center relative z-10">
          <div className="relative shrink-0 size-[70px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 70 70">
              <path d={svgPaths.pfa48480} fill="white" />
            </svg>
          </div>
          <div className="flex flex-col items-start justify-center text-white">
            <p className="font-sans font-bold leading-[53.02px] text-[33.137px]">Blog</p>
            <p className="font-sans font-medium leading-[normal] text-[15px]">Get the latest sport updates</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BlogPostProps {
  title: string;
  description: string;
  date: string;
  image: string;
  onClick?: () => void;
}

function BlogPostCard({ title, description, date, image, onClick }: BlogPostProps) {
  return (
    <div 
      className="bg-white rounded-[30px] p-[30px] w-full cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
    >
      <div className="flex flex-col md:flex-row gap-[20px] items-start md:items-center">
        <div className="shrink-0 w-full md:w-[260px] h-[180px] rounded-[10px] overflow-hidden relative">
          <img alt="" className="absolute inset-0 object-cover size-full" src={image} />
        </div>
        <div className="flex flex-col gap-[15px] flex-1">
          <h3 className="font-sans font-semibold text-[#1e1e1e] text-[24px] md:text-[32px] leading-tight">
            {title}
          </h3>
          <p className="font-sans font-normal text-[#5a5a5a] text-[16px] md:text-[20px] leading-normal line-clamp-3">
            {description}
          </p>
          <p className="font-sans font-bold text-[#5a5a5a] text-[16px] md:text-[18px]">
            {date}
          </p>
        </div>
      </div>
    </div>
  );
}

interface LatestPostItemProps {
  title: string;
  date: string;
}

function LatestPostItem({ title, date }: LatestPostItemProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full border-b border-[#eaeaea] last:border-0 pb-[20px] last:pb-0">
      <h4 className="font-sans font-semibold text-[#1e1e1e] text-[18px] md:text-[22px] leading-tight">
        {title}
      </h4>
      <p className="font-sans font-normal text-[#5a5a5a] text-[16px] md:text-[18px]">
        {date}
      </p>
    </div>
  );
}

export default function BlogPage({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const blogPosts = [
    {
      title: "FUN88: The Ultimate Online Betting Platform",
      description: "FUN88 is a major online gambling website and is very popular among Vietnamese users. This platform has a combination of a unique selection of games, a great user experience, and…",
      date: "December 8, 22:00 • 5d",
      image: imgRectangle3
    },
    {
      title: "FUN88: The Ultimate Online Betting Platform",
      description: "FUN88 is a major online gambling website and is very popular among Vietnamese users. This platform has a combination of a unique selection of games, a great user experience, and…",
      date: "December 8, 22:00 • 5d",
      image: imgRectangle3
    },
    {
      title: "FUN88: The Ultimate Online Betting Platform",
      description: "FUN88 is a major online gambling website and is very popular among Vietnamese users. This platform has a combination of a unique selection of games, a great user experience, and…",
      date: "December 8, 22:00 • 5d",
      image: imgRectangle3
    },
    {
      title: "FUN88: The Ultimate Online Betting Platform",
      description: "FUN88 is a major online gambling website and is very popular among Vietnamese users. This platform has a combination of a unique selection of games, a great user experience, and…",
      date: "December 8, 22:00 • 5d",
      image: imgRectangle3
    },
    {
      title: "FUN88: The Ultimate Online Betting Platform",
      description: "KQBD is a top destination for anyone who wants to get up-to-the-second on football scores, match progress, betting odds, and live ranking tables. It does not matter if you are…",
      date: "December 8, 22:00 • 5d",
      image: imgRectangle3
    },
    {
      title: "FUN88: The Ultimate Online Betting Platform",
      description: "FUN88 is a major online gambling website and is very popular among Vietnamese users. This platform has a combination of a unique selection of games, a great user experience, and…",
      date: "December 8, 22:00 • 5d",
      image: imgRectangle3
    }
  ];

  const latestPosts = [
    { title: "Top 10 Best Offshore Sportsbooks – Sports Betting Abroad (2026)", date: "December 8, 22:00 • 5d" },
    { title: "Best Betting Sites Not on Gamstop: Top Non Gamstop Bookies Compared and Ranked for 2026", date: "December 8, 22:00 • 5d" },
    { title: "SAFF Championship – The leading football league in South Asia.", date: "December 8, 22:00 • 5d" },
    { title: "SAFF Championship – The leading football league in South Asia.", date: "December 8, 22:00 • 5d" },
    { title: "SAFF Championship – The leading football league in South Asia.", date: "December 8, 22:00 • 5d" },
    { title: "SAFF Championship – The leading football league in South Asia.", date: "December 8, 22:00 • 5d" },
  ];

  return (
    <div className="flex flex-col gap-[30px] w-full">
      <BlogHeader />
      
      <div className="flex flex-col lg:flex-row gap-[30px] items-start">
        {/* Main Blog Feed */}
        <div className="flex flex-col gap-[20px] flex-[2] w-full">
          {blogPosts.map((post, index) => (
            <BlogPostCard 
              key={index}
              title={post.title}
              description={post.description}
              date={post.date}
              image={post.image}
              onClick={() => onNavigate?.('blog-details')}
            />
          ))}
        </div>

        {/* Sidebar - Latest Posts */}
        <div className="bg-white rounded-[30px] p-[30px] flex-1 w-full lg:max-w-[400px] shrink-0">
          <h3 className="font-sans font-bold text-[24px] text-[#1e1e1e] mb-[20px]">Latest Post</h3>
          <div className="flex flex-col gap-[20px]">
            {latestPosts.map((post, index) => (
              <LatestPostItem key={index} title={post.title} date={post.date} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
