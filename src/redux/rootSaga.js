import {all,call} from 'redux-saga/effects'
import {onAddListingStart, onFetchListingsStart} from "./listing/listing.saga";


export default function* rootSaga(){
    yield all([
        call(onAddListingStart),
        call(onFetchListingsStart),
    ])
}