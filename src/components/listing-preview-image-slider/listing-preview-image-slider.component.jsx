import React from 'react';
import {Carousel}from 'antd'
import {CarouselContainer} from "./listing-preview-image-slider.styles";
import ListingPreviewImageGallery from "../listing-preview-image-gallery/listing-preview-image-gallery.component";

const ListingPreviewImageSlider = ({images}) => {

    const items = [...Array(Math.ceil(images.length/3)).keys()].map((item)=>({id:item}))
    const slides = items.map((item) => {
        const from = item.id*3
        const to = from+3
        return (
            <div key={item.id}>
                <ListingPreviewImageGallery key={item.id} images={images.slice(from,to)}/>
            </div>
        )
    });
    return (
        <CarouselContainer>
            <Carousel autoplay={false} dots swipe> {slides} </Carousel>
        </CarouselContainer>
    );
}
export  default ListingPreviewImageSlider