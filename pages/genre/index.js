import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import GenreList from "@/components/basic/GenreList";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import Head from "next/head";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const canonicalUrl = useCanonicalUrl();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch("https://animasu.nakanime.my.id/genres");
        const data = await res.json();
        setGenres(data);
      } catch (error) {
        console.error("Gagal fetch genre:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return (
    <Layout>
      <Head>
        <title>Genre Anime</title>
        <meta
          name="description"
          content="Tonton episode terbaru anime sub Indo hanya di Animasu. Update setiap hari!"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Daftar Genre" />
          {loading ? (
            <p className="text-white text-center py-10">Loading genre...</p>
          ) : (
            <GenreList list={genres} />
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default Genres;
