import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
const RoasterSliderCard = ({ value }) => {
  return (
    <CarouselItem className="sm:basis-1/2 lg:basis-1/3 pt-0 lg:ps-6">
      <Card className="p-0 bg-white cursor-pointer group">
        <CardContent className="flex flex-col pt-0">
          <div className="overflow-hidden rounded-2xl">
            <Link href="#">
              <Image
                width={357}
                className="duration-300 group-hover:scale-105 w-full max-h-[280px] object-cover"
                height={280}
                src={value.image}
                alt="image slider"
              />
            </Link>
          </div>
          <h3 className="font-semibold text-xl pt-4 text-lightBlack">
            {value.title}
          </h3>
          <p className="font-normal text-sm pt-2 text-lightBlack">
            {value.description}
          </p>
          <button className="py-4 hover:bg-black hover:text-white duration-300 border-opacity-15 border rounded-3xl mt-4 text-base font-normal active:scale-[.9]">
            More
          </button>
        </CardContent>
      </Card>
    </CarouselItem>
  );
};

export default RoasterSliderCard;
