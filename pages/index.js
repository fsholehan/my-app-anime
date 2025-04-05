import { useEffect, useState } from "react";
import Layout from "@/components/container/Layout";
import Carousel from "@/components/basic/Carousel";
import Breadcrumb from "@/components/basic/Breadcrumb";
import Section from "@/components/container/Section";
import Content from "@/components/container/Content";
import MetaTitle from "@/components/basic/MetaTitle";
import AnimeCard from "@/components/basic/AnimeCard";

export default function Home() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await fetch("https://animasu.nakanime.my.id/anime-terbaru");
        const data = await res.json();
        setAnimeList(data);
      } catch (err) {
        console.error("Gagal fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);

  return (
    <Layout>
      {loading ? (
        <p className="text-white text-center py-10">Loading...</p>
      ) : (
        <>
          <Carousel list={animeList} />
          <Breadcrumb />
          <Section>
            <Content>
              <MetaTitle title="Episode Terbaru" href="/anime-terbaru" />
              <AnimeCard list={animeList} />
            </Content>
          </Section>
        </>
      )}
    </Layout>
  );
}
