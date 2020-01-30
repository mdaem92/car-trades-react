import {InventoryFiltersActionTypes} from "./inventory-filters.types";

export const toggleFixed = ()=>({
    type:InventoryFiltersActionTypes.TOGGLE_FIXED,
})
export const setFieldValue = (name,value)=>({
    type:InventoryFiltersActionTypes.SET_FIELD_VALUE,
    name,
    value
})

export const appendOption=(listName,value)=>({
    type:InventoryFiltersActionTypes.APPEND_OPTION,
    listName,
    value
})
export const removeOption = (listName,value)=>({
    type:InventoryFiltersActionTypes.REMOVE_OPTION,
    listName,
    value
})