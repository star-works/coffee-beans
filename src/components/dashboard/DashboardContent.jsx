import DataCards from "./DashboardTopCards";
import RecentActivities from "./RecentActivities";
import SalesChart from "./SalesChart";
import TopAreas from "./TopAreas";
import TopCoffees from "./TopCoffee";

const DashBoardContent = () => {
  return (
    <>
      <DataCards />
      <div className="flex flex-wrap bg-[#F8F9FA] overflow-hidden">
        {/* <div className="xl:w-8/12 w-full">
          <SalesChart />
          <div className="overflow-hidden Styled_scrollbar">
            <TopCoffees />
          </div>
        </div> */}
        <div className="w-full xl:w-4/12 flex  xl:flex-col flex-wrap  sm:px-6 px-4 xl:ps-0 justify-between xl:justify-start">
          <div className="xl:w-full w-full md:w-1/2 xl:pe-0 md:pe-3">
            <TopAreas />
          </div>
          <div className="xl:w-full w-full  md:w-1/2 md:ps-3 xl:ps-0 pt-6 md:pt-0">
            <RecentActivities />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardContent;
