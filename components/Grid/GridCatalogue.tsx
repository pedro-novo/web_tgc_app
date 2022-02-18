import React from "react";
import { Grid, Box, Button } from "@mui/material";
import ProductCardGrid from "./ProductCardGrid";
import { filterProducts } from "../../utils/filterProducts";
import { useDisplayOptionsContext } from "../context/DisplayOptions";
import { ProductType } from "../context/DataContext";
import { arrayNumberOfPages } from "../../utils/arrayNumberOfPages";

export interface CategoryProps {
  category: string;
}

const GridCatalogue = ({ category }: CategoryProps) => {
  const newArr = filterProducts(category);
  const {
    numberOfItems,
    firstItemIndex,
    lastItemIndex,
    handleProductsDisplayed,
  } = useDisplayOptionsContext();
  const numberOfPages: number[] = arrayNumberOfPages(
    newArr.length,
    numberOfItems
  );

  const newProducts = newArr.slice(firstItemIndex, lastItemIndex);

  return (
    <Box>
      <Grid container spacing={2} alignItems='stretch' alignContent='stretch'>
        {newProducts.map((item: ProductType) => (
          <Grid item key={item.id} xs={12} sm={6} lg={4}>
            <ProductCardGrid item={item} />
          </Grid>
        ))}
      </Grid>
      <Box
        display='flex'
        marginTop={4}
        alignItems='center'
        justifyContent='center'
      >
        {numberOfPages.map((page) => (
          <Box key={page}>
            <Button
              variant='text'
              onClick={() => {
                handleProductsDisplayed(page);
              }}
            >
              {page}
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default GridCatalogue;
