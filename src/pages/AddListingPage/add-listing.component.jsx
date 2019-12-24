import React, {useState} from 'react'
import { FormGroup} from './add-listing.styles'
import FormSelect from "../../components/form-select/form-select.component";
import {carData} from "../../carData/arrayData";
import FormInput from "../../components/form-input/form-input.component";
import {Input} from 'reactstrap'
import AddListingForm from "../../components/add-listing-form/add-listing-form.component";


const AddListingPage = (props)=>{


    return (
        <div >
            <span>Add listing page</span>
            <AddListingForm/>

        </div>
    )
}
export default AddListingPage