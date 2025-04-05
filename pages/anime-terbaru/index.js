// import Layout from "@/components/container/Layout";
// import Breadcrumb from "@/components/basic/Breadcrumb";
// import Section from "@/components/container/Section";
// import Content from "@/components/container/Content";
// import MetaTitle from "@/components/basic/MetaTitle";
// import AnimeCard from "@/components/basic/AnimeCard";
// import animeList from "@/data/anime-terbaru.json";
// import { useState } from "react";

// const ListAnime = () => {
//   const [page, setPage] = useState(1);

//   const handleNext = () => setPage((prev) => prev + 1);
//   const handlePrev = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));
//   return (
//     <Layout>
//       <Breadcrumb />
//       <Section>
//         <Content>
//           <MetaTitle title="Episode Terbaru" />
//           <AnimeCard list={animeList} />
//           <div className="flex justify-center items-center gap-4 mt-6">
//             <button
//               onClick={handlePrev}
//               disabled={page === 1}
//               className={`px-4 py-2 rounded bg-zinc-800 text-white ${
//                 page === 1 ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//             >
//               Prev
//             </button>

//             <button
//               onClick={handleNext}
//               className="px-4 py-2 rounded bg-orange-600 text-white"
//             >
//               Next
//             </button>
//           </div>
//         </Content>
//       </Section>
//     </Layout>
//   );
// };

// export default ListAnime;
import { useState, useEffect } from "react";
import Layout from "@/components/container/Layout";
import Breadcrumb from "@/components/basic/Breadcrumb";
import Section from "@/components/container/Section";
import Content from "@/components/container/Content";
import MetaTitle from "@/components/basic/MetaTitle";
import AnimeCard from "@/components/basic/AnimeCard";

const ListAnime = () => {
  const [page, setPage] = useState(1);
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAnime = async (pageNumber) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://animasu.nakanime.my.id/anime-terbaru/${pageNumber}`
      );
      const data = await res.json();
      setAnimeList(data);
    } catch (error) {
      console.error("Failed to fetch anime:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnime(page);
  }, [page]);

  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => (p > 1 ? p - 1 : 1));

  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={`Episode Terbaru - Page ${page}`} />

          {loading ? (
            <p className="text-white text-center mt-4">Loading...</p>
          ) : (
            <AnimeCard list={animeList} />
          )}

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className={`px-4 py-2 rounded bg-zinc-800 text-white ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Prev
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded bg-orange-600 text-white"
            >
              Next
            </button>
          </div>
        </Content>
      </Section>
    </Layout>
  );
};

export default ListAnime;
