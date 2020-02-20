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
export const addListingStart = (listingData)=>({
    type:ListingsActionTypes.ADD_LISTING_START,
    listingData
})
export const addListingSuccess = (newListing)=>({
    type:ListingsActionTypes.ADD_LISTING_SUCCESS,
    newListing
})
export const addListingFailure = (errorMessage)=>({
    type:ListingsActionTypes.ADD_LISTING_FAILURE,
    errorMessage
})

export const fetchListingsStart = ()=>({
    type:ListingsActionTypes.FETCH_LISTINGS_START
})
export const fetchListingsSuccess = (listings)=>({
    type:ListingsActionTypes.FETCH_LISTINGS_SUCCESS,
    listings
})
export const fetchListingsFailure = (errorMessage)=>({
    type:ListingsActionTypes.FETCH_LISTINGS_FAILURE,
    errorMessage
})

export const fetchOwnListingsStart = (id)=>({
    type:ListingsActionTypes.FETCH_OWN_LISTING_START,
    id
})
export const fetchOwnListingsSuccess = (listings)=>({
    type:ListingsActionTypes.FETCH_OWN_LISTING_SUCCESS,
    listings
})
export const fetchOwnListingsFailure = (errorMessage)=>({
    type:ListingsActionTypes.FETCH_OWN_LISTING_FAILURE,
    errorMessage
})