import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/AuthContext";
import { useCartContext } from "../context/CartContext";
import NavBarMobileMenu from "./NavBarMobileMenu";
import DisplayCartItems from "./DisplayCartItems";
import Link from "next/link";
import { NavbarItems, navbarItems } from "../../utils/navbarItems";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Toolbar,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { motion } from "framer-motion";

const drawerWidth = 360;

const menuVariants = {
  hover: {
    scale: 1.3,
    originX: 1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};
const logoHover = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const cartAlert = {
  animate: {
    scale: 1.1,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      yoyo: Infinity,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export const NavBar = () => {
  const [menu, menuSet] = useState<NavbarItems>(navbarItems);
  const { itemsInCart, cartTotal } = useCartContext();
  const { isAuth, isAuthSet, handleLogout } = useAuthContext();
  const route = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Link href='/'>
              <motion.img
                variants={logoHover}
                whileHover='hover'
                src='/logo/LOJATCG-POKEMON80.png'
                style={{ height: "auto" }}
              />
            </Link>
          </Box>
          <Box sx={{ alignContent: "center" }}>
            {isMobile ? (
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='end'
                onClick={handleDrawerOpen}
                sx={{ ...(open && { display: "none" }), color: "#fff" }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ alignItems: "center", alignContent: "center" }}>
                {menu.map((item) => (
                  <Button
                    key={item.id}
                    variant='text'
                    sx={{ color: "#fff" }}
                    onClick={() => route.push(item.path)}
                    component={motion.button}
                    variants={menuVariants}
                    whileHover='hover'
                  >
                    {item.name}
                  </Button>
                ))}
                {isAuth ? (
                  <Button
                    variant='text'
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      handleLogout();
                    }}
                    component={motion.button}
                    variants={menuVariants}
                    whileHover='hover'
                  >
                    Logout
                  </Button>
                ) : (
                  <Button
                    variant='text'
                    sx={{ color: "#fff" }}
                    onClick={() => {
                      route.push("/login");
                    }}
                    component={motion.button}
                    variants={menuVariants}
                    whileHover='hover'
                  >
                    Login
                  </Button>
                )}
                {itemsInCart != 0 ? (
                  <Button
                    variant='contained'
                    onClick={handleDrawerOpen}
                    startIcon={<ShoppingCartIcon />}
                    sx={{ ...(open && { display: "none" }), color: "#fff" }}
                    component={motion.div}
                    variants={cartAlert}
                    animate='animate'
                  >
                    <Typography color='#fff'>{itemsInCart}</Typography>
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    onClick={handleDrawerOpen}
                    startIcon={<ShoppingCartIcon />}
                    sx={{ ...(open && { display: "none" }), color: "#fff" }}
                  >
                    <Typography color='#fff'>{itemsInCart}</Typography>
                  </Button>
                )}
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box display='flex'>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
            },
          }}
          variant='persistent'
          anchor='right'
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          {isMobile ? <NavBarMobileMenu /> : <DisplayCartItems />}
          <Divider />
          {itemsInCart != 0 && !isMobile && (
            <Box>
              <Box display='flex' justifyContent='center'>
                <Box textAlign='left' marginLeft={2} sx={{ flexGrow: 1 }}>
                  <Typography variant='h6'>Total: </Typography>
                </Box>
                <Box textAlign='center' marginRight={2}>
                  <Typography variant='h6'>€ {cartTotal.toFixed(2)}</Typography>
                </Box>
              </Box>
              <Box textAlign='center'>
                <Button variant='contained' onClick={() => route.push("/cart")}>
                  <Typography color='#fff'>Go to Cart</Typography>
                </Button>
              </Box>
            </Box>
          )}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
