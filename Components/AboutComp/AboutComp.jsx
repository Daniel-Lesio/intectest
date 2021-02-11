import React from 'react';
import styled from 'styled-components'
import { useWindowWidth} from '@react-hook/window-size'

import Link from 'next/link'
// import aboutImg  from '../../assets/fot_about_us_home.jpg'
import Image from 'next/image'
const AboutComp = () => {
const onlyWidth  = useWindowWidth()
  return (
        <section id="about">
          <Image
          style={{
            zIndex : -1
          }}
          src='/assets/about.png'
          layout='fill'
          />
      <svg className="about-icon" width="164" height="157" viewBox="0 0 164 157" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.7706 102.012L59.188 84.8595H38.5755L45.0169 65.3176L28.2692 53.1999L44.931 41.2529L38.4896 21.711H59.1021L65.4577 2.25439L82.2053 14.2868L98.8672 2.25439L105.223 21.711H125.835L119.394 41.2529L135.97 53.1999L119.394 65.1469L125.835 84.6889H105.223L98.8672 104.145M42.8697 96.7212L27.1527 113.874L37.1154 122.919V154.579H84.0948V116.348L74.1321 107.218M74.1321 107.218L58.415 124.37M74.1321 107.218L89.9351 90.1504M2.33173 154.494H37.1154M27.1527 113.788L11.4356 130.941M136.914 96.7212L121.197 113.874L131.16 122.919V154.579H162.079M84.0948 154.494H131.16M121.197 113.788L105.394 130.941M82.2053 30.7566C88.475 30.7566 93.7999 32.9753 98.266 37.3274C102.732 41.7649 104.879 47.0557 104.879 53.2853C104.879 59.5148 102.646 64.8056 98.266 69.2431C93.7999 73.6805 88.475 75.8139 82.2053 75.8139C75.9357 75.8139 70.6108 73.5952 66.1447 69.2431C61.6787 64.8056 59.4457 59.5148 59.4457 53.2853C59.4457 47.0557 61.6787 41.7649 66.1447 37.3274C70.6108 32.9753 75.9357 30.7566 82.2053 30.7566Z" stroke="white" strokeWidth="4" strokeMiterlimit="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
        
      <div className="container about">
          <div className="about-left">

          <Image src='/assets/fot_about_us_home.jpg'  width={758} height={640} alt=""/>
        </div>
        <div className="about-right" style={{alignSelf : 'center',zIndex:2}}>
          <h1>ABOUT US</h1>
          <p style={{fontSize : 16 , width : '100%'}} >Since 2016, Intec Energy Solutions has been a leading provider of services related to the construction of farms from renewable energy sources. We design high-quality solar farms for international investors. Our employees have many years of experience in German companies that are pioneers in the photovoltaic market in Europe. That is why we follow the engineering principles developed by the largest companies in the industry in all our projects. As a result, our farms are modern and environmentally friendly with an energy-saving approach.</p>
          <Link className="btn-about" href='/About'>
           <a className='btn-about'>
           <p>MORE</p> 
            <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.009 0.477212L14.4703 3.93403C14.6827 4.14615 14.6827 4.49008 14.4703 4.70221L11.009 8.15902C10.7966 8.37115 10.4523 8.37115 10.2399 8.15902C10.0275 7.94689 10.0275 7.60297 10.2399 7.39084L12.7726 4.8613L1.17346 4.8613C0.873082 4.8613 0.629578 4.61811 0.629578 4.31811C0.629578 4.01812 0.873083 3.77493 1.17346 3.77493L12.7726 3.77493L10.2399 1.24539C10.0275 1.03327 10.0275 0.689339 10.2399 0.477212C10.4523 0.265084 10.7966 0.265084 11.009 0.477212Z" fill="#EB7700"/>
            </svg>
           </a>
              
          </Link>
        </div>
      </div>
    </section>
    );
}

export default AboutComp;

