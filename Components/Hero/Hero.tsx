
import Image from 'next/image'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
const Hero = ({heroData}) => {
const {ref,inView} = useInView({
  threshold : 0
})
  return (
        <HeroComp>
          <Image
          src={'/assets/_banner@2x.jpg'}
          layout='fill'
          />
        <div ref={ref} className="container">
          {inView &&(
            <HeroText
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            >
            <motion.h1 variants={childrenVariables}>{heroData.line1} </motion.h1>
            <Space/>
  
            <motion.h1 variants={childrenVariables}>{heroData.line2}</motion.h1>
            </HeroText>
          )}
        </div>
      </HeroComp>
    );
}

export
 default Hero;
const HeroComp = styled.section`
  position :relative;
  margin-top: 10px;
  height: calc(100vh - 10px);
  width: 100%;
    
  
  .container{
    z-index :1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    color: white;
    height : 100%;
    width : 1000px;
    
    h1{
      text-align: left;
        line-height: 48px;
        font-size: 40px;
        font-weight: 900;
        line-height: 48px;
        letter-spacing: 0px;
        text-align: left;

    }
  }
`;

const HeroText = styled(motion.div)`
  display : flex;
  flex-direction : column;
`;

const Space = styled.div`
height : 8px;
`


const containerVariants = {
  hidden : {
    opacity : 0,
    y: 158
  },
  visible:{
    opacity : 1,
    y : -158,
    transition : {
      duration : .5,
      staggerChildren: 0.5,
      when : 'beforeChildren'
    },
  }
}
const childrenVariables = {
  hidden : {
    opacity : 0,
    y : 1000
  },
  visible:{
    y : 0,
    opacity : 1,
    transition : {
      duration : 2
    }    
  }
}