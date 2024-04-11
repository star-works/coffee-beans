import Footer from "@/components/common/Footer";
import Trending from "@/components/common/Trending";
import ArebicaCards from "@/components/homepage/ArebicaCards";
import Hero from "@/components/homepage/Hero";
import LatestBlog from "@/components/homepage/LatestBlog";
import RoasterSlider from "@/components/homepage/RoasterSlider";
import Services from "@/components/homepage/Services";
import { Header } from "@radix-ui/react-accordion";
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
      <Header />
      <Hero />
      <Services />
      <div className="bg-[#F9FAFA] py-12">
        <Trending title="Trending!" />
      </div>
      <RoasterSlider />
      <div className="bg-[#F9FAFA] py-12">
        <Trending title="Newly added" />
      </div>
      <ArebicaCards />
      <LatestBlog /> <Footer />
    </>
  );
}
