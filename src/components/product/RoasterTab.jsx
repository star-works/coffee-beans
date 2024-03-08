import Image from "next/image";
import React from "react";
import { CheckMark } from "../common/Icons";
import { roasterKeyFeatures } from "../common/Helper";

const RoasterTab = () => {
  return (
    <div className="bg-white">
      <div className="max-w-[1120px] mx-auto xl:px-0 px-3">
        <div className="flex lg:gap-10 gap-6 md:flex-row flex-col">
          <div className="md:w-4/12 flex justify-center md:block">
            <Image
              className="ms-auto"
              src="/assets/images/png/roaster_machine.png"
              height={320}
              width={320}
              alt="roaster_machine"
            />
          </div>
          <div className="md:w-8/12">
            <h2 className="mb-4 text-2xl font-semibold leading-[36px] text-[#000d07]">
              Sweet Coffee USA, Authorized Distributor
            </h2>
            <p className="sm:mb-6 mb-4 font-normal text-sm leading-[21px] text-[#090909]">
              <span className="font-medium text-black">
                Coffee Machine Depot USA
              </span>
              is proud to present the Gemma Countertop Coffee Roaster by Sweet
              Coffee USA. Gemma is an electric, fully automatic coffee roaster
              which doesn’t require knowledge in roasting coffee. The main
              control panel allows selecting up to 10 different preset
              programmed type of roasting profiles. There are only 3 simple
              steps to operate the Gemma and each cycle will only take 20 to 25
              minutes to completely roast.
            </p>
            <h4 className="text-sm font-semibold leading-[21px] mb-4">
              Key Features
            </h4>
            <div className="flex flex-col sm:gap-3 gap-2">
              {roasterKeyFeatures.map((features, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <span>
                      <CheckMark />
                    </span>
                    <p className="text-sm font-normal leading-[19.6px] text-[#000d07]">
                      {features.feature}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoasterTab;
