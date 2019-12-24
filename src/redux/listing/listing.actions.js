import ListingsActionTypes from "./listing.types";

export const addListing = (listing)=>({
    type:ListingsActionTypes.ADD_LISTING,
    listing
})
export const removeListing = (id)=>({
    type:ListingsActionTypes.REMOVE_LISTING,
    id
})
export const editListing = (id,updates)=>({
    type:ListingsActionTypes.EDIT_LISTING,
    id,
    updates
})