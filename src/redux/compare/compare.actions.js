import {CompareActionTypes} from "./compare.types";

export const addToCompare = (listing)=>({
    type:CompareActionTypes.ADD_TO_COMPARE,
    listing
})

export const removeFromCompare = (id)=>({
    type:CompareActionTypes.REMOVE_FROM_COMPARE,
    id
})