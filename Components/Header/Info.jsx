import  {useState, useEffect} from 'react';
import styled from 'styled-components'
// import {ContainerComp } from '../../styledComponents/StyledComponetns'
import { motion , AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
// import twitter from '/assets/socials/twitter.svg'
// import facebook from '/assets/socials/facebook.svg'
// import linked from '/assets/socials/linked.svg'
// import mail from '/assets/Vector.svg'; 

const languages = [
    {
        name : 'Polski',
        short : 'PLN'
    },
    {
        name : 'English',
        short : 'ENG'
    },
    {
        name : 'Russian',
        short : 'RUS'
    },
]

const Info = () => {
const [twitterIcon ,hoverTwitterIcon ] = useState(false)
const [facebookIcon ,hoverFacebookIcon] = useState(false)
const [linkedIcon ,hoverLinkedIcon] = useState(false)
const [] = useState(false)
const [langStatus , setLangStatus] = useState(false)
const [langActive , changeLangActive] = useState('')
const  [langs , setLangs]  =  useState([])
 
useEffect(() => {
    changeLangActive(languages[0].short)
    setLangs([...languages])
    return () => {
        
    };
}, []);
const changeActive = (x) =>{
    
    changeLangActive(langs[x].short)
}
const toggleLangs = () =>{
    setLangStatus(!langStatus)
}
   return (
        <InfoComp>
            <div className='container'>
                <Nav>
                   <InfoLinks>
                       
                       <InfoLink>
                       <img style={{marginRight : '8px'}} src='/assets/Vector.svg' alt=""/>
                       <span><a href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a></span>
                       </InfoLink>
                       <InfoLink>
                       <a href="#">PRESSROOM</a>
                       </InfoLink>
                   </InfoLinks>
                    <SocialIcons >
                        <a href="http://linkedin.com">
                        <SocialIcon onMouseEnter={() => hoverLinkedIcon(true)} onMouseLeave={() => hoverLinkedIcon(false)}>
                        {
                            !linkedIcon && <Image src='/assets/socials/normal_linked.svg'  width={24} height={24} />
                        }
                        {
                            linkedIcon && <Image src='/assets/socials/hover_linkedin.svg'  width={24} height={24} />
                        }
                        </SocialIcon>
                        </a>
                        <a href="http://twitter.com">
                        <SocialIcon onMouseEnter={() => hoverTwitterIcon(true)} onMouseLeave={() => hoverTwitterIcon(false)}>
                        {
                            !twitterIcon && <Image src='/assets/socials/normal_tw.svg'  width={24} height={24} />
                        }
                        {
                            twitterIcon && <Image src='/assets/socials/hover_twitter.svg'  width={24} height={24} />
                        }
                        </SocialIcon>
                        </a>
                        <a href="http://facebook.com">
                        <SocialIcon onMouseEnter={() => hoverFacebookIcon(true)} onMouseLeave={() => hoverFacebookIcon(false)}>
                        {
                            !facebookIcon && <Image src='/assets/socials/normal_fb.svg'  width={24} height={24} />
                        }
                        {
                            facebookIcon && <Image src='/assets/socials/hover_facebook.svg'  width={24} height={24} />
                        }
                        </SocialIcon>
                        </a>
                      
                    </SocialIcons >
                    <LangBtn onClick={toggleLangs}>
                        <p style={{ boxSizing : 'border-box', paddingRight : 8}}>{langActive}</p>
                        <svg    width="14" height="8"  fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999939 1L7.01816 7L13.0364 1" stroke="#EB7700" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <AnimatePresence>
                        {langStatus && (
                            <Langs
                            variants={LangsVariants}
                            initial='hidden'
                            animate='visible'
                            exit='exit'
                            >
                                <LangLink
                                variants={LangVariants}
                                custom={0}
                                onClick={()=> changeActive(0) }>PLN</LangLink>
                                <LangLink 
                                variants={LangVariants}
                                custom={2}
                                
                                onClick={()=> changeActive(1) }>ENG</LangLink>
                                <LangLink 
                                variants={LangVariants}
                                custom={4}
                                
                                onClick={()=> changeActive(2) }>RUS</LangLink>
                            </Langs>
                        )}
                    </AnimatePresence>
                    </LangBtn>
                </Nav>
            </div>           
        </InfoComp>
    );
}

export default Info;
const SocialIcons = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-between;
    padding-right : 24px;
`
const SocialIcon = styled.div`
    cursor: pointer;
    display : flex;
    justify-content : center;
    align-items : center;
    padding-left : 18px;
    
`
const Langs = styled(motion.div)`

    position : absolute;
    
    width : 100%;
    min-height : 100px;   
    top : 100%;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.14);
    z-index : -1;
    display : flex;
    flex-direction : column;
    justify-content : space-evenly;
    background:#fff;
`
const LangBtn = styled.div`
    cursor: pointer;
    z-index : 2;
    position : relative;
    height : 100%;
    display : flex;
    justify-content : space-evenly;
    align-items : center;
    padding-left : 0px;
    font-size : 12px;
    padding-left : 24px;
    &::before{        
        content :'';
        z-index : 4;
        position : absolute;
        width : 1px;
        height : 20px;
        left : 0px;
        transform : translateY(-50%);
        top : 50%;
        background : #EB7700;
    }
    &:after {
    z-index : -1;
    position : absolute;
    content: "";
    width : 100%;
    height : 100%;
    background : #f8f8f8;
  }
`
const InfoComp = styled(motion.div)`
    background: #F8F8F8;
    line-height : 40px;
    display : none;
    @media (min-width: 768px) {
        display : flex;
    }
`
const Nav = styled.div`
    height : 100%;
    display :flex;
    align-items : center;
    justify-content : flex-end;
`
const LangLink = styled(motion.div)`
    padding-left : 10px;
    cursor: pointer;
    &:hover{
        color : #EB7700;
    }

`
const  InfoLink = styled.span`
    display : flex ; 
    align-items : center;
    justify-content : space-between;
    margin-left : 45px;
    font-size : 12px;
    &:hover{
        color: #EB7700;
        text-decoration : underline ;

    }
`
const InfoLinks = styled.span`
    display : flex;
    justify-content : space-between;
    margin-right : 54px;
    @media (min-width: 640px) {
    }
    @media (min-width: 768px) {
    }
    @media (min-width: 1024px) {
    max-width : 1024px!important;
    }
    @media (min-width: 1280px) {
    max-width : 1120px!important;
    }
    @media (min-width: 1536px) {
    max-width : 1120px!important;
    }
`

const LangsVariants = {
    visible : { opacity : 1 },
    hidden: { opacity : 0 },
    exit : { opacity : 0 }
}
const LangVariants = {
    visible : i => (
        { opacity : 1 , x : 0 , transition : {
            delay : 0.1 * i 
        } }
    ),
    hidden: { opacity : 0 , x : -100 },
    exit : { opacity : 0 , scale : 0.9 }
}
