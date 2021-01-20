import styled from 'styled-components';
import { motion } from 'framer-motion'
import {useInView} from 'react-intersection-observer'

const Icon = ({url}) => {
    const {ref , inView} = useInView()

    return (
        <Element>
        <Img 
        animate={{x : inView ? 94 : 0 , y : inView ? 70  : 0}}
        initial={{ x: 0 , y : 0 }}
        src="/assets/countries/arabia.png" alt="Arabia"/>
        <img src="/assets/countries/czech.png" alt="Czech"/>
        </Element>
    );
}

export default Icon;
const Img = styled(motion.img)`
  &:hover{
    transform: scale(1.2);
  }
`;
const Element = styled.div`
  
`;