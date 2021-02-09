import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { Paragraph } from '../../styledComponents/styledComponents';
import SwiperCore, {Navigation,Pagination} from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/react';
SwiperCore.use([Navigation,Pagination])

const Reference = (props) => {
    const [white  ,setWhite] = useState(false)   
    const[ images ,setImages] = useState([])
    console.log('props :' ,props)    
    const [posx, setposx] = useState(-480)
    const [hovered,setHovered] = useState(false)    
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
                <h3 style={{ fontSize: 14,lineHeight : 24, fontWeight : 900}}>Project name: <span style={{fontWeight:400, textTransform  : 'capitalize' ,paddingLeft : '10px' }}>{props.obj.name}</span></h3>
                <h3 style={{ fontSize: 14,lineHeight : 24, fontWeight : 900}}>Place of project: <span style={{fontWeight:400, textTransform  : 'capitalize' ,paddingLeft : '10px' }}>{props.obj.place}</span></h3>
                <h3 style={{ fontSize: 14,lineHeight : 24, fontWeight : 900}}>CAPACITY :<span style={{fontWeight:400, textTransform  : 'capitalize' ,paddingLeft : '10px' }}>{props.obj.capacity}</span></h3>
                <h3 style={{ fontSize: 14,lineHeight : 24, fontWeight : 900}}>DATE OF COMPLETION: <span  style={{fontWeight:400 , textTransform  : 'capitalize',paddingLeft : '10px'}}>{props.obj.completion}</span></h3>
                <Arrow onClick={()=>slide()} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
                        {!hovered && (
                                    <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.292898 8.70737C-0.0976295 8.31684 -0.0976353 7.68368 0.292885 7.29315L6.65678 0.92913C7.04731 0.538602 7.68047 0.538596 8.071 0.929117C8.46153 1.31964 8.46153 1.9528 8.07101 2.34333L3.4142 7.00023L12.9907 7.00014C12.9938 7.00011 12.9969 7.00009 13 7.00009L17.4954 7.00009L18 7.00009L18 7.00009C18.5523 7.00009 19 7.44781 19 8.00009C19 8.55238 18.5523 9.00009 18 9.00009H17.5005L3.41422 9.00023L8.07112 13.657C8.46165 14.0476 8.46165 14.6807 8.07113 15.0713C7.68061 15.4618 7.04745 15.4618 6.65692 15.0713L0.292898 8.70737Z" fill="#EB7700"/>
                                </svg>
                    )}
                        {hovered && (
                                                        <svg style={{transform : 'rotate(180deg)'}} width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M28.7071 7.29284L22.3431 0.92888C21.9526 0.538355 21.3195 0.538355 20.9289 0.92888C20.5384 1.3194 20.5384 1.95257 20.9289 2.34309L25.5858 6.99995H2.00099C2.00066 6.99995 2.00033 6.99995 2 6.99995L1 6.99995C0.447715 6.99995 0 7.44766 0 7.99995C0 8.55223 0.447715 8.99995 1 8.99995H2H25.5858L20.9289 13.6568C20.5384 14.0473 20.5384 14.6805 20.9289 15.071C21.3195 15.4615 21.9526 15.4615 22.3431 15.071L28.7071 8.70705C29.0976 8.31653 29.0976 7.68336 28.7071 7.29284Z" fill="white"/>
                                                    </svg>
                                  
                        )}  
                </Arrow>
            </Descriptions>
            <Swiper
                    loop={true}
                    navigation={{
                        nextEl : '.next',
                        prevEl : '.prev'
                    }}
            
                    autoplay={true}
                    spaceBetween={50}
                    slidesPerView={3}
                    style={{width : '100vw'}}
            
            >
            {images && images.map((image,index)=>(
                        <SwiperSlide
                        key={index}
                        style={{
                            width: '448px',
                            height:  '296px',
                            overflow: 'hidden',
                            borderRadius: '40px 40px 40px 0px',
                            marginTop : 20,
                            marginBottom : 30,
                        }}
                        >
                            <img style={{objectFit : 'cover', position : 'absolute',width : '100%',height : '100%'}} src={image} alt=""/>

                        </SwiperSlide>
                ))}
                
            </Swiper>
            {/* <Wrapper>
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
  
            </Wrapper> */}
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

interface DescProps {
    white : Boolean
}
const Descriptions = styled.div<DescProps>`
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
border-radius : 50%;
transition : all ease-in-out .3s;
box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.14);
            transform: matrix(-1, 0, 0, 1, 0, 0);
            
&:hover{
    background : #EB7700;
    color : white;


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