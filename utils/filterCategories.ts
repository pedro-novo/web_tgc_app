import { ProductsType } from "../components/context/DataContext";
import { useDataContext } from "../components/context/DataContext";

type FilterCategories = () => string[];

export const filterCategories: FilterCategories = () => {
  const { products } = useDataContext();
  const newArr: string[] = [];

  products.map((item) => {
    if (!newArr.includes(item.category)) {
      newArr.push(item.category);
    }
  });

  return newArr;
};
