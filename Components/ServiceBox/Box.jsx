import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Header1, Paragraph } from '../../styledComponents/styledComponents';
import { useInView } from 'react-intersection-observer'
import {motion } from 'framer-motion'
const Box = ({order,box}) => {
    const [ref, inView] = useInView({threshold: 0,});
    const [odd,setOdd] = useState(false)
    
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
                }}>
                    <img src={box.icon} alt=""/>
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
    img{
        width : 50%
    }
`