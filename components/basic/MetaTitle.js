import React from "react";
import Link from "next/link";

export default function MetaTitle({ title, href }) {
  return (
    <>
      <div className="flex justify-between gap-4 flex-wrap">
        <h1 className="text-lg font-bold line-clamp-2">{title}</h1>
        {href && (
          <Link
            href={href}
            className="text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-xs px-3 py-2 text-center inline-flex items-center dark:bg-amber-600 dark:hover:bg-amber-700"
          >
            More
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        )}
      </div>
      <hr className="border-zinc-400 dark:border-zinc-600" />
    </>
  );
}
