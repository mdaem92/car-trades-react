import ListingsActionTypes from "./listing.types";
import {editListing, removeListing} from "./listing.utils";

const listingReducerDefault = {
    listings:[],
    isListingsLoading:true,
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
        default:
            return state
    }
}