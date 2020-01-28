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
    // prevOwners:undefined,
    fuelEconomy:undefined,
    fuelType:undefined,
    engineCapacity:undefined,
    enginePower:undefined,
    transmission:undefined,
    imageFileList:[],
    price:undefined,
    isAppraisalRequested:false,
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
        case AddListingFormActionTypes.RESET_FORM:
            return addListingFormDefaultState
        case AddListingFormActionTypes.ADD_IMAGE:
            return{
                ...state,
                imageFileList:[...state.imageFileList,action.image]
            }
        case AddListingFormActionTypes.SET_PRICE:
            return{
                ...state,
                price:action.price,
                isAppraisalRequested:false
            }
        case AddListingFormActionTypes.SET_FILE_LIST:
            return{
                ...state,
                imageFileList:action.fileList
            }
        case AddListingFormActionTypes.REQUEST_APPRAISAL:
            return{
                ...state,
                price:undefined,
                isAppraisalRequested:true
            }
        default:
            return state

    }

}