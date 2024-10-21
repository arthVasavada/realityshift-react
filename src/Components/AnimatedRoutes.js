import React from 'react'
import { useLocation, Route, Routes} from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import Logo from "./Logo"
import Contact from "./Contact"


import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    function bringMeHome(){
        console.log("Clicked");
      }

    const location = useLocation
  return (
    <div>
        <AnimatePresence>
        <Routes>
            <Route path="/" element={<Logo className="App-logo" onClick={bringMeHome}/>}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
        </Routes>
        </AnimatePresence>
    </div>
  )
}

export default AnimatedRoutes
