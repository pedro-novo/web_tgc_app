import React, { useState } from "react";
import { useRouter } from "next/router";
import { Typography, Box, Button, useMediaQuery } from "@mui/material";
import { sidebarItems, SidebarCategoryItems } from "../utils/sidebarCategories";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

export const drawerWidth = "18vw";
const sidebarVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
  textHover: {
    color: "#e7872d",
  },
};

const Sidebar = () => {
  const [categories] = useState<SidebarCategoryItems>(sidebarItems);
  const route = useRouter();
  const theme = useTheme();

  return (
    <Box width={drawerWidth} marginLeft={5}>
      <Box textAlign='center' marginTop={5}>
        <Typography variant='h4' sx={{ fontSize: "3vw" }}>
          Categories
        </Typography>
      </Box>
      <Box>
        <Box marginTop={5}>
          <Button
            variant='text'
            onClick={() => route.push("/products")}
            component={motion.button}
            variants={sidebarVariants}
            whileHover='hover'
          >
            <Typography
              variant='button'
              sx={{ fontSize: "1.5vw", color: "#404040", marginLeft: 1 }}
              component={motion.div}
              variants={sidebarVariants}
              whileHover='textHover'
            >
              All Products
            </Typography>
          </Button>
        </Box>
        <Box>
          {categories.map((item) => (
            <Box key={item.id}>
              <Button
                variant='text'
                onClick={() => route.push(item.path)}
                component={motion.button}
                variants={sidebarVariants}
                whileHover='hover'
              >
                <Typography
                  variant='button'
                  sx={{ fontSize: "1.5vw", color: "#404040", marginLeft: 1 }}
                  component={motion.div}
                  variants={sidebarVariants}
                  whileHover='textHover'
                >
                  {item.name}
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
