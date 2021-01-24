import React from 'react';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import SwiperCore, {Navigation,Pagination,Autoplay} from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/react';
import TestCarousel from '../Components/TestCarousel';

SwiperCore.use([Navigation,Pagination,Autoplay])

const Test = () => {
    return (
        <Layout>
            <div className="container" style={{minHeight : '100vh' , paddingTop : 200}}>
            
            <Swiper           
            loop={true}
            navigation={{
                nextEl : '.next',
                prevEl : '.prev'
            }}

            autoplay={true}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper :' ,swiper)}
            
        >
                <SwiperSlide>
                    <Card>
                        <h1>1-Lorem, ipsum.</h1>
                        <div style={{height:'100px'}} ></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iure.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <h1>2-Lorem, ipsum.</h1>
                        <div style={{height:'100px'}} ></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iure.</p>
                    </Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>
                        <h1>3-Lorem, ipsum.</h1>
                        <div style={{height:'100px'}} ></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, iure.</p>
                    </Card>
                </SwiperSlide>
                <div className=''  style={{display : 'flex',justifyContent:'space-between',alignItems:'center',lineHeight : 70,background : "violet",padding : 20}}>
                    <div className='prev' style={{padding : 10,width:100,height:100,background:'purple'}} >Prev</div>
                    <div className='next' style={{padding : 10,width:100,height:100,background:'purple'}} >Next</div>
                </div>
            </Swiper>
            <TestCarousel/>
            </div>
        </Layout>
    );
}

export default Test;

const Card = styled.div`
  border: #ddd solid 3px;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
    
`;