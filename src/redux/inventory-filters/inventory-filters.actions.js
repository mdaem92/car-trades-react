import {InventoryFiltersActionTypes} from "./inventory-filters.types";

export const toggleFixed = ()=>({
    type:InventoryFiltersActionTypes.TOGGLE_FIXED,
})
export const setFieldValue = (name,value)=>({
    type:InventoryFiltersActionTypes.SET_FIELD_VALUE,
    name,
    value
})