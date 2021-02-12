import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import {Header1, Paragraph} from '../styledComponents/styledComponents'
const aboutImg  = '/assets/about.png'
const RB = '/assets/services/ico/general.svg'
const RT = '/assets/services/ico/engineering.svg'
const LT = '/assets/services/ico/epc.svg'
const LB = '/assets/services/ico/operation.svg'
import Layout from '../Layout/Layout'
import Box from "../Components/ServiceBox/Box";
import Button from '../Layout/Button'
import Image from 'next/image'

const Services = () => {
    
    
    
    useEffect(() => {
        window.scrollTo(0, 0);
    },[] );
    return (
        <Layout>
            <PageHeader style={{background : `url(${aboutImg})`}}>
            <div className="cont">
                <Header1 style={{textAlign : 'center' , marginBottom : '24px'}}>CERTYFICATE</Header1>
                <Paragraph style={{textAlign : 'center'}}>NTEC provides energy solutions to international investors with its power-plant installation projects, design, construction and production phases. We can be your General Contractor, we can make project development or operations & maintenance. We can even do whole EPC – this is your call!</Paragraph>
            </div>
            </PageHeader>
        <CertificatesPage className='container' style={{paddingTop : '156px',paddingBottom : '0px'}}>
            <div className="box1" id='1'>
                <Image
                src='/assets/cert1.png'
                width={186}
                height={277}
                />
                <Text>
                    <h1 style={{textAlign : 'left'}}>Lorem, ipsum.</h1>
                    <div style={{height : '8px'}}></div>
                    <p>INTEC Energy Solutions provides high-powered consultancy services to its customers with a primary focus on the quality value, performing exhaustive data gathering necessary for everything from site selection to operations phases for wind and solar power plant projects. Our consultants complete every project efficiently, effectively, and error-free, maintaining a professional manner grounded on the latest research. <br/><br/>

We empower our sustainability concepts with cutting-edge tools and software, utilized by our experience and innovative insight.</p>
                </Text>
            </div>
            <div className="box2" id="2">
                
                <Text>
                    <h1 style={{textAlign : 'left'}}>Lorem, ipsum.</h1>
                    <div style={{height : '8px'}}></div>
                    <p>INTEC Energy Solutions provides high-powered consultancy services to its customers with a primary focus on the quality value, performing exhaustive data gathering necessary for everything from site selection to operations phases for wind and solar power plant projects. Our consultants complete every project efficiently, effectively, and error-free, maintaining a professional manner grounded on the latest research. <br/><br/>

We empower our sustainability concepts with cutting-edge tools and software, utilized by our experience and innovative insight.</p>
                </Text>
                <Image
                src='/assets/cert2.png'
                width={186}
                height={277}
                />
            </div>
        </CertificatesPage>
        
        </Layout>
    );
}

export default Services;
const PageHeader = styled.div`
    background : #008440; 
    margin-top : 135px;
    padding-top : 82px;
    padding-bottom : 82px;
    color : white;
    text-align : center;
    .cont{
        margin-left : auto;
        margin-right : auto;
        position : relative;
        max-width : 666px;
        width : 100%;
    }        
`
 
const CertificatesPage = styled.div`
margin-bottom:  100px;
  .box1{
        display :grid;
        grid-template-columns :  1fr;
        @media (min-width : 768px){
        grid-template-columns : 186px 1fr;

        }
        gap : 93px;       
      img{
          width:  186px;
          height : 277px;
      }
  }
  .box2{
        margin-top:  100px;
        display :grid;
        grid-template-columns : 1fr  ;
        @media (min-width : 768px){
        grid-template-columns :  1fr 186px;

        }
        gap : 93px;       
      img{
          width:  186px;
          height : 277px;
      }
  }
  
`;

const Text = styled.div`
  h1{
    //styleName: H3;
font-family: Lato;
font-size: 32px;
font-style: normal;
font-weight: 900;
line-height: 48px;
letter-spacing: 0px;
text-align: left;
text-transform : uppercase;
}
p{
    //styleName: body;
font-family: Lato;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 24px;
letter-spacing: 0px;
text-align: left;

}
`;