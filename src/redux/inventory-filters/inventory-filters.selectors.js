import {createSelector}from 'reselect'

export const inventoryFiltersSelector = state=>state.inventoryFilters

export const isFixedSelector = createSelector(
    inventoryFiltersSelector,
    (inventoryFilters)=>inventoryFilters.isFixed
)