import Trending from "@/components/common/Trending";
import ArebicaCards from "@/components/homepage/ArebicaCards";
import Hero from "@/components/homepage/Hero";
import LatestBlog from "@/components/homepage/LatestBlog";
import RoasterSlider from "@/components/homepage/RoasterSlider";
import Services from "@/components/homepage/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
      <LatestBlog />
    </>
  );
}
