import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import ListAnimeCard from "@/components/basic/ListAnimeCard";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";
import Head from "next/head";

const Anime = () => {
  const [listAnimeName, setListAnimeName] = useState([]);
  const [loading, setLoading] = useState(true);
  const canonicalUrl = useCanonicalUrl();

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const res = await fetch(
          "https://animasu.nakanime.my.id/list-semua-anime/"
        );
        const data = await res.json();
        setListAnimeName(data);
      } catch (error) {
        console.error("Gagal fetch daftar anime:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeList();
  }, []);

  return (
    <Layout>
      <Head>
        <title>List Semua Anime</title>
        <meta
          name="description"
          content="Tonton episode terbaru anime sub Indo hanya di Animasu. Update setiap hari!"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Daftar Anime" />
          {loading ? (
            <p className="text-white text-center py-10">
              Loading daftar anime...
            </p>
          ) : (
            <ListAnimeCard list={listAnimeName} />
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default Anime;
