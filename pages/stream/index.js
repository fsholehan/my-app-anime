import React from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";
import Head from "next/head";

const Stream = () => {
  const canonicalUrl = useCanonicalUrl();
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
          <MetaTitle title="Streaming" />
          <p className="text-white text-center py-10">Cari anime dulu cuyy</p>
        </Content>
      </Section>
    </Layout>
  );
};

export default Stream;
