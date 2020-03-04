import {CompareActionTypes} from "./compare.types"
import {AuthActionTypes} from '../auth/auth.types'

export default (state=[],action)=>{
    switch (action.type) {
        case CompareActionTypes.ADD_TO_COMPARE:
            return [
                ...state,
                action.listing
            ]
        case CompareActionTypes.REMOVE_FROM_COMPARE:
            const index = state.findIndex(item=>item.id===action.id)
            return [...state.slice(0,index),...state.slice(index+1)]
        case AuthActionTypes.RESET_PERSIST_DATA:
            return []
        default:
            return state
    }
}