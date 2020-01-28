import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';

import {CarouselContainer} from "./listing-preview-image-slider.styles";
import {items} from './temoporary-items'
import ListingPreviewImageGallery from "../listing-preview-image-gallery/listing-preview-image-gallery.component";

const ListingPreviewImageSlider = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [tempImages,setTempImages] = useState(images)
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const createItems = (num)=>{
        console.log('creating items',num)
        if(!!num)return null
        const count = parseInt(num/3)
        const result = [...Array(count).keys()].map(item=>({id:item,items:[...Array(count)]}))
        console.log('create items',result)
        return result
    }
    console.log(`this listing has ${images.length} images`)
    // const items = [...Array(Math.ceil(images.length/3)).keys()]
    const slides = items.map((item) => {
        return (
            <CarouselItem
                className="custom-tag"
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                {/*items must have id */}
                <ListingPreviewImageGallery
                    key={item.id}
                    // images={tempImages.splice(0,3)}
                />

            </CarouselItem>
        );
    });

    return (
        <CarouselContainer>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators className={'indicators'} items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </CarouselContainer>
    );
}
export  default ListingPreviewImageSlider