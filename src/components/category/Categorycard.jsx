import { beanProductList } from "../common/Helper";
import BeanProductCard from "./BeanProductCard";

const CategoryCard = () => {
  return (
    <>
      <div className="flex flex-col w-full gap-4">
        {beanProductList.map((value, index) => {
          return <BeanProductCard value={value} key={index} />;
        })}
      </div>
    </>
  );
};

export default CategoryCard;
