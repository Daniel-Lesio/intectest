import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import ArrowSvg from "./ArrowSvg";

const Button = (props) => {
    const [arrowColor,setArrowColor] = useState('#008440')
    const [hovered , changeHovered] = useState(false)
    const changeArrowColor = (enter)=>{
        if(props.arrow){
            if(props.color === 'white'){
                if(enter){
                    changeHovered(true)
                    setArrowColor('#fff')
                }
                else{
                    changeHovered(false)
                    setArrowColor('#008440')
                    
                }
            }
            else{
                setArrowColor("#fff")
                if(enter){
                    changeHovered(true)
                    setArrowColor('#008440')
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
        
    }, [props]);    
    return (
        <ButtonComp 
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
        </ButtonComp>
    );
}

export default Button;


const ButtonComp = styled.div`
    margin-bottom : 10px;
    background : ${props=> props.color === 'white'  ? '#fff' :'#008440' };
    color : ${props=>props.color === 'white' ? '#008440':'#fff'};
    cursor: pointer;
    border-radius : 50px;
    display : flex;
    justify-content : center;
    align-items : center;
    border : solid 2px #008440;
    transition : all ease-in-out .3s;
    width : 100%;
    max-width : 148px;
    min-height : 48px;
    &:hover{
        background : ${props=> props.color === 'white'  ? '#008440' :'#fff' };
        color : ${props=>props.color === 'white' ? '#fff':'#008440'};
        
    }
    
`