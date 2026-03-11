import { Star } from 'lucide-react';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeRating: number;
  awayRating: number;
  odds: string;
  time: string;
  date: string;
  result?: string;
  isLive?: boolean;
}

export default function MatchCard({
  homeTeam,
  awayTeam,
  homeRating,
  awayRating,
  odds,
  time,
  date,
  result = "0:0",
  isLive = false,
}: MatchCardProps) {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < rating ? 'fill-[#f5a623] text-[#f5a623]' : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm">
      {/* Home Team Logo */}
      <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-10 h-10 bg-[#e8ecf4] rounded flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M14 4L18 14L24 18L14 24L10 14L4 10L14 4Z" fill="#4a6fa5"/>
          </svg>
        </div>
      </div>

      {/* Match Details */}
      <div className="flex-1 flex items-center gap-3">
        {/* Team Names and Ratings */}
        <div className="flex flex-col gap-1.5">
          <div>
            <div className="text-xs font-semibold text-gray-900">{homeTeam}</div>
            {renderStars(homeRating)}
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-900">{awayTeam}</div>
            {renderStars(awayRating)}
          </div>
        </div>

        {/* VS */}
        <div className="text-xs font-bold text-gray-500 px-2">VS</div>

        {/* Match Info */}
        <div className="flex items-center gap-2">
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">{odds}</div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">{time}</div>
          <div className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">{date}</div>
        </div>

        {/* Prediction Button */}
        <button className="bg-[#4a3889] hover:bg-[#3d2f71] text-white px-4 py-1.5 rounded text-xs font-semibold transition-colors">
          PREDICTION
        </button>

        {/* Score */}
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-600">{result}</div>
          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
            <span className="text-xs text-gray-400">0</span>
          </div>
        </div>
      </div>

      {/* Away Team Logo */}
      <div className="w-10 h-10 flex items-center justify-center">
        <div className="w-10 h-10 bg-[#fff5e6] rounded-full flex items-center justify-center overflow-hidden">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="14" fill="#dc0000"/>
            <path d="M16 8L20 16L24 20L16 24L12 16L8 12L16 8Z" fill="#ffe100"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
