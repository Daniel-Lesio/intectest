import React,{useState} from 'react';
import styled from 'styled-components';
import Position from "./Position";
import {Space} from '../../styledComponents/styledComponents'
import {animate, AnimatePresence, motion} from 'framer-motion'
const WorkFilter = ({positions}) => {
    const [pos,setPos] = useState('')
    const [loc,setLoc] = useState('')
    const [positionsAcc,setpositionsAcc] = useState(false)
    const [locationsAcc,setlocationsAcc] = useState(false)
    const searchPos = (e)=>{
        setPos(e.target.value.toLowerCase())
    }
    const searchLoc = (e)=>{
        setLoc(e.target.value.toLowerCase())
    }
    const locationshandler =()=>{
        setlocationsAcc(!locationsAcc)
    }
    const positionshandler = ()=>{
        console.log('positionsAcc : ',positionsAcc)
        setpositionsAcc(!positionsAcc)
    }
    const chooseLocation = (city) =>{
            console.log('city : ',city.toLowerCase())
            setlocationsAcc(false)
            setLoc(city.toLowerCase())
            
    }
    const choosePosition = (position) =>{
            console.log('position : ',position.toLowerCase())
            setpositionsAcc(false) 
            setPos(position.toLowerCase())
    }

    return (
        <div style={{marginBottom : '96px' , minHeight : '100vh'}}>
            <FormGroup>
                
                <InputComp>
                <input style={{width :  352 , maxWidth : '100%'}} type="text" placeholder='OPEN POSITIONS' value={pos} onChange={searchPos} name='position' id='position'/>
                <svg onClick={positionshandler} style={{transform : 'translateX(-20px) translateY(-50%)'}} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.52254 11.1941L5.06573 14.6554C4.8536 14.8678 4.50968 14.8678 4.29755 14.6554L0.840735 11.1941C0.628609 10.9817 0.628609 10.6374 0.840736 10.425C1.05286 10.2126 1.39679 10.2126 1.60892 10.425L4.13845 12.9578L4.13845 1.35858C4.13845 1.0582 4.38165 0.814697 4.68164 0.814697C4.98163 0.814697 5.22483 1.0582 5.22483 1.35858L5.22483 12.9578L7.75436 10.425C7.96649 10.2126 8.31042 10.2126 8.52254 10.425C8.73467 10.6374 8.73467 10.9817 8.52254 11.1941Z" fill="#EB7700"/>
                </svg>
                
                    {positionsAcc &&(
                        <PositionsAccordion variants={{
                            visible : {
                                x : 0,
                                opacity: 1 
                            },
                            hidden : {
                                x: 100,
                                opacity: 0
                            }}}
                            animate='visible'
                            initial='hidden'
                            exit='hidden'
                            >
                            {positions.map((position,index)=>(                    
                            <AccPos
                            whileHover={{scale : 1.1}} 
                            variants={secondVariants}
                            custom={index}
                            onClick={()=>choosePosition(position.position)}
                            key={index}>{position.position}</AccPos>
                            ))}
                        </PositionsAccordion>
                    )}
                </InputComp>
                <InputComp>
                <input type="text" placeholder='CHOOSE PLACE' value={loc} onChange={searchLoc} name='location' id='location'/>                    
                <svg onClick={locationshandler} width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.52254 11.1941L5.06573 14.6554C4.8536 14.8678 4.50968 14.8678 4.29755 14.6554L0.840735 11.1941C0.628609 10.9817 0.628609 10.6374 0.840736 10.425C1.05286 10.2126 1.39679 10.2126 1.60892 10.425L4.13845 12.9578L4.13845 1.35858C4.13845 1.0582 4.38165 0.814697 4.68164 0.814697C4.98163 0.814697 5.22483 1.0582 5.22483 1.35858L5.22483 12.9578L7.75436 10.425C7.96649 10.2126 8.31042 10.2126 8.52254 10.425C8.73467 10.6374 8.73467 10.9817 8.52254 11.1941Z" fill="#EB7700"/>
                </svg>
                
                <AnimatePresence>
                {locationsAcc &&(
                    <PositionsAccordion variants={{
                        visible : {
                            x : 0,
                            opacity: 1 
                        },
                        hidden : {
                            x: 100,
                            opacity: 0
                        }}}
                        animate='visible'
                        initial='hidden'
                        exit='hidden'
                        >
                        {positions.map((position,index)=>(                    
                        <AccPos
                        whileHover={{scale : 1.1}} 
                        variants={secondVariants}
                        custom={index}
                        onClick={()=>chooseLocation(position.city)}
                        key={index}>{position.city}</AccPos>
                        ))}
                    </PositionsAccordion>
                )}
                </AnimatePresence>
                </InputComp>
            </FormGroup>
            <Space size={60}/>
            <Positions>
                {positions.filter(
                    name => name.position.toLowerCase().includes(pos) && name.city.toLowerCase().includes(loc)
                ).map((position,index)=>(                    
                        <Position key={index} position={position} />
                ))}
            </Positions>
        </div>
    );
}

export default WorkFilter;

const FormGroup = styled.div`
    display : flex;
    align-items : center;
    justify-content : flex-start;
    margin-bottom : 16px;
`;
const Positions = styled.div`
    border-top : solid 2px #CCE6D9;
`;
const InputComp = styled.div`
    position: relative;
    
    margin-right: 40px;
        svg{
            position: absolute;
            right:  17px;
            transform:  translateY(-50%);
            top: 50%;
            width: 9px;
            height: 15px;
            z-index: 1;
            cursor: pointer;
        }
        input{
        width : 100%;
        padding-left : 32px;    
        border: 1px solid #008440;
        color:  #008440;
        text-transform : uppercase;
        box-sizing: border-box;
        border-radius: 32px;
        margin-right : 16px;
        line-height : 40px;;
        outline : none;
    }
    
`;
const PositionsAccordion = styled(motion.div)`
 z-index: 3;
 box-shadow: 0px 6px 9px -3px rgba(0, 0, 0, 0.12);
 position: absolute;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    background:white ;
`;
const AccPos = styled(motion.div)`
transform-origin: 0%;
cursor: pointer;
margin-top: 15px;
  border-bottom: 1px solid #CCE6D9;
    line-height:  40px;
    padding-left: 40px;
    background: white;
    &:hover{
        color :#008440;
        font-weight: 900;
    }
`;
const secondVariants = {
    visible : (index) =>({
        opacity : 1,
        x : 0,
        transition: {
            delay : index * 0.01
        }
    }),
    hidden : {
        opacity:   0,
        x : -1000,
    }
}