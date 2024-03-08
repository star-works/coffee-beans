import Trending from "@/components/common/Trending";
import Hero from "@/components/product/Hero";
import TabsData from "@/components/product/TabsData";

const page = () => {
  return (
    <>
      <Hero />
      <TabsData />
      <div className="bg-[#F9FAFA] py-12">
        <Trending title="Newly added" />
      </div>
      <div className=" py-12">
        <Trending title="Trending" />
      </div>
    </>
  );
};

export default page;
