import {AuthActionTypes} from './auth.types'
const defaultAuthReducer = {
    currentUser:undefined,
    errorMessage:undefined
}

export default (state=defaultAuthReducer,action)=>{
    switch (action.type) {

        case AuthActionTypes.SIGN_IN_SUCCESS:
        case AuthActionTypes.SIGN_UP_SUCCESS:
            return{
                ...state,
                currentUser:action.user,
                errorMessage:undefined
            }
        case AuthActionTypes.SIGN_IN_FAILURE:
        case AuthActionTypes.SIGN_UP_FAILURE:
        case AuthActionTypes.SIGN_OUT_FAILURE:
            return {
                ...state,
                errorMessage:action.errorMessage.message
            }
        case AuthActionTypes.SIGN_OUT_SUCCESS:
            return {
                ...state,
                currentUser:undefined,
                errorMessage:undefined
            }
            case AuthActionTypes.RESET_AUTH_ERROR:
                return{
                    ...state,
                    errorMessage:undefined
                }
        default:
            return state
    }
}