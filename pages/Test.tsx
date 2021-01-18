// import {useDetect} from '../hooks/myhooks'
import {useRef, useState,useEffect} from 'react'
import styled from 'styled-components';
import {motion , AnimatePresence} from 'framer-motion'
import fs from 'fs/promises'
import path from 'path'
import { InferGetStaticPropsType } from 'next'

const Test = ({ list } : InferGetStaticPropsType<typeof getStaticProps>,{second}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [circle , setCircle] = useState(false)
    const [square , setsquare] = useState(false)
    const [show , setshow] = useState(false)
    useEffect(() => {
    }, []);
    const handler = () =>{
        setCircle(!circle)
        setsquare(!square)
        
    }
    const clickhandler = () =>{
        setshow(!show)
    }
    return (
        <Cont>
            <Butt onClick={clickhandler}/>
            
             <AnimatePresence>

            {   
                show && (
                    <ListComp
                    variants={parentVariants}
                    animate='visible'
                    initial='hidden'
                    exit='hidden'
                    >
                        {list && list.slice(0,5).map((l,i)=>(
                            <motion.div variants={childrenVariants} custom={i} key={i}>x</motion.div>
                        ))}
                    </ListComp>
                )
            }                        
            </AnimatePresence>
        </Cont>
    );
}

export default Test;

const parentVariants = {
    hidden : {
        opacity : 0,
        
        transition : {
            when : 'afterChildren',
        }
    },
    visible : {
        opacity : 1,
        
        transition :{
            type : 'spring' , 
            
            when : 'beforeChildren',
        }
    },
    
}
const childrenVariants = {
    hidden : (i) => ({
        opacity : 0,
        x: '1000px',
        transition : {
            delay : 0.1 * i
        }
    }),
    visible : (i) => ({
        opacity : 1,
        x: '0px',
        transition :{type : 'spring' , delay : 0.1 * i}
    }),
}


const Cont = styled.div`
min-height : 100vh;
background : #4848c9;
display : flex;
justify-content : center;
align-items : center;
flex-direction : column;
`;
const ListComp = styled(motion.div)`
  display : flex;
  margin-bottom : 100px;
  margin-top : 100px;
  
  width : 90%;
  flex-wrap : wrap;
  & > *{
    flex : 1 0 300px;
    background : white;
    padding : 10px;
    display : flex;
    justify-content : center;
    align-items : center;
    height : 100px;
    line-height : 100px;
    border : #2c2c2c solid 2px;
  }
`;
const Butt = styled.div`
  
  position : fixed;
  right : 10px;
  top: 10px;
  width :100px;
  height : 100px;
  border : solid 2px black;
  background : white;
  border-radius : 50%;
  cursor : pointer;

`;

interface ListElem  {
    id : Number,
    url: string,
    title: string,
    excerpt : string,
    date : string
}

export const getStaticProps = async () => {
    const linksJson = await fs.readFile( path.join(process.cwd(),'/data/posts.json'),'utf-8')
    let list : ListElem[] = await JSON.parse(linksJson)
    console.log('list :' ,list)   
  return {
    props: {
      list,
    },
  }
}