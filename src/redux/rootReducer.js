import {combineReducers} from 'redux'
import listingsReducer from './listing/listing.reducer'
import inventoryFiltersReducer from './inventory-filters/inventory-filters.reducer'
import addListingFormReducer from './add-listing-form/add-listing-form.reducer'
import authReducer from './auth/auth.reducer'

export default combineReducers({
    listings:listingsReducer,
    inventoryFilters:inventoryFiltersReducer,
    addListingForm:addListingFormReducer,
    auth:authReducer
})