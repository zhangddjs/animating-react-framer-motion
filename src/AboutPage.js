import React from "react";
import Squares from "./Squares";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-100px" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100px" }}
    >
      <h2>AboutPage</h2>
      <Squares />
    </motion.div>
  );
};

export default AboutPage;
