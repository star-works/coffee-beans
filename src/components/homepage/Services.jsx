import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { serviceData } from "../common/Helper";

export function Services() {
  return (
    <div className="max-w-[1140px] mx-auto px-3 xl:px-0">
      <div className="flex flex-wrap justify-center -mx-3 lg:-mx-5 py-12 sm:py-16 md:py-20">
        {serviceData.map((value, index) => {
          return (
            <div
              className={`w-full sm:w-6/12 md:w-4/12 px-3 lg:px-5 ${value.cardPadding}`}
              key={index}
            >
              <Card className="p-0 bg-white">
                <CardHeader>
                  <span className="mx-auto">{value.icon}</span>
                  <CardTitle className="!mt-6 text-center text-lg font-semibold text-lightBlack">
                    {value.title}
                  </CardTitle>
                  <CardDescription className="!mt-2 text-center text-sm font-light text-lightBlack ">
                    {value.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
