import MyBeanContent from "@/components/dashboard/MyBeanContent";
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
      <MyBeanContent />
    </>
  );
}
