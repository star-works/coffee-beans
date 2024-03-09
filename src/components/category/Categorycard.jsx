import { beanProductList } from "../common/Helper";
import BeanProductCard from "./BeanProductCard";

const CategoryCard = ({ setCategory }) => {
  return (
    <>
      <div className="flex flex-col w-full gap-4">
        {beanProductList.map((value, index) => {
          return (
            <BeanProductCard
              value={value}
              key={index}
              setCategory={setCategory}
            />
          );
        })}
      </div>
    </>
  );
};

export default CategoryCard;
