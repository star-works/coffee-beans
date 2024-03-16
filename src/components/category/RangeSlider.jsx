"use client";
import { RangeSlider } from "rsuite";
import { useState } from "react";

const RangeS = () => {
  const [value, setvalue] = useState([0, 0]);
  console.log(value);
  return (
    <>
      <div className="flex w-full items-center">
        <div className=" w-[40px]">
          <p className="text-[12px] font-medium text-black opacity-50">MIN</p>
          <span className="text-[14px] font-medium text-black " id="min">
            {value[0]}
          </span>
        </div>
        <div className="w-full">
          <RangeSlider
            tooltip={false}
            onChange={(e) => setvalue(e)}
            defaultValue={[10, 50]}
          />
        </div>
        <div className=" w-[50px] text-end ">
          <p className="text-[12px] font-medium text-black opacity-50">MAX</p>
          <span className="text-[14px] font-medium text-black " id="max">
            {value[1]}
          </span>
        </div>
      </div>
    </>
  );
};

export default RangeS;
