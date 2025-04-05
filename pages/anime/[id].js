import Breadcrumb from "@/components/basic/Breadcrumb";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import { PlayIcon } from "@heroicons/react/24/solid";
import result from "@/data/anime-info.json";
import Link from "next/link";
import React from "react";
import MetaTitle from "@/components/basic/MetaTitle";

const AnimeId = () => {
  function getEpisodeNumber(text) {
    const match = text.match(/\d+/);
    return match ? parseInt(match[0], 10) : null;
  }
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <div className="relative">
            <img
              src={result.imgUrl}
              className="w-full aspect-[16/6] object-cover rounded-t-md"
              alt=""
            />
            <div className="absolute inset-0 rounded-t-md bg-gradient-to-t from-zinc-900 to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 sm:items-end xs:-mt-[100px] sm:-mt-[150px] relative p-4">
            <img
              src={result.imgUrl}
              alt=""
              className="w-[150px] sm:w-[170px] md:w-[200px] rounded-md aspect-[3/4]"
            />
            <div className="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left">
              <h1 className="text-xl md:text-2xl font-extrabold line-clamp-2">
                {result.title}
              </h1>
              {/* <p className="flex">
                    <span className="flex gap-1 items-center">
                      <StarIcon className="w-4 h-4" />
                      {data.score.value}{" "}
                      {data.score.users && `/ ${data.score.users}`} |{" "}
                      {data.status}
                    </span>
                  </p> */}
              <Link
                href="/"
                className="max-w-min flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                <PlayIcon className="h-4" />
                Tonton
              </Link>
            </div>
          </div>
          <div>
            <p className="text-zinc-400">{result.description}</p>
          </div>
          <MetaTitle title="Detail Anime" />
          <div className="grid grid-cols-2 gap-2 border-l border-l-zinc-400 dark:border-l-zinc-600 px-3 h-max py-4">
            <span>Status</span>
            <span className="line-clamp-2">: {result.status}</span>
            <span>Studio</span>
            <span className="line-clamp-2">: {result.studio}</span>
            <span>Type</span>
            <span className="line-clamp-2">: {result.type}</span>
            <span>Released</span>
            <span className="line-clamp-2">: {result.released}</span>
            <span>Duration</span>
            <span className="line-clamp-2">: {result.duration}</span>
          </div>
          <MetaTitle title="Daftar Episode" />
          <div className="flex flex-col gap-4 max-h-[500px] overflow-x-auto">
            {result.episodes.map((episode, i) => (
              <Link
                key={i}
                href={episode.episodeUrl}
                className="flex gap-4 items-center hover:bg-zinc-700 p-2 rounded-md"
              >
                <div className="py-2 px-4 bg-sky-600 rounded-sm text-white">
                  {getEpisodeNumber(episode.episodeTitle)}
                </div>
                <div>{episode.episodeTitle}</div>
              </Link>
            ))}
          </div>
        </Content>
      </Section>
    </Layout>
  );
};

export default AnimeId;
