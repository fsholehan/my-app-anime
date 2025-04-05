import Navbar from "@/components/basic/Navbar";
import Footer from "@/components/basic/Footer";
import navList from "@/data/navlinks.json";

export default function Layout({ children }) {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Daftar Anime", href: "/anime" },
    { title: "Daftar Genre", href: "/genre" },
  ];

  return (
    <>
      <Navbar siteName="Nanana" navLinks={navLinks} />
      <main
        className="container min-h-screen relative space-y-4"
        style={{ paddingTop: "69px", paddingBottom: "12px" }}
      >
        {children}
      </main>
      <Footer siteName="Nanana" navLinks={navList} />
    </>
  );
}
