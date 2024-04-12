import MyBean from "@/components/dashboard/MyBean";
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
      <MyBean />
    </>
  );
}
