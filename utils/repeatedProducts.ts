import React from "react";
import { ProductsType } from "../components/context/DataContext";

type RepetitionProps = {
  cart: ProductsType;
};

type GetRepetition = (cart: string[]) => void;

export const repeatedProducts: GetRepetition = (cart) => {
  let products: any = {};

  for (let i = 0, n = cart.length; i < n; i++) {
    if (products[cart[i]]) {
      products[cart[i]] += 1;
    } else {
      products[cart[i]] = 1;
    }
  }
  console.log(products);
  return products;
};
