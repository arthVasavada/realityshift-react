import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <nav>
        <Link to="/" element="">
          RealityShift
        </Link>
        <Link to="/home" element="">
          Home
        </Link>
        <Link to="/about" element="">
          About
        </Link>
        <Link to="/contact" element="">
          Contact
        </Link>
      </nav>
    </motion.div>
  );
}

export default Navbar;
