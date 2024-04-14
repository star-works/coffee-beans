import React from "react";
import Image from "next/image";
import { Arrow } from "./Icons";
const TopAreas = () => {
  return (
    <div className="xl:pt-6">
      <div className="bg-white p-6 rounded-xl w-full">
        <p className=" font-bold text-lg text-darkGray pb-4">Top areas</p>
        <Image
          className="w-full"
          height="235"
          width="875"
          src="/assets/images/dasboard/svg/areas.svg"
          alt="chart"
        />
        <div className="flex justify-center items-center gap-1 pt-3 cursor-pointer group">
          <p className="text-center  font-semibold text-xs tracking-[-3%]">
            See all analytics
          </p>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default TopAreas;
