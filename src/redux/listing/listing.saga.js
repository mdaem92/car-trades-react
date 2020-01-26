import {takeLatest,call,all,put} from 'redux-saga/effects'
import ListingsActionTypes from './listing.types'
import {firestore} from "../../firebase/firebase.utils";
import {addListingFailure, addListingSuccess} from "./listing.actions";
import {setFieldValue} from "../add-listing-form/add-listing-form.actions";
import {resetForm} from "../add-listing-form/add-listing-form.actions";

export function* addListingAsync({listingData}){
    console.log('from saga')
    const {isSubmitted,currentStep,isLoading,...otherProps} =listingData
    yield console.log('add listing async')
    try{
        yield put(setFieldValue('loading',true))
        console.log(listingData)
        const document = yield firestore.collection('listings').add(otherProps)
        const {id}=document
        yield put(addListingSuccess({...otherProps,id}))
        yield put(resetForm())
        yield put(setFieldValue('loading',false))
    }catch(e){
        yield put(addListingFailure(e))
    }

}

export function* onAddListingStart(){
    yield takeLatest(
        ListingsActionTypes.ADD_LISTING_START,
        addListingAsync
        )
}