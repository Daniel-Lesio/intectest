import React, {useEffect,useState} from 'react';
import styled from 'styled-components';
import { Header1, Paragraph  } from "../styledComponents/styledComponents";
import Mapa from '../Components/Mapa/Mapa'
import {motion} from 'framer-motion'
import NumbersGrey from '../Components/NumbersGrey/NumbersGrey'
import Image from 'next/image'
import Layout from '../Layout/Layout';
import { activeLink } from '../atoms/atoms'
import { useSetRecoilState } from 'recoil'
import {useInView} from 'react-intersection-observer'
const About = () => {
    const [posx, setposx] = useState(-480)
   
    const { ref, inView }  = useInView()
    const setActiveLink =useSetRecoilState(activeLink)
    useEffect(() => {
        // window.scrollTo(0, 0);
        setActiveLink("About")
           
    },[] );
    useEffect(() => {
        const interval = setInterval(() => {
            setposx(posx + 100)
        }, 1000);
        return () => clearInterval(interval);
      }, []);
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
            <div className="container" style={{paddingTop : '256px',paddingBottom : '256px'}}>
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
               
                    <ButtonWhite>
                        <p style={{marginRight : 24}}>MORE</p>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='path' fillRule="evenodd" clipRule="evenodd" d="M10.3795 0.477212L13.8407 3.93403C14.0531 4.14615 14.0531 4.49008 13.8407 4.70221L10.3794 8.15902C10.1671 8.37115 9.82268 8.37115 9.61028 8.15902C9.39788 7.94689 9.39788 7.60297 9.61028 7.39084L12.1431 4.8613L0.543882 4.8613C0.243504 4.8613 -3.62481e-07 4.61811 -3.37193e-07 4.31812V4.31812C-3.11904e-07 4.01812 0.243505 3.77493 0.543883 3.77493L12.1431 3.77493L9.61028 1.24539C9.39789 1.03327 9.39789 0.689339 9.61028 0.477212C9.82268 0.265084 10.1671 0.265084 10.3795 0.477212Z" fill="white"/></svg>
                    </ButtonWhite>
                
                </Left>
                <Right>
                    <img src='/assets/fot_about_us_home.jpg' alt=""/>
                </Right>
              </div>
            </SectionAbout>
                </div>
            <NumbersGrey/>
            <Mapa bg={true} />
            {/* <MapaComp>
                <img src='/assets/map.png' alt=""/>    
            </MapaComp> */}
            <Partners className='container'>
                <h1 style={{marginTop : 100,marginBottom : 56,fontFamily : 'lato'}}>Partners</h1>
                <Carousel drag="x"
                animate={{x:posx}}
                >
                <img src='/assets/about/logo/l_partners01.png' alt=""/>    
                <img src='/assets/about/logo/l_partners02.png' alt=""/>    
                <img src='/assets/about/logo/l_partners03.png' alt=""/>    
                <img src='/assets/about/logo/l_partners04.png' alt=""/>    
                <img src='/assets/about/logo/l_partners05.png' alt=""/>    
                <img src='/assets/about/logo/l_partners06.png' alt=""/>    
                <img src='/assets/about/logo/l_partners01.png' alt=""/>    
                <img src='/assets/about/logo/l_partners02.png' alt=""/>    
                <img src='/assets/about/logo/l_partners03.png' alt=""/>    
                <img src='/assets/about/logo/l_partners04.png' alt=""/>    
                <img src='/assets/about/logo/l_partners05.png' alt=""/>    
                <img src='/assets/about/logo/l_partners06.png' alt=""/>    
                <img src='/assets/about/logo/l_partners01.png' alt=""/>    
                <img src='/assets/about/logo/l_partners02.png' alt=""/>    
                <img src='/assets/about/logo/l_partners03.png' alt=""/>    
                <img src='/assets/about/logo/l_partners04.png' alt=""/>    
                <img src='/assets/about/logo/l_partners05.png' alt=""/>    
                <img src='/assets/about/logo/l_partners06.png' alt=""/>    
                <img src='/assets/about/logo/l_partners01.png' alt=""/>    
                <img src='/assets/about/logo/l_partners02.png' alt=""/>    
                <img src='/assets/about/logo/l_partners03.png' alt=""/>    
                <img src='/assets/about/logo/l_partners04.png' alt=""/>    
                <img src='/assets/about/logo/l_partners05.png' alt=""/>    
                <img src='/assets/about/logo/l_partners06.png' alt=""/>    
                
                </Carousel>    
            </Partners>          
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

const ButtonWhite = styled.div`
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