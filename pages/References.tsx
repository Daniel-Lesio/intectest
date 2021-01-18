import { GetStaticProps } from 'next'
import fs from 'fs/promises'
import path from 'path'

import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
// import aboutImg  from '../assets/about.png'
import { Header1, Paragraph,Space } from '../styledComponents/styledComponents';
import Reference from '../Components/Reference/Reference'
// import {referencesList}  from '../data'
import Button from '../Layout/Button'
import Image from 'next/image'
import Layout from '../Layout/Layout';
import { activeLink } from '../atoms/atoms'
import { useSetRecoilState } from 'recoil'

const References = ({references}) => {
    const setActiveLink =useSetRecoilState(activeLink)
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveLink("References")    
    },[] );
    return (
        <Layout>
            <PageHeader>
                <Image
                
                src='/assets/about.png'
                layout='fill'
                />
                <div className="cont">
                    <Space size={56} />
                    <Header1 style={{textAlign : 'center',textTransform:'uppercase'}}>References</Header1>
                    <Space size={24} />
                    <Paragraph style={{textAlign:'center'}}>
                    INTEC Energy Solutions provides comprehensive, turn-key renewable energy services at best-in-class standards for investors and developers. Our commitment to “Do It Right the First Time” is upheld by our solution approach that incorporates exhaustive preliminary analysis, precautions, and on-site service. This philosophy increases our positive impact and empowers our achievements and customer satisfaction. Guided by enhanced energy efficiency, we help customers benefit from solar and wind power systems in all aspects of life while keeping environmental sustainability and renewable resources a top priority.
                    </Paragraph>
                    <Space size={24}></Space>
                    <Paragraph style={{fontWeight:900,textAlign:'center'}}>
                    Please see our selected Projects:
                    </Paragraph>
                </div>
            </PageHeader>
            <div className="container" style={{position:'relative', marginTop : '-200px' , zIndex:90}}>
                {
                    references && references.map(refer=>(
                    <Reference key={refer.id} obj={refer} />
                        
                    ))
                }
            </div>
            <Space size={32}/>
                <div style={{display:'flex',justifyContent:'center',alignItems: 'center',paddingBottom : '96px' ,paddingTop : '32px'}}>
                <Button value="MORE" color="green" arrow/>
                </div>
        </Layout>
    );
}

export default References;
const PageHeader = styled.div`
    position : relative;
    background : #008440; 
    margin-top : 135px;
    padding-top : 24px;
    padding-bottom : 264px;
    color : white;
    .cont{
        text-align : center!important;
        margin-left : auto;
        margin-right : auto;
        position : relative;
        max-width : 780px;
        width : 100%;
    }
    img{
        z-index : 0;
    }        
`

export const getStaticProps : GetStaticProps = async () => {
    
    const referencesData = await fs.readFile( path.join(process.cwd(),'/data/references.json'),'utf-8')
    let references = await JSON.parse(referencesData)
    return {
      props: {
        references
      },
    }
  }