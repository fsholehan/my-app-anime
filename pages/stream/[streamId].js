import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import VideoPlayer from "@/components/basic/VideoPlayer";
import Head from "next/head";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";
import Link from "next/link";

const StreamId = () => {
  const router = useRouter();
  const { streamId } = router.query;
  const [streamData, setStreamData] = useState(null);
  const [loading, setLoading] = useState(true);
  const canonicalUrl = useCanonicalUrl();

  useEffect(() => {
    if (!streamId) return;

    const fetchStreamData = async () => {
      try {
        const res = await fetch(
          `https://animasu.nakanime.my.id/stream/${streamId}`
        );
        const data = await res.json();
        setStreamData(data);
      } catch (err) {
        console.error("Gagal fetch stream:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStreamData();
  }, [streamId]);

  if (loading) return <Layout>Loading...</Layout>;
  if (!streamData) return <Layout>Gagal memuat video</Layout>;

  return (
    <Layout>
      <Head>
        <title>{streamData?.title}</title>
        <meta
          name="description"
          content="Tonton episode terbaru anime sub Indo hanya di Animasu. Update setiap hari!"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={streamData?.title} />
          <VideoPlayer
            defaultStreamUrl={streamData?.streamUrl[0]?.streamUrl}
            streamUrlList={streamData?.streamUrl}
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/stream/${streamData?.episodeNav.prev}`}
              className={`navigation-episode-item ${
                !streamData?.episodeNav.prev
                  ? "disabled pointer-events-none opacity-50"
                  : ""
              }`}
            >
              {"<- "} Prev
            </Link>
            <Link
              href={streamData?.episodeNav.info}
              className="navigation-episode-item"
            >
              All Eps
            </Link>
            <Link
              href={`/stream/${streamData?.episodeNav.next}`}
              className={`navigation-episode-item ${
                !streamData?.episodeNav.next
                  ? "disabled pointer-events-none opacity-50"
                  : ""
              }`}
            >
              Next {" ->"}
            </Link>
          </div>
        </Content>
      </Section>
    </Layout>
  );
};

export default StreamId;
