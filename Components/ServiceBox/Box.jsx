import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Header1, Paragraph } from '../../styledComponents/styledComponents';
import { useInView } from 'react-intersection-observer'
import { motion,AnimatePresence } from 'framer-motion'
import Link from 'next/link'
const Box = ({order,box}) => {
    const [ref, inView] = useInView({threshold: 0,});
    const [odd,setOdd] = useState(false)
    const [showInner,setShowInner] = useState(true)    
    useEffect(()=>{
        if(order % 2 === 0){
            setOdd(true)
            console.log("zero")
        }
    },[order])
    return (
        <BoxComp>
            {
                !odd  && (
                    <Content>
                    <Header1 style={{fontSize : '32px' , marginBottom : '16px'}}>{box.title}</Header1>
                    <Paragraph>{box.body}</Paragraph>
                </Content>
                
                    )
            }
            <Side ref={ref}>
                <Circle animate={{
                    x : inView ? 0 : 1000,
                }}
                onMouseEnter={() => setShowInner(false)}
                onMouseLeave={() => setShowInner(true)}
                
                >
                    <img src={box.icon} alt=""/>
                    <AnimatePresence>

                    {   <Link href='/Contact'>
                            <InnerCircle
                            animate={{
                                x: showInner ? '140%' : 0
                            }}
                            initial={{x:0}}
                            >
                                    <div style={{marginRight : '8px'}}>ASK US</div>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464467C9.97631 0.269205 9.65973 0.269205 9.46447 0.464467C9.2692 0.659729 9.2692 0.976312 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM-4.37114e-08 4.5L13 4.5L13 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="white"/>
</svg>

                            </InnerCircle>
                        
                        </Link>
                    }
                    </AnimatePresence>
                    
                </Circle>
            </Side>
            
            {
                odd  && (
                    <Content>
                    <Header1 style={{fontSize : '32px' , marginBottom : '16px'}}>{box.title}</Header1>
                    <Paragraph>{box.body}</Paragraph>
                </Content>
                
                    )
            }
        </BoxComp>
    );
}

export default Box;
const BoxComp  = styled.div`
display : grid;
grid-template-columns : 1fr 1fr;
align-items :center;
justify-content : space-between;
`
const Content = styled.article`
display : flex;
flex-direction : column;
padding-bottom : 124px;
`;
const Side = styled.div`
display : flex;
justify-content : center;
align-items : center;
padding-bottom : 124px;

`;
const Circle = styled(motion.div)`
        overflow: hidden;
        display : flex;
        justify-content : center;
        align-items : center;
        align-self : center;
        border-radius : 50%;
        max-width : 280px;
        width : 100%;
        height : 280px;
        box-shadow :
         -13.1811px 0px 101.055px 83.4803px rgba(164, 191, 177, 0.14);
         position: relative;
    img{
        width : 50%
    }
`

const InnerCircle = styled(motion.div)`
position: absolute;
left: 0px;
top: 0px;
width : 100%;
height: 100%;
background   :#008440  ;
z-index: 10;
border-radius: 50%;
opacity: 1;
display:  flex;
justify-content: center;
align-items: center;
color: #fff;
cursor: pointer;
font-size: 14px;
`;
const circleVariants = {
    hidden : {x : 1000},
    visible : {x : 0}
}