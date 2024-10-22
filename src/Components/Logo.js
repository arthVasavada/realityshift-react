import React from 'react'
import { motion } from 'framer-motion';

const Logo = (props) =>{
  const incLogo = <img src={require("../Assets/Images/Logo_Main.jpg")} alt="RealityShift Logo" className={props.className}/>;
  return <motion.div initial={{opacity:0, transition:{duration:0.5}}} animate={{opacity:1, transition:{duration:0.5}}} exit={{opacity:0, transition:{duration:0.5}}}>{incLogo}</motion.div>;
} 

export default Logo;
