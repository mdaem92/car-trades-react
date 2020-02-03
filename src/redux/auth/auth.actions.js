import {AuthActionTypes} from './auth.types'


export const googleSignInStart = ()=>({
    type:AuthActionTypes.GOOGLE_SIGN_IN_START
})

export const signInSuccess = (user)=>({
    type:AuthActionTypes.SIGN_IN_SUCCESS,
    user
})
export const signInFailure  = (errorMessage)=>({
    type:AuthActionTypes.SIGN_IN_FAILURE,
    errorMessage
})
export const emailSignInStart = (emailPassword)=>({
    type:AuthActionTypes.EMAIL_SIGN_IN_START,
    emailPassword
})

export const checkUserSession = ()=>({
    type:AuthActionTypes.CHECK_USER_SESSION
})

export const signOutStart = ()=>({
    type:AuthActionTypes.SIGN_OUT_START,
})
export const signOutSuccess = ()=>({
    type:AuthActionTypes.SIGN_OUT_SUCCESS,
})
export const signOutFailure = (errorMessage)=>({
    type:AuthActionTypes.SIGN_OUT_FAILURE,
    errorMessage
})

export const signUpStart=(credentials)=>({
    type:AuthActionTypes.SIGN_UP_START,
    credentials
})
export const signUpSuccess=(user)=>({
    type:AuthActionTypes.SIGN_UP_SUCCESS,
    user
})
export const signUpFailure=(errorMessage)=>({
    type:AuthActionTypes.SIGN_UP_FAILURE,
    errorMessage
})