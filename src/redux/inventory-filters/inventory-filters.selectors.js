import {createSelector}from 'reselect'

export const inventoryFiltersSelector = state=>state.inventoryFilters

export const isFixedSelector = createSelector(
    inventoryFiltersSelector,
    (inventoryFilters)=>inventoryFilters.isFixed
)
export const sortSelector = createSelector(
    inventoryFiltersSelector,
    inventoryFilters=>({sortType:inventoryFilters.sortType,sortBy:inventoryFilters.sortBy})
)
export const inventoryActiveFiltersTagSelector = createSelector(
    inventoryFiltersSelector,
    inventoryFilters=>{
        // const values = Object.values(inventoryFilters)
        //         // const keys = Object.keys(inventoryFilters)
        //         // return {values,keys}
        // const result = Object.keys(inventoryFilters).map(filter=>inventoryFilters[filter])
        const {isFixed,openKeys,sortBy,sortType,...filters} = inventoryFilters
        // console.log('active filters: ', inventoryFilters)
        const keys = Object.keys(filters)
        const values = Object.values(filters)
        console.log(`values: ${values}`)
        console.log('filters: ',filters)

        const cases = {
            make:filters.make?`${filters.make} ${filters.model} `:undefined,
            // model:filters.model?`${filters.model}`:undefined,
            condition:filters.condition? `Condition: ${filters.condition}`:undefined,
            mileage: !!filters.mileage[1]?`Mileage: ${filters.mileage[0]}Km to ${filters.mileage[1]}Km`:undefined,
            price:!!filters.price[1]?`Price:$${filters.price[0]} to $${filters.price[1]}`:undefined,
            year:!!filters.year[1] && filters.year[1]>0?`Year: ${filters.year[0]} to ${filters.year[1]}`:undefined,
            colors:!!filters.colors.length?`Colors: ${filters.colors.toString()}`:undefined,
            fuelTypes:!!filters.fuelTypes.length?`${filters.fuelTypes.toString()}`:undefined,
            transmissions:!!filters.transmissions.length?`${filters.transmissions.toString()}`:undefined,
        }
        const activeFilters = Object.keys(filters).map(filter=>{
            console.log('fff',filter)
            return cases[filter]
        })

        console.log('active filters: ', Object.keys(filters),cases)

        return activeFilters.filter(filter=>!!filter)

        // const results = keys.filter(key=>!!!values[key])
        // console.log('active filters: ',results)
        // return results


    }
)