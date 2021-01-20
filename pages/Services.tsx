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
import { activeLink } from '../atoms/atoms'
import { useSetRecoilState } from 'recoil'


const Services = () => {
    const setActiveLink =useSetRecoilState(activeLink)

    const [ boxes ] = useState(
        [
        {
            id : 0,
            title : 'PROJECT DEVELOPMENT',
            body : 'INTEC Energy Solutions provides high-powered consultancy services to its customers with a primary focus on the quality value, performing exhaustive data gathering necessary for everything from site selection to operations phases for wind and solar power plant projects. Our consultants complete every project efficiently, effectively, and error-free, maintaining a professional manner grounded on the latest research. We empower our sustainability concepts with cutting-edge tools and software, utilized by our experience and innovative insight.',
            icon : RT 
        },
        {
            id : 1,
            title : 'Operations & Maintenance',
            body : 'INTEC provides periodic controlling and maintenance service to its customers solar energy systems. We also provide immediate failure response and solar panel maintenance and cleaning of solar panels. Performance measurements and output follow-up are also among our core responsibilities. We support maintaining a higher quality of life for all our customers through enhanced energy efficiency via solar and wind power systems, while keeping environmental sustainability in mind. INTEC employs only practical and proven techniques with professional service.',
            icon : LB 
        },
        {
            id : 2,
            title : 'EPC',
            body : 'All phases—from site selection to realization and commissioning of the project—are performed with exhaustive care. Services such as initiation and follow-up on all official permitting required for project realization and installation tests are carried out successfully.',
            icon : LT 
        },
        {
            id : 3,
            title : 'General Constructor',
            body : 'INTEC is a company which develops high-quality turn-key solar power plant solutions for international ultimate investors, and which steers the future with its service concept shaped around the German engineering and assurance, developed with a focus on environment-friendly approaches and energy efficiency.',
            icon : RB 
        },

    ])
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveLink("Services")
    },[] );
    return (
        <Layout>
            <PageHeader style={{background : `url(${aboutImg})`}}>
            <div className="cont">
                <Header1 style={{textAlign : 'center' , marginBottom : '24px'}}>SERVICES</Header1>
                <Paragraph style={{textAlign : 'center'}}>NTEC provides energy solutions to international investors with its power-plant installation projects, design, construction and production phases. We can be your General Contractor, we can make project development or operations & maintenance. We can even do whole EPC – this is your call!</Paragraph>
            </div>
            </PageHeader>
        <div className='container' style={{paddingTop : '156px',paddingBottom : '156px'}}>
            {
                boxes.map((box,index)=>(
                    <Box key={index} order={index} box={box}   />
                ))   
            }
        </div>
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
