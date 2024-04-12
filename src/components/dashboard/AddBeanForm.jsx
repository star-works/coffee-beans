import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/router";
import { Plus } from "./Icons";

const AddBeanForm = () => {
  const router = useRouter();
  return (
    <div className="m-16 rounded-[12px] p-6 border">
      <div className="flex gap-4">
        <Button
          className={`bg-[#F9FAFB] text-[#A2A8B3] w-full text-[14px] font-semibold flex justify-start border-[2px] border-[#F9FAFB] ${
            router.pathname === "/"
              ? "border-[#E9BAB5] bg-transparent text-[#D3756B]"
              : ""
          }`}
        >
          <span
            className={`flex me-3 h-[16px] w-[16px] rounded-full justify-center text-[12px] items-center text-white  ${
              router.pathname === "/" ? "bg-[#D3756B]" : "bg-[#D1D5DB]"
            }`}
          >
            1
          </span>
          General info
        </Button>
        <Button className="bg-[#F9FAFB] text-[#A2A8B3] w-full text-[14px] font-semibold flex justify-start">
          <span className="flex me-3 h-[16px] w-[16px] rounded-full justify-center text-[12px] items-center text-white bg-[#D1D5DB]">
            2
          </span>
          Details
        </Button>
        <Button className="bg-[#F9FAFB] text-[#A2A8B3] w-full text-[14px] font-semibold flex justify-start">
          <span className="flex me-3 h-[16px] w-[16px] rounded-full justify-center text-[12px] items-center text-white bg-[#D1D5DB]">
            3
          </span>
          Review & publish
        </Button>
      </div>

      <div className="flex gap-6 w-full">
        <div className="mt-6 w-full">
          <Label
            htmlFor="terms"
            className="text-[12px] font-semibold w-full inline-block mb-3 "
          >
            Name
          </Label>
          <Input
            className="xs:text-[16px] text-[14px] font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] w-full"
            type="email"
            placeholder="Acme Roasters"
          />
          <p className="text-[12px] font-normal text-[#6B7280] pe-2 mt-2">
            This will be the main title showed to users
          </p>
          <Label
            htmlFor="terms"
            className="text-[12px] font-semibold w-full inline-block mb-3 mt-6"
          >
            Description
          </Label>
          <Textarea className=" w-full xs:text-[16px] text-[14px] font-normal min-h-[100px] sm:min-h-[120px] mt-3 xs:mt-0 rounded-[8px]" />
          <p className="text-[12px] font-normal text-[#6B7280] pe-2 mt-2">
            Describe in a few sentences about your coffee
          </p>

          <div className="text-start mt-6">
            <Button className="bg-[#D3756B] group px-4 text-[12px] font-semibold py-2 h-full hover:bg-transparent hover:text-[#D3756B] border border-[#D3756B] rounded-[6px]">
              <Plus /> Add bag size option
            </Button>
          </div>
        </div>
        <div className="mt-6 w-full">
          <Label
            htmlFor="terms"
            className="text-[12px] font-semibold w-full inline-block mb-3 "
          >
            Name
          </Label>
          <Input
            className="xs:text-[16px] text-[14px] font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] w-full"
            type="email"
            placeholder="Acme Roasters"
          />
          <div className="xs:flex mt-6">
            <Label
              htmlFor="Website"
              className="text-[12px] font-semibold xs:w-[25%] w-full inline-block mb-3 xs:mb-0"
            >
              Website
            </Label>
            <Label className="relative xs:w-[75%] w-full flex">
              <span className="absolute inline-block p-3 border-r xs:text-[16px] text-[14px] font-normal text-[#6B7280]">
                https://
              </span>
              <Input
                className="xs:text-[16px] text-[14px] font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] w-full xs:ps-[85px] ps-[80px] "
                type="email"
                placeholder=""
              />
            </Label>
          </div>
          <div className="xs:flex mt-6">
            <Label
              htmlFor="Profile"
              className="text-[12px] font-semibold xs:w-[25%] w-full"
            >
              Profile picture
            </Label>
            <div className="relative xs:w-[75%] w-full flex items-center gap-4 pt-3 xs:pt-0">
              <Image
                className="max-w-[40px] xs:max-w-full"
                src="/assets/images/png/Avatars.png"
                width={64}
                height={64}
              />
              <p className="cursor-pointer text-[#1F2937] text-[12px] font-semibold hover:text-[#D3756B] mb-0">
                Remove
              </p>
              <p className="cursor-pointer text-[#1F2937] text-[12px] font-semibold hover:text-[#D3756B] mb-0">
                Update
              </p>
            </div>
          </div>
          <div className="xs:flex mt-6">
            <div className="xs:w-[25%] w-full">
              <Label
                htmlFor="Description"
                className="text-[12px] font-semibold w-[25%]"
              >
                Description
              </Label>
              <p className="text-[12px] font-normal text-[#6B7280] pe-2">
                This description will be showed to users
              </p>
            </div>
            <Textarea
              className="xs:w-[75%] w-full xs:text-[16px] text-[14px] font-normal min-h-[100px] mt-3 xs:mt-0"
              placeholder="Type your message here."
              value="Odio ipsum duis varius odio nulla gravida. Vitae tortor aliquet nec ac sagittis eros viverra lectus. Elementum massa id curabitur malesuada."
            />
          </div>
          <div className="xs:flex mt-6">
            <Label
              htmlFor="Email"
              className="text-[12px] font-semibold w-[25%]"
            >
              Email
            </Label>
            <Input
              id="Email"
              className="xs:text-[16px] text-[14px] font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#f9fafa] xs:w-[75%] w-full mt-3 xs:mt-0"
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
    </div>
  );
};

export default AddBeanForm;
