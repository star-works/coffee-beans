"use client";
import { RangeSlider } from "rsuite";
import { useState } from "react";
import { useSelectedProvider } from "../context/SelectedProvider";

const AltitudeSlider = () => {
  const { sliderValue, setSliderValue } = useSelectedProvider();
  return (
    <>
      <div className="flex w-full items-center">
        <div className=" w-[40px]">
          <p className="text-xs font-medium text-black opacity-50">MIN</p>
          <span className="text-sm font-medium text-black " id="min">
            {sliderValue[0]}
          </span>
        </div>
        <div className="w-full">
          <RangeSlider
            tooltip={false}
            onChange={(e) => setSliderValue(e)}
            defaultValue={sliderValue}
            value={sliderValue}
          />
        </div>
        <div className=" w-[50px] text-end ">
          <p className="text-xs font-medium text-black opacity-50">MAX</p>
          <span className="text-sm font-medium text-black " id="max">
            {sliderValue[1]}
          </span>
        </div>
      </div>
    </>
  );
};

export default AltitudeSlider;
