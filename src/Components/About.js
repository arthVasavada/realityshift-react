import React from 'react';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';


export default function About() {
  const videoUrl="https://www.youtube.com/watch?v=7WABxk9DAuw";
  return (
    <motion.div initial={{opacity:0, transition:{duration:0.5}}} animate={{opacity:1, transition:{duration:0.5}}} exit={{opacity:0, transition:{duration:0.5}}}>
            <h1>This is the About Page</h1>
    </motion.div>
  )
}
