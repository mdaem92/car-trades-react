import EditListingFormActionTypes from "./edit-listing-form.types";

export const setEditListingFieldValue = (name,value)=>({
    type:EditListingFormActionTypes.SET_FIELD_VALUE,
    name,
    value
})

export const setInitialValues =(values)=>({
    type:EditListingFormActionTypes.SET_INITIAL_VALUES,
    values
})

export const editListingAddImage = (image)=>({
    type:EditListingFormActionTypes.ADD_IMAGE,
    image
})

export const editListingSetFileList = (fileList)=>({
    type:EditListingFormActionTypes.SET_FILE_LIST,
    fileList
})
export const setDrawerVisibility = (visibility)=>({
    type:EditListingFormActionTypes.SET_DRAWER_VISIBILITY,
    visibility
})