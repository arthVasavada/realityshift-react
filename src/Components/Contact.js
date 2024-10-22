import React from 'react'
import {motion} from 'framer-motion'


function Contact() {
  return (
    
    <motion.div initial={{opacity:0, transition:{duration:0.5}}} animate={{opacity:1, transition:{duration:0.5}}} exit={{opacity:0, transition:{duration:0.5}}} className="container">
      <h1>Contact Us</h1>
    </motion.div>
    
  )
}


export default Contact;

