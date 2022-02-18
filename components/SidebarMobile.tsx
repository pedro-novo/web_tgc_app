import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";
import FilterNoneIcon from "@mui/icons-material/FilterNone";
import { sidebarItems } from "../utils/sidebarCategories";

type Anchor = "left";

const SidebarMobile = () => {
  const route = useRouter();
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = () => (
    <Box
      width={250}
      marginTop={16}
      role='presentation'
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <Typography
        textAlign='center'
        variant='h6'
        component='h4'
        marginBottom={2}
      >
        Categories
      </Typography>
      <Divider />
      <List sx={{ marginTop: 2 }}>
        {sidebarItems.map((category) => (
          <ListItem
            button
            key={category.id}
            onClick={() => route.push(category.path)}
          >
            <ListItemText primary={category.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <React.Fragment>
        <IconButton
          color='primary'
          aria-label='open drawer'
          edge='end'
          onClick={toggleDrawer("left", true)}
        >
          <FilterNoneIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </Box>
  );
};

export default SidebarMobile;
