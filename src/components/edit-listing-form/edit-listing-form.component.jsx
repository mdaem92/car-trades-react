import React, { useState } from 'react';
import  {connect}from 'react-redux'
import { Button } from 'antd';
import EditListing from '../edit-listing/edit-listing.component'
import { EditListingFormContainer,ButtonsContainer } from './edit-listing-form.styles'
import {createStructuredSelector} from 'reselect'
import{isSubmittingAllowedSelector,editListingFormSelector} from '../../redux/edit-listing-form/edit-listing-form.selectors'
import{currentUserSelector}from '../../redux/auth/auth.selectors'
import { editListingStart } from '../../redux/listing/listing.actions';
import { isEdittingSelector } from '../../redux/listing/listing.selectors';
import { doneEditting } from '../../redux/edit-listing-form/edit-listing-form.actions';
import { useEffect } from 'react';

const EditListingForm = (
    { 
        listing,
        isSubmittingAllowed,
        formData,
        currentUser:{id:userId},
        editListingStart,
        isEditting,
        doneEditting
    }) => {
    const [state, setState] = useState({
        step: 0,
        loading: false
    })
    
    const handleSubmit = async ()=>{
        console.log('going to submit: ',formData)
        const {id,imageFileList,...updates}=formData
        const convertedImageList = imageFileList.map((image)=>Object.assign({}, image));
        await editListingStart(id,userId,{...updates,imageFileList:convertedImageList})
        await doneEditting(true)
       
    }
    const { step } = state
    
    return (
        <EditListingFormContainer>
            <EditListing step={step} listing={listing}/>
            <ButtonsContainer>
                <Button
                    type="secondary"
                    onClick={() => setState({ ...state, step: state.step + 1 })}
                    disabled={step === 3}
                >
                    Next
                </Button>
                <Button
                    type="secondary"
                    onClick={() => setState({ ...state, step: state.step - 1 })}
                    disabled={step === 0 }
                >
                    Previous
                </Button>
                <Button
                    type="primary"
                    onClick={handleSubmit}
                    disabled={isSubmittingAllowed}
                    loading={isEditting}
                >
                    Done
                </Button>
            </ButtonsContainer>

        </EditListingFormContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    isSubmittingAllowed:isSubmittingAllowedSelector,
    formData:editListingFormSelector,
    currentUser:currentUserSelector,
    isEditting:isEdittingSelector
})
const mapDispatchToProps = (dispatch)=>({
    editListingStart:(id,userId,updates)=>dispatch(editListingStart(id,userId,updates)),
    doneEditting:(payload)=>dispatch(doneEditting(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditListingForm);