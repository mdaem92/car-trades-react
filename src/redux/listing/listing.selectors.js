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

export const isListingsCollectedSelector = createSelector(
    inventoryListingsSelector,
    listings=>{
        console.log('size of inventory listings: ',listings.length )
        return listings.length>0
    }
)


