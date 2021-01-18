import React,{useState,useEffect} from 'react';
// import { motion } from "framer-motion";
import Info from "./Info";
import Navbar from "./Navbar";
import styled from 'styled-components'
// import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion'

const Header = ()=> {


const [inView,setInView] = useState(false);


useEffect(() => {
    let last_known_scroll_position = 0;
    let ticking = false;
    
    function doSomething(scroll_pos) {
      scroll_pos > 150 ? setInView(true) : setInView(false)
    }
    const handleScroll =()=> {
      last_known_scroll_position = window.scrollY;
    
      if (!ticking) {
        window.requestAnimationFrame(function() {
          doSomething(last_known_scroll_position);
          ticking = false;
        });
    
        ticking = true;
      }
    }
    document.addEventListener('scroll',handleScroll );
    return () => document.removeEventListener("scroll", handleScroll);

    
}, []);

    return (
        <>
        <HeaderComp 
        animate={{ y : inView ? '-40px' : '0px' }} 
        initial={{ height : 50 }}
        // transition={{ type: "spring", stiffness: 50 }}
        >
            <Info></Info>
            <Navbar inview={inView} ></Navbar>
        </HeaderComp>
        </>
        );
}

export default Header

const HeaderComp = styled(motion.header)`
    z-index : 99;   
    position : fixed;
    top : 0px;
    left  : 0px;
    width : 100%;
    background : white;   
`