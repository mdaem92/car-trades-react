import React from 'react'
import {AddListingContainer} from './add-listing.styles'

import {default as AddListingForm} from "../../components/add-listing-form/add-listing-form.component";


const AddListingPage = (props)=>{
    return (
        <AddListingContainer >
            <AddListingForm/>
        </AddListingContainer>
    )
}
export default AddListingPage