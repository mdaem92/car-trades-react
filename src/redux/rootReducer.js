import {combineReducers} from 'redux'
import listingsReducer from './listing/listing.reducer'
import inventoryFiltersReducer from './inventory-filters/inventory-filters.reducer'

export default combineReducers({
    listings:listingsReducer,
    inventoryFilters:inventoryFiltersReducer
})