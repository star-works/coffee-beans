"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardsData } from "./common/Helper";
import { DataCardBadge } from "./common/CommonBadge";
import CountUp from "react-countup";

const DataCards = () => {
  const [isCounted, setIsCounted] = useState(false);

  useEffect(() => {
    setIsCounted(true);
  }, []);
  return (
    <div className="pt-2 lg:px-6 md:px-3">
      <div className="grid gap-3 lg:gap-4 xl:gap-6 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 ">
        {CardsData.map((item, index) => (
          <Card
            key={index}
            className="bg-white p-0 hover:translate-y-[-5px] transition-all duration-300 ease-in-out"
          >
            <CardContent className="p-3 xl:px-6 xl:py-[19px]">
              <div className="flex  items-center justify-between">
                <h3 className="ff_inter text-xs sm:text-sm text-gray-900 font-normal  tracking-[-3%] leading-[17.5px] ">
                  {item.title}
                </h3>
                <DataCardBadge
                  icon={item.icon}
                  name={item.percentage}
                  className={item.className}
                />
              </div>
              {isCounted ? (
                <h2 className="ff_inter text-gray-900 font-semibold text-2xl sm:text-3xl xl:text-[40px] sm:pt-2">
                  {index === 0 && "$"}
                  <CountUp
                    start={0}
                    end={parseInt(item.amount.replace(/[^\d]/g, ""), 10)}
                    duration={2.5}
                    separator=","
                  />
                </h2>
              ) : (
                <h2 className="ff_inter text-gray-900 font-semibold text-2xl sm:text-3xl xl:text-[40px] sm:pt-2">
                  {item.amount}
                </h2>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DataCards;
