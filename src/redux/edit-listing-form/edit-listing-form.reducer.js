import EditListingFormActionTypes from './edit-listing-form.types'


const editListingFormDefaultState = {
    
    id:undefined,
    condition:undefined,
    make:undefined,
    model:undefined,
    bodyType:undefined,
    seatCount:undefined,
    mileage:undefined,
    color:undefined,
    registered:undefined,
    imageFileList:undefined,
    fuelType:undefined,
    fuelEconomy:undefined,
    enginePower:undefined,
    engineCapacity:undefined,
    transmission:undefined,
    price:undefined,
    doneEditting:false
}

export default (state = editListingFormDefaultState,action)=>{
    switch(action.type){
        case EditListingFormActionTypes.SET_FIELD_VALUE:
            return{
                ...state,
                [action.name]:action.value
            }
            case EditListingFormActionTypes.SET_INITIAL_VALUES:
                return{
                    ...state,
                    ...action.values
                }
            case EditListingFormActionTypes.ADD_IMAGE:
                return{
                    ...state,
                    imageFileList:[...state.imageFileList,action.image]
                }
            case EditListingFormActionTypes.SET_FILE_LIST:
                return{
                    ...state,
                    imageFileList:action.fileList
                }
            case EditListingFormActionTypes.EDITTING_SUCCESS:
                return{
                    ...state,
                    doneEditting:action.doneEditting
                }
            default:
                return state
    }
}