import React from "react";
import Image from "next/image";
import { Arrow } from "./common/Icons";
import { coffeeData } from "./common/Helper";
import CustomPopup from "./my-bean/CustomPopup";
const TopCoffees = () => {
  return (
    <div className="lg:px-6 px-3 lg:pb-6 pb-3 !w-full xl:min-w-[600px]">
      <div className="border border-[#F3F4F6] bg-white rounded-t-xl w-full">
        <div className="sm:px-6 px-4  sm:py-[10px] py-2 flex justify-between items-center">
          <p className="font-semibold text-lg text-darkGray">Top coffees</p>
          <CustomPopup />
        </div>
      </div>
      <div className="border border-[#F3F4F6] rounded-b-xl w-full overflow-x-auto max-w-full">
        <table className="2xl:min-w-[723px]   w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-3 py-2 text-grey text-left text-xs font-semibold"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-grey text-center text-xs font-semibold"
              >
                Sold units
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-grey text-center text-xs font-semibold"
              >
                Star rating
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-grey text-center text-xs font-semibold"
              >
                Favourites
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-grey text-center text-xs font-semibold"
              >
                Comments
              </th>
              <th
                scope="col"
                className="px-3 py-2 text-grey text-xs font-semibold text-center"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coffeeData.map((row, index) => (
              <tr key={index} className="md:h-[60px] sm:h-[50px] h-[40px]">
                <td className="md:px-4 sm:px-3 px-2 md:py-[11px] sm:py-2 whitespace-nowrap flex items-center gap-2 max-w-[250px]">
                  <Image
                    height="50"
                    width="44"
                    src={row.imageSrc}
                    alt={row.name}
                  />
                  <p className="font-semibold text-sm tracking-[-3%] text-black leading-[17px]">
                    {row.nameData}
                  </p>
                </td>
                <td className="sm:px-3 px-2 sm:py-2 whitespace-nowrap text-sm text-darkGray text-center tracking-[-3%]">
                  {row.soldUnits}
                </td>
                <td className="sm:px-3 px-2 sm:py-2 whitespace-nowrap text-sm text-darkGray text-center tracking-[-3%]">
                  {row.starRating}
                </td>
                <td className="sm:px-3 px-2 sm:py-2 whitespace-nowrap text-sm text-darkGray text-center tracking-[-3%]">
                  {row.favourites}
                </td>
                <td className="sm:px-3 px-2 sm:py-2 whitespace-nowrap text-sm text-black text-center tracking-[-3%]">
                  {row.comments}
                </td>
                <td className="sm:px-3 px-2 sm:py-2 text-center">
                  <span className={row.statusClassName}>{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center gap-1 border-t border-t-[#F3F4F6] bg-white rounded-b-xl w-full cursor-pointer group min-w-[723px] 2xl:min-w-[780px]">
          <p className="text-center  py-4  font-semibold text-xs tracking-[-3%]">
            See all coffees
          </p>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default TopCoffees;
