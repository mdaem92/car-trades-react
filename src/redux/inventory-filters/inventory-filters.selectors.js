import {createSelector}from 'reselect'

const inventorySelector = state=>state.inventoryFilters

export const isFixedSelector = createSelector(
    inventorySelector,
    (inventoryFilters)=>inventoryFilters.isFixed
)