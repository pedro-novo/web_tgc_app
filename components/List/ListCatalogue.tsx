import React from "react";
import { Grid, Box, Button } from "@mui/material";
import ProductCardList from "./ProductCardList";
import { CategoryProps } from "../Grid/GridCatalogue";
import { filterProducts } from "../../utils/filterProducts";
import { useDisplayOptionsContext } from "../context/DisplayOptions";
import { arrayNumberOfPages } from "../../utils/arrayNumberOfPages";

const ListCatalogue = ({ category }: CategoryProps) => {
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
      <Grid container spacing={2}>
        {newProducts.map((product) => (
          <Grid item key={product.id} xs={12}>
            <ProductCardList item={product} />
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

export default ListCatalogue;
