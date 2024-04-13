import React from "react";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
const SalesChart = () => {
  return (
    <div className="lg:p-6 p-3">
      <div className="border border-[#F3F4F6] bg-white p-6 rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-darkGray">Your sales</p>

          <CustomSelect />
        </div>
        <h2 className="font-semibold text-3xl text-darkGray py-4">
          $12,543,97
        </h2>
        <Image
          className="w-full"
          height="235"
          width="875"
          src="/assets/images/dasboard/svg/sales-chart.svg"
          alt="chart"
        />
      </div>
    </div>
  );
};

export default SalesChart;
