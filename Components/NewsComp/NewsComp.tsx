import React, {useState} from 'react';
import styled from 'styled-components'
import {  motion } from 'framer-motion'
import Image from 'next/image'
import Button from '../../Layout/Button'

const NewsComp = ({data}) => {
    const [slicedData] = useState(data);
    const [posx, setposx] = useState(-480)
    const [hoverNext,sethoverNext] = useState(false)
    const [hoverPrev,sethoverPrev] = useState(false)
    const slide=(msg)=>{
        if(posx >= 0 && msg === "next" ){
            return null
        }
        if(msg === 'prev' ){
            setposx(posx=>posx-480)

        }
        else{
            setposx(posx=>posx+480)
            console.log("next")

        }
    }
    
    
    return (
        <section id="news" >
            <div className="container">
            <div className="news-header">
            <h1 style={{fontWeight : 900, fontSize : '48px' ,textTransform : 'uppercase'}}>News</h1>
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
            <CarouselWrapper>
                <CarouselRelative drag="x"
                animate={{ x: posx }}
                transition={{ duration: 0.5 }}
                >
                {data.map(d=>(
                    <NewsCard key={d.id} className='news-hover'>
                        <Img
                         whileHover={{
                            scale: 1.2,
                            transition: { duration: 1 },
                          }}
                        >
                        <Image
                            src={d.url}
                            layout='fill'
                            /> 
                        </Img>
                        <NewsTitle>{d.title}</NewsTitle>
                        <NewsContent>Floating solar power plants are more advantageous than ground-mounted projects, here are some of them.</NewsContent>
                        <div className="article-footer">
   <div className="date" style={{color : '#959595!important'}}>
     {d.date}

   </div>
   <div className="more">
     <p>More</p>
     <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M11.009 0.477212L14.4703 3.93403C14.6827 4.14615 14.6827 4.49008 14.4703 4.70221L11.009 8.15902C10.7966 8.37115 10.4523 8.37115 10.2399 8.15902C10.0275 7.94689 10.0275 7.60297 10.2399 7.39084L12.7726 4.8613L1.17346 4.8613C0.873082 4.8613 0.629578 4.61811 0.629578 4.31811C0.629578 4.01812 0.873083 3.77493 1.17346 3.77493L12.7726 3.77493L10.2399 1.24539C10.0275 1.03327 10.0275 0.689339 10.2399 0.477212C10.4523 0.265084 10.7966 0.265084 11.009 0.477212Z" fill="#EB7700"/>
     </svg>  
   </div>
 </div>
                    </NewsCard>
                ))}
                </CarouselRelative>
            </CarouselWrapper>
                </div>
                <div  style={{ display :'flex',justifyContent:'center',paddingTop :0,paddingBottom :100}}>
                <div style={{ width : '100%', maxWidth : '148px' }}>

                <Button  value='MORE' arrow to='/News'/>               
                </div>

                </div>
        </section>

    );
}

export default NewsComp;
 const CarouselWrapper = styled.section`
     padding-bottom: 128px;
     width: 200vw;
     display: flex;
     height : 546px;
     margin-bottom : 00px;
     position : relative;    
     overflow-x : hidden;
      
 `
 const NewsCard = styled.article`
    height : 448px;
    margin-right : 32px!important;
    width : 448px!important;
    

 `
 const CarouselRelative = styled(motion.div)`
    position : absolute;
    left : 0px;
    top : 0px;
    width  :auto;
    height : 100%;
    display : flex;
    justify-content : flex-start;
    
 `
 const Img = styled(motion.div)`
  
    position : relative;
    height : 296px;
    width : 100%;
    object-fit : cover;
    border-radius: 40px 40px 40px 0px;
    pointer-events : none;
    overflow : hidden;
    
`
const NewsTitle = styled.h4`
            font-size: 20px;
            font-weight: 900;
            line-height: 24px;
            letter-spacing: 0px;
            text-align: left;
            margin-top: 22px;
            margin-bottom: 16px;
`
const NewsContent = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
`


