import React from 'react';
import {CarouselContainer} from "../listing-preview-image-slider/listing-preview-image-slider.styles";

const CompareImageCarousel = () => {
    const onChange = (value)=>console.log(value)
    return (
        <CarouselContainer afterChange={onChange}>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </CarouselContainer>
    );
};

export default CompareImageCarousel;
