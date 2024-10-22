import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "./ImageSlider";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>This is Home</h1>
      <ImageSlider />
    </motion.div>
  );
}

export default Home;
