import {InventoryFiltersActionTypes} from "./inventory-filters.types";

const inventoryFiltersDefaultState = {
    isFixed:false,
    condition:'new',
    make:undefined,
    model:undefined,
    mileage:[0,0],
    price:[0,0],
    year:[0,0],
    colors:[],
    fuelTypes:[],
    transmissions:[],
    sortBy:'price',
    sortType:'asc'
}

export default (state=inventoryFiltersDefaultState,action)=>{
    switch (action.type) {
        case InventoryFiltersActionTypes.TOGGLE_FIXED:
            return {
                ...state,
                isFixed:!state.isFixed
            }
        case InventoryFiltersActionTypes.SET_FIELD_VALUE:
            return{
                ...state,
                [action.name]:action.value
            }
        default:
            return state

    }
}