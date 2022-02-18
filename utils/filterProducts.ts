import {
  ProductsType,
  useDataContext,
} from "../components/context/DataContext";

type FilterProducts = (category: string) => ProductsType;

export const filterProducts: FilterProducts = (category) => {
  const { products } = useDataContext();

  return products.filter((item) => item.category === category);
};
