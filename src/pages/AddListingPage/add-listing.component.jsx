import React from 'react'
import {
    AddListingContainer,
    BackgroundContainer,
    PageTitleContainer
} from './add-listing.styles'
import {default as AddListingForm} from "../../components/add-listing-form/add-listing-form.component";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation-bar/nagivation-bar.component";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const AddListingPage = (props)=>{
    return (
        <BackgroundContainer >
            <AddListingContainer >
                <PageTitleContainer>Add your Listing</PageTitleContainer>
                <AddListingForm/>
            </AddListingContainer>
            <Footer/>
        </BackgroundContainer>

    )
}
export default AddListingPage