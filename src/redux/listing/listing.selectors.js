import {createSelector}from 'reselect'

 const listingsSelector =state=>state.listings


export const inventoryListingsSelector = createSelector(
    listingsSelector,
    listings=>listings.listings
)

// export const getFieldSelector = createSelector(
//     listingsSelector,
// )


