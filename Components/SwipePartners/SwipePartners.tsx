import SwiperCore, {Navigation,Pagination,Autoplay} from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/react';
import styled from 'styled-components';
SwiperCore.use([Navigation,Pagination,Autoplay])

export interface SwipePartnersProps {
    
}
 
const SwipePartners: React.FunctionComponent<SwipePartnersProps> = () => {
    return ( 
        <div className='container' style={{marginTop :  100}}>
                            <h1 style={{marginTop : 100,marginBottom : 56,fontFamily : 'lato',fontSize :'32px'}}>PARTNERS</h1>

            <Swiper
                loop={true}
                navigation={{
                    nextEl : '.next',
                    prevEl : '.prev'
                }}
    
                autoplay={true}
                spaceBetween={50}
                slidesPerView={6}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log('swiper :' ,swiper)}
             
            >
                
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners01.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners02.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners03.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners04.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners05.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners06.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners07.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners08.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners09.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners10.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
                <SwiperSlide>
                    <LogoElem href='#'>
                    <img src='/assets/about/logo/l_partners11.png' alt=""/>
                    </LogoElem>    
                </SwiperSlide>
            </Swiper>
        </div> 
    );
}
 
export default SwipePartners;


const LogoElem = styled.a`
    height:  100px;
    cursor: pointer;
`;