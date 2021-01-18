import React,{useEffect} from 'react';
import styled from 'styled-components';
const HeaderImg = '/assets/career.jpg'
import {Header1,Space,Paragraph} from '../styledComponents/styledComponents'
import WorkFilter from "../Components/WorkFilter/WorkFilter";
import { GetStaticProps } from 'next'
import fs from 'fs/promises'
import path from 'path'
import Layout from '../Layout/Layout';
import { activeLink } from '../atoms/atoms'
import { useSetRecoilState } from 'recoil'

const Career = ({positions}) => {
    const setActiveLink =useSetRecoilState(activeLink)

    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveLink("Career")    
    },[] );
    return (
        
        <Layout>
            <PageHeader>
                <div className="container">
                <h1 style={{textAlign : 'center'}}>CAREER</h1>
                <Space size={24}/>
                <Paragraph style={{marginBottom:'16px', textAlign:'center',maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>INTEC was founded on the dream of a world full of renewable energy. Now, we design environmentally-friendly energy solutions that excel in performance and sustainability while also providing top profits and output for our shareholders. As we grow in size and industry influence, we recognizes the critical value of teamwork, and priorities employee training and development in all departments.</Paragraph>
                    <ButtonWhite>
                        <p style={{marginRight : 24}}>CHECK VACANCIES</p>
                        <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path className='path' fillRule="evenodd" clipRule="evenodd" d="M10.3795 0.477212L13.8407 3.93403C14.0531 4.14615 14.0531 4.49008 13.8407 4.70221L10.3794 8.15902C10.1671 8.37115 9.82268 8.37115 9.61028 8.15902C9.39788 7.94689 9.39788 7.60297 9.61028 7.39084L12.1431 4.8613L0.543882 4.8613C0.243504 4.8613 -3.62481e-07 4.61811 -3.37193e-07 4.31812V4.31812C-3.11904e-07 4.01812 0.243505 3.77493 0.543883 3.77493L12.1431 3.77493L9.61028 1.24539C9.39789 1.03327 9.39789 0.689339 9.61028 0.477212C9.82268 0.265084 10.1671 0.265084 10.3795 0.477212Z" fill="white"/></svg>
                    </ButtonWhite>
                    <Image>
                        <img src={HeaderImg} alt=""/>
                    </Image>
                </div>
            </PageHeader>
            <WorkingWithUs>
                <div className="container">
                <Header1>Working With Us</Header1>
                <Grid2>
                    <Paragraph>
                    We stay on top of global developments in renewable resources and energy technology, always innovating and expanding our workforce to support our vision.
                    Our dream requires teamwork to make a reality, and if you feel a shared passion here, we welcome you as a candidate to join our efforts.
                    </Paragraph>
                    <div className="right">
                        <Paragraph>
                        Candidates experienced in the field of energy, especially the renewable energy industry, and equipped with professional experiences in solar and wind power plant installations are preferable. However, all applications will be kept in our database and you will be contacted in case a new position matches your qualifications.
                        </Paragraph>
                    </div>
                </Grid2>
                </div>
            </WorkingWithUs>
            <div className="container">
                <Header1 style={{marginBottom : '32px'}}>CURRENT VACANCIES</Header1>
                <WorkFilter positions={positions}/>
            </div>
        </Layout>
    );
}

export default Career;
const CareerPage = styled.div`
    margin-top : 0;
    padding-top : 0px;
    min-height : 100vh;
`
const PageHeader = styled.div`
    min-height :   560px;
    background : #EB7700; 
    margin-top : 135px;
    padding-top : 56px;
    color : white;
    text-align : center;
    .container{
        position : relative;
    }        
`
const Image = styled.div`
    position : absolute;
    width : 100%;
    height : 512px;
    background : #2c2c2c;
    border-radius: 40px 40px 40px 0px;
    img{
        position : absolute;
        border-radius: 40px 40px 40px 0px;
        transform : translate(-50%,-50%);
        left : 50%;
        top : 50%;
        width : 100%;
        height : 100%;
        object-fit:cover;
    }
`

const ButtonWhite = styled.div`
    cursor: pointer;
    border : solid 3px white;
    border-radius : 50px;
    padding : 15px 32px;
    display : inline-flex;
    align-items : center;
    justify-content : space-evenly;
    align-self : flex-start;
    margin-top : 32px;
    width : auto;
    margin-left : auto;
    margin-right : auto;
    margin-bottom : 80px;
        &:hover{
            background : white;
            color : #EB7700;
                path{
                    fill:#EB7700;
               }       
    }
`
const WorkingWithUs = styled.div`
margin-top : 512px;
min-height: 300px;   
`;

const Grid2 = styled.div`
display : grid;
grid-template-columns : repeat(1,1fr);
@media (min-width : 1024px){
    grid-template-columns : repeat(2,1fr);
}
gap : 128px;
min-height : 360px;
margin-top :8px;    
margin-bottom : 88px;
.left{
    min-height :200px;
}
.right{
    color : white;
    padding-left : 96px;
    padding-top : 96px;
    padding-bottom : 96px;
    position : relative;
    &::after{
        position : absolute;
        left : 0px;
        top : 0px;
        width : 300vw;
        height :100%;
        background: rgba(0, 132, 64, 0.4);
        border-radius: 40px 0px 0px 0px;
        content :'';
        z-index : -1;
    }
}
`;

export const getStaticProps : GetStaticProps = async () => {
    
    const positionsData = await fs.readFile( path.join(process.cwd(),'/data/positions.json'),'utf-8')
    let positions = await JSON.parse(positionsData)
    return {
      props: {
        positions
      },
    }
  }