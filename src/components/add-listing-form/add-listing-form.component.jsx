import React, {useState} from 'react'
import FormSelect from "../form-select/form-select.component";
import FormInput from "../form-input/form-input.component";
import {carData, conditionData} from "../../carData/arrayData";
import {CardContainer, FormGroupContainer, StrapButton} from './add-listing-form.styles'
import {connect} from 'react-redux'
import {addListing} from "../../redux/listing/listing.actions";
import {withFormik,Formik,Form,Field} from 'formik'
import * as Yup from "yup";

import ImageUpload from "../image-upload/image-upload.component";



const AddListingForm = (
    {
        addListing,
        values,
        setFieldValue,
        errors,
        touched,

    })=>{
    const [state,setState]=useState({
        condition:'',
        make:'',
        model:'',
        mileage:'',
        registered:'',
        price:'',
        carData,

    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('submitting',state )
        const {carData,...rest} = state
        addListing(rest)
        setState({
            ...state,
            condition:'',
            make:'',
            model:'',
            mileage:'',
            registered:'',
            price:'',
        })
    }
    const handleChange= (option,event)=>{
        if(event){
            const {name} = event
            if(option){
                const {value} = option
                console.log(` ${[name]}:${value}`)
                setState({...state, [name]:value})
            }else{
                setState({...state, [name]:''})
            }
        }else{
            const {name,value} = option.target
            // console.log(option)
            console.log(` ${[name]}:${value}`)
            setState({...state, [name]:value})
        }

    }
    return (
        <Form onSubmit={handleSubmit}>
        <CardContainer  body sm='6'>
            <FormGroupContainer >
                <FormSelect
                    isClearable
                    placeholder={'Select Condition'}
                    name={'condition'}
                    onChange={handleChange}
                    options={conditionData}
                />

                <FormSelect
                    isClearable
                    placeholder={'Select Make'}
                    name={'make'}
                    onChange={handleChange}
                    options={state.carData.makes}
                    // defaultValue={state.make}
                />

                <FormSelect
                    isClearable
                    placeholder={'Select Model'}
                    name={'model'}
                    onChange={handleChange}
                    options={state.make?state.carData.formattedData[state.make].models:[]}
                    isDisabled={!state.make}
                    // defaultValue={state.model}
                />
            </FormGroupContainer>
            <FormGroupContainer>
                <FormInput
                    name='mileage'
                    type='number'
                    label={'Select Mileage'}
                    value={state.mileage}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='price'
                    type='number'
                    // placeholder={'Select Price'}
                    label={'Select Price'}
                    value={state.price}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='registered'
                    type='number'
                    label={'Select Year'}
                    value={state.registered}
                    required
                    handleChange={handleChange}
                />
            </FormGroupContainer>
            <FormGroupContainer>
                <StrapButton
                    color="primary"
                    size="lg"
                    type='submit'
                >
                    Submit
                </StrapButton>{' '}

            </FormGroupContainer>
        </CardContainer>
        <ImageUpload />

        </Form>
    )
}



const mapDispatchToProps = dispatch=>({
    addListing:listing=>dispatch(addListing(listing))
})
const ConnectedAddListingForm =  connect(undefined,mapDispatchToProps)(AddListingForm)
const ConnectedFormikAddListingForm = withFormik({
    mapPropsToValues(
        {
            make,
            model,
            mileage,
            registered,
            condition,
            price
        }
    ){
        return {
            make:make?make:'',
            model:model?model:'',
            price:price?price:'',
            mileage:mileage?mileage:'',
            registered:registered?registered:'',
            condition:condition?condition :'' ,
        }
    },
    handleSubmit(listingData,{props,setSubmitting,resetForm}){
        console.log(listingData)
    },
    validationSchema:Yup.object().shape({
        make:Yup.string().required(),
        model:Yup.string().required(),
        mileage:Yup.string().required(),
        price:Yup.string().required(),
        condition:Yup.string().required(),
        registered:Yup.string().required(),
    })

})(ConnectedAddListingForm)
export default ConnectedFormikAddListingForm
