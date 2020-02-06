import {CompareActionTypes} from "./compare.types";

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
        default:
            return state
    }
}