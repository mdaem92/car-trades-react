import {createSelector}from 'reselect'

export const comparedListingsSelector = state=>state.compare
// const listingsSelector = state=>state.listings.listings
export const isComparedListingSelector =(state,id) => createSelector(
    comparedListingsSelector,
    (compare)=>compare.findIndex(comparedListing=>comparedListing.id===id)>=0
)(state)

