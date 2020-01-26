import ListingsActionTypes from "./listing.types";
import {editListing, removeListing} from "./listing.utils";

const listingReducerDefault = {
    listings:[],
    isListingsLoading:false,
    errorMessage:undefined
}
export default (state=listingReducerDefault,action)=>{
    switch (action.type) {
        case ListingsActionTypes.ADD_LISTING:
            return{
                ...state,
                listings: [
                    ...state.listings,
                    action.listing
                ]
            }
        case ListingsActionTypes.EDIT_LISTING:
            return {
                ...state,
                listings: editListing(state.listings, action.id, action.updates)
            }
        case ListingsActionTypes.REMOVE_LISTING:
            return{
                ...state,
                listings:removeListing(state.listings,action.id)
            }
        // case ListingsActionTypes.ADD_LISTING_START:
        //     return{
        //         ...state,
        //         isListingsLoading:true
        //     }
        case ListingsActionTypes.ADD_LISTING_SUCCESS:
            return{
                ...state,
                listings:[
                    ...state.listings,
                    action.newListing
                ],
                isListingsLoading:false
            }
        case ListingsActionTypes.ADD_LISTING_FAILURE:
            return{
                ...state,
                errorMessage:action.errorMessage
            }
        default:
            return state
    }
}