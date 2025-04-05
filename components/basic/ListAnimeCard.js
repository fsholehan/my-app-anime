// components/ListAnimeCard.js
import React, { useState } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/solid";

export default function ListAnimeCard({ list }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredList = list.filter((item) =>
    item.title.toLowerCase().includes(searchTerm)
  );
  return (
    <div className="w-full mx-auto">
      <div className="w-full">
        <label
          htmlFor="search-input"
          className="mb-2 text-sm font-medium  sr-only text-white"
        >
          Search
        </label>
        <div className="relative mb-4">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchIcon className="w-4 h-4" />
          </div>
          <input
            type="search"
            id="search-input"
            className="block w-full p-3 ps-10 text-sm  border  rounded-lg bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-amber-500 focus:border-amber-500"
            placeholder="Cari Anime..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ul className="anime-list w-full grid sm:grid-cols-2 gap-y-2 gap-x-4 list-disc pl-4">
          {filteredList.map((anime) => (
            <li key={anime.animeId}>
              <Link href="/" className="anime0-item">
                {anime.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
