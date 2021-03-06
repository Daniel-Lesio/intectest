import React,{useEffect} from 'react';
import styled from 'styled-components';
const HeaderImg = '/assets/career.jpg'
import {Paragraph} from '../styledComponents/styledComponents'
import WorkFilter from "../Components/WorkFilter/WorkFilter";
import { GetStaticProps } from 'next'
import ButtonOrange from '../Layout/ButtonOrange'
import Layout from '../Layout/Layout';

const Career = ({positions}) => {
    const test =(e)=>{
        e.preventDefault()
        
    }
    return (
        
        <Layout>
            <PageHeader>
                <div className="container">
                <h1 style={{textAlign : 'center'}}>CAREER</h1>
                
                <div style={{height : 24}}></div>
               
                <Paragraph style={{marginBottom:'16px', textAlign:'center',maxWidth:'700px',marginLeft:'auto',marginRight:'auto'}}>INTEC was founded on the dream of a world full of renewable energy. Now, we design environmentally-friendly energy solutions that excel in performance and sustainability while also providing top profits and output for our shareholders. As we grow in size and industry influence, we recognizes the critical value of teamwork, and priorities employee training and development in all departments.</Paragraph>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <ButtonOrange  color='white' value='CHECK VACANCIES'  arrow to='/Services'/>               
        </div>

                <Image>
                        <img src={HeaderImg} alt=""/>
                    </Image>
                </div>
            </PageHeader>
            <WorkingWithUs>
                <div className="container">
                <Header>Working With Us</Header>
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
            <div id='target' className="container">
            
                <Header style={{marginBottom : '32px'}}>CURRENT VACANCIES</Header>
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
    transform: translateY(70px);
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

const ButtonWhiteComp = styled.div`
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
    const fs = require('fs')
const path = require('path') 
    const positionsData = await fs.readFileSync( path.join(process.cwd(),'/data/positions.json'),'utf-8')
    let positions = await JSON.parse(positionsData)
    return {
      props: {
        positions
      },
    }
  }

  const Header = styled.h1`
    font-family: Lato;
    font-size: 32px;
    font-style: normal;
    font-weight: 900;
    line-height: 48px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom : 8px;
    text-transform : uppercase;
  `;