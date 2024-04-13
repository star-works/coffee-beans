import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { BtnRightArrow, ImgIcon, Plus } from "./Icons";
import { useRouter } from "next/navigation";

const AddBeanForm = () => {
  const router = useRouter();
  return (
    <div className="m-16 rounded-[12px] p-6 border">
      <div className="flex sm:flex-nowrap flex-wrap gap-4">
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
      <div className="sm:flex gap-6 w-full">
        <div className="mt-6 w-full">
          <Label
            htmlFor="terms"
            className="text-[12px] font-semibold w-full inline-block mb-3 "
          >
            Name
          </Label>
          <Input
            className="xs:text-[16px] text-[14px] font-normal placeholder:text-black shadow-[0px_2px_4px_0px_#F0F1F2] w-full"
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
          <Textarea className=" w-full xs:text-[16px] text-[14px] font-normal min-h-[100px] sm:min-h-[120px] mt-3 xs:mt-0 rounded-[8px] shadow-[0px_2px_4px_0px_#F0F1F2]" />
          <p className="text-[12px] font-normal text-[#6B7280] pe-2 mt-2">
            Describe in a few sentences about your coffee
          </p>

          <div className="text-start mt-6">
            <Button className="bg-[#D3756B] group px-4 text-[12px] font-semibold py-2 h-full hover:bg-transparent hover:text-[#D3756B] border border-[#D3756B] rounded-[6px]">
              <Plus /> Add bag size option
            </Button>
          </div>
          <div className="xs:flex gap-6">
            <div className="w-full">
              <p className="text-[12px] font-semibold w-full inline-block mb-3 mt-6">
                Bag size
              </p>
              <Select className="w-full">
                <SelectTrigger className=" border shadow-[0px_2px_4px_0px_#F0F1F2] rounded-[8px] text-[16px] text-[#4B5563] w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent className="max-w-[300px]">
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">SM</SelectItem>
                    <SelectItem value="banana">XL</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="w-full">
              <div className="flex mt-6">
                <p className="text-[12px] font-semibold w-full inline-block mb-3 ">
                  Price
                </p>
                <p className="text-[12px] text-[#6B7280] font-semibold w-full inline-block mb-3 text-end">
                  In SEK
                </p>
              </div>
              <p className=" border shadow-[0px_2px_4px_0px_#F0F1F2] rounded-[8px] text-[16px] text-[#4B5563] w-full px-3 py-2">
                120
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 w-full">
          <p className="text-[12px] font-semibold w-full inline-block mb-3 ">
            Product photo
          </p>
          <Label htmlFor="img" className="shadow-[0px_2px_4px_0px_#F0F1F2]">
            <div className="border-dashed text-center border-[2px] rounded-[8px] p-5 cursor-pointer">
              <span className="inline-block mx-auto">
                <ImgIcon />
              </span>
              <p className="text-[16px] font-normal text-[#4B5563] py-3">
                Drag and drop file here
              </p>
              <p className="text-[12px] font-normal text-[#4B5563]">
                or click here to browse
              </p>
            </div>
          </Label>
          <p className="text-[12px] font-normal text-[#6B7280] pe-2 mt-2">
            Type of files allowed: png, jpg and jpeg
          </p>
          <p className="text-[12px] font-semibold w-full inline-block mb-3 mt-6">
            Grind type
          </p>
          <Select className="w-full max-w-[200px]">
            <SelectTrigger className=" border shadow-[0px_2px_4px_0px_#F0F1F2] rounded-[8px] text-[16px] text-[#4B5563] w-full max-w-[200px]">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent className="max-w-[300px]">
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">SM</SelectItem>
                <SelectItem value="banana">XL</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="text-end mt-6">
        <Button className="bg-[#D3756B] px-4 group font-normal hover:bg-transparent hover:text-[#D3756B] border border-[#D3756B]">
          Continue to details
          <span className="ps-3">
            <BtnRightArrow />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default AddBeanForm;
