import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../context/CartContext";
import { ProductType } from "../context/DataContext";

interface ItemProps {
  item: ProductType;
}

const ProductCardList = ({ item }: ItemProps) => {
  const { addToCart } = useCartContext();

  return (
    <Box
      textAlign='center'
      marginTop={2}
      padding={2}
      sx={{ border: "1px solid #999", borderRadius: 2, background: "#fff" }}
    >
      <Grid container spacing={2} alignItems='center' justifyContent='center'>
        <Grid item sm={12} md={4}>
          <img src={item.image} style={{ maxWidth: 150, height: "auto" }} />
        </Grid>
        <Grid item sm={12} md={4}>
          <Typography variant='h6' align='left' sx={{ fontSize: 16 }}>
            {item.name}
          </Typography>
          <Typography variant='subtitle1' align='left' sx={{ fontSize: 12 }}>
            {item.set}
          </Typography>
          <Typography variant='subtitle2' align='left' sx={{ fontSize: 12 }}>
            €{item.price}
          </Typography>
        </Grid>
        <Grid item sm={12} md={4}>
          <Button
            fullWidth
            variant='contained'
            onClick={() => {
              addToCart(item.id);
            }}
          >
            <ShoppingCartIcon fontSize='medium' sx={{ color: "#fff" }} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductCardList;
