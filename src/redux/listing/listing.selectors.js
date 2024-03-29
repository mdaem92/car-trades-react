import {createSelector}from 'reselect'

const listingsSelector =state=>state.listings
const filtersSelector = state=>state.inventoryFilters

export const inventoryListingsSelector = createSelector(
    listingsSelector,
    listings=>listings.listings
)
export const isListingsLoadingSelector = createSelector(
    listingsSelector,
    listings=>listings.isListingsLoading
)

export const isListingsCollectedSelector = createSelector(
    inventoryListingsSelector,
    listings=>{
        // console.log('size of inventory listings: ',listings.length )
        return listings.length>0
    }
)
export const filteredListingsSelector = createSelector(
    inventoryListingsSelector,
    filtersSelector,
    (listings,{make,model,mileage,price,year,colors,transmissions,fuelTypes,condition,sortBy,sortType})=>{
        const results= listings.filter(listing=>{
            const makeMatch = make?listing.make.toLowerCase()===make.toLowerCase():true
            const modelMatch = model? (model.trim().toLowerCase()===listing.model.trim().toLowerCase()||(/(\b[1-9]|[A-Z]) ([^\s]+)\b/.test(model.trim().toLowerCase()) && model.startsWith(listing.model.trim().toLowerCase()[0]))):true
            const mileageMatch = !!mileage[1]?(listing.mileage >= mileage[0] && (listing.mileage <= mileage[1] || mileage[1]>=200000 )):(listing.mileage>=mileage[0])
            const priceMatch = !!price[1]?(listing.price >= price[0] && (listing.price <= price[1] || price[1]>=150000)):(listing.price>=price[0])
            const convertedRegistered = parseInt(listing.registered.slice(0,4))
            // console.log('from selector: ',typeof listing.registered, listing.registered)
            const yearMatch = !!year[1]?(convertedRegistered>=year[0] && convertedRegistered<=year[1]):(convertedRegistered>=year[0])
            const colorsMatch = !!colors.length?colors.includes(listing.color.toLowerCase())||colors[0]==='color':true
            const transmissionsMatch = !!transmissions.length?transmissions.includes(listing.transmission.toLowerCase())||transmissions[0]==='transmission':true
            const fuelTypesMatch = !!fuelTypes.length?fuelTypes.includes(listing.fuelType.toLowerCase())||fuelTypes[0]==='fuel':true
            const conditionMatch = condition? listing.condition.toLowerCase()===condition.toLowerCase():true
            return makeMatch && modelMatch && conditionMatch && mileageMatch &&priceMatch && yearMatch && colorsMatch && transmissionsMatch && fuelTypesMatch && conditionMatch

        }).sort((a,b)=>{
            if(sortBy==='mileage'){
                if(sortType==='desc'){
                    return a.mileage<b.mileage?1:-1
                }else{
                    return a.mileage<b.mileage?-1:1
                }
            } else if(sortBy==='year'){
                if(sortType==='desc'){
                    return a.registered<b.registered?1:-1
                }else {
                    return a.registered<b.registered?-1:1
                }
                // otherwise its price
            } else {
                if(sortType==='desc'){
                    return parseInt(a.price)<parseInt(b.price)?1:-1
                }else {
                    return parseInt(a.price)<parseInt(b.price)?-1:1
                }

            }
        })
        return results
    }
)

export const filteredListingsLengthSelector = createSelector(
    filteredListingsSelector,
    listings=>listings?listings.length:0
)
export const paginationSelector = createSelector(
    filtersSelector,
    ({currentPage,pageSize})=>{return {currentPage,pageSize}}
)
export const paginatedFilteredListingsSelector = createSelector(
    filteredListingsSelector,
    paginationSelector,
    (listings,{currentPage,pageSize})=>{
        const from = (currentPage-1)*pageSize
        const to = from +pageSize
        return listings.slice(from,to)
    }
)

export const myListingsSelector = createSelector(
    listingsSelector,
    listings=>listings.myListings
)

export const selectListingById = (state,id)=>createSelector(

)(state)
export const myListingsCountSelector = createSelector(
    myListingsSelector,
    myListings=>myListings.length
)
export const isOwnListingsCollectedSelector = createSelector(
    myListingsSelector,
    listings=>{
        // console.log('size of inventory listings: ',listings.length )
        return listings.length>0
    }
)

export const isOwnListingsLoadingSelector = createSelector(
    listingsSelector,
    listings=>listings.isOwnListingsLoading
)

export const isEdittingSelector = createSelector(
    listingsSelector,
    listings=>listings.isEditting
)
