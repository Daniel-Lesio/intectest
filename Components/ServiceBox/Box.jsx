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
                                    <p>ASk ME</p>
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
        box-shadow : 0px 4px 4px rgba(0, 0, 0, 0.25),
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
`;
const circleVariants = {
    hidden : {x : 1000},
    visible : {x : 0}
}