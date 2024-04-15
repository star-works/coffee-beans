import { ProfileCharacteristic } from "../my-bean/AccordionDetail";
import CategoryDetails from "../my-bean/CategoryDetails";
import CommonAccordion from "../my-bean/CommonAccordion";
import {
  AnalyticsIcon,
  Coffee,
  DashboardIcon,
  EarningsArrow,
  ErrorIcon,
  GreenTick,
  Heart,
  Message,
  MyBeansIcon,
  NotificationsIcon,
  OrdersIcon,
  RedArrows,
  Report,
  ReviewsIcon,
  Store,
  Subscribed,
} from "./Icons";

export const sidebarLinks = [
  {
    icon: <DashboardIcon />,
    tittle: "Dashboard",
    path: "/dashboard",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    tittle: (
      <CommonAccordion
        heading={"Analytics"}
        icon={<AnalyticsIcon me="me-2" />}
        option1={"Option 1"}
        option2={"Option 2"}
        option3={"Option 3"}
        option4={"Option 4"}
      />
    ),
    path: "#",
  },
  {
    icon: <MyBeansIcon />,
    tittle: "My Beans",
    path: "/dashboard/my-beans",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    tittle: (
      <CommonAccordion
        heading={"Orders"}
        icon={<OrdersIcon me="me-2" />}
        option1={"Option 1"}
        option2={"Option 2"}
        option3={"Option 3"}
        option4={"Option 4"}
      />
    ),
    path: "#",
  },
  {
    icon: <ReviewsIcon />,
    tittle: "Reviews",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
    path: "#",
  },
  {
    icon: <NotificationsIcon />,
    tittle: "Notifications",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
    path: "#",
  },
];
export const miniSidebarLinks = [
  {
    icon: <DashboardIcon />,
    tittle: "Dashboard",
    path: "/dashboard",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    icon: <AnalyticsIcon me="me-0" />,
    path: "#",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    icon: <MyBeansIcon />,
    tittle: "My Beans",
    path: "/dashboard/my-beans",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    icon: <OrdersIcon me="me-0" />,
    path: "#",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
  },
  {
    icon: <ReviewsIcon />,
    tittle: "Reviews",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
    path: "#",
  },
  {
    icon: <NotificationsIcon />,
    tittle: "Notifications",
    class: "hover:bg-[#F9FAFB] px-2 py-2  rounded-[8px]",
    path: "#",
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
      "text-[#239636] cursor-pointer bg-[#F1FCF2] border-[#C0F2C8] border py-[2px] px-2 rounded-full text-xs",
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
      "text-[#DA7E05] cursor-pointer border-[#FFFCEB] border bg-[#FEEA89] py-[2px] px-2 rounded-full text-xs",
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
      "text-[#2570EB] cursor-pointer border-[#BFD7FE] border bg-[#EFF5FF] py-[2px] px-2 rounded-full text-xs",
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
      "text-[#239636] cursor-pointer bg-[#F1FCF2] border-[#C0F2C8] border py-[2px] px-2 rounded-full text-xs",
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
      "text-[#E51D1D] cursor-pointer bg-[#FFF1F1] py-[2px] px-2 rounded-full text-xs",
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
export const CardsData = [
  {
    title: "Earnings",
    percentage: "3%",
    amount: "$7,989",
    icon: <EarningsArrow />,
    className: "border-[#C0F2C8] text-[#239636] bg-[#F1FCF2]",
  },
  {
    title: "Products sold",
    percentage: "8%",
    amount: "187",
    icon: <EarningsArrow />,
    className: "border-[#C0F2C8] text-[#239636] bg-[#F1FCF2]",
  },
  {
    title: "Product views",
    percentage: "1%",
    amount: "579",
    icon: <RedArrows />,
    className: "border-[#FFC7C7] text-[#F83B3B] bg-[#FFF1F1]",
  },
  {
    title: "Favourites",
    percentage: "32%",
    amount: "1,134",
    icon: <EarningsArrow />,
    className: "border-[#C0F2C8] text-[#239636] bg-[#F1FCF2]",
  },
];

export const beanDetails = [
  {
    titleIcon: <GreenTick />,
    title: "Taste notes ",
    item: "item-1",
    details: <ProfileCharacteristic />,
  },
  {
    titleIcon: <GreenTick />,
    title: "Profile characteristic ",
    item: "item-2",
    details: <ProfileCharacteristic />,
  },
  {
    titleIcon: <GreenTick />,
    title: "Bean sort",
    item: "item-3",
    details: <ProfileCharacteristic />,
  },
  {
    titleIcon: <GreenTick />,
    title: "Bean origin",
    item: "item-4",
    details: <ProfileCharacteristic />,
  },
  {
    titleIcon: <GreenTick />,
    title: "Process",
    item: "item-5",
    details: <ProfileCharacteristic />,
  },
  {
    titleIcon: <ErrorIcon />,
    title: "Certifications",
    item: "item-6",
    details: <ProfileCharacteristic />,
  },
];

export const profileCharacteristic = [
  {
    category: "Acidity",
    option: (
      <CategoryDetails
        placeholder={"1-10"}
        item1={"1-10"}
        item2={"11-20"}
        item3={"21-30"}
        item4={"31-40"}
      />
    ),
  },
  {
    category: "Bitterness / Aroma",
    option: (
      <CategoryDetails
        placeholder={"1-10"}
        item1={"1-10"}
        item2={"11-20"}
        item3={"21-30"}
        item4={"31-40"}
      />
    ),
  },
  {
    category: "Body",
    option: (
      <CategoryDetails
        placeholder={"1-10"}
        item1={"1-10"}
        item2={"11-20"}
        item3={"21-30"}
        item4={"31-40"}
      />
    ),
  },
  {
    category: "Aftertaste",
    option: (
      <CategoryDetails
        placeholder={"1-10"}
        item1={"1-10"}
        item2={"11-20"}
        item3={"21-30"}
        item4={"31-40"}
      />
    ),
  },
  {
    category: "Sweetness",
    option: (
      <CategoryDetails
        placeholder={"1-10"}
        item1={"1-10"}
        item2={"11-20"}
        item3={"21-30"}
        item4={"31-40"}
      />
    ),
  },
  {
    category: "Balance",
    option: (
      <CategoryDetails
        placeholder={"1-10"}
        item1={"1-10"}
        item2={"11-20"}
        item3={"21-30"}
        item4={"31-40"}
      />
    ),
  },
];

export const qualityData = [
  {
    title: "Acidity",
    value: 10,
  },
  {
    title: "Body",
    value: 45,
  },
  {
    title: "Sweetness",
    value: 25,
  },
  {
    title: "Bitterness/",
    span: "Aroma",
    value: 5,
  },
  {
    title: "Aftertaste",
    value: 15,
  },
  {
    title: "Balance",
    value: 80,
  },
];
