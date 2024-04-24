import React from "react";
import Image from "next/image";
import { activitiesData } from "./common/Helper";

const RecentActivities = () => {
  return (
    <div className="xl:pt-6">
      <div className="bg-white lg:p-6 p-3 rounded-xl w-full">
        <p className="font-bold text-lg text-darkGray pb-4">
          Recent activities
        </p>

        <div className="flex flex-col gap-4">
          {activitiesData.map((activity, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className={`${activity.iconBg} h-10 w-10 rounded-xl flex justify-center items-center`}
                >
                  <div className="relative">
                    {activity.icon}
                    <Image
                      className="absolute bottom-0"
                      height="235"
                      width="875"
                      src="/assets/images/dasboard/svg/sales-chart.svg"
                      alt="chart"
                    />
                  </div>
                </div>
                <div>
                  <p className="mb-0 text-sm text-darkGray leading-[17px]">
                    {activity.action}
                  </p>
                  <p className="mb-0 text-sm font-medium text-[#1F2937] leading-[17px]">
                    {activity.item}
                  </p>
                </div>
              </div>
              <div className="mb-0 text-sm text-darkGray leading-[17px]">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
