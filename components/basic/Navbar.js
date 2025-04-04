import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  MagnifyingGlassIcon as SearchIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const Navbar = ({ navLinks, siteName }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className=" bg-zinc-900 fixed w-full z-50 top-0 start-0 border-b border-zinc-800 px-2 mb-10">
      <div className="container flex flex-wrap items-center justify-between py-2">
        <Link href="/" className="flex items-center space-x-3">
          <h1 className="text-xl font-semibold text-white">{siteName}</h1>
        </Link>

        <div className="flex md:order-2 space-x-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 w-10 h-10 text-zinc-200 rounded-lg  hover:bg-zinc-700"
          >
            <SearchIcon className="w-6 h-6" />
          </button>

          <button className="w-10 h-10 md:hidden text-zinc-200">
            <Bars3Icon className="w-6 h-6" onClick={() => setIsOpen(!isOpen)} />
          </button>
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-zinc-800 md:bg-zinc-900 border-zinc-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`navbar-link-item ${
                    link.href === pathname
                      ? "text-orange-500 font-bold"
                      : "text-zinc-200"
                  } `}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {searchOpen && (
        <div className="z-10 w-full">
          <ul className="p-4 bg-zinc-900 text-sm -translate-y-2">
            <form className="max-w-md mx-auto text-zinc-700 flex rounded-md overflow-hidden">
              <input
                type="search"
                className="w-full p-2 text-sm  border  bg-zinc-800 border-zinc-600 text-white rounded-tl-md rounded-bl-md"
                placeholder="Cari Anime.."
              />
              <button
                type="submit"
                className="p-2 bg-orange-600 text-white rounded-tr-md rounded-br-md"
              >
                <SearchIcon className="w-5 h-5" />
              </button>
            </form>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
