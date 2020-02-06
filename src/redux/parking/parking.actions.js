import {ParkingActionTypes} from "./parking.types";

export const addToParking = (listing)=>({
    type:ParkingActionTypes.ADD_TO_PARKING,
    listing
})
export const removeFromParking = (id)=>({
    type:ParkingActionTypes.REMOVE_FROM_PARKING,
    id
})