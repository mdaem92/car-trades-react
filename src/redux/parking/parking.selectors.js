import {createSelector} from "reselect";

export const parkingSelector = state=>state.parking

export const isParkedListingSelector =(state,id)=> createSelector(
    parkingSelector,
    parking=>parking.findIndex(parkedListing=>parkedListing.id===id)>=0
)(state)

export const parkingCountSelector = createSelector(
    parkingSelector,
    parking=>parking.length
)