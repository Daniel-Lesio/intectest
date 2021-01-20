import React , {useState} from 'react';
import styled from 'styled-components';
import {useInView} from 'react-intersection-observer'
import { motion , AnimatePresence } from 'framer-motion'
import Image from 'next/image'
interface mapaProps {
  bg : boolean
}
const Mapa : React.FunctionComponent<mapaProps> = ({bg}) => {
  const {ref , inView} = useInView()
  const [ active , setActive ] = useState(null) 
  return (
    <MapaSection ref={ref}>
      {bg && (
        <Image
        src='/assets/mapabg/fot_map@2x.jpg'
        layout='fill'/>
      )}
      <Image
      className='mapasvg'
      src='/assets/mapabg/mapa.svg'
      layout='fill'/>
      <AnimatePresence>
      {active === 'poland' && (
        <Info
        animate={{x : 150  , y : -106 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Aleja 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}      
    </AnimatePresence>
    <AnimatePresence>
    {active === 'germany' && (
        <Info
        animate={{x : 150  , y : -106 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Germany 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {active === 'arabia' && (
        <Info
        animate={{x : 150  , y : -106 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Arabia 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {active === 'czech' && (
        <Info
        animate={{x : 150  , y : -86 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Czech 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {active === 'france' && (
        <Info
        animate={{x : 150  , y : -76 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        France 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {active === 'nederland' && (
        <Info
        animate={{x : 150  , y : -76 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Holland 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {active === 'turkey' && (
        <Info
        animate={{x : 150  , y : -56 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Turkey 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
    <AnimatePresence>
    {active === 'jordan' && (
        <Info
        animate={{x : 150  , y : -56 , opacity : 1 }}
        initial={{ x: 0 , y : 10, opacity : 0 }}
        exit={{ x: 0 , y : 10, opacity : 0 }}
        >
        Jordan 29 Listopada 20 <br/>
        31-401 Kraków <br/>
        +48 533 315 569 <br/>
        <a  href="mailto:info@in-tecenergy.com">info@in-tecenergy.com</a>
        </Info>
      )}
    </AnimatePresence>
        
        
        <Img
        onClick={()=> setActive('poland') } 
        animate={{x : inView ? 10 : 0 , y : inView ? -36  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/poland.png" alt="Polska"/>
        <Img 
        onClick={()=> setActive('arabia') }
        animate={{x : inView ? 94 : 0 , y : inView ? 70  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/arabia.png" alt="Arabia"/>
        <Img 
        onClick={()=> setActive('czech') }
        src="/assets/countries/czech.png" alt="Czech"
        animate={{x : inView ? 0 : 0 , y : inView ? 0  : 0}}
        initial={{ x: 0 , y : 0 }}
        />
        
        <Img 
        onClick={()=> setActive('jordan') }
        animate={{x : inView ? 68 : 0 , y : inView ? 44  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/jordan.png" alt="Jordan"/>
        <Img
        onClick={()=> setActive('nederland') }
        animate={{x : inView ? -54 : 0 , y : inView ? -54  : 0}}
        initial={{ x: 0 , y : 0 }} 
        src="/assets/countries/nederland.png" 
        alt="Netherland"/>
        <Img 
        onClick={()=> setActive('germany') }
        animate={{x : inView ? -32 : 0 , y : inView ? -27  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/germany.png" alt="germany"/>
        <Img 
        
        onClick={()=> setActive('france') }
        animate={{x : inView ? -74 : 0 , y : inView ? -23  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/france.png" alt="France"/>
        <Img 
        onClick={()=> setActive('turkey') }
        animate={{x : inView ? 34 : 0 , y : inView ? 30  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/turkey.png" 
        alt="Turkey"/>
    </MapaSection>
  );
}

export default Mapa;
const MapaSection = styled.div`
  min-height:  840px;
  display: flex;
  justify-content: center;
  align-items: center;
   position: relative;
   
   margin-left: auto;
   margin-right: auto;
   
   .mapasvg{
     transform: scale(0.9) translateY(100px);
     width: 20%;
     
   }
`;

const Img = styled(motion.img)`
    height: 32px;
    width: 32px;
    position: absolute;
    cursor: pointer;

&:hover{
    transform: scale(1.2);
  }
`;

const Info = styled(motion.div)`
  border-radius: 16px 16px 16px 0px;
  padding: 16px 24px;
  position: absolute;
  background: #fff;
  a{
    color:#EB7700 ;
  }
`;