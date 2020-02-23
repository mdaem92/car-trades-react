import React from 'react';
import EditListingMakeModel from '../edit-listing-make-model/edit-listing-make-model.component'
import moment from 'moment'

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
            imageFiles,
            fuelType,
            fuelEconomy,
            price
        }
    }) => {

    const convertedRegistered= moment(registered,'DD-MM-YYYY')
    console.log(typeof convertedRegistered , ` registered: ${registered}, converted: ${convertedRegistered}`)
    const firstStepData = {condition,make,model,bodyType,mileage,color,registered:convertedRegistered,seatCount}
    switch (step) {
        case 0:
            return <EditListingMakeModel {...firstStepData}/>
        // case 1:
        //     return <EditListingFormSpecs />
        // case 2:
        //     return <EditListingPicturesWall/>
        // case 3:
        //     return <EditListingFormPrice/>
        default:
            return null
    }
};

export default EditListing;