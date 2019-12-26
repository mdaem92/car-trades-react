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
        handleChange,
        handleSubmit

    })=>{
    const [state,setState]=useState({carData})

    const handleSelectChange= (option,{name})=>{
        if (option){
            const {value} = option
            setFieldValue(name,value)
            console.log(values)
        }else{
            setFieldValue(name,'')
        }
    }
    return (
        <Form >
        <CardContainer  body sm='6'>
            <FormGroupContainer >
                <FormSelect
                    isClearable
                    placeholder={'Select Condition'}
                    name={'condition'}
                    onChange={handleSelectChange}
                    options={conditionData}
                />

                <FormSelect
                    isClearable
                    placeholder={'Select Make'}
                    name={'make'}
                    onChange={handleSelectChange}
                    options={state.carData.makes}
                />
                <FormSelect
                    isClearable
                    placeholder={'Select Model'}
                    name={'model'}
                    onChange={handleSelectChange}
                    options={values.make?state.carData.formattedData[values.make].models:[]}
                    isDisabled={!values.make}
                />
            </FormGroupContainer>
            <FormGroupContainer>
                <Field
                    name='mileage'
                    type='number'
                    label={'Select Mileage'}
                    required
                    as={FormInput}
                />
                <Field
                    name='price'
                    type='number'
                    label={'Select Price'}
                    required
                    as={FormInput}
                />
                <Field
                    name='registered'
                    type='number'
                    label={'Select Year'}
                    required
                    as={FormInput}
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
            <ImageUpload />
            <ImageUpload />
            <ImageUpload />
            <ImageUpload />
            <ImageUpload />
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
            condition:condition?{value:condition,label:condition} :undefined ,
            make:make?{value:make,label:make}:undefined,
            model:model?{value:model,label:model}:undefined,
            price:price?price:'',
            mileage:mileage?mileage:'',
            registered:registered?registered:'',

        }
    },
    handleSubmit(values,{props,setSubmitting,resetForm}){
        console.log(values)
        resetForm()
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
