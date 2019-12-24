import React, {useState} from 'react'
import FormSelect from "../form-select/form-select.component";
import FormInput from "../form-input/form-input.component";
import {carData, conditionData} from "../../carData/arrayData";
import {FormGroup} from './add-listing-form.styles'
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux'
import {addListing} from "../../redux/listing/listing.actions";


const AddListingForm = ({addListing})=>{
    const [state,setState]=useState({
        condition:'',
        make:'',
        model:'',
        mileage:0,
        registered:0,
        price:0,
        carData,

    })

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log('submitting',state )
        const {carData,...rest} = state
        addListing(rest)
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
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <FormSelect
                    isClearable
                    placeholder={'select condition'}
                    name={'condition'}
                    onChange={handleChange}
                    options={conditionData}

                />
                <FormSelect
                    isClearable
                    placeholder={'select make'}
                    name={'make'}
                    onChange={handleChange}
                    options={state.carData.makes}

                />
                <FormSelect
                    isClearable
                    placeholder={'select model'}
                    name={'model'}
                    onChange={handleChange}
                    options={state.make?state.carData.formattedData[state.make].models:[]}
                    isDisabled={!state.make}
                />

            </FormGroup>
            <FormInput
                name='mileage'
                type='number'
                // label='mileage'
                placeholder='mileage'
                // value={state.mileage}
                required
                handleChange={handleChange}
            />
            <FormInput
                name='price'
                type='number'
                // label='mileage'
                placeholder='price'
                // value={state.price}
                required
                handleChange={handleChange}
            />
            <FormInput
                name='registered'
                type='number'
                // label='mileage'
                placeholder='registered'
                // value={state.registered}
                required
                handleChange={handleChange}
            />
            <CustomButton
                // onClick={()=>console.log(state)}
                type='submit'
            >
                Submit
            </CustomButton>
        </form>
    )
}

const mapDispatchToProps = dispatch=>({
    addListing:listing=>dispatch(addListing(listing))
})
export default connect(undefined,mapDispatchToProps)(AddListingForm)