import { Box, Grid, Typography } from "@mui/material";
import { featProducts } from "../utils/featProducts";
import ProductCardGrid from "./Grid/ProductCardGrid";
import { useDataContext } from "./context/DataContext";

const Featured = () => {
  const { products } = useDataContext();
  const feat: string[] = [
    "5tD4lwjIkXBxqTMZRu9I",
    "JSXbKiKsNiEEcfqffP2F",
    "UkWj865poQ5vSG8Te9Rn",
    "YmiPhG9tglspBeOUKKgw",
  ];

  const getFeat = featProducts(products, feat);

  return (
    <Box
      textAlign='center'
      sx={{ marginTop: 8, p: 6, backgroundColor: "#333" }}
    >
      <Box sx={{ marginBottom: 5 }}>
        <Typography variant='h3' align='center' color='#fff'>
          Featured Products
        </Typography>
        <Typography variant='subtitle1' align='center' color='#fff'>
          Products with the best price.
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
        {getFeat.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} lg={3}>
            <Box textAlign='center'>
              <ProductCardGrid item={item} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Featured;
