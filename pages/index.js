import Layout from "@/components/container/Layout";
import Carousel from "@/components/basic/Carousel";
import Breadcrumb from "@/components/basic/Breadcrumb";
import Section from "@/components/container/Section";
import Content from "@/components/container/Content";
import MetaTitle from "@/components/basic/MetaTitle";
import AnimeCard from "@/components/basic/AnimeCard";
import animeList from "@/data/anime-terbaru.json";

export default function Home() {
  return (
    <Layout>
      <Carousel list={animeList} />
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Episode Terbaru" href="/anime-terbaru" />
          <AnimeCard list={animeList} />
        </Content>
      </Section>
    </Layout>
  );
}
