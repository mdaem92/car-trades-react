import React from 'react'
import {ImageGalleryGridContainer,Image1,Image2,Image3} from './listing-preview-image-gallery.styles'

const ListingPreviewImageGallery = ()=>{
    return (
        <div>
            <ImageGalleryGridContainer>
                <Image1 image>
                    image 1
                </Image1>
                <Image2 >
                    imag 2
                </Image2>
                <Image3 >
                    image 3
                </Image3>
            </ImageGalleryGridContainer>
        </div>


    )
}
export default ListingPreviewImageGallery