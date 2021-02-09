import SwiperCore, {Navigation,Pagination} from 'swiper'
import { Swiper, SwiperSlide  } from 'swiper/react';
SwiperCore.use([Navigation,Pagination])
import styled from 'styled-components';

export interface SwipeReferencesProps {
    
}
 
const SwipeReferences: React.FunctionComponent<SwipeReferencesProps> = () => {
    return ( 
        <div>
            SwipeReferences
        </div> 
    );
}
 
export default SwipeReferences;