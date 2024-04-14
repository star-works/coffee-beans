import MyBeanContent from "@/components/dashboard/my-bean/MyBeanContent";
import DashboardLayout from "@/components/dashboard/hoc/DashboardLayout";
export const metadata = {
  title: "Dashboard - My beans",
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
