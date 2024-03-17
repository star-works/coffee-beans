import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import CategoryCard from "./Categorycard";
import AccordionComponent from "./Accordion";
import { CrossIcon } from "../common/Icons";
import { useSelectedProvider } from "../context/SelectedProvider";
export const metadata = {
  title: "Coffee Bean Category",
  description: "Category Page",
  openGraph: {
    images: "/Logo.png",
  },
};
const PageComponent = () => {
  const {
    selectCategoryFilter,
    coffeeNotes,
    setCoffeeNotes,
    roastLevel,
    setRoastLevel,
    beanSort,
    setBeanSort,
    beanOrigin,
    setBeanOrigin,
    coffeeType,
    setCoffeeType,
    roasterLocation,
    setRoasterLocation,
    certifications,
    setCertifications,
    subscription,
    setSubscription,
  } = useSelectedProvider();
  const delRoasterLocationHandler = (obj) => {
    const filter = roasterLocation.filter((o) => o !== obj);
    setRoasterLocation(filter);
  };
  const delBeanSortHandler = (obj) => {
    const filter = beanSort.filter((o) => o !== obj);
    setBeanSort(filter);
  };
  const delCertificationHandler = (obj) => {
    const filter = certifications.filter((o) => o !== obj);
    setCertifications(filter);
  };
  const delCoffeeNotesHandler = (obj) => {
    const filter = coffeeNotes.filter((o) => o !== obj);
    setCoffeeNotes(filter);
  };
  return (
    <div className="pt-[45px] md:pb-20 pb-[45px] max-w-[1120px] mx-auto xl:px-0 px-3 ">
      <div className="flex gap-6 sm:items-center sm:flex-row flex-col mb-10 pt-20 sm:mt-12 ">
        <h2
          className="font-semibold text-[32px] leading-[38.4px] text-[#090909] min-w-[220px]"
          onClick={selectCategoryFilter}
        >
          Category Page
        </h2>
        <div className="overflow-hidden flex items-center ">
          <div className="flex space-x-6 items-center flex-wrap py-1">
            {roastLevel && (
              <div className="flex space-x-1 items-center py-2">
                <span className="text-[16px] whitespace-nowrap">Roast:</span>
                <div className="flex space-x-2">
                  <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                    {roastLevel}
                    <span className="ms-1" onClick={() => setRoastLevel()}>
                      <CrossIcon />
                    </span>
                  </Button>
                </div>
              </div>
            )}
            {coffeeNotes && coffeeNotes.length > 0 && (
              <div className="flex space-x-1 items-center ">
                <span className="text-[16px] whitespace-nowrap">
                  Coffee Notes:
                </span>
                {coffeeNotes.map((obj, i) => (
                  <div key={i} className="flex space-x-2">
                    <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                      {coffeeNotes}
                      <span
                        className="ms-1"
                        onClick={() => delCoffeeNotesHandler(obj)}
                      >
                        <CrossIcon />
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            )}
            {beanSort && beanSort.length > 0 && (
              <div className="flex space-x-1 items-center">
                <span className="text-[16px] whitespace-nowrap">
                  Bean Sort:
                </span>
                {beanSort.map((obj, i) => (
                  <div key={i} className="flex space-x-2">
                    <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                      {obj}
                      <span
                        className="ms-1"
                        onClick={() => delBeanSortHandler(obj)}
                      >
                        <CrossIcon />
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {beanOrigin && (
              <div className="flex space-x-1 items-center">
                <span className="text-[16px] whitespace-nowrap">
                  Bean Origin:
                </span>
                <div className="flex space-x-2">
                  <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                    {beanOrigin}
                    <span className="ms-1" onClick={() => setBeanOrigin()}>
                      <CrossIcon />
                    </span>
                  </Button>
                </div>
              </div>
            )}

            {coffeeType && (
              <div className="flex space-x-1 items-center">
                <span className="text-[16px] whitespace-nowrap">
                  Coffee Type:
                </span>
                <div className="flex space-x-2">
                  <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                    {coffeeType}
                    <span className="ms-1" onClick={() => setCoffeeType()}>
                      <CrossIcon />
                    </span>
                  </Button>
                </div>
              </div>
            )}

            {roasterLocation && roasterLocation.length > 0 && (
              <div className="flex space-x-1 items-center">
                <span className="text-[16px] whitespace-nowrap">
                  Roaster Location:
                </span>
                {roasterLocation.map((obj, i) => (
                  <div key={i} className="flex space-x-2">
                    <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                      {obj}
                      <span
                        className="ms-1"
                        onClick={() => delRoasterLocationHandler(obj)}
                      >
                        <CrossIcon />
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {certifications && certifications.length > 0 && (
              <div className="flex space-x-1 items-center">
                <span className="text-[16px] whitespace-nowrap">
                  Roaster Location:
                </span>
                {certifications.map((obj, i) => (
                  <div key={i} className="flex space-x-2">
                    <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                      {obj}
                      <span
                        className="ms-1"
                        onClick={() => delCertificationHandler(obj)}
                      >
                        <CrossIcon />
                      </span>
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {subscription && (
              <div className="flex space-x-1 items-center">
                <span className="text-[16px] whitespace-nowrap">
                  Subscription:
                </span>
                <div className="flex space-x-2">
                  <Button className="flex items-center py-2 px-2 text-[12px] font-normal text-[#090909] rounded-[6px] bg-[#F2F4F4] h-full hover:opacity-70">
                    {subscription}
                    <span className="ms-1" onClick={() => setSubscription()}>
                      <CrossIcon />
                    </span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 lg:gap-10 pt-3">
        <AccordionComponent />
        <CategoryCard />
      </div>
    </div>
  );
};

export default PageComponent;
