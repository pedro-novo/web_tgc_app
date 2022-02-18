import React, { useCallback } from "react";
import { useRouter } from "next/router";
import {
  ProductsType,
  useDataContext,
} from "../../../components/context/DataContext";
import { Box, Button, Grid, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../../../components/context/CartContext";

const ProductDetails = () => {
  const { cart, itemsInCart, itemsInCartSet } = useCartContext();
  const { products } = useDataContext();
  const router = useRouter();
  const { productName } = router.query;

  const getProduct: ProductsType = products.filter(
    (item) => item.name.split(" ").join("") === productName
  );

  const addToCart = useCallback(
    (id: string) => {
      products.filter((item) => {
        if (item.id == id) {
          cart.push(item);
        }
      });
      itemsInCartSet(itemsInCart + 1);
      console.log(cart);
    },
    [cart, itemsInCart, itemsInCartSet, products]
  );

  return (
    <Box>
      <Box textAlign='center' position='relative' marginTop={3}>
        <img
          src='/banner/productbanner1400x312.jpg'
          style={{ width: "100%", height: "auto" }}
        />
        <Typography
          variant='h2'
          position='absolute'
          top='50%'
          left='50%'
          color='#fff'
          fontSize='1.2rem'
          fontWeight={600}
          sx={{ transform: " translate(-50%, -50%)" }}
        >
          {getProduct[0].name}
        </Typography>
      </Box>
      <Box textAlign='center' m={4}>
        <Grid container alignItems='center' justifyContent='center'>
          <Grid item xs={12} md={6}>
            <Box textAlign='center'>
              <img
                src={getProduct[0].image}
                style={{ maxWidth: "40vw", height: "auto" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            textAlign='center'
            justifyContent='center'
            alignItems='center'
            maxWidth='50vw'
          >
            <Box flexDirection='column'>
              <Box alignItems='center' justifyContent='center'>
                <Typography
                  variant='h6'
                  component='h4'
                  align='left'
                  maxWidth='40vw'
                  fontSize={18}
                >
                  {getProduct[0].name}
                </Typography>
                <Typography
                  variant='subtitle1'
                  component='h6'
                  align='left'
                  fontSize={14}
                  marginBottom={4}
                >
                  {getProduct[0].set}
                </Typography>
                <Typography
                  variant='subtitle1'
                  component='p'
                  align='left'
                  maxWidth='30vw'
                  fontSize={12}
                  marginBottom={4}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  sequi quisquam, molestiae ullam labore hic, veritatis
                  cupiditate natus animi dolor minus dolore aliquam neque
                  corporis impedit vero delectus quidem pariatur.
                </Typography>
                <Typography
                  variant='subtitle2'
                  component='p'
                  align='left'
                  maxWidth='40vw'
                  fontSize={16}
                  marginBottom={1}
                >
                  €{getProduct[0].price}
                </Typography>
              </Box>
              <Box textAlign='left' justifyContent='center' maxWidth='40vw'>
                <Button
                  fullWidth
                  variant='contained'
                  onClick={() => {
                    addToCart(getProduct[0].id);
                  }}
                  sx={{ maxWidth: "25vw" }}
                >
                  <ShoppingCartIcon fontSize='medium' sx={{ color: "#fff" }} />
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetails;
