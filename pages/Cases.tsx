import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { Header1, Paragraph, Space } from '../styledComponents/styledComponents';
const Case1 = '/assets/cases/Case_Study_1.jpg';
const Case2 = '/assets/cases/Case_Study_2.jpg';
const Case3 = '/assets/cases/Case_Study_3.jpg';
const Case4 = '/assets/cases/Case_Study_4.jpg';
import CaseBox from "../Components/CaseBox/CaseBox";
import Layout from '../Layout/Layout';
import Image from 'next/image'
import { activeLink } from '../atoms/atoms'
import { useSetRecoilState } from 'recoil'

const Cases = () => {
    const setActiveLink =useSetRecoilState(activeLink)

    const [cases] = useState(
        [
        {
            id:0,
            name : 'Çeltikçi',
            imgUrl : Case1,
            employer : 'Bereket Enerji',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
        {
            id:1,
            name : 'Çeltikçi',
            imgUrl : Case2,
            employer : 'Bereket Enerji',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
        {
            id:2,
            name : 'Çeltikçi',
            imgUrl : Case3,
            employer : 'Bereket Enerji',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
        {
            id:3,
            name : 'Çeltikçi',
            imgUrl : Case4,
            employer : 'Bereket Enerji',
            location  : 'Denizli / Turkey',
            date : '12 December 2017'            
        },
    ])
    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveLink("Cases")    
    },[] );

    return (
        <Layout>
            <div className='newspage-header' >
                <Image
                src='/assets/news.svg'
                layout='fill'
                />
            <Cont className="cont">
        <Header1 style={{textAlign : 'center'}}>CASE STUDY</Header1>
                <div style={{height : '16px'}}></div>
                <Paragraph style={{textAlign:'center'}}>INTEC delivers projects on-time and according to quality standards, providing professional and sustainable energy solutions without compromise. Our proven track record of reliable projects and achievements spurs our growth as a trusted industry partners. Innovative technology and data insights are integrated in all high-quality solutions we develop and implement.</Paragraph>
                <div style={{height : '16px'}}></div>
                
                <Paragraph style={{textAlign:'center',fontWeight: 500}}>Please see selected case study of our projects:</Paragraph>
        </Cont>
        
            </div>
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
    margin-top : -148px;
    

`;

const Cont = styled.div`
           text-align : center;
        margin-left : auto;
        margin-right : auto;
        position : relative;
        max-width : 789px;
        width : 100%;
 
`;