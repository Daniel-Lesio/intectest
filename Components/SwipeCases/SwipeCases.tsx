import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components';
import SwiperCore, {Autoplay,Navigation,Pagination,EffectFade,EffectFlip,EffectCube} from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/react';
import {AnimatePresence, motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';

SwiperCore.use([Navigation,Pagination,EffectFade,EffectCube,EffectFlip,Autoplay])

import {cities} from './Cities'

export interface SwipeCasesProps {
    
}
 
const SwipeCases: React.FunctionComponent<SwipeCasesProps> = () => {
    const [ caseActive , setcaseActive] =  useState(0)
    const {ref,inView} = useInView({
        threshold : 0
      })


    return ( 
        <Cases>
            <div className="container">
            <AnimatePresence>
             { 3>2 && (
                    <CasesText ref={ref}
                    variants={parentVariants}
                    animate='visible'
                    initial='hidden'
                    exit='hidden'
                    >
                        <h1>CASE STUDY</h1>
                        <p>NTEC delivers projects on-time and according to quality standards, providing professional and sustainable energy solutions without compromise.</p>      
                    </CasesText>
             )
                 
             }
            </AnimatePresence>
            </div>
            <Swiper
            id=''
            effect="fade"
                    loop={true}
                    navigation={{
                        nextEl : '.next',
                        prevEl : '.prev'
                    }}
            
                    autoplay={true}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setcaseActive(swiper.realIndex)}
                    onSwiper={(swiper) => console.log('swiper :' ,swiper)}
                    style={{width : '100vw',height : '100%',position : 'absolute'}}
            
            >

                <SwiperSlide>
                    <CaseCard>
                    <Image src='/assets/cases/Case_Study_1@2x.jpg' layout='fill'/>  
                    </CaseCard>    
                </SwiperSlide>    
                <SwiperSlide>
                    <CaseCard>
                        <Image src='/assets/cases/Case_Study_2@2x.jpg' layout='fill'/>    
                    </CaseCard>       
                </SwiperSlide>    
                <SwiperSlide>
                        <Image src='/assets/cases/Case_Study_3@2x.jpg' layout='fill'/>    
                </SwiperSlide>    
                <SwiperSlide>
                        <Image src='/assets/cases/Case_Study_4@2x.jpg' layout='fill'/>    
                </SwiperSlide>    
            
            <Buttons>
            <div className="container case-btns">
            {cities.map(city=>(
                <div key={city.id} className={`case-btn ${ city.id === caseActive ? 'active'  :''  }`} >
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
            </Buttons>
            </Swiper>
                      
        </Cases> 
    );
}
 
export default SwipeCases;

const Cases = styled.section`
height: calc(100vh - 100px);
position: relative;
display:  flex;
justify-content: center;
align-items: center;
    img{
        width:  100%;
        height:  100%;
        object-fit: cover;
    }
`;

const CaseCard = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    /* opacity: 0.4; */
`;

const Buttons = styled.div`
  position: absolute;
  width: 100%;
  height:  200px;
  z-index: 3;
  opacity:  1;
  left: 0px;
  bottom: 0px;
`;
const CasesText = styled(motion.div)`
    position: absolute;
    transform: translateY(10px);
    z-index: 4;
    max-width: 300px;
    color : white;
    text-align :left;
    width: 100%;
            max-width: 375px;
            color: white;
            h1{
                text-align: left;
                margin-bottom: 16px;
            }



    
    p{
        text-align :left;
        line-height: 1.4rem;
    }
`;

const parentVariants = {
    hidden : {
      opacity : 0,
      
    },
    visible:{
      opacity : 1,
      
   
    }
  }
  const childrenVariables = {
    hidden : {
      opacity : 0,
    },
    visible:{   
      opacity : 1,
      
    }
  }