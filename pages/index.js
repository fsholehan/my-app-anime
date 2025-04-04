import Carousel from "@/components/basic/Carousel";
import Navbar from "@/components/basic/Navbar";
import animeList from "../data/anime-terbaru.json";
import Breadcrumb from "@/components/basic/Breadcrumb";

export default function Home() {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Daftar Anime", href: "/daftar-anime" },
  ];
  return (
    <>
      <Navbar siteName="Nanana" navLinks={navLinks} />
      <main
        id="main"
        className="container min-h-screen relative space-y-4"
        style={{
          paddingTop: "69px",
          paddingBottom: "12px",
        }}
      >
        <Carousel list={animeList} />
        <Breadcrumb />
      </main>
    </>
  );
}
