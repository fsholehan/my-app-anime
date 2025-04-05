// pages/genre/[genre_slug].js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Layout from "@/components/container/Layout";
import Breadcrumb from "@/components/basic/Breadcrumb";
import Section from "@/components/container/Section";
import Content from "@/components/container/Content";
import MetaTitle from "@/components/basic/MetaTitle";
import AnimeCard from "@/components/basic/AnimeCard";

const GenrePage = () => {
  const router = useRouter();
  const { genreId } = router.query;

  const [animeList, setAnimeList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!genreId) return;

    const fetchAnime = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://animasu.nakanime.my.id/genre/${genreId}/${currentPage}`
        );
        const data = await res.json();
        setAnimeList(data);
      } catch (err) {
        console.error("Gagal fetch genre:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, [genreId, currentPage]);

  const handlePageChange = (delta) => {
    setCurrentPage((prev) => Math.max(1, prev + delta));
  };

  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={`Genre: ${genreId}`} />
          {loading ? (
            <p className="text-white text-center py-10">Loading...</p>
          ) : (
            <>
              <AnimeCard list={animeList} />
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={() => handlePageChange(-1)}
                  disabled={currentPage <= 1}
                  className={`px-4 py-2 rounded bg-zinc-800 text-white ${
                    currentPage <= 1 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={() => handlePageChange(1)}
                  className="px-4 py-2 rounded bg-orange-600 text-white"
                >
                  Next
                </button>
              </div>
            </>
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default GenrePage;
