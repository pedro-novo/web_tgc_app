import React, { useState } from "react";
import { Box, Typography, IconButton, Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { bannerItems } from "../utils/bannerItems";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: {
    scale: 1.5,
  },
  hover: {
    scale: 1.6,
    x: 0,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Banner = () => {
  const [step, stepSet] = useState(0);

  const handleStepForward = () => {
    if (step < 2) {
      stepSet(step + 1);
    } else {
      stepSet(0);
    }
  };

  const handleStepBackwards = () => {
    if (step > 0) {
      stepSet(step - 1);
    } else {
      stepSet(2);
    }
  };

  return (
    <Box textAlign='center' position='relative' marginTop={3}>
      <Button
        color='primary'
        variant='text'
        onClick={() => handleStepBackwards()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "5%",
        }}
        component={motion.button}
        variants={buttonVariants}
        initial='initial'
        whileHover='hover'
      >
        <KeyboardArrowLeftIcon fontSize='large' />
      </Button>
      <img
        src={bannerItems[step].image}
        style={{ width: "100%", height: "auto" }}
      />
      <Button
        color='primary'
        variant='text'
        onClick={() => handleStepForward()}
        sx={{
          position: "absolute",
          top: "50%",
          left: "90%",
        }}
        component={motion.button}
        variants={buttonVariants}
        initial='initial'
        whileHover='hover'
      >
        <KeyboardArrowRightIcon fontSize='large' />
      </Button>
    </Box>
  );
};

export default Banner;

{
  /* <Box textAlign='center' position='relative' marginTop={3}>
<img
    src='/banner/banner.jpg'
    style={{ width: "100%", height: "auto" }}
/>
<Typography
    variant='h2'
    position='absolute'
    top='50%'
    left='50%'
    color='#fff'
    fontSize='3rem'
    fontWeight={600}
    sx={{ transform: " translate(-50%, -50%)" }}
>
    The Gym's Collectors
</Typography>
</Box>; */
}
