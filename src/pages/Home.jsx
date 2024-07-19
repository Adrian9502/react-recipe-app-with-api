import React from "react";
import Filipino from "../components/Filipino";
import American from "../components/American";
import { motion } from "framer-motion";
import Chinese from "../components/Chinese";
import Canadian from "../components/Canadian";

// main components for the home.
// when page load first. these components appear
// motion.div = animation fade in and out
function Home() {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Filipino />
      <American />
      <Canadian />
      <Chinese />
    </motion.div>
  );
}

export default Home;
