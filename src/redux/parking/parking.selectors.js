import {createSelector} from "reselect";

const parkingSelector = state=>state.parking

export const isParkedListingSelector =(state,id)=> createSelector(
    parkingSelector,
    parking=>parking.findIndex(parkedListing=>parkedListing.id===id)>=0
)(state)