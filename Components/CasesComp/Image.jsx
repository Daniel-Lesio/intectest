import React from 'react';
import { motion,AnimatePresence } from 'framer-motion'
const Image = ({city,caseActive}) => {
    
    
    
    return (
        <>{
            city.id === caseActive && (
                    <motion.img  
                    className="case-image case-active" 
                    src={city.img1} alt="" 
                    srcSet={city.img2}
                    initial={{  x:1000 }}
                    animate={{  x : 0  }}
                    exit={{   x:1000 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    />
             
            )
        }
        </>
    );
}

export default Image;
