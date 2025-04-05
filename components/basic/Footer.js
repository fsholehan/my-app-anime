import React from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Footer({ navLinks, siteName }) {
  return (
    <footer className="bg-zinc-900">
      <div className="container w-full py-8 lg:py-10">
        <div className="lg:flex lg:justify-between gap-8">
          <div className="mb-6 lg:mb-0 max-w-[500px]">
            <Link href="/" className="flex items-center max-w-min">
              {/* <Image src={logo} width={32} height={32} alt={`${siteName} Logo`} className="me-3" /> */}
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                {siteName}
              </span>
            </Link>
            <p className="py-4 text-zinc-400">
              This site does not store any files on our server, we are linked to
              the media which is hosted on 3rd party services.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <ul className="flex flex-col gap-4 text-zinc-400 font-medium">
              {navLinks._1.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="hover:underline max-w-min">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="flex flex-col gap-4 text-zinc-400 font-medium">
              {navLinks._2.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.targetBlank ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="hover:underline max-w-min"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-6  sm:mx-auto border-zinc-700 lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  sm:text-center dtext-zinc-400">
            © {new Date().getFullYear()}{" "}
            <Link href="/" className="hover:underline">
              {siteName}™
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
