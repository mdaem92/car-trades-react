import React from 'react'
import PicturesWall from "../image-upload/image-upload.component";
import AddListingMakeModel from "../add-listing-make-model-select/add-listing-make-model.component";
import AddListingFormSpecs from "../add-listing-form-specs/add-listing-form-specs.component";
import AddListingFormPrice from "../add-listing-form-price/add-listing-form-price.component";

const NewAddListing = ({step})=>{

    switch (step) {
        case 0:
            return <AddListingMakeModel/>
        case 1:
            return <AddListingFormSpecs/>
        case 2:
            return <PicturesWall/>
        case 3:
            return <AddListingFormPrice/>
        default:
            return null
    }
}
export default NewAddListing