import UserAccountActionTypes from './user-account.types'
const userAccountDefaultState = {
    current:'settings',
    userData:{
        displayName:'',
    }
}

export default (state=userAccountDefaultState,action)=>{
    switch(action.type){
        case UserAccountActionTypes.SET_CURRENT:
            return{
                ...state,
                current:action.current
            }
        default:
            return state
    }
}