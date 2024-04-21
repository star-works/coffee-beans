"use client";
import { ResponsiveBar } from "@nivo/bar";
import { Arrow } from "./common/Icons";

const data = [
  {
    country: "DK",
    kebab: 24,
    kebabColor: "hsl(311, 70%, 50%)",
  },
  {
    country: "NO",
    kebab: 131,
    kebabColor: "hsl(187, 70%, 50%)",
  },
  {
    country: "SE",
    kebab: 22,
    kebabColor: "hsl(108, 70%, 50%)",
  },
  {
    country: "DE",
    kebab: 75,
    kebabColor: "hsl(120, 70%, 50%)",
  },
];

const theme = {
  axis: {
    fontSize: "14px",
    tickColor: "#eee",
    ticks: {
      line: {
        stroke: "#555555",
      },
      text: {
        fill: "#ffffff",
      },
    },
    legend: {
      text: {
        fontSize: "16px",
        fill: "#aaaaaa",
      },
    },
  },
  grid: {
    line: {
      stroke: "#dddddd",
      strokeWidth: 1,
    },
  },
};
const MyResponsiveBar = () => (
  <ResponsiveBar
    data={data}
    keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
    indexBy="country"
    margin={{ top: 10, right: 0, bottom: 20, left: 60 }}
    padding={0}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors="#D3756B"
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "red",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "country",
      legendPosition: "middle",
      legendOffset: 32,
      truncateTickAt: 0,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      format: (value) => `$${value / 1000}K`,
      legendPosition: "middle",
      legendOffset: -40,
      tickValues: 6,
    }}
    enableLabel={false}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    legends={[]}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ": " + e.formattedValue + " in country: " + e.indexValue
    }
  />
);
const TopAreas = () => {
  return (
    <div className="xl:pt-6 md:ps-0">
      <div className="bg-white sm:p-6 p-4 rounded-xl w-full">
        <p className=" font-bold text-lg text-darkGray pb-4">Top areas</p>
        <div className="h-[300px]">
          <MyResponsiveBar />
        </div>
        <button className="flex justify-center items-center gap-1 pt-3 cursor-pointer group w-full">
          <p className="text-center  font-semibold text-xs tracking-[-3%]">
            See all analytics
          </p>
          <Arrow />
        </button>
      </div>
    </div>
  );
};

export default TopAreas;
