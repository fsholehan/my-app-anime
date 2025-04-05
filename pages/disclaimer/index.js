import Breadcrumb from "@/components/basic/Breadcrumb";
import MetaTitle from "@/components/basic/MetaTitle";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import useCanonicalUrl from "@/hooks/useCanonicalUrl";
import Head from "next/head";
import React from "react";

const Disclaimer = () => {
  const canonicalUrl = useCanonicalUrl();
  return (
    <Layout>
      <Head>
        <title>Disclaimer</title>
        <meta
          name="description"
          content="Tonton episode terbaru anime sub Indo hanya di Animasu. Update setiap hari!"
        />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      </Head>
      <Breadcrumb />
      <Section>
        <Content>
          <MetaTitle title="Disclaimer" />
          <p>
            Seluruh konten anime yang tersedia di situs ini merupakan hasil dari
            pihak ketiga dan hanya ditujukan untuk tujuan hiburan semata. Kami
            tidak menyimpan file video apapun di server kami.
          </p>

          <p>
            Semua video dan media streaming disediakan oleh pihak ketiga dan
            dilindungi oleh hak cipta masing-masing pemiliknya. Jika Anda adalah
            pemilik hak cipta dan merasa ada pelanggaran, silakan hubungi kami.{" "}
          </p>

          <p>
            Kami akan segera menindaklanjuti permintaan Anda dan menghapus
            konten yang dimaksud secepat mungkin. Pengunjung bertanggung jawab
            penuh atas penggunaan situs ini. Kami tidak bertanggung jawab atas
            segala kerugian atau dampak yang mungkin timbul dari penggunaan
            konten di situs ini.
          </p>
        </Content>
      </Section>
    </Layout>
  );
};

export default Disclaimer;
