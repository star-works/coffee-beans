import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className=" bg-white rounded-[12px]">
      <h3 className="xs:text-[20px] text-[18px] font-semibold pt-4">Profile</h3>
      <p className="xs:text-base text-sm font-normal text-[#6B7280]">
        Update your roaster details here
      </p>
      <div className="mt-6">
        <div className="xs:flex">
          <Label
            htmlFor="terms"
            className="text-xs font-semibold xs:w-[25%] w-full inline-block mb-3 xs:mb-0"
          >
            Name
          </Label>
          <Input
            className="xs:text-base text-sm font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] xs:w-[75%] w-full"
            type="email"
            placeholder="Acme Roasters"
          />
        </div>
        <div className="xs:flex mt-6">
          <Label
            htmlFor="Website"
            className="text-xs font-semibold xs:w-[25%] w-full inline-block mb-3 xs:mb-0"
          >
            Website
          </Label>
          <Label className="relative xs:w-[75%] w-full flex">
            <span className="absolute inline-block p-3 border-r xs:text-base text-sm font-normal text-[#6B7280]">
              https://
            </span>
            <Input
              className="xs:text-base text-sm font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] w-full xs:ps-[85px] ps-[80px] "
              type="email"
              placeholder=""
            />
          </Label>
        </div>
        <div className="xs:flex mt-6">
          <Label
            htmlFor="Profile"
            className="text-xs font-semibold xs:w-[25%] w-full"
          >
            Profile picture
          </Label>
          <div className="relative xs:w-[75%] w-full flex items-center gap-4 pt-3 xs:pt-0">
            <Image
              className="max-w-[40px] xs:max-w-full"
              src="/assets/images/png/Avatars.png"
              width={64}
              height={64}
              alt="avatar"
            />
            <p className="cursor-pointer text-[#1F2937] text-xs font-semibold hover:text-[#D3756B] mb-0">
              Remove
            </p>
            <p className="cursor-pointer text-[#1F2937] text-xs font-semibold hover:text-[#D3756B] mb-0 mt-0">
              Update
            </p>
          </div>
        </div>
        <div className="xs:flex mt-6">
          <div className="xs:w-[25%] w-full">
            <Label
              htmlFor="Description"
              className="text-xs font-semibold w-[25%]"
            >
              Description
            </Label>
            <p className="text-xs font-normal text-[#6B7280] pe-2">
              This description will be showed to users
            </p>
          </div>
          <Textarea
            className="xs:w-[75%] w-full xs:text-base text-sm font-normal min-h-[100px] mt-3 xs:mt-0"
            placeholder="Type your message here."
            value="Odio ipsum duis varius odio nulla gravida. Vitae tortor aliquet nec ac sagittis eros viverra lectus. Elementum massa id curabitur malesuada."
          />
        </div>
        <div className="xs:flex mt-6">
          <Label htmlFor="Email" className="text-xs font-semibold w-[25%]">
            Email
          </Label>
          <Input
            id="Email"
            className="xs:text-base text-sm font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] xs:w-[75%] w-full mt-3 xs:mt-0"
            type="email"
            placeholder="Hello@acme-coffee.com"
          />
        </div>
        <div className="text-end mt-6">
          <Button className="bg-[#D3756B] px-10 font-normal hover:bg-transparent hover:text-[#D3756B] border border-[#D3756B]">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
