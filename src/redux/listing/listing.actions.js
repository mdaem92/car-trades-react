import ListingsActionTypes from "./listing.types";
// const listingDefault = {
//     make:'',
//     model:'',
//     mileage:undefined,
//     year:undefined,
//     body:'',
//     seatNumber:undefined,
//     prevOwners:undefined,
//     fuelEconomy:undefined,
//     fuelType:'',
//     engineCapacity: undefined,
//     enginePower:undefined,
//     transmission:''
//
// }
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