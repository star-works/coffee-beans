import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderCard } from "../common/Helper";
import RoasterSliderCard from "./RoasterSliderCard";

const RoasterSlider = () => {
  return (
    <div className=" overflow-hidden py-12 sm:py-16 md:py-20">
      <div className="w-full px-3 xl:px-0 max-w-[1140px] mx-auto">
        <h2 className="text-center capitalize font-medium px-4 pb-12 text-3xl sm:text-4xl md:text-[40px]">
          Best <span className="text-lightRed font-extrabold">roasters</span> in
          the town
        </h2>
        <Carousel className="pt-0 w-full max-auto">
          <CarouselContent>
            {sliderCard.map((value, index) => (
              <RoasterSliderCard value={value} key={index} />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default RoasterSlider;
