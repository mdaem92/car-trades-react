import React from 'react';
import {Carousel} from "antd";
import {ImageContainer} from "./homepage-image-carousel.styles";

const  HomepageImageCarousel = () => {
    return (
        <Carousel
            className={'carousel'}
            // autoplay
            // effect={'fade'}
            // autoplaySpeed={5000}
            // dots={false}
        >
            {/* <ImageContainer className={'image'} imageUrl ={require('../../assets/bg1.jpg')}/> */}
            {/* <ImageContainer className={'image'} imageUrl ={require('../../assets/bg2.jpg')}/> */}
            {/* <ImageContainer className={'image'} imageUrl ={require('../../assets/bg3.jpg')}/> */}
            <ImageContainer className={'image'} imageUrl ={require('../../assets/bg4.jpg')}/> 
        </Carousel>
    );
};

export default HomepageImageCarousel;
