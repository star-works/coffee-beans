import Footer from "@/components/common/Footer";
import Trending from "@/components/common/Trending";
import Hero from "@/components/product/Hero";
import TabsData from "@/components/product/TabsData";
import { Header } from "@radix-ui/react-accordion";
export const metadata = {
  title: "Coffee Bean Product",
  description:
    "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. ",
  openGraph: {
    images: "/Logo.png",
  },
};
const ProductPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <TabsData />
      <div className="bg-[#F9FAFA] py-12">
        <Trending title="Newly added" />
      </div>
      <div className=" py-12">
        <Trending title="Trending" />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
