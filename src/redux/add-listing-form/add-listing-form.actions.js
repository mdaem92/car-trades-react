
import AddListingFormActionTypes from './add-listing-form-types'
export const setPrevStep = ()=>({
    type:AddListingFormActionTypes.PREV_STEP,
})
export const setNextStep = ()=>({
    type:AddListingFormActionTypes.NEXT_STEP,
})
export const setFieldValue = (name,value)=>({
    type:AddListingFormActionTypes.SET_FIELD_VALUE,
    name,
    value,
})
export const resetForm = ()=>({
    type:AddListingFormActionTypes.RESET_FORM,
})
export const addImage = (image)=>({
    type:AddListingFormActionTypes.ADD_IMAGE,
    image
})
export const setFileList = (fileList)=>({
    type:AddListingFormActionTypes.SET_FILE_LIST,
    fileList
})
export const setPrice = (price)=>({
    type:AddListingFormActionTypes.SET_PRICE,
    price,
})
export const requestAppraisal = ()=>({
    type:AddListingFormActionTypes.REQUEST_APPRAISAL,
})