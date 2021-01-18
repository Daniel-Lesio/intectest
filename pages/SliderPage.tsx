import React from 'react';
// import Layout from '../Layout/Layout';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const SliderPage = () => {
    return (
      <CarouselProvider
      
      naturalSlideWidth={33}
      naturalSlideHeight={5}
      totalSlides={3}
      >
      <Slider
      style={{background : 'violet' , width : '300px'}}
      >
        <Slide style={{background : 'red',width : '300px'}} index={0}>I am the first Slide.</Slide>
        <Slide style={{background : 'blue',width : '300px'}} index={1}>I am the second Slide.</Slide>
        <Slide style={{background : 'green',width : '300px'}} index={2}>I am the third Slide.</Slide>
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
      );
}

export default SliderPage;
