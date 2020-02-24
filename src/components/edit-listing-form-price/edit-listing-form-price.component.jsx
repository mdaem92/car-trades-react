import React from 'react';
import{connect}from 'react-redux'
import {PriceInputContainer,CustomInputNumber}from './edit-listing-form-price.styles'
import { editListingFormPriceSelector } from '../../redux/edit-listing-form/edit-listing-form.selectors';
import { setEditListingFieldValue } from '../../redux/edit-listing-form/edit-listing-form.actions';
import {createStructuredSelector}from 'reselect'


const EditListingFormPrice = ({price,setFieldValue}) => {


    const onChange = (value)=>{
        console.log(value)
     
        // setPrice(value)
        setFieldValue('price',value)
    }
    
    return (
        <PriceInputContainer>
            <CustomInputNumber
                defaultValue={price}
                placeholder={'Price'}
                min={100}
                step={500}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
            />
        </PriceInputContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    price:editListingFormPriceSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setEditListingFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditListingFormPrice);