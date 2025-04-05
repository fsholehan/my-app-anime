import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import AnimeCard from "@/components/basic/AnimeCard";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";
import Head from "next/head";

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  const [page, setPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const canonicalUrl = useCanonicalUrl();

  useEffect(() => {
    if (!q) return;

    const fetchSearch = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://animasu.nakanime.my.id/cari-anime/${q}/${page}`
        );
        const data = await res.json();
        setSearchResults(data);
      } catch (err) {
        console.error("Gagal fetch data pencarian:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearch();
  }, [q, page]);

  const handleNext = () => setPage((p) => p + 1);
  const handlePrev = () => setPage((p) => (p > 1 ? p - 1 : 1));

  return (
    <Layout>
      <Head>
        <title>{q}</title>
        <meta
          name="description"
          content="Tonton episode terbaru anime sub Indo hanya di Animasu. Update setiap hari!"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={`Hasil pencarian : ${q}`} />
          {loading ? (
            <p>Loading...</p>
          ) : searchResults.length > 0 ? (
            <>
              <AnimeCard list={searchResults} />

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
                  disabled={searchResults?.length < 10}
                  className={`px-4 py-2 rounded bg-orange-600 text-white ${
                    searchResults?.length < 10
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <p className="text-center text-zinc-400">
              Tidak ada hasil ditemukan.
            </p>
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default Search;
