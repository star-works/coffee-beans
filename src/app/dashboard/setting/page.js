import DashboardTabs from "@/components/dashboard/DashBoardTabs";
import Profile from "@/components/dashboard/Profile";
import Services from "@/components/homepage/Services";
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
      <div className="rounded-[12px]">
        <DashboardTabs />
      </div>
    </>
  );
}
