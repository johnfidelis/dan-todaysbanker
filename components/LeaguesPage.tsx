"use client";

import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

interface ApiCountry {
  name: string;
  code: string | null;
  flag: string | null;
}

interface ApiLeagueItem {
  league: {
    id: number;
    name: string;
    logo: string | null;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
}

interface ListItemProps {
  flag: string | null;
  name: string;
  href: string;
}

function ListItem({ flag, name, href }: ListItemProps) {
  return (
    <a
      href={href}
      className="flex items-center gap-[15px] px-[15px] py-[12px] border-b border-[#ffffff]/5 active:bg-[#ffffff]/5 cursor-pointer hover:bg-[#ffffff]/10 transition-colors"
    >
      {flag ? (
        <Image
          src={flag}
          alt={`${name} flag`}
          width={16}
          height={16}
          className="rounded-sm"
        />
      ) : (
        <span className="text-[16px]">🏳️</span>
      )}
      <span className="text-[#f5f5f5] text-[14px] font-medium">{name}</span>
    </a>
  );
}

export default function LeaguesPage() {
  const [countries, setCountries] = useState<ApiCountry[]>([]);
  const [topLeagues, setTopLeagues] = useState<ApiLeagueItem[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadData() {
      try {
        const [countriesRes, leaguesRes] = await Promise.all([
          fetch("/api/football-countries"),
          fetch("/api/football-top-leagues"),
        ]);

        const countriesJson = await countriesRes.json();
        const leaguesJson = await leaguesRes.json();

        const countriesList: ApiCountry[] = countriesJson.response || [];
        const leaguesList: ApiLeagueItem[] = leaguesJson.response || [];

        countriesList.sort((a, b) =>
          a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
        );
        leaguesList.sort((a, b) =>
          a.league.name.localeCompare(b.league.name, undefined, {
            sensitivity: "base",
          })
        );

        setCountries(countriesList);
        setTopLeagues(leaguesList);
      } catch {
        setCountries([]);
        setTopLeagues([]);
      }
    }
    loadData();
  }, []);

  const filteredLeagues = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return topLeagues;
    return topLeagues.filter((item) =>
      item.league.name.toLowerCase().includes(q)
    );
  }, [topLeagues, search]);

  const filteredCountries = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return countries;
    return countries.filter((c) =>
      c.name.toLowerCase().includes(q)
    );
  }, [countries, search]);

  return (
    <div className="flex flex-col w-full pb-[20px]">
      {/* Search Bar */}
      <div className="py-[10px]">
        <div className="bg-[#f0f2f5] rounded-[8px] flex items-center px-[15px] py-[10px] gap-[10px]">
          <input
            className="flex-1 bg-transparent outline-none text-[14px] text-[#202020] placeholder:text-[#a0a0a0]"
            placeholder="Search leagues or countries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="text-[#757575] w-[18px] h-[18px]" />
        </div>
      </div>

      {/* Top Leagues Section */}
      <div className="mt-[10px]">
        <div className="bg-[#151c38] px-[15px] py-[12px]">
          <p className="text-white text-[12px] font-bold uppercase tracking-wider">
            TOP LEAGUES
          </p>
        </div>
        <div className="flex flex-col">
          {filteredLeagues.length === 0 ? (
            <div className="px-[15px] py-[12px] text-xs text-[#aaaaaa]">
              No leagues found.
            </div>
          ) : (
            filteredLeagues.map((item) => {
              const league = item.league;
              const country = item.country;
              const flag = league.logo || country.flag || null;
              const href = `/league-page/league/${league.id}`;
              return (
                <ListItem
                  key={league.id}
                  flag={flag}
                  name={league.name}
                  href={href}
                />
              );
            })
          )}
        </div>
      </div>

      {/* Countries Section */}
      <div className="mt-[0px]">
        <div className="bg-[#151c38] px-[15px] py-[12px]">
          <p className="text-white text-[12px] font-bold uppercase tracking-wider">
            COUNTRIES
          </p>
        </div>
        <div className="flex flex-col">
          {filteredCountries.length === 0 ? (
            <div className="px-[15px] py-[12px] text-xs text-[#aaaaaa]">
              No countries found.
            </div>
          ) : (
            filteredCountries.map((c) => {
              const flag = c.flag;
              const code =
                (c.code && c.code.trim().toUpperCase()) ||
                c.name.toLowerCase().replace(/\s+/g, "-");
              const href = `/league-page/country/${encodeURIComponent(code)}`;
              return (
                <ListItem
                  key={`${c.name}-${c.code}`}
                  flag={flag}
                  name={c.name}
                  href={href}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
