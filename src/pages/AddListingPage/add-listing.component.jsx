import React, {useState} from 'react'
import {
    AddListingContainer,
    BackgroundContainer,
    PageTitleContainer
} from './add-listing.styles'
import Footer from "../../components/footer/footer.component";

import AddListingSteps from "../../components/ad-listing-form-steps/add-listing-steps.component";

const AddListingPage = (props)=>{
    const [progress,setProgress] = useState(0)

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