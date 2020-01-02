import {combineReducers} from 'redux'
import listingsReducer from './listing/listing.reducer'

export default combineReducers({
    listings:listingsReducer,
})