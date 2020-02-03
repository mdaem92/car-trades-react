import {all,call} from 'redux-saga/effects'
import {onAddListingStart, onFetchListingsStart, onSetFieldValue,onAut} from "./listing/listing.saga";
import {authSagas} from "./auth/auth.sagas";

export default function* rootSaga(){
    yield all([
        call(onAddListingStart),
        call(onFetchListingsStart),
        call(authSagas)

    ])
}