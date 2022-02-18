import {
  ProductsType,
  useDataContext,
} from "../components/context/DataContext";

type ProductsPerPage = (num: number) => ProductsType[];

export const productsPerPage: ProductsPerPage = (num) => {
  const { products } = useDataContext();
  let result: any = [];

  for (let i = 0, n = products.length; i < n; i += num) {
    result.push(products.slice(i, i + num));
  }

  console.log(result);

  return result;
};
