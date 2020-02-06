import {ParkingActionTypes} from "./parking.types";

export default (state=[],action)=>{
    switch (action.type) {
        case ParkingActionTypes.ADD_TO_PARKING:
            return [...state,action.listing]
        case ParkingActionTypes.REMOVE_FROM_PARKING:
            const index = state.findIndex(item=>item.id===action.id)
            return [...state.slice(0,index),...state.slice(index+1)]
        default:
            return state
    }
}