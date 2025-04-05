import Layout from "@/components/container/Layout";
import Breadcrumb from "@/components/basic/Breadcrumb";
import Section from "@/components/container/Section";
import Content from "@/components/container/Content";
import MetaTitle from "@/components/basic/MetaTitle";
import AnimeCard from "@/components/basic/AnimeCard";
import animeList from "@/data/anime-terbaru.json";

const GenreId = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Anime Genre" />
          <AnimeCard list={animeList} />
        </Content>
      </Section>
    </Layout>
  );
};

export default GenreId;
