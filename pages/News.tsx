import React,{useEffect } from 'react';
import styled from 'styled-components'
import NewsArticle from '../Components/NewsArticle/NewsArticle'
// import {newsData} from '../data'
import Button from '../Components/Button/Button.jsx'
import Image from 'next/image'
import Layout from '../Layout/Layout'
import { activeLink } from '../atoms/atoms'
import { useSetRecoilState } from 'recoil'
import Link from 'next/link'
const Home = ({news}) => {
  const setActiveLink =useSetRecoilState(activeLink)

  // const [news] = useState(newsData) 
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveLink("News")    
},[] );
return (
      <Layout>
          <PageHeader>
            <h1 style={{textTransform: 'uppercase' ,zIndex: 11}}>News</h1>
            <Image
            src='/assets/news.svg'
            layout='fill'
            />
          </PageHeader>
          <NewsList className='container'>
          {
            news.map((n,index)=>{
              return (
                <NewsArticle article={n} key={index} />
              )
            })
          }
          </NewsList>
<ButtonPlace>
<Button>
            <p style={{marginRight:'16px'}}>LOAD MORE</p>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" >
              <path fillRule="evenodd" clipRule="evenodd" d="M10.3795 0.477212L13.8407 3.93403C14.0531 4.14615 14.0531 4.49008 13.8407 4.70221L10.3794 8.15902C10.1671 8.37115 9.82268 8.37115 9.61028 8.15902C9.39788 7.94689 9.39788 7.60297 9.61028 7.39084L12.1431 4.8613L0.543882 4.8613C0.243504 4.8613 -3.62481e-07 4.61811 -3.37193e-07 4.31812V4.31812C-3.11904e-07 4.01812 0.243505 3.77493 0.543883 3.77493L12.1431 3.77493L9.61028 1.24539C9.39789 1.03327 9.39789 0.689339 9.61028 0.477212C9.82268 0.265084 10.1671 0.265084 10.3795 0.477212Z" fill="#fff"/>
            </svg>
          </Button>
</ButtonPlace>
      </Layout>
        );
}

export default Home;
const ButtonPlace = styled.div`
display : flex;
justify-content : center;
align-items : center;
transform : translateY(-121px);
`
const NewsList = styled.div`
    min-height : 100vh;
    display : grid;
    gap:  30px;
    grid-template-columns :repeat(1,1fr);
    @media (min-width: 640px) {
    grid-template-columns :repeat(1,1fr);
    }
    @media (min-width: 768px) {
    grid-template-columns :repeat(2,1fr);
    
    }
    @media (min-width: 1024px) {
    
    grid-template-columns :repeat(3,1fr);
    }
    @media (min-width: 1280px) {
    
    grid-template-columns :repeat(3,1fr);
    }
    @media (min-width: 1536px) {
    
    grid-template-columns :repeat(3,1fr);
    }
    flex-wrap : wrap;
    transform : translateY(-242px);   
`
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
`





export const getStaticProps = async () => {
  const fs = require('fs').promises
  const path = require('path')
  const data = await fs.readFile( path.join(process.cwd(),'/data/posts.json'),'utf-8')
  let news = await JSON.parse(data)
  
  return {
    props: {
      news,
    },
  }
}