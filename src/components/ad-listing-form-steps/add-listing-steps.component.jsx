import React, {useState} from 'react'
import {connect}from 'react-redux'
import { StepsActionContainer, StepsContentContainer} from './add-listing-steps.styles'
import { Steps, Button, message } from 'antd';
import NewAddListing from "../new-add-listing-form/new-add-listing-form.component";
import {withRouter} from 'react-router-dom'
import {createStructuredSelector} from "reselect";
import {
    stepSelector,
    loadingSelector,
    addListingFormSelector
} from "../../redux/add-listing-form/add-listing-form.selectors";
import {setNextStep, setPrevStep,setFieldValue} from "../../redux/add-listing-form/add-listing-form.actions";
import {addListing} from "../../redux/listing/listing.actions";

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
        title:'Choose Price'
    }
];
const AddListingSteps = ({history,current,loading,next,prev,formData,addListing,allowNextStep})=>{
    // const [state,setState]= useState({
    //     current:0,
    //     status:'',
    //     loading:false
    // })

    const isNextStepAllowed = ()=>{
        switch (current){
            case 0:{
                const {condition,make,model,bodyType,seatCount,mileage} = formData
                const firstStepData = {condition,make,model,bodyType,seatCount,mileage}
                console.log(Object.values(firstStepData))
                return Object.values(firstStepData).includes(undefined)
            }
            case 1:{
                const {fuelEconomy,fuelType,engineCapacity,enginePower,transmission} =formData
                const secondStepData = {fuelEconomy,fuelType,engineCapacity,enginePower,transmission}
                console.log(Object.values(secondStepData))
                return Object.values(secondStepData).includes(undefined)
            }
            default:
                return null
        }
    }
    return (

        <div>
            <Steps progressDot current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <StepsContentContainer>
                <NewAddListing step={current}/>
            </StepsContentContainer>
            <StepsActionContainer>
                {current < steps.length - 1 && (
                    <Button type="primary" disabled={isNextStepAllowed()} onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button
                        type="primary"
                        loading={loading}
                        onClick={() =>{
                            console.log('clicking')
                            // setState({
                            //     ...state,
                            //     loading: true
                            // })
                            // setTimeout(()=>{
                            //     message.success('Processing complete!')
                            //     setState({
                            //         ...state,
                            //         loading:false
                            //     })
                            //     history.push('/inventory')
                            // },2000)


                        }}
                    >
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ marginLeft: 8}} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </StepsActionContainer>
        </div>

    )
}

const mapStateToProps = createStructuredSelector({
    current:stepSelector,
    loading:loadingSelector,
    formData:addListingFormSelector,
    // allowNextStep:allowNextStepSelector
})

const mapDispatchToProps = (dispatch)=>({
    next:()=>dispatch(setNextStep()),
    prev:()=>dispatch(setPrevStep()),
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value)),
    addListing:(listing)=>dispatch(addListing(listing))
})
const ConnectedAddListingSteps = connect(mapStateToProps,mapDispatchToProps)(AddListingSteps)
export default withRouter(ConnectedAddListingSteps)