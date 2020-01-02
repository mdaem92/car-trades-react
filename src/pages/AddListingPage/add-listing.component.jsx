import React, {useState} from 'react'
import {
    AddListingContainer,
    BackgroundContainer,
    PageTitleContainer
} from './add-listing.styles'
import {default as AddListingForm} from "../../components/add-listing-form/add-listing-form.component";
import Footer from "../../components/footer/footer.component";
import AddListingProgressBar from "../../components/add-listing-progress-bar/add-listing-progress-bar.component";


const AddListingPage = (props)=>{
    const [progress,setProgress] = useState(0)

    return (
        <BackgroundContainer >
            <AddListingContainer >
                <PageTitleContainer>Add your Listing</PageTitleContainer>
                {/*<AddListingForm/>*/}
                <AddListingForm/>

            </AddListingContainer>
            <Footer/>
        </BackgroundContainer>

    )
}
export default AddListingPage