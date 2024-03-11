import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CategoryCard from "./Categorycard";
import AccordionComponent from "./Accordion";
import { CrossIcon } from "../common/Icons";
export const metadata = {
  title: "Coffee Bean Category",
  description: "Category Page",
  openGraph: {
    images: "/Logo.png",
  },
};
const PageComponent = () => {
  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const selectCategoryFilter = () => {
    category !== "" ? setSelectedCategory([...selectedCategory, category]) : [];
  };
  const removeHandler = (index) => {
    const newArr = selectedCategory.filter((_, i) => i !== index);
    setSelectedCategory(newArr);
  };
  useEffect(() => {
    selectCategoryFilter();
  }, [category]);
  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3 ">
      <div className="flex gap-6 sm:items-center sm:flex-row flex-col mb-10 pt-20 sm:mt-12 h-[128px]">
        <h2
          className="font-semibold text-[32px] leading-[38.4px] text-[#090909]"
          onClick={selectCategoryFilter}
        >
          Category Page
        </h2>
        <div className="flex gap-3 items-center">
          {selectedCategory.length > 0 &&
            selectedCategory.map((obj, i) => (
              <Button
                key={i}
                className="flex items-center py-3 px-4 text-base font-normal text-[#090909] rounded-[24px] bg-[#F2F4F4] h-full hover:opacity-70"
              >
                {obj}
                <span className="ms-1" onClick={() => removeHandler(i)}>
                  <CrossIcon />
                </span>
              </Button>
            ))}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 pt-3">
        <AccordionComponent /> <CategoryCard setCategory={setCategory} />
      </div>
    </div>
  );
};

export default PageComponent;
