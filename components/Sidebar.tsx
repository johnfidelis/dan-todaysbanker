import { TrendingFixtures } from './TrendingFixtures';
import { TopLeaders } from './TopLeaders';
import { Countries } from './Countries';
import { Search } from 'lucide-react';

export default function Sidebar({ withTrending = true, onNavigate }: { withTrending?: boolean; onNavigate?: (page: string) => void }) {
  return (
    <aside className="w-[340px] flex flex-col gap-[20px] shrink-0">
      {/* Trending Fixtures */}
      {withTrending && <TrendingFixtures />}

      {/* Search */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-[45px] bg-[#EBEBEB] text-[#1e1e1e] placeholder-[#767676] px-4 pr-10 rounded-[10px] text-[14px] font-sans focus:outline-none focus:ring-2 focus:ring-[#f5a623]"
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#767676]" />
      </div>

      {/* Top Leagues */}
      <TopLeaders onNavigate={onNavigate} />

      {/* Countries */}
      <Countries onNavigate={onNavigate} />
    </aside>
  );
}
