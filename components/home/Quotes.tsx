"use client";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Testimonials } from "@/constants";
const Quotes = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="max-w-min relative"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="">
        {Testimonials.map((item, index) => (
          <CarouselItem
            key={index}
            className="relative lg:px-12 md:px-6 px-5 basis-full min-h-[460px] flex flex-col gap-8  md:gap-0 md:flex-row items-center justify-around"
          >
            <div className="flex items-start justify-center gap-2 sm:gap-4">
              <div className="text-4xl sm:text-7xl text-yellow-600">
                <RiDoubleQuotesL />
              </div>
              <div className="flex flex-col gap-4 max-w-72 sm:max-w-[520px]">
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-400">
                  {item.text}
                </h1>
                <p className="text-base">{item.author}</p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-40 top-[396px] sm:top-96   md:left-48 sm:h-10 sm:w-10 border text-black border-yellow-600 hover:bg-yellow-600 hover:text-white" />
      <CarouselNext className="absolute right-40 top-[396px] sm:top-96 md:right-48  sm:h-10 sm:w-10 border border-yellow-500  text-black hover:bg-yellow-600 hover:text-white" />
    </Carousel>
  );
};

export default Quotes;
