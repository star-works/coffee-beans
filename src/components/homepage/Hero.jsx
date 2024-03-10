"use client";
import Image from "next/image";
import { LocationSelect } from "../common/AllSelect";
import { BlackSearch } from "../common/Icons";

const Hero = () => {
  return (
    <>
      <div className="bg-[#F9FAFA]  overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto pt-28">
          <Image
            className="absolute max-w-[100px] sm:max-w-[200px] md:max-w-full top-0 start-0"
            height={400}
            width={250}
            src="/assets/images/webp/header_top_start_img_bean.webp"
            alt="image"
          />
          <Image
            className="absolute max-w-[100px] sm:max-w-[200px] md:max-w-full -bottom-5 lg:bottom-0 end-[-5%] lg:end-0"
            height={400}
            width={250}
            src="/assets/images/webp/header_bottom_end_img_bean.webp"
            alt="image"
          />
          <div className="max-w-[1120px] mx-auto px-3 xl:px-0 py-12 md:py-16 relative z-[1]">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal capitalize text-center text-[#090909] !leading-[120%]">
              Unveiling the
              <span className="font-extrabold sm:block">
                world of <span className="text-[#d3756b]">coffee</span>{" "}
                varieties
              </span>
            </h1>
            <p className="text-center !leading-[180%] text-sm font-light max-w-[592px] mx-auto text-[#090909] pt-6">
              We seek to establish a comprehensive online platform dedicated to
              celebrating the diversity of coffee beans sourced from local
              roasters worldwide.
            </p>
            <div className="mt-6 max-w-[580px] lg:max-w-[720px] mx-auto px-4 sm:px-6 md:px-8 py-[18px] bg-white rounded-full">
              <div className="flex  items-center justify-center ">
                <div className="border-e pe-4 pt-0">
                  <LocationSelect />
                </div>
                <div className="relative max-w-[380px] xl:max-w-[600px] w-full order-1 ms-6">
                  <div className="absolute end-0 top-1.5 z-0 cursor-pointer">
                    <BlackSearch />
                  </div>
                  <input
                    className="focus:outline-none text-sm font-light w-full pe-5"
                    type="text"
                    placeholder="Enter coffee name..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
