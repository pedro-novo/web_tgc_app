import React from "react";
import { NextPage } from "next";
import { Container, Box, Typography, Button, IconButton } from "@mui/material";
import { useCartContext } from "../../components/context/CartContext";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartPage: NextPage = () => {
  const {
    cart,
    itemsInCart,
    cartTotal,
    removeCartItem,
    handleAddQuantity,
    handleRemoveQuantity,
  } = useCartContext();

  return (
    <Container>
      <Box marginTop={8}>
        <Box textAlign='center' marginBottom={6}>
          <Typography variant='h2'>Cart</Typography>
        </Box>
        {itemsInCart != 0 && (
          <Box
            textAlign='center'
            display='grid'
            gridTemplateColumns='repeat(12, 1fr)'
            gap={2}
          >
            <Box gridColumn='span 2'>
              <Typography variant='subtitle2'>Image</Typography>
            </Box>
            <Box gridColumn='span 4'>
              <Typography variant='subtitle2'>Product Name</Typography>
            </Box>
            <Box gridColumn='span 2'>
              <Typography variant='subtitle2'>Set</Typography>
            </Box>
            <Box gridColumn='span 2'>
              <Typography variant='subtitle2'>Price</Typography>
            </Box>
            <Box gridColumn='span 1'>
              <Typography variant='subtitle2'>Qtt</Typography>
            </Box>
            <Box gridColumn='span 1'>
              <Typography variant='subtitle2'>Remove</Typography>
            </Box>
          </Box>
        )}
        <Box textAlign='center' marginTop={5}>
          <Box display='grid' gridTemplateColumns='repeat(12, 1fr)' gap={2}>
            {itemsInCart ? (
              cart.map((product, index) => (
                <Box
                  key={index}
                  gridColumn='span 12'
                  display='grid'
                  gridTemplateColumns='repeat(12, 1fr)'
                  sx={{ alignItems: "center" }}
                >
                  <Box gridColumn='span 2'>
                    <img
                      src={product.image}
                      style={{ maxWidth: "5vw", border: "1px solid #202020" }}
                    />
                  </Box>
                  <Box gridColumn='span 4'>
                    <Typography variant='subtitle2'>{product.name}</Typography>
                  </Box>
                  <Box gridColumn='span 2'>
                    <Typography variant='subtitle2'>{product.set}</Typography>
                  </Box>
                  <Box gridColumn='span 2'>
                    <Typography variant='subtitle2'>
                      € {product.price}
                    </Typography>
                  </Box>
                  <Box
                    gridColumn='span 1'
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
                    <Typography
                      variant='subtitle2'
                      textAlign='center'
                      color='white'
                      sx={{
                        background: "#909090",
                        padding: "2px 16px",
                        borderRadius: 1,
                      }}
                    >
                      {product.quantity}
                    </Typography>
                    <IconButton
                      color='primary'
                      component='span'
                      onClick={() => handleAddQuantity(product.id)}
                    >
                      <AddIcon fontSize='small' />
                    </IconButton>
                  </Box>
                  <Box gridColumn='span 1'>
                    <Button
                      color='secondary'
                      onClick={() => {
                        removeCartItem(product.id);
                      }}
                      sx={{ p: 2 }}
                    >
                      <RemoveShoppingCartIcon />
                    </Button>
                  </Box>
                </Box>
              ))
            ) : (
              <Box m={5} gridColumn='span 12'>
                <Typography variant='h4'>Cart is Empty</Typography>
              </Box>
            )}
          </Box>
          {itemsInCart != 0 && (
            <Box
              marginTop={6}
              textAlign='center'
              display='grid'
              gridTemplateColumns='repeat(12, 1fr)'
              gap={2}
            >
              <Box
                gridColumn='span 12'
                sx={{ display: "inline-flex", justifyContent: "center" }}
              >
                <Box textAlign='center'>
                  <Typography variant='h6'>Total no Carrinho:</Typography>
                </Box>
                <Box textAlign='center' marginLeft={2}>
                  <Typography variant='h6'>€ {cartTotal.toFixed(2)}</Typography>
                </Box>
              </Box>
              <Box gridColumn='span 12' textAlign='center'>
                <Button variant='contained'>
                  <Typography variant='h6' color='#fff'>
                    Checkout
                  </Typography>
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default CartPage;
