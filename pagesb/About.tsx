import React, {useState} from 'react';
import styled from 'styled-components';
import { Header1, Paragraph  } from "../styledComponents/styledComponents";
import Mapa from '../Components/Mapa/Mapa'
import {motion} from 'framer-motion'
import NumbersGrey from '../Components/NumbersGrey/NumbersGrey'
import SwipePartners from '../Components/SwipePartners/SwipePartners'
import Image from 'next/image'
import Layout from '../Layout/Layout';
import {useInView} from 'react-intersection-observer'
import ButtonWhite from '../Layout/ButtonWhite'
const About = () => {
    const [posx, setposx] = useState(-480)
   
    const { ref, inView }  = useInView()
    
    return (
        <Layout>
                <PageHeader>
            <Image
                    src='/assets/news.svg'
                    layout='fill'
            />
                <div className="container" style={{position : 'relative'}}>
                    <div style={{height : 24}}></div>
                
                <Header1 style={{textAlign : 'center'}}>WHO WE ARE</Header1>
                    <div style={{height : 24}}></div>
                <Paragraph style={{marginBottom:'16px', textAlign:'center',maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>Since 2016, Intec Energy Solutions has been a leading provider of services related to the construction of farms from renewable energy sources. We design high-quality solar farms for international investors. Our employees have many years of experience in German companies that are pioneers in the photovoltaic market in Europe. That is why we follow the engineering principles developed by the largest companies in the industry in all our projects. As a result, our farms are modern and environmentally friendly with an energy-saving approach.</Paragraph>
               
                <div style={{height : 24}}></div>
                <AboutImage>
                <Image
                    src='/assets/about/foto_about_us@2x.jpg'
                    layout='fill'
                />      
                </AboutImage> 
                
                </div>
            </PageHeader>
            <div className="container" style={{paddingTop : '256px',paddingBottom : '112px'}}>
                    <Header1 style={{textAlign : 'center',marginTop:'96px',marginBottom : '56px'}}>OUR VALUES</Header1>
                    <AboutIcons ref={ref}>
                        <AboutIcon>
                            <Circle
                            initial={{scale : 0.2, opacity : 0}}
                            animate={{scale : inView ? 1 : 0.1 , opacity : inView ?  1 : 0}}
                            >
                            <img  src='/assets/ico/quality.svg' alt=''/>
                            </Circle>
                            <h2>Quality</h2>
                            <AboutIconContent>Everything we do is to treat our Customers as the top priority.</AboutIconContent>
                        </AboutIcon>
                        <AboutIcon>
                            <Circle
                            initial={{scale : 0.2, opacity : 0}}
                            animate={{scale : inView ? 1 : 0.1 , opacity : inView ?  1 : 0,transition : {delay : 0.5}}}
                            >
                            <img  src='/assets/about/satisfaction.svg' alt=''/>
                            </Circle>
                            <h2>Satisfaction</h2>
                            <AboutIconContent>Everything we do is to treat our Customers as the top priority.</AboutIconContent>
                        </AboutIcon>
                        <AboutIcon>
                            <Circle
                            initial={{scale : 0.2, opacity : 0}}
                            animate={{scale : inView ? 1 : 0.1 , opacity : inView ?  1 : 0,transition : {delay : 1}}}
                            >
                            <img  src='/assets/about/innovation.svg' alt=''/>
                            </Circle>
                            <h2>Innovation</h2>
                            <AboutIconContent>Everything we do is to treat our Customers as the top priority.</AboutIconContent>
                        </AboutIcon>
                    </AboutIcons>
                </div>
                <div>
            <SectionAbout>
            <Image
          src='/assets/about.png'
          layout='fill'
          />
              <div className='container' >
                <Left>
                    <Header1>
                    WHAT WE <br/> OFFER?                        
                    </Header1>
                    <div style={{height : 16}}></div>
               
                    
                    <Paragraph>
                    INTEC provides energy solutions to international investors with its power-plant installation projects, design, construction and production phases. 
                    </Paragraph>
                    <div style={{height : 16}}></div>
               
                    <Paragraph>
                    We can be your General Contractor, we can make project development or operations & maintenance. We can even do whole EPC – this is your call!
                    </Paragraph>
                    <div style={{height : 32}}></div>
                    <div>

                    <ButtonWhite  color='white' value='MORE' arrow to='/Services'/>               
                    </div>
                                
                </Left>
                <Right>
                    <img src='/assets/fot_about_us_home.jpg' alt=""/>
                </Right>
              </div>
            </SectionAbout>
                </div>
            <NumbersGrey/>
            <Mapa bg={true} />
            <SwipePartners/> 
            <div style={{height : 80}}></div>          
        </Layout>
    );
}

export default About;


const PageHeader = styled.div`


    min-height :   560px;
    background : #EB7700; 
    margin-top : 135px;
    padding-top : 56px;
    color : white;
    position : relative;
    text-align : center;
    .container{
        position : relative;
        img{
            border-radius: 40px 40px 40px 0px;
            width : 1120px;
            height : 512px;
            position : absolute;
            
        }
    }        
`
const Image2 = styled.div`
    position : absolute;
    width : 100%;
    height : 512px;
    background : #2c2c2c;
    border-radius: 40px 40px 40px 0px;
    img{
        position : absolute;
        border-radius: 40px 40px 40px 0px;
        transform : translate(-50%,-50%);
        left : 50%;
        top : 50%;
        width : 100%;
        height : 100%;
        object-fit:cover;
    }
`
const AboutIcons = styled.div`
    display : flex;
    justify-content : space-between;
    flex-wrap : wrap;
    align-items  : center;

`
const AboutIcon = styled.div`
    position    :relative ;
    
    margin-left : auto;
    margin-right : auto;
    width : 294px;
    display : flex;
    flex-direction  : column;
    align-items :center;
    flex-wrap : wrap;
    @media (max-width : 768px) {
        margin-bottom:60px;
    }
    p{
        visibility: hidden;
        top: 0px;
        position: absolute;
        background: #CCE6D9;
        width: 100%;
        height: 110%;
        opacity:  0.3;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover{
        h2{
            color :  #008440;
        }
        p{
        visibility: visible;
        opacity: 1;
        transition : all ease-in-out .3s;

        }
    }
    h2{
        transition : all ease-in-out .3s;
        color : black;
        margin-top : 32px;
    }
    p{
        line-height : 24px;
      
    }
`

const Circle = styled(motion.div)`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 128px;
    height : 128px;
    border-radius : 50%;
    box-shadow: -13.1811px 0px 101.055px 83.4803px rgba(164, 191, 177, 0.14);
   
`
const AboutIconContent = styled.p`
    position: absolute;
    width : 100%auto;
    padding :  24px 32px;
    background : #ddd;
    border-radius : 50px;
    background: rgba(164, 191, 177, 0.14);
    color :  #008440;
    opacity: 1;
    transition : all ease-in-out .3s;
    position : relative;
`

const SectionAbout = styled.section`
    /* position : absolute; */
    position : relative;
    top: 0px;
    min-height : 100vh;
    padding-top : 100px;
    padding-bottom : 100px;
    z-index: 0;
    img{
        z-index : -1;
    }
    .container{
        img{
            z-index : 1;
        }
        display : grid;
        grid-template-columns :  1fr;
    gap :  96px;
    @media (min-width: 768px) {
        grid-template-columns : 352px 1fr;
    }
    }
`
const Left = styled.div`
    
    color : white;
    display : flex;
    justify-content :center;
    flex-direction : column;
    align-items : flex-start;
    z-index: 10;
    
`

const Right = styled.figure`
    height : 640px;
    width : 100%;
    border-radius: 80px 80px 80px 0px;
    /* position : relative; */
    overflow : hidden;
    background : #008440;
    opacity : 1;
    display : flex;
    img{
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
`

const ButtonWhiteComp = styled.div`
    cursor: pointer;
    border : solid 3px white;
    border-radius : 50px;
    padding : 15px 32px;
    display : inline-flex;
    align-items : center;
    justify-content : space-evenly;
    align-self : flex-start;
    margin-top : 32px;
    margin-bottom : 80px;
        &:hover{
            background : white;
            color : #008440;
            svg{
                transform : scaleX(1.2);
            }
                path{
                    fill:#008440;
               }       
    }
`
const MapaComp = styled.div`
min-height : 840px;
position : relative;
margin-bottom : 96px;
img{
    position : absolute;
    transform : translate(-50% , -50%);
    left : 50%;
    top : 50%;
    width : 100%;
    height: 100%;
   
}`
const Partners = styled.div`
   position : relative; 
  grid-template-columns : repeat(1,1fr);
    height : 332px;
  @media (min-width: 640px) {
        grid-template-columns : repeat(2,1fr);
        
    }
    @media (min-width: 768px) {
        grid-template-columns : repeat(2,1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns : repeat(3,1fr);
    }
    @media (min-width: 1280px) {
        grid-template-columns : repeat(6,1fr);
        
    }
    @media (min-width: 1536px) {
        grid-template-columns : repeat(6,1fr);
    }
`;

const Carousel = styled(motion.div)`
    position: absolute;
    left : 0px;
    width: 300vw;
    height : 100px;
    display : flex;
    align-items : center;
    cursor : grab;
    ;
    img{
        margin-left : 16px;
        margin-right : 16px;
        pointer-events:none;
        height:  40px;
        margin-left: 35px;
        margin-right: 35px;
        width: 140px;
        
    }      
`
const AboutImage = styled.div`
    position : absolute;
    width : 1120px;
    height : 512px;
  
`;