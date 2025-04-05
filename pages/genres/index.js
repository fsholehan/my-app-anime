import Breadcrumb from "@/components/basic/Breadcrumb";
import GenreList from "@/components/basic/GenreList";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import genresData from "@/data/genres.json";
import React from "react";

const Genres = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Daftar Genre" />
          <GenreList list={genresData} />
        </Content>
      </Section>
    </Layout>
  );
};

export default Genres;
