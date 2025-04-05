import React from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import searchAnime from "@/data/search-anime.json";
import { useRouter } from "next/router";
import AnimeCard from "@/components/basic/AnimeCard";

const Search = () => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title={`Hasil pencarian : ${q}`} />
          <AnimeCard list={searchAnime} />
        </Content>
      </Section>
    </Layout>
  );
};

export default Search;
