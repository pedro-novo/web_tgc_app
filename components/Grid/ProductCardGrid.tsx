import React from "react";
import { Typography, Box, Button, Grid } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../context/CartContext";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductType } from "../context/DataContext";

interface ItemProps {
  item: ProductType;
}

const productCardImage = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
};

const productCardButton = {
  hover: {
    width: "70%",
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
  tap: {
    scale: 0.8,
    backgroundColor: "#75d40a",
    transition: {
      duration: 0.1,
    },
  },
};

const ProductCardGrid = ({ item }: ItemProps) => {
  const { addToCart } = useCartContext();

  const productName = item.name.split(" ").join("");

  return (
    <Box
      textAlign='center'
      marginTop={2}
      padding={2}
      sx={{ border: "1px solid #999", borderRadius: 2, background: "#fff" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Link href={`/products/${item.category}/${productName}`}>
            <motion.img
              src={item.image}
              style={{ maxWidth: 150, height: "auto" }}
              variants={productCardImage}
              whileHover='hover'
              whileTap='tap'
            />
          </Link>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' align='left' sx={{ fontSize: 13 }}>
            {item.name}
          </Typography>
          <Typography variant='subtitle1' align='left' sx={{ fontSize: 12 }}>
            {item.set}
          </Typography>
          <Typography variant='subtitle2' align='left' sx={{ fontSize: 12 }}>
            €{item.price}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant='contained'
            component={motion.button}
            variants={productCardButton}
            whileHover='hover'
            whileTap='tap'
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

export default ProductCardGrid;
