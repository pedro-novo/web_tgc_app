import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";

const textVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
  },
};
const socialVariants = {
  hover: {
    scale: 1.3,
  },
};
const Footer = () => {
  const route = useRouter();

  return (
    <Box textAlign='center' marginTop={10} sx={{ background: "#444" }}>
      <Grid container spacing={2} alignItems='stretch'>
        <Grid item xs={12}>
          <img src='/logo/LOJATCG-POKEMON80.png' style={{ height: "auto" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h2' color='#fff'>
            {`The Gym's Collectors`}
          </Typography>
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <Typography variant='h6' color='#fff'>
            {`“Collecting Pokemon cards, how did you live without it?”`}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          component={motion.div}
          variants={textVariants}
          whileHover='hover'
        >
          <Link href='/about-us'>
            <Typography variant='body1' color='#fff'>
              About
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          component={motion.div}
          variants={textVariants}
          whileHover='hover'
        >
          <Link href='/contact-us'>
            <Typography variant='body1' color='#fff'>
              Contact
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          component={motion.div}
          variants={textVariants}
          whileHover='hover'
        >
          <Link href='/'>
            <Typography variant='body1' color='#fff'>
              Socials
            </Typography>
          </Link>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          lg={3}
          marginBottom={4}
          component={motion.div}
          variants={textVariants}
          whileHover='hover'
        >
          <Link href='/'>
            <Typography variant='body1' color='#fff'>
              Terms and Conditions
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} marginBottom={8}>
          <IconButton
            onClick={() =>
              route.push("https://www.facebook.com/TheGymsCollectors")
            }
            component={motion.div}
            variants={socialVariants}
            whileHover='hover'
          >
            <FacebookIcon fontSize='large' sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton
            onClick={() =>
              route.push("https://www.instagram.com/thegymscollectors/")
            }
            component={motion.div}
            variants={socialVariants}
            whileHover='hover'
          >
            <InstagramIcon fontSize='large' sx={{ color: "#fff" }} />
          </IconButton>
        </Grid>
        <Grid item xs={12} paddingBottom={2} sx={{ background: "#111" }}>
          <Typography variant='subtitle1' color='#566'>
            {`All Rights Reserved | © Copyright 2021 | The Gym's Collectors`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
