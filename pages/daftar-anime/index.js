import React from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import ListAnimeCard from "@/components/basic/ListAnimeCard";
import listAnimeName from "@/data/daftar-anime.json";

const DaftarAnime = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Daftar Anime" />
          <ListAnimeCard list={listAnimeName} />
        </Content>
      </Section>
    </Layout>
  );
};

export default DaftarAnime;
