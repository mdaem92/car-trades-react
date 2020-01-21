import AddListingFormActionTypes from './add-listing-form-types'
const addListingFormDefaultState = {
    currentStep:0,
    condition:undefined,
    isSubmitted:false,
    make:undefined,
    model:undefined,
    mileage:undefined,
    bodyType:undefined,
    seatCount:undefined,
    prevOwners:undefined,
    fuelEconomy:undefined,
    fuelType:undefined,
    engineCapacity:undefined,
    enginePower:undefined,
    transmission:undefined,
    loading:false
}

export default (state=addListingFormDefaultState,action)=>{
    switch (action.type) {

        case AddListingFormActionTypes.NEXT_STEP:
            return {
                ...state,
                currentStep:state.currentStep+1
            }
        case AddListingFormActionTypes.PREV_STEP:
            return{
                ...state,
                currentStep:state.currentStep-1
            }
        case AddListingFormActionTypes.SET_FIELD_VALUE:
            return{
                ...state,
                [action.name]:action.value
            }
        case AddListingFormActionTypes.SET_SUBMITTED:
            return {
                ...state,
                isSubmitted:action.isSubmitted
            }
        default:
            return state

    }

}