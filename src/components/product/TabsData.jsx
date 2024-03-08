import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsCard from "./TabsCard";
import RoasterTab from "./RoasterTab";
import { Button } from "@/components/ui/button";

const TabsData = () => {
  return (
    <div className="max-w-[1120px] mx-auto xl:px-0 px-3 pt-3">
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-full grid-cols-2 max-w-[350px] mx-auto my-7">
          <TabsTrigger className="text-[16px] font-normal" value="account">
            About The Roaster
          </TabsTrigger>
          <TabsTrigger className="text-[16px] font-normal" value="password">
            Comments (24)
          </TabsTrigger>
        </TabsList>
        <TabsContent className=" pt-5 lg:pb-20 pb-10" value="account">
          <RoasterTab />
        </TabsContent>
        <TabsContent className="pt-3  lg:pb-20 pb-10" value="password">
          <div className="w-full md:flex gap-6">
            <div className="flex flex-col gap-6 w-full">
              <TabsCard
                name="Arlene McCoy"
                desc={`Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.`}
              />
              <TabsCard
                name="Darrell Steward"
                desc="Duis at ullamcorper nulla, eu dictum eros."
              />
            </div>
            <div className="flex flex-col gap-6 w-full pt-6 md:pt-0">
              <TabsCard
                name="Ralph Edwards"
                desc={` Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.`}
              />
              <TabsCard
                name="Albert Flores"
                desc={`200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA
`}
              />
            </div>
          </div>
          <div className="text-center">
            <Button className="sm:text-[20px] text-[18px] font-medium px-7 py-3 rounded-full mt-10">
              Load more
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsData;
