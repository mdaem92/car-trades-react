import {InventoryFiltersActionTypes} from "./inventory-filters.types";

const inventoryFiltersDefaultState = {
    isFixed:false,
    conditions:[],
    make:undefined,
    model:undefined,
    mileage:[],
    price:[],
    year:[],
    colors:[],
    fuelTypes:[],
    transmissions:[],
    prevOwners:[]
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