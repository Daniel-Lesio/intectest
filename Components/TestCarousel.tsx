import React from 'react';
import SwiperCore, {Navigation,Pagination} from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/react';
import styled from 'styled-components';
SwiperCore.use([Navigation,Pagination])

const TestCarousel = () => {
    return (
        <Wrapper>
            <Swiper
            loop={true}
            navigation={{
                nextEl : '.next',
                prevEl : '.prev'
            }}
            spaceBetween={10}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log('swiper :' ,swiper)}
            style={{background : 'green',width : '100vw' , height : 400 , display : 'flex',justifyContent : 'center',alignItems : 'center'}}
            >
                <SwiperSlide>
                    <Card>1-Lorem, ipsum.</Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>2-Lorem, ipsum.</Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>3-Lorem, ipsum.</Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>4-Lorem, ipsum.</Card>
                </SwiperSlide>
                <SwiperSlide>
                    <Card>5-Lorem, ipsum.</Card>
                </SwiperSlide>
                <div   style={{display : 'flex',justifyContent:'space-between',alignItems:'center',lineHeight : 70,background : "violet",padding : 20}}>
                    <div className='prev' style={{padding : 10,width:100,height:100,background:'purple'}}>Prev</div>
                    <div className='next' style={{padding : 10,width:100,height:100,background:'purple'}}>Next</div>
                </div>
            </Swiper>            
                
        </Wrapper>
    );
}

export default TestCarousel;

const Wrapper = styled.div`
    background: red;
    height: 500px;
`;
const Card = styled.div`
  
`;