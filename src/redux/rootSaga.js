import {all,call} from 'redux-saga/effects'
import {authSagas} from "./auth/auth.sagas";
import {listingSagas} from './listing/listing.saga'

export default function* rootSaga(){
    yield all([
        call(listingSagas),
        call(authSagas)
    ])
}