import React from "react";
import { useCartContext } from "../context/CartContext";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const DisplayCartItems = () => {
  const {
    cart,
    itemsInCart,
    handleRemoveQuantity,
    handleAddQuantity,
    removeCartItem,
  } = useCartContext();

  return (
    <Box>
      <Box
        textAlign='center'
        alignItems='center'
        justifyContent='center'
        justifyItems='center'
      >
        {cart.map((product) => (
          <Grid
            container
            spacing={0}
            textAlign='center'
            alignItems='center'
            justifyContent='center'
            justifyItems='center'
            key={product.id}
          >
            <Grid item xs={2}>
              <img src={product.image} style={{ width: "80%" }} />
            </Grid>
            <Grid item key={product.id} xs={4}>
              <Typography variant='caption'>{product.name}</Typography>
            </Grid>
            <Grid item key={product.id} xs={2}>
              <Typography variant='caption'>€ {product.price}</Typography>
            </Grid>
            <Grid
              item
              key={product.id}
              xs={2}
              display='flex'
              alignItems='center'
              justifyContent='center'
            >
              <IconButton
                color='primary'
                component='span'
                onClick={() => handleRemoveQuantity(product.id)}
              >
                <RemoveIcon fontSize='small' />
              </IconButton>
              <Typography variant='caption'>{product.quantity}</Typography>
              <IconButton
                color='primary'
                component='span'
                onClick={() => handleAddQuantity(product.id)}
              >
                <AddIcon fontSize='small' />
              </IconButton>
            </Grid>
            <Grid item key={product.id} xs={2}>
              <IconButton
                color='secondary'
                component='span'
                onClick={() => {
                  removeCartItem(product.id);
                }}
              >
                <RemoveShoppingCartIcon fontSize='small' />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        {itemsInCart == 0 && (
          <Box textAlign='center'>
            <Typography>The cart is Empty</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DisplayCartItems;
