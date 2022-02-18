import { ProductsType } from "../components/context/DataContext";

type FeatProducts = (array: ProductsType, feat: string[]) => ProductsType;

export const featProducts: FeatProducts = (array, feat) => {
  const newArr = [];
  for (let i = 0, n = feat.length; i < n; i++) {
    for (let j = 0, m = array.length; j < m; j++) {
      if (feat[i] === array[j].id) {
        newArr.push(array[j]);
      }
    }
  }
  return newArr;
};
