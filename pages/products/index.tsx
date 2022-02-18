import React from "react";
import {
  useDataContext,
  ProductType,
} from "../../components/context/DataContext";
import ProductCardGrid from "../../components/Grid/ProductCardGrid";
import ProductsCatalogue from "../../components/ProductsCatalogue";
import { shop } from "../index";
import { useDisplayOptionsContext } from "../../components/context/DisplayOptions";
import ProductCardList from "../../components/List/ProductCardList";
import { arrayNumberOfPages } from "../../utils/arrayNumberOfPages";
import { Box, Button, Grid } from "@mui/material";

const Shop = () => {
  const { products } = useDataContext();
  const {
    displayGrid,
    numberOfItems,
    handleProductsDisplayed,
    firstItemIndex,
    lastItemIndex,
  } = useDisplayOptionsContext();
  const numberOfPages: number[] = arrayNumberOfPages(
    products.length,
    numberOfItems
  );

  const newProducts = products.slice(firstItemIndex, lastItemIndex);

  return (
    <Box width={shop.width} margin={shop.margin}>
      <ProductsCatalogue>
        {displayGrid ? (
          <Grid container spacing={2}>
            {newProducts.map((item: ProductType) => (
              <Grid item key={item.id} xs={12} sm={6} lg={4}>
                <ProductCardGrid item={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={2}>
            {newProducts.map((item: ProductType) => (
              <Grid item key={item.id} xs={12}>
                <ProductCardList item={item} />
              </Grid>
            ))}
          </Grid>
        )}
      </ProductsCatalogue>
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

export default Shop;
