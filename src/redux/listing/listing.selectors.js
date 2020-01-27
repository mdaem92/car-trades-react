import {createSelector}from 'reselect'

 const listingsSelector =state=>state.listings


export const inventoryListingsSelector = createSelector(
    listingsSelector,
    listings=>listings.listings
)
export const isListingsLoadingSelector = createSelector(
    listingsSelector,
    listings=>listings.isListingsLoading
)

// export const getFieldSelector = createSelector(
//     listingsSelector,
// )


