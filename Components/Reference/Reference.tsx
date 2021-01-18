import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {motion,AnimatePresence} from 'framer-motion'
import { Paragraph } from '../../styledComponents/styledComponents';
const Reference = (props) => {
    const [white  ,setWhite] = useState(false)   
    const[ images ,setImages] = useState([])
    console.log('props :' ,props)    
    const [posx, setposx] = useState(-480)
    
    useEffect(() => {
        if(props.obj.id === 0){
            setWhite(true)
        }
        if(props.obj.imgs){
            setImages(props.obj.imgs)
        }
        
    }, [props]);
    const slide =()=>{
        
        setposx(posx=>posx-480)
        console.log('posx : ',posx)
    }
    return (
        <ReferenceComp>
            <Descriptions white={white}>
                <h3 style={{fontWeight : 900}}>Project name: <span style={{fontWeight:'400', textTransform  : 'capitalize!important' ,paddingLeft : '10px' }}>{props.obj.name}</span></h3>
                <h3 style={{fontWeight : 900}}>Place of project: <span style={{fontWeight:'400', textTransform  : 'capitalize!important' ,paddingLeft : '10px' }}>{props.obj.place}</span></h3>
                <h3 style={{fontWeight : 900}}>CAPACITY :<span style={{fontWeight:'400', textTransform  : 'capitalize!important' ,paddingLeft : '10px' }}>{props.obj.capacity}</span></h3>
                <h3 style={{fontWeight : 900}}>DATE OF COMPLETION: <span  style={{fontWeight:400 , textTransform  : 'capitalize!important',paddingLeft : '10px'}}>{props.obj.completion}</span></h3>
                <Arrow onClick={()=>slide()} >
                        <svg width="19" height="16" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 8.70737C19.0976 8.31684 19.0976 7.68368 18.7071 7.29315L12.3432 0.92913C11.9527 0.538602 11.3195 0.538596 10.929 0.929117C10.5385 1.31964 10.5385 1.9528 10.929 2.34333L15.5858 7.00023L6.00933 7.00014C6.00622 7.00011 6.00311 7.00009 6 7.00009L1.50456 7.00009L1.00001 7.00009L1 7.00009C0.447715 7.00009 0 7.44781 0 8.00009C0 8.55238 0.447715 9.00009 1 9.00009H1.4995L15.5858 9.00023L10.9289 13.657C10.5384 14.0476 10.5383 14.6807 10.9289 15.0713C11.3194 15.4618 11.9526 15.4618 12.3431 15.0713L18.7071 8.70737Z" fill="#EB7700"/>
                        </svg>  
                </Arrow>
            </Descriptions>
            <Wrapper>
            <ReferenceImages drag='x' animate={{ x: posx }}
                transition={{ duration: 0.5 }}  dragConstraints={{ left: 0, right: 300 }}
>   

               {images && images.map((image,index)=>(
                        <ReferenceImage 
                        key={index}>
                            <img src={image} alt=""/>

                        </ReferenceImage>
                ))}
  
            </ReferenceImages>
  
            </Wrapper>
            <Paragraph style={{fontSize:'16px',fontWeight :400 , width:'100%',maxWidth : '832px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing metus, blandit laoreet eget. Ullamcorper donec mi quis interdum molestie amet id sit pharetra. Id leo ac tempor feugiat vitae arcu platea. Gravida sed sed arcu, at. Ac risus semper sodales condimentum. Nibh non tristique ut volutpat. Consectetur proin ipsum elementum consequat. Ultrices lorem sit nisl.
            </Paragraph>
  
        </ReferenceComp>
    );
}

export default Reference;
const ReferenceComp = styled.article`
    width : 100%;
    height : 530px;
    
    border-top : 1px solid #ddd;
    padding-top : 25px;
    z-index : 4;   
`;


const Descriptions = styled.div`
z-index :5;
display :flex;
color : ${props=>props.white ? 'white!important': 'black!important'};
width :100%;
height :50px;
font-size : 14px;
line-height : 20px;
justify-content : space-between;
align-items : center;
text-transform : uppercase;
overflow : hidden;
`;



const Arrow = styled.div`
cursor: pointer;
background : white;
display : flex;
justify-content : center;
align-items : center;
width : 48px;
height : 48px;
border: 2px solid #EB7700;
border-radius : 50%;
transition : all ease-in-out .3s;
svg{
    transition : all ease-in-out .3s;

}
&:hover{
    background : #EB7700;
    color : white;
    svg{
        transform : scaleX(1.3);
    }
    path{
        fill : white;
        
    }
}    
`;
const ReferenceImage = styled.figure`
    width: 448px;
    height : 296px;
    pointer-events : none!important;
    border-radius: 40px 40px 40px 0px;
    margin-right : 32px;
    overflow : hidden;
    position : relative;
    img{
        position :absolute;
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
`;
const ReferenceImages = styled(motion.div)`
    display : flex;
    position : absolute;
    overflow : hidden;
`;

const Wrapper = styled.div`
    display :flex;
    width : 100vw;
    margin-top : 30px;
    height : 300px;
    position : relative;
    margin-bottom : 24px;    
    overflow: hidden;

`;