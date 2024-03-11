"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { useEffect, useState } from "react";
import { newSliderCard } from "./Helper";
import { RotateArrow } from "./Icons";
import SliderCardItem from "./SliderCardItem";

const Trending = ({ title }) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const handleIndicatorClick = (index) => {
    setCurrent(index + 1); // Index is zero-based, so we add 1 to match the slide number
    if (api && typeof api.scrollTo === "function") {
      api.scrollTo(index); // Assuming the API provides a method to scroll to a specific slide
    }
  };
  return (
    <div className="w-full px-3 xl:px-0 max-w-[1140px] mx-auto">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl text-[#090909] font-semibold">{title}</h3>
        <Link
          href="/"
          className="text-black flex gap-1 items-center text-opacity-50 text-base font-normal hover:text-opacity-100 group duration-300"
        >
          See all
          <span>
            <RotateArrow />
          </span>
        </Link>
      </div>
      <Carousel setApi={setApi} className="pt-0 w-full max-auto rounded-xl ">
        <CarouselContent className="p-5">
          {newSliderCard.map((value, index) => (
            <SliderCardItem value={value} key={index} />
          ))}
        </CarouselContent>
        <CarouselPrevious
          className={
            "h-8 w-8 md:h-12 md:w-12 rounded-full !border !border-black hover:!border-opacity-100 !border-opacity-10 px-3 md:!pe-[18.5px] md:!ps-4"
          }
        />
        <CarouselNext
          className={
            "h-8 w-8 md:h-12 md:w-12 rounded-full !border !border-black hover:!border-opacity-100 !border-opacity-10 px-3 md:!ps-[18.5px] md:!pe-4 "
          }
        />
      </Carousel>
      <div className="pt-2 text-center text-sm text-muted-foreground">
        <div className=" flex justify-center gap-1">
          {Array.from({ length: count }, (_, i) => (
            <span
              key={i}
              onClick={() => handleIndicatorClick(i)}
              className={`w-4 h-1 cursor-pointer rounded-2xl bg-[#090909] bg-opacity-15 ${
                current === i + 1 ? "!bg-[#776b5d]" : ""
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
