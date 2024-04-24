"use client";
import { ResponsiveLine } from "@nivo/line";
import CustomSelect from "./my-bean/CustomSelect";
const gradientDefs = [
  {
    id: "gradientA",
    type: "linearGradient",
    colors: [
      { offset: 0, color: "rgba(211,117,107,1)" }, // Top color
      { offset: 100, color: "rgba(211,117,107,0)" }, // Bottom color
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
    isInteractive={true}
    data={data}
    tooltip={({ point }) => {
      return (
        <div
          style={{
            background: "white",
            padding: "9px 12px",
            border: "1px solid #ccc",
          }}
        >
          <div>
            <strong>{point.serieId}</strong>
          </div>
          <div>
            {point.data.x}: {point.data.yFormatted}
          </div>
        </div>
      );
    }}
    margin={{ top: 10, right: 15, bottom: 50, left: 50 }}
    xScale={{ type: "point" }}
    colors="#D3756B"
    gradientDefs={gradientDefs}
    fill={[{ match: "*", id: "gradientA" }]}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
    yFormat=" >-.2f"
    curve="cardinal"
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
    enableTouchCrosshair={true}
    crosshairType="top-right"
    useMesh={true}
    legends={[]}
  />
);
const SalesChart = () => {
  return (
    <div className="lg:p-6 md:p-3 py-3 ">
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
