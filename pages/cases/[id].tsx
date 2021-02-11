import React from 'react';
import Layout from '../../Layout/Layout';
import {useRouter} from 'next/router'
import styled from 'styled-components';
import Image from 'next/image'
const Case = ({news}) => {
    const router = useRouter()
console.log('news : ',news._embedded["wp:featuredmedia"][0].source_url)
    return (
        <Layout>
            <PageHeader>
                <Image
                src={news._embedded["wp:featuredmedia"][0].source_url}
                layout='fill'
                />
            </PageHeader>
            <div className="container" 
  
            style={{minHeight : '100vh',paddingTop : 80}}>
                 
                <div style={{height : 48}}></div>
    <div dangerouslySetInnerHTML={{ __html: news.excerpt.rendered }}></div>           
            </div>
        </Layout>
    );
}

export default Case;

const PageHeader = styled.div`
    min-height: 640px;
    background-size: cover;
    margin-top : 150px;
    padding-top: 56px;
    color: white;
    position: relative;
    width:  100%;
    background: #EB7700;
    z-index: -1;
    overflow: hidden;
    img{
        position: absolute;
        width:  100%;
        height: 100%;
        left: 0px;
        top: 0px;
        z-index: 1;

    }
`;
const MovieContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: red;
    .movietriangle{
        position: absolute;
        transform: translate(-50%,-50%);
        left: 50%;
        top: 50%;
    }

`;





export async function getStaticPaths() {
    const res = await fetch('http://139.59.159.33/wp-json/wp/v2/news?_embed')
    const news = await res.json()
    const ids = news.map( article => article.id )
    const paths = ids.map(i=>({
        params : {id : i.toString()}
    }))
    return {
        paths : paths,
        fallback : false
    }
  }

  export async function getStaticProps({params}) {
    const res = await fetch(`http://139.59.159.33/wp-json/wp/v2/news/${params.id}?_embed`)
    const news = await res.json()
    return {
        props: {
            news
        }
    }
}
