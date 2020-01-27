import {takeLatest,call,all,put} from 'redux-saga/effects'
import ListingsActionTypes from './listing.types'
import {firestore} from "../../firebase/firebase.utils";
import {addListingFailure, addListingSuccess, fetchListingsFailure, fetchListingsSuccess} from "./listing.actions";
import {setFieldValue} from "../add-listing-form/add-listing-form.actions";
import {resetForm} from "../add-listing-form/add-listing-form.actions";

export function* addListingAsync({listingData}){
    console.log('from saga ',listingData )
    const {isSubmitted,currentStep,isLoading,imageFileList,...otherProps} =listingData
    const convertedImageList = imageFileList.map((obj)=> Object.assign({}, obj));
    yield console.log('add listing async')
    try{
        yield put(setFieldValue('loading',true))
        const document = yield firestore.collection('listings').add({...otherProps,imageFileList:convertedImageList})
        const {id}=document
        yield put(addListingSuccess({...otherProps,id,imageFileList:convertedImageList}))
        yield put(resetForm())
        // yield put(setFieldValue('loading',false))
    }catch(e){
        yield put(addListingFailure(e))
        yield put(setFieldValue('loading',false))

    }

}
const getListingsFromSnapshot = (snapshot)=>{
    return snapshot.docs.map((doc)=>{
        return {
            id:doc.id,
            ...doc.data()
        }

    })
}
export function* fetchListingsAsync(){
    console.log('fetching listings from database')
    try{
        const listingsRef =firestore.collection('listings')
        const snapshot = yield listingsRef.get()
        const listings = getListingsFromSnapshot(snapshot)
        yield console.log('received:',listings)
        yield put(fetchListingsSuccess(listings))
    }catch(e){
        yield put(fetchListingsFailure(e))
    }
}

export function* onFetchListingsStart(){
    yield takeLatest(
        ListingsActionTypes.FETCH_LISTINGS_START,
        fetchListingsAsync
    )
}
export function* onAddListingStart(){
    yield takeLatest(
        ListingsActionTypes.ADD_LISTING_START,
        addListingAsync
        )
}