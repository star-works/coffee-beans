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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./Profile";

const DashboardTabs = () => {
  return (
    <div className="bg-white rounded-[12px] p-10">
      <Tabs defaultValue="Profile">
        <TabsList className="w-full flex bg-[#F9FAFB] border-0 rounded-[6px] px-4 py-4 justify-start gap-2 overflow-auto">
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-[6px]"
            value="Profile"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-[6px]"
            value="Security"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-[6px]"
            value="Billing"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-[6px]"
            value="Notifications"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="Profile">
          <Profile />
        </TabsContent>
        <TabsContent value="Security">
          SECURITY Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Beatae nobis eos, sunt, praesentium ratione ea numquam asperiores,
          repudiandae alias libero voluptatum quam. Doloremque facilis
          recusandae reiciendis earum repellendus voluptatibus suscipit!
        </TabsContent>
        <TabsContent value="Billing">
          BILLING Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Beatae nobis eos, sunt, praesentium ratione ea numquam asperiores,
          repudiandae alias libero voluptatum quam. Doloremque facilis
          recusandae reiciendis earum repellendus voluptatibus suscipit!
        </TabsContent>
        <TabsContent value="Notifications">
          NOTIFICATION Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Beatae nobis eos, sunt, praesentium ratione ea numquam asperiores,
          repudiandae alias libero voluptatum quam. Doloremque facilis
          recusandae reiciendis earum repellendus voluptatibus suscipit!
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
