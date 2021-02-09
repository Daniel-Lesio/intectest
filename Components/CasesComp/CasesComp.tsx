import React,{useState,useEffect} from 'react';
import Link from 'next/link'
import {motion ,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

import Image from 'next/image'
const cities = [
    {
        id : 0,
        city : 'Çeltikçi',
        address : '2017, Denizli, Turkey'
    },
    {   
        id : 1,
        city : 'Sivas 1-2-3',
        address : '2017, Sivas, Turkey'
    },
    {
        id : 2,
        city : 'Çeltikçi',
        address : '2017, Denizli, Turkey'
    },
    {
        id : 3,
        city : 'Poland',
        address : '2017, Dabrowy, Poland'
    },
]

const Cases = () => {
  const control = useAnimation()
    const {ref,inView} = useInView({
        threshold : 0
      })
    const [caseActive, setcaseActive] = useState(0);
    
    function changeActive(id){
        setcaseActive(id)
    }
    useEffect(() => {
      const interval = setInterval(() => {
        
      }, 500);
      return () => clearInterval(interval);
    }, []);
    return (
        <section id="case">
            <motion.div animate={{x: caseActive === 0 ? 0 : 1000}} initial={{x:0}} >
                <Image src='/assets/cases/Case_Study_1@2x.jpg' layout='fill'/>
            </motion.div>
            <motion.div animate={{x: caseActive === 1 ? 0 : 1000}} initial={{x:0}}>
                <Image src='/assets/cases/Case_Study_2@2x.jpg' layout='fill'/>
            </motion.div>
            <motion.div animate={{x: caseActive === 2 ? 0 : 1000}} initial={{x:0}}>
                <Image src='/assets/cases/Case_Study_2@2x.jpg' layout='fill'/>
            </motion.div>
    <div className="container case-container">
        <motion.div ref={ref}  className="case-text"
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        >
          <h1>CASE STUDY</h1>
          <p>NTEC delivers projects on-time and according to quality standards, providing professional and sustainable energy solutions without compromise.</p>
        </motion.div>
        <div className="case-btns">
            {cities.map(city=>(
                <div key={city.id} className={`case-btn ${ city.id === caseActive ? 'active'  :''  }`}  onClick={()=>changeActive(city.id)} >
                    <div className="case-btn__text">
                        <h5>{city.city}</h5>
                        <p>{city.address}</p>
                    </div>
                    <Link href='/Case'>
                        <a className="case-btn__arrow">
                        <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.009 0.477212L14.4703 3.93403C14.6827 4.14615 14.6827 4.49008 14.4703 4.70221L11.009 8.15902C10.7966 8.37115 10.4523 8.37115 10.2399 8.15902C10.0275 7.94689 10.0275 7.60297 10.2399 7.39084L12.7726 4.8613L1.17346 4.8613C0.873082 4.8613 0.629578 4.61811 0.629578 4.31811C0.629578 4.01812 0.873083 3.77493 1.17346 3.77493L12.7726 3.77493L10.2399 1.24539C10.0275 1.03327 10.0275 0.689339 10.2399 0.477212C10.4523 0.265084 10.7966 0.265084 11.009 0.477212Z" fill="#EB7700"/>
                        </svg>
                        </a>
                    </Link>
                </div>
            ))}
        </div>
        
      </div>
    </section>
    );
}

export default Cases;



  const containerVariants = {
    hidden : {
      opacity : 0,
      y: 0
    },
    visible:{
      opacity : 1,
      y : 0,
      transition : {
        duration : .5,
        staggerChildren: 0.5,
        when : 'beforeChildren'
      },
    }
  }
  const childrenVariables = {
    hidden : {
      opacity : 0,
      
    },
    visible:{
      
      opacity : 1,
      transition : {
        duration : 2
      }    
    }
  }