import React, {useEffect} from 'react'
import {ImageGalleryGridContainer,Image1,Image2,Image3} from './listing-preview-image-gallery.styles'


const ListingPreviewImageGallery = ({images})=>{
    useEffect(()=>{
        console.log('rerendering')
    },[])
    return (
        <div>
            <ImageGalleryGridContainer>
                <Image1 image={images[0]?images[0].url:images}/>
                <Image2 image={images[1]?images[1].url:images}/>
                <Image3 image={images[2]?images[2].url:images}/>
                {/*{*/}
                {/*    console.log('images in gallery: ',images)*/}
                {/*}*/}
            </ImageGalleryGridContainer>
        </div>


    )
}
export default React.memo(ListingPreviewImageGallery)