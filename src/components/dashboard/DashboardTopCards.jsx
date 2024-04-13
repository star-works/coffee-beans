import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CardsData } from "./Helper";
import { DataCardBadge } from "./CommonBadge";
const DataCards = () => {
  return (
    <div className="pt-2 lg:px-6 px-3">
      <div className="grid gap-3 lg:gap-4 xl:gap-6 lg:grid-cols-4 md:grid-cols-2 xs:grid-cols-2 ">
        {CardsData.map((item, index) => (
          <Card key={index} className="bg-white p-0">
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
              <h2 className="ff_inter text-gray-900 font-semibold text-2xl sm:text-3xl xl:text-[40px] pt-2">
                {item.amount}
              </h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DataCards;
