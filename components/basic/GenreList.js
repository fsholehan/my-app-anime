import Link from "next/link";

export default function GenreList({ list }) {
  return (
    <div className="gap-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
      {list.map((genre) => (
        <button key={genre.url} className="genre-item">
          <Link href={genre.url} className="line-clamp-1">
            {genre.title}
          </Link>
        </button>
      ))}
    </div>
  );
}
