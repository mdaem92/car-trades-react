import React from 'react'
import {ImageGalleryGridContainer,Image1,Image2,Image3} from './listing-preview-image-gallery.styles'


const ListingPreviewImageGallery = ({page,images})=>{
    return (
        <div>
            <ImageGalleryGridContainer>
                <Image1 image={require('../../assets/t3.jpg')}/>
                <Image2 image={require('../../assets/t2.jpg')}/>
                <Image3 image={require('../../assets/t1.jpg')}/>
                {
                    console.log('images in gallery: ',images)
                }
            </ImageGalleryGridContainer>
        </div>


    )
}
export default ListingPreviewImageGallery