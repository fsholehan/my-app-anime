import Breadcrumb from "@/components/basic/Breadcrumb";
import Content from "@/components/container/Content";
import Layout from "@/components/container/Layout";
import Section from "@/components/container/Section";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

const AnimeId = () => {
  return (
    <Layout>
      <Breadcrumb />
      <Section>
        <Content>
          <div className="relative">
            <img
              src="https://i2.wp.com/v9.animasu.cc/wp-content/uploads/2025/02/146061.jpg"
              className="w-full aspect-[16/6] object-cover rounded-t-md"
              alt=""
            />
            <div className="absolute inset-0 rounded-t-md bg-gradient-to-t from-zinc-900 to-transparent" />
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start gap-4 sm:items-end xs:-mt-[100px] sm:-mt-[150px] relative p-4">
            <img
              src="https://i2.wp.com/v9.animasu.cc/wp-content/uploads/2025/02/146061.jpg"
              alt=""
              className="w-[150px] sm:w-[170px] md:w-[200px] rounded-md aspect-[3/4]"
            />
            <div className="flex flex-col gap-3 items-center text-center sm:items-start sm:text-left">
              <h1 className="text-xl md:text-2xl font-extrabold line-clamp-2">
                Wind Breaker Season 2
              </h1>
              {/* <p className="flex">
                    <span className="flex gap-1 items-center">
                      <StarIcon className="w-4 h-4" />
                      {data.score.value}{" "}
                      {data.score.users && `/ ${data.score.users}`} |{" "}
                      {data.status}
                    </span>
                  </p> */}
              <Link
                href="/"
                className="max-w-min flex gap-1 text-white bg-amber-700 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
              >
                <PlayIcon className="h-4" />
                Tonton
              </Link>
            </div>
          </div>
        </Content>
      </Section>
    </Layout>
  );
};

export default AnimeId;
