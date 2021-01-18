import React, {useRef, useState} from 'react';
import styled from 'styled-components'
import { motion , useDragControls } from 'framer-motion'
import Image from 'next/image'



const TestimonialsComp = ({data}) => {
    const dragControls = useDragControls()
    const [slicedData,setSlicedData] = useState(data);
    const [posx, setposx] = useState(-480)
    const [hoverNext,sethoverNext] = useState(false)
    const [hoverPrev,sethoverPrev] = useState(false)
    const elem  = useRef<HTMLDivElement>(null)

    const slide=(msg)=>{
        
        if(msg === 'prev' ){
            console.log('prev')
            setposx(posx=>posx-480)
            //Dodać do końca pierwszy element            
             
            let first = slicedData[0]
            console.log('first : ',first)
            setSlicedData(data => [...data,first])
             
        }
        else{
            if(posx >= 0){
                setposx(-480)
            }
            console.log('posx : ',posx)
            setposx(posx=>posx+480)
            //Dodać do początku ostatni element
            let last = slicedData[slicedData.length-1]
            setSlicedData(data=>[last,...data])
            // let newArr : Array<any> = slicedData.filter(d=>d!==last)
            // console.log('newArr : ',newArr)
            // newArr.unshift(last)
            // setSlicedData(newArr)
                        
        }
    }
    
    const swipe = (x) =>{
        setposx(x)
    }  
    return (
        <section id='news'  className='testies' style={{paddingBottom : 190,background : '#CCE6D9'}} >
            <Image
              src='/assets/home/testimonials.jpg'
              layout='fill'
            />
            <div className="container"  >
            <div className="news-header" >
            <h1 style={{zIndex : 1}}>Testimonials</h1>
                    <div className="arrows">
                        <div onClick={()=>slide('next')} onMouseEnter={() => sethoverNext(true)} onMouseLeave={() => sethoverNext(false)} className="arrow-left arrow">
                        {
                            !hoverNext && (
                                <svg width="19" height="16" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 8.70737C19.0976 8.31684 19.0976 7.68368 18.7071 7.29315L12.3432 0.92913C11.9527 0.538602 11.3195 0.538596 10.929 0.929117C10.5385 1.31964 10.5385 1.9528 10.929 2.34333L15.5858 7.00023L6.00933 7.00014C6.00622 7.00011 6.00311 7.00009 6 7.00009L1.50456 7.00009L1.00001 7.00009L1 7.00009C0.447715 7.00009 0 7.44781 0 8.00009C0 8.55238 0.447715 9.00009 1 9.00009H1.4995L15.5858 9.00023L10.9289 13.657C10.5384 14.0476 10.5383 14.6807 10.9289 15.0713C11.3194 15.4618 11.9526 15.4618 12.3431 15.0713L18.7071 8.70737Z" fill="#EB7700"/>
                                </svg>
                            )
                        }
                        {
                            hoverNext && (
                                <svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.7071 7.29284L22.3431 0.92888C21.9526 0.538355 21.3195 0.538355 20.9289 0.92888C20.5384 1.3194 20.5384 1.95257 20.9289 2.34309L25.5858 6.99995H2.00099C2.00066 6.99995 2.00033 6.99995 2 6.99995L1 6.99995C0.447715 6.99995 0 7.44766 0 7.99995C0 8.55223 0.447715 8.99995 1 8.99995H2H25.5858L20.9289 13.6568C20.5384 14.0473 20.5384 14.6805 20.9289 15.071C21.3195 15.4615 21.9526 15.4615 22.3431 15.071L28.7071 8.70705C29.0976 8.31653 29.0976 7.68336 28.7071 7.29284Z" fill="white"/>
                                </svg>
                            )
                        }  
                        </div>
                        <div onClick={()=>slide('prev')} onMouseEnter={() => sethoverPrev(true)} onMouseLeave={() => sethoverPrev(false)} className="arrow-right arrow">
                        {
                                hoverPrev && (
                                    <svg style={{transform : 'rotate(180deg)'}} width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28.7071 7.29284L22.3431 0.92888C21.9526 0.538355 21.3195 0.538355 20.9289 0.92888C20.5384 1.3194 20.5384 1.95257 20.9289 2.34309L25.5858 6.99995H2.00099C2.00066 6.99995 2.00033 6.99995 2 6.99995L1 6.99995C0.447715 6.99995 0 7.44766 0 7.99995C0 8.55223 0.447715 8.99995 1 8.99995H2H25.5858L20.9289 13.6568C20.5384 14.0473 20.5384 14.6805 20.9289 15.071C21.3195 15.4615 21.9526 15.4615 22.3431 15.071L28.7071 8.70705C29.0976 8.31653 29.0976 7.68336 28.7071 7.29284Z" fill="white"/>
                                </svg>
                                )
                            }                  
                            {
                                !hoverPrev && (
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.292898 8.70737C-0.0976295 8.31684 -0.0976353 7.68368 0.292885 7.29315L6.65678 0.92913C7.04731 0.538602 7.68047 0.538596 8.071 0.929117C8.46153 1.31964 8.46153 1.9528 8.07101 2.34333L3.4142 7.00023L12.9907 7.00014C12.9938 7.00011 12.9969 7.00009 13 7.00009L17.4954 7.00009L18 7.00009L18 7.00009C18.5523 7.00009 19 7.44781 19 8.00009C19 8.55238 18.5523 9.00009 18 9.00009H17.5005L3.41422 9.00023L8.07112 13.657C8.46165 14.0476 8.46165 14.6807 8.07113 15.0713C7.68061 15.4618 7.04745 15.4618 6.65692 15.0713L0.292898 8.70737Z" fill="#EB7700"/>
                                    </svg>
                                )
                            }                  

              </div>
                    </div>
            </div>
            <CarouselWrapper ref={elem}>
                <CarouselAbsolute drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragControls={dragControls}
                animate={{ x: posx }}
                transition={{ duration: 0.5 }}
                >
                {slicedData.map((d,i)=>(
                    <TestCard 
                    key={i} 
                    className='news-hover'
                    whileHover="visible" 
                    initial='hidden'
                    whileTap='visible' 
                    animate="hidden"
                    exit='hidden'
                    >
                                <Cudak variants={cudzyVariants}>
                                    <Image
                                    src='/assets/cudzy.svg'
                                    width='40'
                                    height='30'
                                    />
                                </Cudak>
                                <Paragraph variants={paragraphVariants}>{d.testimonial}</Paragraph>
                                <Author variants={authorVariants}>{d.author}</Author>
                    </TestCard>
                ))}
                </CarouselAbsolute>
                <Indicators>
                <Indicator hovered={posx > -480 ? true : false } onClick={()=>setposx(0)}  ></Indicator>
                <Indicator hovered={posx <= -480 && posx > -960 ? true : false  } onClick={()=>setposx(-480)} ></Indicator>
                <Indicator hovered={posx <= -960 && posx > -1440 ? true : false  } onClick={()=>setposx(-960)}></Indicator>
                <Indicator hovered={posx <= -1440 ? true : false } onClick={()=>setposx(-1440)}></Indicator>
                
            </Indicators>
            </CarouselWrapper>
                </div>


        </section>

    );
}

export default TestimonialsComp;
const Cudak = styled(motion.div)`
    position : absolute;
    left : 24px;
    top : 56px;
    width:40px;
    height : 30px;
`
const Author = styled(motion.h4)`
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
 const TestCard = styled(motion.div)`
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

    position: absolute;
    
    left : 0px;
    top : 0px;
    width  :auto;
    height : 100%;
    display : flex;
    justify-content : flex-start;
    position: static;
    
 `
 const Paragraph = styled(motion.p)`
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
        cursor: pointer;
     background : ${props =>props.hovered ? '#EB7700' : '#fff'};
 `;

const paragraphVariants = {
    hidden : { scale : 1},
    visible : {scale : 1.1}
}
const authorVariants ={
    hidden : { scale : 1 , y : 0},
    visible : {scale : 1.1 , y : 20}
}
const cudzyVariants = {
    hidden : { rotate : 0},
    visible : {rotate : 360}
}