import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Profile from "./Profile";

const DashboardTabs = () => {
  return (
    <div className="bg-white rounded-xl lg:p-10 md:p-5 p-4">
      <Tabs defaultValue="Profile">
        <TabsList className="w-full flex bg-[#F9FAFB] border-0 rounded-md md:px-4 px-2 md:py-4 py-2 justify-start gap-2 overflow-auto">
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-md"
            value="Profile"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-md"
            value="Security"
          >
            Security
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-md"
            value="Billing"
          >
            Billing
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-white text-sm font-semibold text-grey py-2 data-[state=active]:text-lightRed rounded-md"
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
