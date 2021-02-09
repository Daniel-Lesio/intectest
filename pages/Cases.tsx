import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Header1, Paragraph } from '../styledComponents/styledComponents';
const Case1 = '/assets/cases/Case_Study_1.jpg';
const Case2 = '/assets/cases/Case_Study_2.jpg';
const Case3 = '/assets/cases/Case_Study_3.jpg';
const Case4 = '/assets/cases/Case_Study_4.jpg';
import CaseBox from "../Components/CaseBox/CaseBox";
import Layout from '../Layout/Layout';
import Image from 'next/image'

const Cases = () => {

    const [cases] = useState(
        [
        {
            id:0,
            name : 'Çeltikçi',
            imgUrl : Case1,
            employer : 'Bereket Enerji',
            capacity : '2.5 MW',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
        {
            id:1,
            name : 'Çeltikçi',
            imgUrl : Case2,
            employer : 'Bereket Enerji',
            capacity : '2.5 MW',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
        {
            id:2,
            name : 'Çeltikçi',
            imgUrl : Case3,
            employer : 'Bereket Enerji',
            capacity : '2.5 MW',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
        {
            id:3,
            name : 'Çeltikçi',
            imgUrl : Case4,
            employer : 'Bereket Enerji',
            capacity : '2.5 MW',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
    ])
    useEffect(() => {
        window.scrollTo(0, 0);
    },[] );

    return (
        <Layout>
            <PageHeader>
                <Image
                src='/assets/news.svg'
                layout='fill'
                />
            <Cont className="cont">
        <Header1 style={{textAlign : 'center'}}>CASE STUDY</Header1>
                <div style={{height : '16px'}}></div>
                <Paragraph style={{textAlign:'center'}}>INTEC delivers projects on-time and according to quality standards, providing professional and sustainable energy solutions without compromise. Our proven track record of reliable projects and achievements spurs our growth as a trusted industry partners. Innovative technology and data insights are integrated in all high-quality solutions we develop and implement.</Paragraph>
                <div style={{height : '16px'}}></div>
                
                <Paragraph style={{textAlign:'center',fontWeight: 900 , textTransform : 'uppercase'}}>Please see selected case study of our projects:</Paragraph>
        </Cont>
        
            </PageHeader>
            <CasesList>
            <div className="container">
                {
                    cases.map(c=>(
                        <CaseBox key={c.id} case={c} />
                    ))
                }

            </div>
        </CasesList>
        </Layout>
    );
}

export default Cases;
const CasesList = styled.div`
    margin-top : -108px;
    

`;

const Cont = styled.div`
        text-align : center;
        margin-left : auto;
        margin-right : auto;
        position : relative;
        max-width : 789px;
        width : 100%;
 
`;

const PageHeader = styled.div`
  min-height: 459px;
    background-size: cover;
    margin-top : 150px;
    padding-top: 56px;
    color: white;
    position: relative;
    width:  100%;
    background: #EB7700;
    z-index: -1;
    img{
        z-index: -1;
    }
    h1{
      z-index: 1;
    }
`;