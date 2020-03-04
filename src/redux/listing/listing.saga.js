import {takeLatest,call,all,put} from 'redux-saga/effects'
import ListingsActionTypes from './listing.types'
import {firestore} from "../../firebase/firebase.utils";
import {
    addListingFailure,
    addListingSuccess,
    fetchListingsFailure,
    fetchListingsSuccess,
    fetchOwnListingsSuccess,
    fetchOwnListingsFailure,
    editListingSuccess,
    editListingFailure
        } from "./listing.actions";
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
        // yield firestore.collection(`users/${userId}/own-listings`).add({...otherProps,imageFileList:convertedImageList})
        // this will set the id of each own listing to the id of each public listing
        // recall that currently they are different in the database
        yield firestore.doc(`users/${userId}/own-listings/${id}`).set({...otherProps,imageFileList:convertedImageList})

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
        yield put(fetchListingsSuccess(listings))
    }catch(e){
        yield put(fetchListingsFailure(e))
    }
}

export function* editListingAsync({id,userId,updates:{imageFileList,...otherProps}}){
    const ownListingRef = firestore.doc(`users/${userId}/own-listings/${id}`)
    const publicListingRef = firestore.doc(`listings/${id}`)
    const convertedImageList = imageFileList.map((obj)=> Object.assign({}, obj));

    
    try{

        // yield console.log('public ref:',publicListingRef);
        const ownSnapshot = yield ownListingRef.update({imageFileList:convertedImageList,...otherProps})
        const publicSnapshot = yield publicListingRef.update({imageFileList:convertedImageList,...otherProps})
        yield console.log('public snapshot:',publicSnapshot); 
        yield console.log('own snapshot:',ownSnapshot);       
        yield put(editListingSuccess(id,{imageFileList:convertedImageList,...otherProps}))
    }catch(e){
        yield put(editListingFailure(e))
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
export function* onEditListingStart(){
    yield takeLatest(
        ListingsActionTypes.EDIT_LISTING_START,
        editListingAsync
    )
}
export function* listingSagas (){
    yield all([
        call(onAddListingStart),
        call(onFetchListingsStart),
        call(onFetchOwnListingsStart),
        call(onEditListingStart)
    ])
}