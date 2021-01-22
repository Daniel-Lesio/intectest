import React,{useState} from 'react';
import  Link  from "next/link";
import styled from 'styled-components';
import {motion} from 'framer-motion';
import Image from 'next/image'
import Arrow from './Arrow'
import Button from '../../Layout/Button'
import { Header1 } from '../../styledComponents/styledComponents'
import { useInView } from 'react-intersection-observer'
const ServicesComp = () => {
  const { ref, inView} = useInView();
  const [hovered , setHovered] = useState(null)
    return (
        <section id="services" style={{position : 'relative'}}>
      <svg className="thunder" width="134" height="142" viewBox="0 0 134 142" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.98008 16.5307H25.3802H26.2179V41.0253M11.9766 108.946C6.95021 100.56 3.82777 91.2599 2.60926 81.13C2.22847 77.8087 2 74.4874 2 71C2 54.0614 6.79789 39.1986 16.3175 26.4946M67.7235 43.8484L54.2437 71.083H79.6801L66.2765 98.1516M122.023 33.0542C127.05 41.4404 130.172 50.7401 131.391 60.87C131.772 64.1083 132 67.5126 132 70.917C132 87.8556 127.202 102.718 117.682 115.422C116.388 117.083 115.093 118.744 113.646 120.321C113.418 120.57 113.189 120.819 112.961 121.069C111.59 122.646 110.143 124.058 108.62 125.469M108.62 125.469H130.02M108.62 125.469H107.782V100.975M88.9713 2C83.9449 21.0144 78.9186 40.0289 73.8922 59.0433H107.554C87.7528 86.0289 67.952 113.014 48.2273 140H45.0287C50.0551 120.986 55.0814 101.971 60.1078 82.9567H26.3702C46.1711 55.9711 65.9719 28.9856 85.7727 2H88.9713ZM113.342 21.3466C114.56 22.6751 115.702 24.0036 116.769 25.4152L113.342 21.3466ZM20.6585 120.736C19.44 119.408 18.2976 118.079 17.2314 116.668L20.6585 120.736Z" stroke="#008440" strokeOpacity="0.2" strokeWidth="4" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div className="container services">
        <ServiceLeft ref={ref}>
          <Circle0>
            <Image
            src='/assets/_logo/logo_INTEC_color.svg'
            width='194px'
            height='55px'
            />
              
              
              <motion.svg style={{position : 'absolute',scale : hovered === 1 ? 0.9 : 0.8,transition : 'all ease 0.3s' }} alt="" animate={{y : 105 , x : -165 , scale : 1}} initial={{y:0,x:0,scale : 0}} width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.8684 2.16415C30.4358 3.28115 26.3289 5.32831 22.5753 8.27817C21.3782 9.22404 20.1764 10.2751 19.05 11.4015C13.4455 17.0061 10.1102 23.5063 9.04655 30.8495C8.9241 31.826 8.80164 32.8025 8.7569 33.8017C8.74983 33.9595 8.74278 34.1173 8.73571 34.2751C8.66585 35.2492 8.67604 36.1935 8.71136 37.1629M8.71136 37.1629L1.65308 30.1046M8.71136 37.1629L8.98767 37.4392L17.0923 29.3346M41.6057 1.1539C40.7642 1.19158 39.9479 1.25438 39.1292 1.36977L41.6057 1.1539Z" stroke={hovered === 1 ? '#008446' :'#CCE6D9' } strokeWidth="2" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
              {/* left up */}
              <motion.svg 
              animate={{y : -105 , x : -165 , scale : 1 }} initial={{y:0,x:0,scale : 0}}
              style={{position : 'absolute',scale : hovered === 3 ? 0.9 : 0.8, transition : 'all ease 0.3s' }}
              width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34.8684 36.2751C30.4358 35.1581 26.3289 33.1109 22.5753 30.161C21.3782 29.2152 20.1764 28.1641 19.05 27.0377C13.4455 21.4331 10.1102 14.9329 9.04655 7.58967C8.9241 6.61319 8.80164 5.63672 8.7569 4.63747C8.74983 4.47969 8.74278 4.32192 8.73571 4.16414C8.66585 3.19002 8.67604 2.24572 8.71136 1.2763M8.71136 1.2763L1.65308 8.33458M8.71136 1.2763L8.98767 0.999996L17.0923 9.10465M41.6057 37.2853C40.7642 37.2476 39.9479 37.1848 39.1292 37.0694L41.6057 37.2853Z" stroke="#CCE6D9"stroke={hovered === 3 ? '#008446' :'#CCE6D9' } strokeWidth="2" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>

           {/* right up */}
           <motion.svg 
           animate={{y : -125 , x : 125 , scale : 1 }} initial={{y:0,x:0,scale : 0}}
           style={{position : 'absolute',scale : hovered === 4 ? 0.9 : 0.8, transition : 'all ease 0.3s' }}
           width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path  d="M8.39031 35.7576C12.7383 34.6383 16.7726 32.6097 20.4661 29.6989C21.6439 28.7657 22.827 27.7293 23.9367 26.6196C29.4583 21.0981 32.7622 14.7122 33.8459 7.51365C33.9714 6.55651 34.0969 5.59937 34.1464 4.62038C34.1542 4.4658 34.162 4.31122 34.1699 4.15664C34.2439 3.20211 34.2393 2.27725 34.2102 1.32793M34.2102 1.32793L41.0833 8.2011M34.2102 1.32793L33.9411 1.05887L25.9566 9.04343M1.78555 36.7856C2.60997 36.7438 3.40993 36.6777 4.21249 36.56L1.78555 36.7856Z"
               stroke={hovered === 4 ? '#008446' :'#CCE6D9' } strokeWidth="2" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
          </motion.svg>
{/* right down */}
        <motion.svg 
        style={{position : 'absolute',scale : hovered === 2 ? 0.9 : 0.8, transition : 'all ease 0.3s' }}
        animate={{y : 125 , x : 125 , scale : 1 }} initial={{y:0,x:0,scale : 0}}
        width="43" height="39" viewBox="0 0 43 39" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path  d="M8.57091 2.1766C13.0035 3.2936 17.1104 5.34076 20.8641 8.29063C22.0611 9.2365 23.2629 10.2876 24.3893 11.414C29.9939 17.0185 33.3292 23.5187 34.3928 30.862C34.5152 31.8385 34.6377 32.8149 34.6824 33.8142C34.6895 33.972 34.6966 34.1297 34.7036 34.2875C34.7735 35.2616 34.7633 36.2059 34.728 37.1754M34.728 37.1754L41.7862 30.1171M34.728 37.1754L34.4517 37.4517L26.347 29.347M1.83365 1.16635C2.67512 1.20403 3.49147 1.26683 4.31018 1.38222L1.83365 1.16635Z" stroke="#CCE6D9" strokeWidth="2" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round" stroke={hovered === 2 ? '#008446' :'#CCE6D9' }/>
        </motion.svg>
            {/* <motion.img src='/assets/active/arrow_left_up.svg' style={{position : 'absolute'}} alt="" animate={{y : -105 , x : -165 , scale : 1 }} initial={{y:0,x:0,scale : 0}}/>
          <motion.img src='/assets/active/arrow_right_up.svg' style={{position : 'absolute'}} alt="" animate={{y : -125 , x : 125 , scale : 1 }} initial={{y:0,x:0,scale : 0}}/>
          <motion.img src='/assets/active/arrow_right_down.svg' style={{position : 'absolute'}} alt="" animate={{y : 125 , x : 125 , scale : 1 }} initial={{y:0,x:0,scale : 0}}/> */}
          </Circle0>
          {/* Prawe dolne -2 */}
          <Link href='Services#1'>
          <Circle1
          onMouseOver={()=>setHovered(2)}
          onMouseLeave={()=>setHovered(null)} 
          whileHover="visible" 
          initial='hidden'
          whileTap='visible' 
          animate="visible"
          exit='hidden'
          variants={Circle1Variants}
          animate={{
            x : inView ? 200 : 0,
            y: inView ? 200 : 0
          }} 
          >
          
          <motion.img  src='/assets/active/ico/operation.svg' alt=""/>
          <svg    width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path   opacity="0.2" d="M8.39031 35.7576C12.7383 34.6383 16.7726 32.6097 20.4661 29.6989C21.6439 28.7657 22.827 27.7293 23.9367 26.6196C29.4583 21.0981 32.7622 14.7122 33.8459 7.51365C33.9714 6.55651 34.0969 5.59937 34.1464 4.62038C34.1542 4.4658 34.162 4.31122 34.1699 4.15664C34.2439 3.20211 34.2393 2.27725 34.2102 1.32793M34.2102 1.32793L41.0833 8.2011M34.2102 1.32793L33.9411 1.05887L25.9566 9.04343M1.78555 36.7856C2.60997 36.7438 3.40993 36.6777 4.21249 36.56L1.78555 36.7856Z" stroke="#008446" strokeWidth="2" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <CircleInfo
          animate={{
            y :  inView ?  100 : 0
          }}
          >OPERATIONS & MAINTENANCE
                      
          </CircleInfo>
          <svg width="43" height="38" viewBox="0 0 43 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.2" d="M8.39031 35.7576C12.7383 34.6383 16.7726 32.6097 20.4661 29.6989C21.6439 28.7657 22.827 27.7293 23.9367 26.6196C29.4583 21.0981 32.7622 14.7122 33.8459 7.51365C33.9714 6.55651 34.0969 5.59937 34.1464 4.62038C34.1542 4.4658 34.162 4.31122 34.1699 4.15664C34.2439 3.20211 34.2393 2.27725 34.2102 1.32793M34.2102 1.32793L41.0833 8.2011M34.2102 1.32793L33.9411 1.05887L25.9566 9.04343M1.78555 36.7856C2.60997 36.7438 3.40993 36.6777 4.21249 36.56L1.78555 36.7856Z" stroke="#008446" strokeWidth="2" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          </Circle1>
          </Link>
          {/* lewe dolne 1 */}
          <Link href='Services#0'>
          <Circle1
                onMouseOver={()=>setHovered(1)}
                onMouseLeave={()=>setHovered(null)} 
                whileHover="visible" 
                initial='hidden'
                whileTap='visible' 
                animate="visible"
                exit='hidden'
                variants={Circle1Variants}
                    
                    animate={{
                      x :  inView ?  -200 : 0,
                      y: inView ?  200 : 0,
                      
                    }}
                    
                    >
                      {/* Left Down */}
                      <img src='/assets/active/ico/epm.svg' alt=""/>
                      <CircleInfo
                      animate={{
                        y : inView ? 100 : 0,
                      }}
                      >Engineering & Project Management</CircleInfo>
                    </Circle1>
                    </Link>
                    {/* lewe gorne 3 */}
                    <Link href='Services#2'>
                    <Circle1
                    onMouseOver={()=>setHovered(3)}
                    onMouseLeave={()=>setHovered(null)} 
                    whileHover="visible" 
                    initial='hidden'
                    whileTap='visible' 
                    animate="visible"
                    exit='hidden'
                    variants={Circle1Variants}
                    animate={{
                      x : inView ?  -200 : 0,
                      y: inView ? -200 : 0,
                      transition : {
                        duration : 1.2
                      }
                    }}
                    >
                      <img src='/assets/active/ico/epc.svg' alt=""/>
                      <CircleInfo
                      animate={{
                        y :  inView ? -100 : 0,
                      }}
                      >EPC 
                      <p style={{fontWeight : 400 , fontSize : 12,lineHeight : '16px'}}>Engineering,
                      Procurement
                      & Construction</p></CircleInfo>
                    </Circle1>
                    </Link>
                    {/* prawe gorne 4 */}
                    <Link href='3'>
                    <Circle1
                    
                    onMouseOver={()=>setHovered(4)}
                onMouseLeave={()=>setHovered(null)} 
                whileHover="visible" 
                initial='hidden'
                whileTap='visible' 
                animate="visible"
                exit='hidden'
                variants={Circle1Variants}
                    animate={{
                      x : inView ? 200 : 0,
                      y: inView ? -200 : 0,
                    }}
                    >
          
                      <img src='/assets/active/ico/general.svg' alt=""/>
                      <CircleInfo
                      animate={{
                        y : inView ? -100 : 0,
                      }}
                      >Greneral contractor</CircleInfo>
                    </Circle1>
                    </Link>
                    
       </ServiceLeft>
        <div className="service-right">
          <Header1>SERVICES</Header1>
          <div style={{height : 24}}></div>
            

          <p style={{fontSize : '16px' ,lineHeight : '24px',fontWeight :400}}>INTEC provides energy solutions to international investors with its power-plant installation projects, design, construction and production phases. 
            We can be your General Contractor, we can make project development or operations & maintenance. We can even do whole EPC – this is your call!</p>
            <div style={{height : 24}}></div>
            
              <Button value='MORE' to='/Services' arrow />               
          </div>
      </div>  
    </section>
    );
}

export default ServicesComp;


const ServiceLeft = styled.div`
  display : flex;
  min-height : 800px;
  justify-content : center;
  align-items : center;
  position : relative;
    
`
const Circle0 = styled.div`
  position : absolute;
  width : 279px;
  height : 279px;
  border-radius : 50%;
  box-shadow: -13.1811px 0px 101.055px 83.4803px rgba(164, 191, 177, 0.14);
  display : flex;
  justify-content :center;
  align-items : center;

`
const Circle1 = styled(motion.div)`
&:hover{
  color : #008440;
}
text-transform:  uppercase;
  font-weight : 900!important;
  display : flex;
  justify-content :center;
  align-items : center;
  position : absolute;
  width : 128px;
  height : 128px;
  border-radius : 50%;
  /* box-shadow: -13px 0px 101px 83px rgba(164, 191, 177, 0.14); */
`
const CircleInfo = styled(motion.div)`
    position : absolute;
    transition :all ease-in-out .3s;
    text-align : center;
    font-size: 16px;
    line-height:  20px;
    font-weight: 900;
    letter-spacing: 0px;
    text-align: center;
`

const Circle1Variants = {
  visible : {
    scale : 1.2,
    rotate : [0,10,-10,0]
  },
  hidden : {
    
    x : 0,
    scale : 1
  }
}
