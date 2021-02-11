import React , {useEffect} from 'react';
import styled from 'styled-components'
import { Header2,Paragraph  } from '../../styledComponents/styledComponents'
import Link from 'next/link'
import {useRouter} from 'next/router'
const NewsArticle = ({article}) => {
    const router = useRouter()
    useEffect(() => {
        console.log('article : ', article )
    }, []);
    const featuredImage = () =>{
        return article._embedded["wp:featuredmedia"][0].media_details.thumbnail.source_url 
    }
    return (
        <Card className='card'>
            <Figure>
                
                <Image src={article._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url }/>
            </Figure>
            <CardBody>
            
            <div style={{height : 20}}></div>
            <Header2>{article.title.rendered}</Header2>
            <div style={{height : 8}}></div>
            <Paragraph >{article.excerpt.render}</Paragraph>
            </CardBody>
            <CardFooter>
                <p >{article.date.slice(0,10)}</p>
                <Link href={`/articles/${article.id}`}>
                <More>
                    <p style={{marginRight : '8px'}}>MORE</p>
                    <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.3795 0.477212L13.8407 3.93403C14.0531 4.14615 14.0531 4.49008 13.8407 4.70221L10.3794 8.15902C10.1671 8.37115 9.82268 8.37115 9.61028 8.15902C9.39788 7.94689 9.39788 7.60297 9.61028 7.39084L12.1431 4.8613L0.543882 4.8613C0.243504 4.8613 -3.62481e-07 4.61811 -3.37193e-07 4.31812V4.31812C-3.11904e-07 4.01812 0.243505 3.77493 0.543883 3.77493L12.1431 3.77493L9.61028 1.24539C9.39789 1.03327 9.39789 0.689339 9.61028 0.477212C9.82268 0.265084 10.1671 0.265084 10.3795 0.477212Z" fill="#EB7700"/>
                    </svg>
                </More>
                </Link>
            </CardFooter>
        </Card>
    );
}

export default NewsArticle;
const More = styled.a`
    display : flex;
    justify-content : space-between;
    align-items :center;
    
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: center;
    color : #EB7700;
    cursor : pointer;
`;
const Card = styled.div`
    max-width : 352px;
    min-height : 200px;
    border-radius: 40px 40px 40px 0px;
`
const Figure = styled.figure`
    height : 304px;
    width : 100%;
    max-width : 352px;
    border-radius: 40px 40px 40px 0px;
    height : 304px;
    position : relative;
    overflow : hidden;    
`
const CardBody = styled.div`
`
const Image = styled.img`
    position : absolute;
    height : 100%;
    width : 100%;
    transform : translate(-50%,-50%) scale(1);
    left : 50%;
    top : 50%;
    transition : all ease 0.3s;
    object-fit : cover;
    &:hover{
        transform : scale(1.08) translate(-50%,-50%)
    }
`


const CardFooter = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    line-height : 40px;
    //styleName: data.news;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0px;
    text-align: left;
    text-transform : uppercase;
    color :#A69B9B;
`