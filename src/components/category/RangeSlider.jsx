import React, { useState } from "react";

const RangeSlider = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  const calcLeftPosition = (value) => (100 / (100 - 10)) * (value - 10);

  const handleMinChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue > max) return;
    setMin(newValue);
    updateSlider();
  };

  const handleMaxChange = (e) => {
    const newValue = parseInt(e.target.value);
    if (newValue < min) return;
    setMax(newValue);
    updateSlider();
  };

  const updateSlider = () => {
    const leftPositionMin = calcLeftPosition(min);
    const leftPositionMax = calcLeftPosition(max);

    document.getElementById("thumbMin").style.left = `${leftPositionMin}%`;
    document.getElementById("thumbMax").style.left = `${leftPositionMax}%`;
    document.getElementById("min").innerHTML = min;
    document.getElementById("max").innerHTML = max;

    document.getElementById("line").style.cssText = `
      left: ${leftPositionMin}%;
      right: ${100 - leftPositionMax}%;
    `;
  };

  return (
    <>
      <div className="flex items-start">
        <div className=" w-[40px]">
          <p className="text-[12px] font-medium text-black opacity-50">MIN</p>
          <span className="text-[14px] font-medium text-black " id="min">
            {min}
          </span>
        </div>
        <div className="relative  w-full mt-2">
          <div className="absolute top-0 h-[4px] bg-[#E5E8E7] left-[9px] right-[9px]">
            <div
              className="absolute left-0 right-0 top-0 h-[4px] bg-[#D3756B]"
              id="line"
              style={{ left: "0%", right: "0%" }}
            ></div>
            <span
              className="absolute z-[2] text-start border border-red-400 bg-[#D3756B] rounded-full top-[-7px] h-[18px] w-[18px] ml-[-9px]"
              id="thumbMin"
              style={{ left: "0%" }}
            ></span>
            <span
              className="absolute z-[2] text-start border border-red-400 bg-[#D3756B] rounded-full top-[-7px] h-[18px] w-[18px] ml-[-9px]"
              id="thumbMax"
              style={{ left: "100%" }}
            ></span>
          </div>
          <input
            className="input"
            id="rangeMin"
            type="range"
            max="100"
            min="10"
            step="5"
            value={min}
            onChange={handleMinChange}
          />
          <input
            className="input"
            id="rangeMax"
            type="range"
            max="100"
            min="10"
            step="5"
            value={max}
            onChange={handleMaxChange}
          />
        </div>
        <div className=" w-[50px] text-end ">
          <p className="text-[12px] font-medium text-black opacity-50">MAX</p>
          <span className="text-[14px] font-medium text-black " id="max">
            {max}
          </span>
        </div>
      </div>
    </>
  );
};

export default RangeSlider;
