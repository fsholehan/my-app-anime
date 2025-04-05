import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function AnimeCard({ list }) {
  return (
    <div className="py-3 gap-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {list.map((animeItem) => (
        <Link
          key={animeItem.animeId}
          href={animeItem.url}
          className="group relative"
        >
          <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
            <Image
              fill
              className="object-cover rounded-lg anime1-item-img"
              src={animeItem.imgUrl}
              alt={animeItem.title}
              loading="lazy"
            />
            {/* <span className="anime1-item-eps absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
              Ep {animeItem.episodes}
            </span> */}
          </div>
          <div className="p-2">
            <h3 className="anime1-item-title line-clamp-2">
              {animeItem.title}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
