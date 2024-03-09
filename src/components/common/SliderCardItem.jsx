"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
const SliderCardItem = ({ value }) => {
  return (
    <CarouselItem className="basis-8/12 sm:basis-5/12 md:basis-4/12 lg:basis-3/12 xl:basis-1/5 py-5 rounded-lg lg:ps-5">
      <Card className="p-3 sm:p-4 md:p-5 cursor-pointer group bg-white shadow_card ">
        <CardHeader>
          <div className="overflow-hidden rounded-2xl">
            <Image
              width={160}
              className="duration-300 group-hover:scale-105 w-full max-h-[160px] object-cover"
              height={124}
              src={value.image}
              alt="image slider"
            />
          </div>
          <CardTitle className="font-semibold text-[15px] !mt-0 pt-3 text-[#090909]">
            {value.title}
          </CardTitle>
          <CardDescription className="font-light text-sm !mt-0 text-[#090909]">
            {value.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-3 h-full">
          <div className="flex gap-1 pb-4">
            <Image
              width={36}
              height={36}
              src="/assets/images/png/secure_badge.png"
              alt="image slider"
            />
            <Image
              width={36}
              height={36}
              src="/assets/images/png/money_back_badge.png"
              alt="image slider"
            />
            <Image
              width={36}
              height={36}
              src="/assets/images/png/satisfaction_badge.png"
              alt="image slider"
            />
            <Image
              width={36}
              height={36}
              src="/assets/images/png/easy_returns_badge.png"
              alt="image slider"
            />
          </div>
          <div className="flex flex-col justify-between h-[106px]">
            <div className="flex flex-wrap gap-2 ">
              {value.badgeFirst}
              {value.badgeSecond}
              {value.badgeThird}
              {value.badgeFourth}
            </div>
            <p className="flex items-center text-[#090909] font-semibold text-xl ">
              $80
              <span className="text-sm font-normal ms-1 text-[#c1c1c1] relative before:absolute before:w-full before:h-[1px] before:bg-[#c1c1c1] before:start-0 before:top-1/2 before:-translate-y-1/2">
                $55.99
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default SliderCardItem;
