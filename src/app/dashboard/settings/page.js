import DashboardTabs from "@/components/dashboard/DashBoardTabs";
import DashboardLayout from "@/components/dashboard/hoc/DashboardLayout";
export const metadata = {
  title: "Coffee Bean",
  description: "Unveiling the world of coffee varieties",
  openGraph: {
    images: "/Logo.png",
  },
};
export default function Settings() {
  return (
    <>
      <DashboardLayout>
        <div className="rounded-[12px]">
          <DashboardTabs />
        </div>
      </DashboardLayout>
    </>
  );
}
