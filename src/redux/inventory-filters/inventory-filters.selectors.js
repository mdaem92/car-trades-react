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
  
        const {isFixed,openKeys,sortBy,sortType,...filters} = inventoryFilters
        const values = Object.values(filters)
        console.log(`values: ${values}`)
        console.log('filters: ',filters)

        const cases = {
            make:filters.make?`${filters.make} ${filters.model?filters.model:''} `:undefined,
            // model:filters.model?`${filters.model}`:undefined,
            condition:filters.condition? `Condition: ${filters.condition}`:undefined,
            mileage: !!filters.mileage[1]?`Mileage: ${filters.mileage[0]}Km to ${filters.mileage[1]}Km`:undefined,
            price:!!filters.price[1]?`Price:$${filters.price[0]} to $${filters.price[1]}`:undefined,
            year:!!filters.year[1] ?`Year: ${filters.year[0]} to ${filters.year[1]}`:undefined,
            // year: filters.year[1]>1950 ?`Year: ${filters.year[0]} to ${filters.year[1]}`:undefined,
            // colors:!!filters.colors.length?`Colors: ${filters.colors.toString()}`:undefined,
            colors:!!filters.colors.length?filters.colors.length===5?('All colors'):(`Colors: ${filters.colors.toString()}`):undefined,
            // fuelTypes:!!filters.fuelTypes.length?`Fuel: ${filters.fuelTypes.toString()}`:undefined,
            fuelTypes:!!filters.fuelTypes.length?filters.fuelTypes.length===5?('All fuel types'):(`Fuel: ${filters.fuelTypes.toString()}`):undefined,

            // transmissions:!!filters.transmissions.length?`Transmission: ${filters.transmissions.toString()}`:undefined,
            transmissions:!!filters.transmissions.length?filters.transmissions.length===3?('All transmissions'):(`Transmission: ${filters.transmissions.toString()}`):undefined,

        }
        const activeFilters = Object.keys(filters).map(filter=>{
            // console.log('fff',filter)
            return cases[filter]
        })

        console.log('active filters: ', activeFilters, 'cases: ',cases)
        console.log('active filters: ',activeFilters.filter(filter=>!!filter))

        return activeFilters.filter(filter=>!!filter)

        // const results = keys.filter(key=>!!!values[key])
        // console.log('active filters: ',results)
        // return results

    }
)
export const paginationCurrentPageSelector = createSelector(
    inventoryFiltersSelector,
    (inventoryFilters)=>inventoryFilters.currentPage
)
export const paginationPageSizeSelector = createSelector(
    inventoryFiltersSelector,
    (inventoryFilters)=>inventoryFilters.pageSize
)
