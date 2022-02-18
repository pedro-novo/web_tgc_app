import React from "react";
import { NextPage } from "next";
import { Container, Box } from "@mui/material";
import Featured from "../components/Featured";
import Shortcuts from "../components/Shortcuts";
import Team from "../components/Team";
import Banner from "../components/Banner";

export const shop = {
  width: "90vw",
  margin: 2,
};

const HomePage: NextPage = () => {
  return (
    <Container>
      <Banner />
      <Box>
        {/* Shortcuts: Boosters, Premium Box, ETB, Booster Box */}
        <Shortcuts />
        {/* Featured */}
        <Featured />

        {/* newslettes */}

        {/* Team */}
        <Team />
      </Box>
    </Container>
  );
};

export default HomePage;
