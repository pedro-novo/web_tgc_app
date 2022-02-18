import React from "react";
import { ProductsType } from "../components/context/DataContext";

type CalculateTotal = (array: ProductsType) => string;

export const calculateTotal: CalculateTotal = (array) => {
  let total = 0;
  array.forEach((item) => {
    total += item.price;
  });
  return total.toFixed(2);
};
