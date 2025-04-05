import React from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import streamAnime from "@/data/stream-anime.json";
import VideoPlayer from "@/components/basic/VideoPlayer";

const StreamId = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={streamAnime?.title} />
          <VideoPlayer
            defaultStreamUrl={streamAnime?.streamUrl[0]?.streamUrl}
            streamUrlList={streamAnime?.streamUrl}
          />
        </Content>
      </Section>
    </Layout>
  );
};

export default StreamId;
