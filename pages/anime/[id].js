import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/basic/Breadcrumb";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import MetaTitle from "@/components/basic/MetaTitle";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Head from "next/head";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";

const AnimeId = () => {
  const router = useRouter();
  const { id } = router.query;
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const canonicalUrl = useCanonicalUrl();

  const getEpisodeNumber = (text) => {
    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  };

  useEffect(() => {
    if (!id) return;

    const fetchAnime = async () => {
      try {
        const res = await fetch(`https://animasu.nakanime.my.id/anime/${id}`);
        const data = await res.json();
        setAnime(data);
        setLoading(false);
      } catch (err) {
        console.error("Gagal fetch anime:", err);
        setLoading(false);
      }
    };

    fetchAnime();
  }, [id]);

  if (loading) return <Layout>Loading...</Layout>;
  if (!anime) return <Layout>Anime tidak ditemukan</Layout>;

  return (
    <Layout>
      <Head>
        <title>{anime?.title}</title>
        <meta
          name="description"
          content="Tonton episode terbaru anime sub Indo hanya di Animasu. Update setiap hari!"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Breadcrumb />
      <Section>
        <Content>
          <div className="relative">
            <img
              src={anime.imgUrl}
              className="w-full aspect-[16/6] object-cover rounded-t-md"
              alt={anime.title}
            />
            <div className="absolute inset-0 rounded-t-md bg-gradient-to-t from-zinc-900 to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 sm:items-end xs:-mt-[100px] sm:-mt-[150px] relative p-4">
            <img
              src={anime.imgUrl}
              alt={anime.title}
              className="w-[150px] sm:w-[170px] md:w-[200px] rounded-md aspect-[3/4]"
            />
            <div className="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left">
              <h1 className="text-xl md:text-2xl font-extrabold line-clamp-2">
                {anime.title}
              </h1>
              <Link
                href={anime?.episodes[anime.episodes.length - 1]?.episodeUrl}
                className="max-w-min flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                <PlayIcon className="h-4" />
                Tonton
              </Link>
            </div>
          </div>

          <p className="text-zinc-400">{anime.description}</p>

          <MetaTitle title="Detail Anime" />
          <div className="grid grid-cols-2 gap-2 border-l border-l-zinc-400 dark:border-l-zinc-600 px-3 h-max py-4">
            <span>Status</span>
            <span>: {anime.status}</span>
            <span>Studio</span>
            <span>: {anime.studio}</span>
            <span>Type</span>
            <span>: {anime.type}</span>
            <span>Released</span>
            <span>: {anime.released}</span>
            <span>Duration</span>
            <span>: {anime.duration}</span>
          </div>

          <MetaTitle title="Daftar Episode" />
          <div className="flex flex-col gap-4 max-h-[500px] overflow-x-auto">
            {anime.episodes?.map((ep, i) => (
              <Link
                key={i}
                href={ep.episodeUrl}
                className="flex gap-4 items-center hover:bg-zinc-700 p-2 rounded-md"
              >
                <div className="py-2 px-4 bg-sky-600 rounded-sm text-white">
                  {getEpisodeNumber(ep.episodeTitle)}
                </div>
                <div>{ep.episodeTitle}</div>
              </Link>
            ))}
          </div>
        </Content>
      </Section>
    </Layout>
  );
};

export default AnimeId;
