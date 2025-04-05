import React, { useEffect, useState } from "react";
import Breadcrumb from "@/components/basic/Breadcrumb";
import GenreList from "@/components/basic/GenreList";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";

const Genres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch("https://animasu.nakanime.my.id/genres");
        const data = await res.json();
        setGenres(data);
      } catch (error) {
        console.error("Gagal fetch genre:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Daftar Genre" />
          {loading ? (
            <p className="text-white text-center py-10">Loading genre...</p>
          ) : (
            <GenreList list={genres} />
          )}
        </Content>
      </Section>
    </Layout>
  );
};

export default Genres;
