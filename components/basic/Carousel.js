import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";

const Carousel = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [list.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? list.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % list.length);
  };

  return (
    <div id="controls-carousel" className="relative w-full">
      <div className="relative h-56 overflow-hidden rounded-md md:h-96">
        {list.map((anime, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } carousel-item`}
          >
            <div>
              <Image
                loading="lazy"
                src={anime.imgUrl}
                width={800}
                height={450}
                className="carousel-item-image"
                alt={anime.title}
              />
            </div>
            <div className="carousel-item-layer">
              <div className="carousel-item-cus">
                {/* <p className="carousel-item-eps">
                  <span className="text-teal-600">
                    Episode {anime.episodes}
                  </span>
                </p>*/}
                <h1 className="carousel-item-title">{anime.title}</h1>
                <Link href={anime.url} className="carousel-item-btn">
                  <PlayIcon className="w-5 h-5" />
                  <span className="text-xs">Tonton Kuy</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex md:gap-10 -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
        <button
          type="button"
          onClick={prevSlide}
          className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-zinc-700 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          className="flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-zinc-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
