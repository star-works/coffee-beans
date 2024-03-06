import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TabsCard from "./TabsCard";

const TabsData = () => {
  return (
    <div className="max-w-[1120px] mx-auto xl:px-0 px-3">
      <Tabs defaultValue="account" className="">
        <TabsList className="grid w-full grid-cols-2 max-w-[350px] mx-auto my-7">
          <TabsTrigger className="text-[16px] font-normal" value="account">
            About The Roaster
          </TabsTrigger>
          <TabsTrigger className="text-[16px] font-normal" value="password">
            Comments (24)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
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
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you&apos;ll be logged
                out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod rem
              non harum illo doloribus libero alias atque eum reprehenderit
              veniam quidem laboriosam quisquam voluptas est nostrum reiciendis
              fugit, perferendis a?
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsData;
