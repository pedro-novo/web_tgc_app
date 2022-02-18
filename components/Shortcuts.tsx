import { Card, CardContent, Typography, Box, Grid } from "@mui/material";
import Link from "next/link";
import { shortcutItems } from "../utils/shortcutItems";
import { motion } from "framer-motion";

const shortcutsContainer = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};
const shortcutItem = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const imageHover = {
  hover: {
    y: [0, -10],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.15,
        ease: "easeOut",
      },
    },
  },
  tap: {
    scale: 0.9,
  },
};

const Shortcuts = () => {
  return (
    <div>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-between" }}
        component={motion.div}
        variants={shortcutsContainer}
        initial='hidden'
        animate='visible'
      >
        {shortcutItems.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            lg={3}
            component={motion.div}
            variants={shortcutItem}
          >
            <Box textAlign='center'>
              <Link href={item.path}>
                <Box textAlign='center' component={motion.div}>
                  <motion.img
                    src={item.image}
                    style={{ maxWidth: 200, height: "auto" }}
                    variants={imageHover}
                    whileHover='hover'
                    whileTap='tap'
                  />
                  <Typography variant='h6' align='center'>
                    {item.text}
                  </Typography>
                </Box>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shortcuts;
