import CommonAccordion from "./CommonAccordion";
import {
  AnalyticsIcon,
  Coffee,
  DashboardIcon,
  Heart,
  Message,
  MyBeansIcon,
  NotificationsIcon,
  OrdersIcon,
  Report,
  ReviewsIcon,
  Store,
  Subscribed,
} from "./Icons";

export const sidebarLinks = [
  {
    icon: <DashboardIcon />,
    tittle: "Dashboard",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    tittle: (
      <CommonAccordion
        heading={"Analytics"}
        icon={<AnalyticsIcon />}
        option1={"Option 1"}
        option2={"Option 2"}
        option3={"Option 3"}
        option4={"Option 4"}
      />
    ),
  },
  {
    icon: <MyBeansIcon />,
    tittle: "My Beans",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    tittle: (
      <CommonAccordion
        heading={"Orders"}
        icon={<OrdersIcon />}
        option1={"Option 1"}
        option2={"Option 2"}
        option3={"Option 3"}
        option4={"Option 4"}
      />
    ),
  },
  {
    icon: <ReviewsIcon />,
    tittle: "Reviews",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    icon: <NotificationsIcon />,
    tittle: "Notifications",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
];
export const coffeeData = [
  {
    nameData: "Hangadhi Village",
    imageSrc: "/assets/images/dasboard/svg/village.svg",
    soldUnits: 280,
    starRating: 4.8,
    favourites: 3.821,
    comments: 15,
    status: "Active",
    statusClassName:
      "text-[#239636] cursor-pointer bg-[#F1FCF2] border-[#C0F2C8] border py-[2px] px-2 rounded-full",
  },
  {
    nameData: "Jiwaka - Papua New Guniea",
    imageSrc: "/assets/images/dasboard/svg/jiwika.svg",
    soldUnits: 240,
    starRating: 4.6,
    favourites: 2.882,
    comments: 8,
    status: "Out of stock",
    statusClassName:
      "text-[#DA7E05] cursor-pointer border-[#FFFCEB] border bg-[#FEEA89] py-[2px] px-2 rounded-full",
  },
  {
    nameData: "Yiver Vargas, Gesga",
    imageSrc: "/assets/images/dasboard/svg/yiver.svg",
    soldUnits: 205,
    starRating: 3.9,
    favourites: 1.962,
    comments: 3,
    status: "Waiting",
    statusClassName:
      "text-[#2570EB] cursor-pointer border-[#BFD7FE] border bg-[#EFF5FF] py-[2px] px-2 rounded-full",
  },
  {
    nameData: "Don't let me down",
    imageSrc: "/assets/images/dasboard/svg/let-me-know.svg",
    soldUnits: 3.9,
    starRating: 4.2,
    favourites: 882,
    comments: 32,
    status: "Active",
    statusClassName:
      "text-[#239636] cursor-pointer bg-[#F1FCF2] border-[#C0F2C8] border py-[2px] px-2 rounded-full",
  },
  {
    nameData: "Donna Blend",
    imageSrc: "/assets/images/dasboard/svg/donna.svg",
    soldUnits: 4.2,
    starRating: 4.9,
    favourites: 105,
    comments: 28,
    status: "Error",
    statusClassName:
      "text-[#E51D1D] cursor-pointer bg-[#FFF1F1] py-[2px] px-2 rounded-full",
  },
];
export const activitiesData = [
  {
    icon: <Store />,
    action: "A user just bought",
    item: "Yiver Vargas, Gesga",
    time: "1 min. ago",
    iconBg: "bg-[#F1FCF2]",
  },
  {
    icon: <Message />,
    action: "A user just gave a review for",
    item: "Donna Blend",
    time: "2 min. ago",
    iconBg: "bg-[#F9FAFB]",
  },
  {
    icon: <Heart />,
    action: "A user just favourited",
    item: "Don't let me down",
    time: "2 min. ago",
    iconBg: "bg-[#FECDD5]",
  },
  {
    icon: <Subscribed />,
    action: "A user just subscribed to",
    item: "Donna Blend",
    time: "15 min. ago",
    iconBg: "bg-[#EFF2FF]",
  },
  {
    icon: <Coffee />,
    action: "Your coffee is trending!",
    item: "Jiwaka - Papa New Guniea",
    time: "21 min. ago",
    iconBg: "bg-[#D1FAEB]",
  },
  {
    icon: <Report />,
    action: "A new analytic report is ready for you!",
    time: "2 min. ago",
    iconBg: " border border-[#F3F4F6]",
  },
];
