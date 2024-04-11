import DashboardTopCards from "@/components/dashboard/DashboardTopCards";
import RecentActivities from "@/components/dashboard/RecentActivities";
import SalesChart from "@/components/dashboard/SalesChart";
import TopAreas from "@/components/dashboard/TopAreas";
import TopCoffee from "@/components/dashboard/TopCoffee";
export const metadata = {
  title: "Coffee Bean",
  description: "Unveiling the world of coffee varieties",
  openGraph: {
    images: "/Logo.png",
  },
};
export default function Home() {
  return (
    <>
      <div className="p-6">
        <DashboardTopCards />
        <SalesChart />
        <TopCoffee />
        <TopAreas />
        <RecentActivities />
      </div>
    </>
  );
}
