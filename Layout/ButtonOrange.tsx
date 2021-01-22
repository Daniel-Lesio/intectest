import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import ArrowSvg from "./ArrowSvg";
import Link from 'next/link'
const ButtonWhite = (props) => {
    const [arrowColor,setArrowColor] = useState('#EB7700')
    const [hovered , changeHovered] = useState(false)
    const changeArrowColor = (enter)=>{
        if(props.arrow){
            if(props.color === 'white'){
                if(enter){
                    changeHovered(true)
                    setArrowColor('#EB7700')
                }
                else{
                    changeHovered(false)
                    setArrowColor('#fff')
                    
                }
            }
            else{
                setArrowColor("#fff")
                if(enter){
                    changeHovered(true)
                    setArrowColor('#EB7700')
                }
                else{
                    changeHovered(false)
                    setArrowColor('#fff')
    
                }
            }
        }
    }
    useEffect(() => {
        if(props.color !== 'white'){
            setArrowColor("#fff")
        }
        setArrowColor("#fff")
        
    }, [props]);    
    return (
        <Link href={props.to}>
        <a>
        <ButtonWhiteComp 
        color={props.color}
        onMouseEnter={()=>changeArrowColor(true)}
        onMouseLeave={()=>changeArrowColor(false)}            
        >
            {props.value}
            {
                props.arrow && (
                    <ArrowSvg hovered={hovered} color={arrowColor}/>
                )
            }            
        </ButtonWhiteComp>
        </a>
        </Link>
    );
}

export default ButtonWhite;


const ButtonWhiteComp = styled.div`
    cursor: pointer;
    margin-bottom : 10px;
    background : ${props=> props.color === 'white'  ? 'transparent' :'#EB7700' };
    color : ${props=>props.color === 'white' ? '#fff':'#fff'};
    border-radius : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    border : solid 2px #fff;
    transition : all ease-in-out .3s;
    min-width : 296px;
    max-width :  100%;
    min-height : 48px;
    z-index: 20;
    &:hover{
        background : ${props=> props.color === 'white'  ? '#fff' :'#EB7700' };
        color : ${props=>props.color === 'white' ? '#EB7700':'#fff'};
    }
    
`