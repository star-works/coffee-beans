import Trending from "@/components/common/Trending";
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
      <div className="bg-[#F9FAFA] py-12">
        <Trending title="Trending!" />
      </div>
    </>
  );
}
