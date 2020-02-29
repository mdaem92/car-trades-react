import {InventoryFiltersActionTypes} from "./inventory-filters.types";
import moment from 'moment'
const thisYear = parseInt(moment().format('YYYY'))
const inventoryFiltersDefaultState = {
    isFixed:false,
    openKeys:['makeModel','specs','more'],
    condition:undefined,
    make:undefined,
    model:undefined,
    mileage:[0,0],
    price:[0,0],
    year:[1950,thisYear],
    colors:[],
    fuelTypes:[],
    transmissions:[],
    sortBy:'price',
    sortType:'asc',
    currentPage:1,
    pageSize:10
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
                currentPage:1,
                // [action.name]:[...state[action.name],action.value]
                [action.name]:action.value
            }
        case InventoryFiltersActionTypes.APPEND_OPTION:
            return{
                ...state,
                currentPage:1,
                [action.listName]:[...state[action.listName],action.value]
            }
        case InventoryFiltersActionTypes.REMOVE_OPTION:
            console.log('reducer received: ',action.listName)
            return{
                ...state,
                [action.listName]:state[action.listName].filter(item=>item!==action.value)
            }
        case InventoryFiltersActionTypes.RESET_FILTERS:{
            return {
                ...inventoryFiltersDefaultState,
                isFixed:state.isFixed,
                sortBy: state.sortBy,
                sortType:state.sortType
            }
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