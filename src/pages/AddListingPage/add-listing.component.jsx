import React, {useState} from 'react'
import {connect}from 'react-redux'
import {
    AddListingContainer,
    BackgroundContainer,
    PageTitleContainer
} from './add-listing.styles'
import {Modal} from 'antd'
import {currentUserSelector} from '../../redux/auth/auth.selectors'
import AddListingSteps from "../../components/ad-listing-form-steps/add-listing-steps.component";
import {createStructuredSelector} from 'reselect'

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