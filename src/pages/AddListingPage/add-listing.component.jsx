import React from 'react'
import {
    AddListingContainer,
    BackgroundContainer,
    PageTitleContainer
} from './add-listing.styles'
import AddListingSteps from "../../components/add-listing-form-steps/add-listing-steps.component";

const AddListingPage = ({currentUser})=>{
    
    return (
        <BackgroundContainer >
            <AddListingContainer >
                <PageTitleContainer>Add your Listing</PageTitleContainer>
                <AddListingSteps/>
            </AddListingContainer>
            {/*<Footer/>*/}
        </BackgroundContainer>

    )
}

export default AddListingPage