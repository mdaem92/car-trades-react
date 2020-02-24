import React from 'react';
import EditListingMakeModel from '../edit-listing-make-model/edit-listing-make-model.component'
import EditListingFormSpecs from '../edit-listing-form-specs/edit-listing-form-specs.component'
import EditListingPicturesWall from '../edit-listing-image-upload/edit-listing-image-upload.component'
import EditListingFormPrice from '../edit-listing-form-price/edit-listing-form-price.component'

const EditListing = (
    {
        step,
        listing:
        {
            condition,
            make,
            model,
            bodyType,
            seatCount,
            mileage,
            color,
            registered,
            imageFileList,
            fuelType,
            fuelEconomy,
            enginePower,
            engineCapacity,
            transmission,
            price
        }
    }) => {

    // console.log(typeof convertedRegistered , ` registered: ${registered}, converted: ${convertedRegistered}`)
    switch (step) {
        case 0:
            return <EditListingMakeModel />
        case 1:
            return <EditListingFormSpecs/>
        case 2:
            return <EditListingPicturesWall/>
        case 3:
            return <EditListingFormPrice />
        default:
            return null
    }
};

export default EditListing;