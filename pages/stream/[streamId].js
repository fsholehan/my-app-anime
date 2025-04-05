import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import VideoPlayer from "@/components/basic/VideoPlayer";

const StreamId = () => {
  const router = useRouter();
  const { streamId } = router.query;

  const [streamData, setStreamData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={streamData?.title} />
          <VideoPlayer
            defaultStreamUrl={streamData?.streamUrl[0]?.streamUrl}
            streamUrlList={streamData?.streamUrl}
          />
        </Content>
      </Section>
    </Layout>
  );
};

export default StreamId;
