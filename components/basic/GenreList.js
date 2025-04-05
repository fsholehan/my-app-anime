import Link from "next/link";

export default function GenreList({ list }) {
  const newGenres = list.map((item) => {
    const slug = item.url.split("/")[2];
    return {
      title: item.title,
      slug: slug,
    };
  });
  return (
    <div className="gap-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5">
      {newGenres.map((genre) => (
        <button key={genre.slug} className="genre-item">
          <Link href={`/genre/${genre.slug}`} className="line-clamp-1">
            {genre.title}
          </Link>
        </button>
      ))}
    </div>
  );
}
