import {InventoryFiltersActionTypes} from "./inventory-filters.types";

const inventoryFiltersDefaultState = {
    isFixed:false,
    openKeys:['makeModel','specs','more'],
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
                // [action.name]:[...state[action.name],action.value]
                [action.name]:action.value
            }
        case InventoryFiltersActionTypes.APPEND_OPTION:
            return{
                ...state,
                [action.listName]:[...state[action.listName],action.value]
            }
        case InventoryFiltersActionTypes.REMOVE_OPTION:
            console.log('reducer received: ',action.listName)
            return{
                ...state,
                [action.listName]:state[action.listName].filter(item=>item!==action.value)
            }
        case InventoryFiltersActionTypes.RESET_FILTERS:{
            return inventoryFiltersDefaultState
        }
        case InventoryFiltersActionTypes.SET_OPEN_KEYS:
            return {
                ...state,
                openKeys:action.keys
            }
        default:
            return state

    }
}