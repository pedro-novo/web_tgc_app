import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "../context/AuthContext";
import { NavbarItems, navbarItems } from "../../utils/navbarItems";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";

const menuMobileVariants = {
  hover: {
    scale: 1.3,
    originX: 0,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    color: "#e7872d",
  },
};

const NavBarMobileMenu = () => {
  const [menu, menuSet] = useState<NavbarItems>(navbarItems);
  const { isAuth, handleLogout } = useAuthContext();
  const route = useRouter();

  return (
    <Box>
      <List>
        {menu.map((item, index) => (
          <ListItem
            button
            key={item.id}
            onClick={() => route.push(item.path)}
            component={motion.button}
            variants={menuMobileVariants}
            whileHover='hover'
          >
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
        {isAuth ? (
          <ListItem
            button
            onClick={() => {
              handleLogout();
            }}
            component={motion.button}
            variants={menuMobileVariants}
            whileHover='hover'
          >
            <ListItemText primary={`Logout`} />
          </ListItem>
        ) : (
          <ListItem
            button
            onClick={() => {
              route.push("/login");
            }}
            component={motion.button}
            variants={menuMobileVariants}
            whileHover='hover'
          >
            <ListItemText primary={`Login`} />
          </ListItem>
        )}
        <ListItem
          button
          onClick={() => {
            route.push("/cart");
          }}
          component={motion.button}
          variants={menuMobileVariants}
          whileHover='hover'
        >
          <ListItemText primary={`Cart`} />
        </ListItem>
      </List>
    </Box>
  );
};

export default NavBarMobileMenu;
