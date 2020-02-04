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
        case ListingsActionTypes.FETCH_LISTINGS_START:
            return{
                ...state,
                isListingsLoading:true
            }
        case ListingsActionTypes.FETCH_LISTINGS_SUCCESS:
            return{
                ...state,
                listings:action.listings,
                isListingsLoading:false
            }
        case ListingsActionTypes.FETCH_LISTINGS_FAILURE:
            return{
                ...state,
                isListingsLoading:false,
                errorMessage:action.errorMessage
            }
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
        case ListingsActionTypes.TOGGLE_COMPARE:
            const comparedListingId = state.listings.findIndex(listing=>listing.id === action.id)
            const comparedListing = {...state.listings[comparedListingId],isCompared:!state.listings[comparedListingId].isCompared}
            return{
                ...state,
                listings:
                    [...state.listings.slice(0,comparedListingId), comparedListing, ...state.listings.slice(comparedListingId+1)]
            }
        case ListingsActionTypes.TOGGLE_PARKING:
            const parkedListingId = state.listings.findIndex(listing=>listing.id === action.id)
            const parkedListing = {...state.listings[parkedListingId],isParked:!state.listings[parkedListingId].isParked}
            return{
                ...state,
                listings:
                    [...state.listings.slice(0,parkedListingId), parkedListing, ...state.listings.slice(parkedListingId+1)]
            }
        default:
            return state
    }
}