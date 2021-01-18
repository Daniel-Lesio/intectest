import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import { motion , useDragControls } from 'framer-motion'
import Image from 'next/image'
import MotionSlider from '../MotionSlider/index'


const TestiesComp = ({data}) => {
    console.log('data : ',data)      
    return (
        <section id='news'  className='testies' >
            <Image
            
              src='/assets/Home/testimonials.jpg'
              layout='fill'
            />
            <div className="container"  >
            <MotionSlider allowSlideToLast padding={30}>
                {["Today", "This Week", "This Month", "Past Month"].map((item, i) => (
                    <Text>{item}</Text>
                ))}
      </MotionSlider>
 
            </div>


        </section>

    );
}

export default TestiesComp;
const Text = styled.div`
  color : red;
`;
const Cudak = styled.div`
    position : absolute;
    left : 24px;
    top : 56px;
    width:40px;
    height : 30px;
`
const Author = styled.h4`
    width: 281px;
    height: 27px;
    font-size : 24px;
    margin-top : 16px;
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 24px;
    text-align : center;
`
 const CarouselWrapper = styled.section`
     padding-bottom: 128px;
     width: 200vw;
     display: flex;
     height : 352px;
     
     /* padding-bottom : 98px; */
     
     position : relative;    
     overflow-x : hidden;
      
 `
 const TestCard = styled.article`
    display: flex;
    position : relative;
    align-items: center;
    justify-content : center;
    flex-direction: column;


    width: 448px;
    height: 319px;
    left: 0px;
    top: 0px;
    color : #2c2c2c;
    background: #FFFFFF;
    
    border-radius: 17px;

/* Inside Auto Layout */
margin-right : 32px;    


 `
 const CarouselAbsolute = styled(motion.div)`
    background:  red;
    position: absolute;
    
    left : 0px;
    top : 0px;
    width  :auto;
    height : 100%;
    display : flex;
    justify-content : flex-start;
    position: static;
    
 `
 const Paragraph = styled.p`
 position: static;
width: 281px;
height: 96px;
left: 0px;
top: 0px;

font-style: italic;
font-weight: normal;
font-size: 16px;
line-height: 24px;
/* or 150% */

text-align: center;

color: #1D1D1B;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
 `
 

 const Indicators = styled.div`
    position : absolute;
    left : 0px;
    bottom: 0px;
    display : flex;
    width : 85px;
    justify-content : space-between;
    align-items : center;     
 `;

interface IHeadingStyled {
    hovered: boolean;
 }
 const Indicator = styled(motion.div)<IHeadingStyled>`
     height : 10px;
     width : 10px;
     border-radius : 50%;
   
     background : ${props =>props.hovered ? '#EB7700' : '#fff'};
 `;