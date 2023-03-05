import React from "react";
import Squares from "./Squares";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: "-100px" },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "100px", transition: { delay: 1 } },
};

const hVariants = {
  initial: { opacity: 0, y: "-100px" },
  animate: { opacity: 1, y: 0, transition: { delay: 1 } },
  exit: { opacity: 0, y: "100px" },
};

const AboutPage = () => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h2
        variants={hVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        AboutPage
      </motion.h2>
      <Squares />
    </motion.div>
  );
};

export default AboutPage;
