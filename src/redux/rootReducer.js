import {combineReducers} from 'redux'
import listingsReducer from './listing/listing.reducer'
import inventoryFiltersReducer from './inventory-filters/inventory-filters.reducer'
import addListingFormReducer from './add-listing-form/add-listing-form.reducer'
import authReducer from './auth/auth.reducer'
import compareReducer from './compare/compare.reducer'
import parkingReducer from './parking/parking.reducer'


export default combineReducers({
    listings:listingsReducer,
    inventoryFilters:inventoryFiltersReducer,
    addListingForm:addListingFormReducer,
    auth:authReducer,
    compare:compareReducer,
    parking:parkingReducer
})