import React, { FC } from "react";
import { useRouter } from "next/router";
import ProductsCatalogue from "../../../components/ProductsCatalogue";
import GridCatalogue from "../../../components/Grid/GridCatalogue";
import { useDisplayOptionsContext } from "../../../components/context/DisplayOptions";
import { Box } from "@mui/material";
import { shop } from "../../index";
import ListCatalogue from "../../../components/List/ListCatalogue";

const CategoryPage = () => {
  const router = useRouter();
  const { categories }: any = router.query;
  const { displayGrid } = useDisplayOptionsContext();
  return (
    <Box width={shop.width} margin={shop.margin}>
      <ProductsCatalogue>
        {displayGrid ? (
          <GridCatalogue category={categories} />
        ) : (
          <ListCatalogue category={categories} />
        )}
      </ProductsCatalogue>
    </Box>
  );
};
export default CategoryPage;
