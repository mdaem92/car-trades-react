import {takeLatest,call,all,put} from 'redux-saga/effects'
import ListingsActionTypes from './listing.types'
import {firestore} from "../../firebase/firebase.utils";
import {addListingFailure, addListingSuccess, fetchListingsFailure, fetchListingsSuccess, fetchOwnListingsSuccess, fetchOwnListingsFailure} from "./listing.actions";
import {setFieldValue} from "../add-listing-form/add-listing-form.actions";
import {resetForm} from "../add-listing-form/add-listing-form.actions";

export function* addListingAsync({listingData}){
    const {isSubmitted,currentStep,isLoading,userId,imageFileList,...otherProps} =listingData
    const convertedImageList = imageFileList.map((obj)=> Object.assign({}, obj));
    console.log()
    try{
        yield put(setFieldValue('loading',true))
        const document = yield firestore.collection('listings').add({...otherProps,imageFileList:convertedImageList})
        const {id}=document
        yield firestore.collection(`users/${userId}/own-listings`).add({...otherProps,imageFileList:convertedImageList})
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

export function* fetchOwnListingsAsync({id}){
    const ownListingsRef = firestore.doc(`users/${id}`).collection('own-listings')
    try{
        const snapshot = yield ownListingsRef.get()
        const ownListings = getListingsFromSnapshot(snapshot)
        yield put(fetchOwnListingsSuccess(ownListings))
    }catch(e){
        yield put(fetchOwnListingsFailure(e))
    }
    // try{
    //     const ownListingsRef = firestore.collection(`users/${id}/my-listings`)
    //     const snapshot = yield ownListingsRef.get()
    //     const ownListings = yield getListingsFromSnapshot(snapshot)
    //     yield console.log('received own listings: ',ownListings)
    //     yield put(fetchOwnListingsSuccess(ownListings))
    // }catch(error){
    //     yield put(fetchOwnListingsFailure(error))
    // }
}

export function* onFetchListingsStart(){
    yield takeLatest(
        ListingsActionTypes.FETCH_LISTINGS_START,
        fetchListingsAsync
    )
}

export function* onFetchOwnListingsStart(){
    yield takeLatest(
        ListingsActionTypes.FETCH_OWN_LISTING_START,
        fetchOwnListingsAsync
    )
}




export function* onAddListingStart(){
    yield takeLatest(
        ListingsActionTypes.ADD_LISTING_START,
        addListingAsync
        )
}
export function* listingSagas (){
    yield all([
        call(onAddListingStart),
        call(onFetchListingsStart),
        call(onFetchOwnListingsStart)
    ])
}