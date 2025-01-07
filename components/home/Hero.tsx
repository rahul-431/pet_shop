"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Hero() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="relative py-2 lg:px-12 md:px-6 px-5 basis-full md:min-h-[460px] min-h-[520px] bg-pink-100 flex flex-col gap-8  md:gap-0 md:flex-row items-center justify-around"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="/dog.png"
                alt="pet image"
                className="z-10 relative"
                layout="fill"
                objectFit="contain"
              />
              <div className="absolute z-0 -bottom-4 opacity-60 w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-pink-200" />
            </div>
            <div className="flex flex-col gap-4 lg:gap-8 items-start">
              <p className="text-base md:text-xl text-yellow-600 font-semibold">
                SAVE 10-20 % OFF
              </p>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold max-w-xs sm:max-w-md">
                Best destination for{" "}
                <span className="text-yellow-600">your pets</span>
              </h1>
              <button className="flex items-center space-x-2 p-2 md:p-4 rounded-md bg-yellow-600 hover:bg-yellow-500 text-white font-semibold tracking-wide">
                <span>Shop Now</span>
                <span>
                  <MdOutlineArrowForwardIos />
                </span>
              </button>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="absolute left-5 sm:left-10 sm:h-10 sm:w-10 bg-yellow-500 hover:bg-yellow-600 hover:text-white  text-white" />
      <CarouselNext className="absolute right-5 sm:right-10  sm:h-10 sm:w-10 bg-yellow-500  text-white hover:bg-yellow-600 hover:text-white" />
    </Carousel>
  );
}
