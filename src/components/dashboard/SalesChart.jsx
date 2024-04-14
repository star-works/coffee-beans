"use client";
import React from "react";
import Image from "next/image";
import CustomSelect from "./CustomSelect";
import { ResponsiveLine } from "@nivo/line";
const gradientDefs = [
  {
    id: "gradientA",
    type: "linearGradient",
    colors: [
      { offset: 0, color: "#D3756B" },
      { offset: 100, color: "#D3756B" },
    ],
  },
];
const data = [
  {
    id: "japan",
    color: "#D3756B",
    data: [
      {
        x: "Jan",
        y: 41,
      },
      {
        x: "Feb",
        y: 149,
      },
      {
        x: "Mar",
        y: 123,
      },
      {
        x: "Apr",
        y: 20,
      },
      {
        x: "May",
        y: 171,
      },
      {
        x: "Jun",
        y: 132,
      },
      {
        x: "Jul",
        y: 258,
      },
      {
        x: "Aug",
        y: 70,
      },
      {
        x: "Sep",
        y: 61,
      },
      {
        x: "Oct",
        y: 55,
      },
      {
        x: "Nov",
        y: 173,
      },
      {
        x: "Dec",
        y: 147,
      },
    ],
  },
];
const MyResponsiveLine = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 10, right: 15, bottom: 50, left: 50 }}
    xScale={{ type: "point" }}
    colors="#D3756B"
    gradientDefs={gradientDefs}
    fill={[{ match: "red", id: "gradientA" }]}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    curve="basis"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
      truncateTickAt: 0,
    }}
    enableGridX={false}
    lineWidth={3}
    pointSize={2}
    pointColor={{ theme: "background" }}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-19}
    areaOpacity={0.15}
    isInteractive={false}
    enableTouchCrosshair={true}
    crosshairType="top-right"
    useMesh={true}
    legends={[]}
  />
);
const SalesChart = () => {
  return (
    <div className="lg:p-6 p-3">
      <div className="border border-[#F3F4F6] bg-white sm:p-6 p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-darkGray">Your sales</p>

          <CustomSelect />
        </div>
        <h2 className="font-semibold text-3xl text-darkGray py-4">
          $12,543,97
        </h2>

        <div className="h-[300px]">
          <MyResponsiveLine />
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
