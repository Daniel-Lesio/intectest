import React from 'react';
import Layout from '../../Layout/Layout';
import {useRouter} from 'next/router'
import styled from 'styled-components';
import Image from 'next/image'
const article = () => {
    const router = useRouter()
    console.log('router.query ' ,router.query.id)
    return (
        <Layout>
            <PageHeader>
                <Image
                src='/assets/cases/Case_Study_2@2x.jpg'
                layout='fill'
                />
            </PageHeader>
            <div className="container" style={{minHeight : '100vh',paddingTop : 80}}>
                <h1 style={{textAlign : 'left'}}>Al Kharj 15 MW project completed successfull </h1>
                <div style={{height : 16}}></div>
                <p style={{color :'#A69B9B', fontSize : 12 , lineHeight : '24px'}}>23.11.2020</p>
                <div style={{height : 32}}></div>
                <p style={{lineHeight : '24px', fontSize : '16px'}}>
                <strong style={{fontWeight : 800}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis maecenas vitae semper nec aliquam sollicitudin neque. Eget viverra facilisis elementum sit aenean magna lorem. Porttitor pharetra, sit non viverra. At laoreet tellus dis arcu quisque eget sed. Venenatis vitae accumsan sagittis, pellentesque integer montes, gravida ut. Tempor egestas sodales semper ultrices malesuada gravida risus amet.</strong>
                <br/>
                <br/>
                Bibendum odio consectetur lectus arcu enim. Volutpat donec varius pellentesque in. Viverra in eu, est tellus, congue cursus pulvinar tellus. Faucibus tempor consectetur aliquam odio hendrerit. Turpis enim, ac egestas nulla orci pellentesque scelerisque proin egestas. Aenean nisl viverra ultricies aliquam condimentum purus scelerisque sit. Tristique tincidunt ullamcorper turpis iaculis aliquam rhoncus. Enim volutpat id risus fermentum nunc, gravida. Pharetra, orci ac arcu at. Aliquam augue tempus ultrices imperdiet non eleifend at a. Sed elementum fames donec porttitor viverra praesent nam.
At egestas magna tortor diam. At amet quam dictumst pharetra proin cras. Sed sed amet cursus proin. Mauris malesuada auctor pellentesque nec sem purus arcu nec. Eget ut mi lectus a lectus. Tellus purus lacus eget feugiat quam et pellentesque vel nunc. Lectus faucibus vulputate eget nunc risus.
Eleifend ac molestie amet, ridiculus morbi urna lacus, ornare sit. Consectetur habitasse dignissim dictum at ut. Quis posuere id erat integer. Tempor sed tempor, in tincidunt viverra bibendum. Lacus, tellus a ullamcorper egestas at laoreet morbi sed. Id feugiat tempor felis, ante rhoncus, rhoncus, duis. Tristique et duis lectus eu.

                </p>
                <div style={{height : 32}}></div>
                <MovieContainer>

                <Image
                src='/assets/movie.jpg'
                width={1122}
                height={640}
                />
                </MovieContainer>
                <div style={{height : 48}}></div>
                <p style={{lineHeight : '24px', fontSize : '16px'}}>
                ursus pulvinar tellus. Faucibus tempor consectetur aliquam odio hendrerit. Turpis enim, ac egestas nulla orci pellentesque scelerisque proin egestas. Aenean nisl viverra ultricies aliquam condimentum purus scelerisque sit. Tristique tincidunt ullamcorper turpis iaculis aliquam rhoncus. Enim volutpat id risus fermentum nunc, gravida. Pharetra, orci ac arcu at. Aliquam augue tempus ultrices imperdiet non eleifend at a. Sed elementum fames donec porttitor viverra praesent nam.
<br/>
At egestas magna tortor diam. At amet quam dictumst pharetra proin cras. Sed sed amet cursus proin. Mauris malesuada auctor pellentesque nec sem purus arcu nec. Eget ut mi lectus a lectus. Tellus purus lacus eget feugiat quam et pellentesque vel nunc. Lectus faucibus vulputate eget nunc risus.
Eleifend ac molestie amet, ridiculus morbi urna lacus, ornare sit. Consectetur habitasse dignissim dictum at ut. Quis posuere id erat integer. Tempor sed 

                </p>
                <div style={{height : 48}}></div>
                
            </div>
        </Layout>
    );
}

export default article;

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