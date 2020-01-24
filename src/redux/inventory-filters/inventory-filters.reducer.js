import {InventoryFiltersActionTypes} from "./inventory-filters.types";

const inventoryFiltersDefaultState = {
    isFixed:false
}

export default (state=inventoryFiltersDefaultState,action)=>{
    switch (action.type) {
        case InventoryFiltersActionTypes.TOGGLE_FIXED:
            return {
                ...state,
                isFixed:!state.isFixed
            }
        default:
            return state

    }
}