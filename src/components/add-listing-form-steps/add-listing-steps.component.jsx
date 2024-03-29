import React from 'react'
import { connect } from 'react-redux'
import { StepsActionContainer, StepsContentContainer } from './add-listing-steps.styles'
import { Steps, Button, message } from 'antd';
import NewAddListing from "../new-add-listing-form/new-add-listing-form.component";
import { withRouter } from 'react-router-dom'
import { createStructuredSelector } from "reselect";
import {
    stepSelector,
    loadingSelector,
    addListingFormSelector, addListingErrorMessageSelector
} from "../../redux/add-listing-form/add-listing-form.selectors";
import { setNextStep, setPrevStep, setFieldValue } from "../../redux/add-listing-form/add-listing-form.actions";
import { addListingStart } from "../../redux/listing/listing.actions";
import { currentUserSelector } from "../../redux/auth/auth.selectors";
import {useWindowSize} from '../../hooks/useWindowSize'

const { Step } = Steps;

const steps = [
    {
        title: 'Choose Car',
    },
    {
        title: 'Choose Specs',
        // content: 'Second-content',
    },
    {
        title: 'Upload Images',
    },
    {
        title: 'Choose Price'
    }
];
const AddListingSteps = (
    {
        history,
        current,
        loading,
        next,
        prev,
        formData,
        addListingStart,
        errorMessage,
        currentUser,
        showSteps
    }) => {
    const disableNextStep = () => {
        switch (current) {
            case 0: {
                const { condition, make, model, bodyType, seatCount, mileage, registered , color } = formData
                const firstStepData = { condition, make, model, bodyType, seatCount, mileage, registered , color }
                console.log(Object.values(firstStepData))
                return Object.values(firstStepData).includes(undefined)
            }
            case 1: {
                const { fuelEconomy, fuelType, engineCapacity, enginePower, transmission } = formData
                const secondStepData = { fuelEconomy, fuelType, engineCapacity, enginePower, transmission }
                console.log(Object.values(secondStepData))
                return Object.values(secondStepData).includes(undefined)
            }
            case 2:{
                const {imageFileList} = formData
                console.log('length of image file list is: ',imageFileList.length);
                
                return !imageFileList.length>0
            }
            default:
                return null
        }
    }
    const disableLastStep = ()=>{
        const {isAppraisalRequested , price} = formData
        
        return !isAppraisalRequested && typeof price !== 'number'
    }
    const width = useWindowSize()

    return (

        <div>

            <Steps 
                progressDot 
                current={current}
                direction={width >= 800 ? 'horizontal' : 'vertical'}
                style={{padding:10}}
            >
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>

            <StepsContentContainer>
                <NewAddListing step={current} />
            </StepsContentContainer>
            <StepsActionContainer>
                {current < steps.length - 1 && (
                    <Button type="primary" disabled={disableNextStep()} onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button
                        type="primary"
                        loading={loading}
                        disabled={disableLastStep()}
                        onClick={() => {
                            console.log('clicking', formData)
                            const { displayName, id } = currentUser
                            addListingStart({ ...formData, userName: displayName, userId: id })
                            if (!errorMessage) {
                                message.success('Listing successfully added')
                                history.push('/inventory')
                            } else {
                                message.error('Something went wrong')
                            }

                        }}

                    >
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </StepsActionContainer>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    current: stepSelector,
    loading: loadingSelector,
    formData: addListingFormSelector,
    errorMessage: addListingErrorMessageSelector,
    currentUser: currentUserSelector
})

const mapDispatchToProps = (dispatch) => ({
    next: () => dispatch(setNextStep()),
    prev: () => dispatch(setPrevStep()),
    setFieldValue: (name, value) => dispatch(setFieldValue(name, value)),
    addListingStart: (formData) => dispatch(addListingStart(formData)),
})
const ConnectedAddListingSteps = connect(mapStateToProps, mapDispatchToProps)(AddListingSteps)
export default withRouter(ConnectedAddListingSteps) 