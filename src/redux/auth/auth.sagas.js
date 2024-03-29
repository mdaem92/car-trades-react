import {call,all,put,takeLatest} from 'redux-saga/effects'
import {AuthActionTypes} from "./auth.types";
import {auth, createUserProfile, getUserAuth, googleAuthProvider} from "../../firebase/firebase.utils";
import {
    signInFailure,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailure,
    signUpSuccess,
    resetPersistData,
    setLoading
} from "./auth.actions";

function* getSnapShotFromUserAuth(userAuth,additionalUserData){

    try{
        const userRef = yield call(createUserProfile,userAuth,additionalUserData)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({
            id:userSnapshot.id,
            ...userSnapshot.data()
        }))
        yield put(setLoading(false))
        yield put(resetPersistData())
    }catch(errorMessage){
        yield put(signInFailure(errorMessage))
        yield put(setLoading(false))
    }


}

 function* googleSignInAsync(){
    try{
      const {user} = yield auth.signInWithPopup(googleAuthProvider)
      yield getSnapShotFromUserAuth(user)
    }catch(e){
        yield put(signInFailure(e))
    }
}
function* emailSignInAsync({email,password}){
    console.log('from email sign in: ',email,password)
    try{
        yield put(setLoading(true))
        const {user} = yield auth.signInWithEmailAndPassword(email,password)
        yield call(getSnapShotFromUserAuth,user)
    }catch (e) {
        // yield out(setAuthLoading(false))
        yield put(signInFailure(e))
        
    }
}
 function* checkUserAuth(){
    try{
        const userAuth = yield getUserAuth()
        yield console.log('checkuserauth:',userAuth)
        if(!userAuth)return
        yield getSnapShotFromUserAuth(userAuth)
    }catch (e) {
        yield put(signInFailure(e))
    }
}
function* signUpAsync({email,password,displayName,photoURL}){
    console.log('from signup: ',email,password,displayName)
    try{
        
        const{user}=yield auth.createUserWithEmailAndPassword(email,password)
        yield user.updateProfile({displayName,photoURL})
        yield getSnapShotFromUserAuth(user)
        console.log('from signup user: ',user)
        
        yield put(signUpSuccess(user))
    }catch (e) {
        yield put(signUpFailure(e))
    }
}
function* signOutAsync(){
    try{
        yield auth.signOut
        yield put(signOutSuccess())

    }catch (e) {
        yield put(signOutFailure(e))
    }
}
function* onCheckUserSession(){
    yield takeLatest(
        AuthActionTypes.CHECK_USER_SESSION,
        checkUserAuth
    )
}

function* onGoogleSignInStart(){
    yield takeLatest(
        AuthActionTypes.GOOGLE_SIGN_IN_START,
        googleSignInAsync
    )
}
function* onEmailSignInStart(){
    yield takeLatest(
        AuthActionTypes.EMAIL_SIGN_IN_START,
        emailSignInAsync

    )
}
function* onSignUpStart (){
    yield takeLatest(
        AuthActionTypes.SIGN_UP_START,
        signUpAsync
    )
}
function* onSignOutStart(){
    yield takeLatest(
        AuthActionTypes.SIGN_OUT_START,
        signOutAsync
    )
}
export function* authSagas (){
    yield all([
        call(onGoogleSignInStart),
        call(onCheckUserSession),
        call(onEmailSignInStart),
        call(onSignUpStart),
        call(onSignOutStart)
    ])
}