import {createSelector}from 'reselect'

export const inventoryFiltersSelector = state=>state.inventoryFilters

export const isFixedSelector = createSelector(
    inventoryFiltersSelector,
    (inventoryFilters)=>inventoryFilters.isFixed
)
export const sortSelector = createSelector(
    inventoryFiltersSelector,
    inventoryFilters=>({sortType:inventoryFilters.sortType,sortBy:inventoryFilters.sortBy})
)