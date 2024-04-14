import DashBoardContent from "@/components/dashboard/DashboardContent";
import DashboardLayout from "@/components/dashboard/hoc/DashboardLayout";
export const metadata = {
  title: "Coffee Bean",
  description: "Unveiling the world of coffee varieties",
  openGraph: {
    images: "/Logo.png",
  },
};
export default function Dashboard() {
  return (
    <>
      <DashboardLayout>
        <DashBoardContent />
      </DashboardLayout>
    </>
  );
}
