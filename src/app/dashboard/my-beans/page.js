import MyBeanContent from "@/components/dashboard/MyBeanContent";
import DashboardLayout from "@/components/dashboard/hoc/DashboardLayout";
export const metadata = {
  title: "Coffee Bean",
  description: "Unveiling the world of coffee varieties",
  openGraph: {
    images: "/Logo.png",
  },
};
export default function MyBeans() {
  return (
    <>
      <DashboardLayout>
        <MyBeanContent />
      </DashboardLayout>
    </>
  );
}
