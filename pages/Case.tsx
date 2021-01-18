import React from 'react';
import styled from 'styled-components';
import {Header1, Paragraph } from '../styledComponents/styledComponents'
// import aboutImg  from '../assets/about.png'
// import Case1 from '../assets/cases/Case_Study_1.jpg'
// import Case2 from '../assets/cases/Case_Study_2.jpg'
// import Case3 from '../assets/cases/Case_Study_3.jpg'
// import icon1 from '../assets/ico/cases/doc-healthy.svg';
import Image from 'next/image'
import AspectRatio  from 'react-aspect-ratio'
import Layout from '../Layout/Layout';

const Case = () => {
    return (
        <Layout>
            <PageHeader style={{background : `url('/assets/about.png')`}}>
            <Grid className="container">
            <Left>
                <Header1>Çeltikçi</Header1>
                <div style={{height : 16}}></div>
               
                <Paragraph>Solar Energy System of CELTIKCI Solar Power Plant, located in the Village of Celtikci, the Province of Denizli, has a total capacity of 14 MWp with an estimated annual energy production of roughly 23.460.000 kWh, avoiding the emission of over 10 tons of CO2 per year.</Paragraph>
                <div style={{height : 40}}></div>
               
                <Paragraph>
• Employer: Bereket Enerji <br/>
• Location: Denizli / Turkey<br/>
• System Power (MWp): 14 MWp<br/>
• Status/Construction: Completed – 12/2017<br/>
• Annual energy yield (kWh): 23.460.000 kWh<br/>
• Assembly Type: Ground mounted<br/>
• Number / Brand of modules : 52.075 / Bereket Enerji<br/>
• Number / Brand of inverters: 13 / SMA<br/>
</Paragraph>
            </Left>
            <Center>
                
                <AspectRatio ratio='256/176' style={{display: 'flex', 'flex-direction': 'column',maxWidth: '256px'}}>
                    {/* <Img src={Case1} alt=""/> */}
                    <Rounded>
                    <Image
                    src='/assets/cases/Case_Study_1.jpg'
                    width={256}
                    height={176}
                    />
                    </Rounded>
                </AspectRatio>
                <div style={{height : 24}}></div>
               
                <AspectRatio ratio='256/176' style={{display: 'flex', 'flex-direction': 'column',maxWidth: '256px'}}>
                    {/* <Img src={Case2} alt=""/> */}
                    <Rounded>
                    <Image
                    src='/assets/cases/Case_Study_2.jpg'
                    width={256}
                    height={176}
                    />
                    </Rounded>
                </AspectRatio>
                    
            </Center>
            <Right>
                <FixedImage>
                    <Image  src='/assets/cases/Case_Study_3.jpg' width={512} height={352} alt=""/>
                </FixedImage>
            </Right>
            </Grid>
        </PageHeader>
        <Box className="container" style={{paddingTop : 80,paddingBottom : 80}}>
            <div className="case1" style={{display : 'grid',gridTemplateColumns : '1fr 346px 100px',gap : 32}}>
            <div className="left">
            <AspectRatio ratio='640/400' style={{maxWidth: 640}}>
                <Rounded>
                <Image src='/assets/cases/Case_Study_2.jpg'  width={640} height={400} alt=""/>
                </Rounded>
            </AspectRatio>
            </div>
            <div className="center" style={{display : 'flex',flexDirection:'column'}}>
            <Header1 style={{ fontWeight: 'bold',fontSize: '26px',lineHeight: '32px',textTransform:'uppercase'}}>Tellus eget</Header1>
<div style={{height : 16}}></div>
               
            <Paragraph style={{color:'#EB7700'}}>12 November  2020</Paragraph>
            <div style={{height : 16}}></div>
               
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt habitant convallis nisi tristique consectetur potenti. Nascetur vitae nunc nisi, rutrum. Et sagittis, senectus lorem nunc vitae tempor ultricies volutpat pharetra. Ultrices in volutpat vestibulum quam et sit molestie. Dolor, in mauris felis laoreet penatibus amet volutpat. Tellus eget vulputate habitant id viverra. Hendrerit mauris blandit id leo quis vulputate facilisi. Risus dapibus dui donec.</Paragraph>
            </div>
            <div className="right" style={{color : '#008440',display : 'flex',flexDirection:'column',alignItems : 'center'}}>
                <Circle>
                    <Image src='/assets/ico/cases/doc-healthy.svg' width={24} height={24} alt=""/>
                </Circle>
                <div style={{height : 8}}></div>
               
                <p style={{textAlign : 'center',fontSize : 7,fontWeight :800}}>Documentation,<br/> Health & Safty </p>
                
            </div>
            </div>
            
            
        </Box>
        <Box className="container" style={{paddingTop : 80,paddingBottom : 80}}>
            <div className="case1" style={{display : 'grid',gridTemplateColumns : '1fr 346px 100px',gap : 32}}>
            <div className="left">
            <AspectRatio ratio='640/400' style={{maxWidth: 640}}>
                <Rounded>
                <Image
                src='/assets/cases/Case_Study_2.jpg'
                width={640}
                height={400}
                />
                </Rounded>
            </AspectRatio>
            </div>
            <div className="center" style={{display : 'flex',flexDirection:'column'}}>
            <Header1 style={{fontWeight: 'bold',fontSize: '26px',lineHeight: '32px',textTransform:'uppercase'}}>Tellus eget</Header1>

<div style={{height : 16}}></div>
               
            <Paragraph style={{color:'#EB7700'}}>12 November  2020</Paragraph>
            <div style={{height : 16}}></div>
               
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu tincidunt habitant convallis nisi tristique consectetur potenti. Nascetur vitae nunc nisi, rutrum. Et sagittis, senectus lorem nunc vitae tempor ultricies volutpat pharetra. Ultrices in volutpat vestibulum quam et sit molestie. Dolor, in mauris felis laoreet penatibus amet volutpat. Tellus eget vulputate habitant id viverra. Hendrerit mauris blandit id leo quis vulputate facilisi. Risus dapibus dui donec.</Paragraph>
            </div>
            <div className="right" style={{color : '#008440',display : 'flex',flexDirection:'column',alignItems : 'center'}}>
                <Circle>
                <Image src='/assets/ico/cases/doc-healthy.svg' width={24} height={24} alt=""/>

                </Circle>
                <div style={{height : 8}}></div>
               
                <p style={{textAlign : 'center',fontSize : 7,fontWeight :800}}>Documentation,<br/> Health & Safty </p>
                
            </div>
            </div>
            
            
        </Box>
        </Layout>
    );
}

export default Case;
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
const Left = styled.div`
    
`;
const Center = styled.div`
    
`;
const Right = styled.div`
    position: absolute;
    right: 100px;
    top: 180px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 20px 0px 0px 0px;
    overflow: hidden;
    img{
        
    }
`;
const Grid = styled.div`
    display : grid;
    grid-template-columns : 1fr 300px 1fr;
    gap : 20px;
`;
const Img = styled.img`
    border-radius: 20px 20px 20px 0px;

`;
const Omg = styled.img`
    border-radius: 20px 0px 0px 0px;
    position : absolute;
    width : 512px;
    left : 0px;
`;

const Circle = styled.div`
    border-radius :50%;
    width : 48px;
    height : 48px;
    display : flex;
    justify-content : center;
    align-items : center;
    background : white;
    position: relative;
    cursor: pointer;
    .overlay{
    cursor : not-allowed ;
    position : absolute;
    width : 100%;
    height :100%;
    background : #2c2c2c;
    opacity : .7;
    }
`;
const Box = styled.div`
position : relative;
&::after{
    position : absolute;
    content : '';
    width : 100vw;
    height : 100%;
    background :#CCE6D9;
    left : 300px;
    top : 0px;
    z-index :-1;
}
    
`;
const FixedImage = styled.div`
border-radius: 20px 0px 0px 0px;  
`;
const Rounded = styled.div`
  border-radius: 20px 0px 0px 0px;
  overflow: hidden;
`;

