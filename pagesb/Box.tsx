import {useState,useEffect} from 'react';
import styled from 'styled-components';
import {motion,useMotionValue} from 'framer-motion'
const Box = () => {

    const x = useMotionValue(null)
    const dragFoo = (event,info) =>{
        console.log('info :' ,info.offset.x)


        // console.log('info :' ,info.point)
    }
    useEffect(() => {
        console.log(x)
    }, [x]);
    return (
        <Cont>
            <BoxCont>
                <BoxComp 
                drag='x' 
                style={{x}} 
                dragConstraints={{left :0,right: 0}}
                onDragEnd={(event,info)=>dragFoo(event,info)}
                >   

                </BoxComp>
            </BoxCont>
            <h1>test</h1>
        </Cont>
    );
}

export default Box;
const Cont = styled.div`
  height: 100vh;
  background: #6600FF;
  display:  flex;
  justify-content: center;
  align-items: center;
  flex-direction:  column;
  color:  #fff;
  h1{
      margin-top: 20px;
      text-transform: uppercase;
  }
`;
const BoxComp = styled(motion.div)`
  width:  200px;
  height:  200px;
  border-radius:  15px;
  background:  #fff;
`;
const BoxCont = styled(motion.div)`
  width:  300px;
  height:  300px;
  border-radius:  15px;
  border:solid 6px  #fff;
  display:  flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;