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
        console.log('size of inventory listings: ',listings.length )
        return listings.length>0
    }
)
export const filteredListingsSelector = createSelector(
    inventoryListingsSelector,
    filtersSelector,
    (listings,{make,model,mileage,price,year,colors,transmissions,fuelTypes,condition,sortBy,sortType})=>{
        const results= listings.filter(listing=>{
            const makeMatch = make?listing.make.toLowerCase()===make.toLowerCase():true
            const modelMatch = model? (model.trim().toLowerCase()===listing.model.trim().toLowerCase()||/(\b[1-9]|[A-Z]) ([^\s]+)\b/.test(model.trim().toLowerCase()) && model.startsWith(listing.model.trim().toLowerCase()[0])):true
            const mileageMatch = !!mileage[1]?(listing.mileage >= mileage[0] && listing.mileage <= mileage[1] ):(listing.mileage>=mileage[0])
            const priceMatch = !!price[1]?(listing.price >= price[0] && listing.price <= price[1]):(listing.price>=price[0])
            const yearMatch = !!year[1]?(listing.registered>=year[0] && listing.registered<=year[1]):(listing.registered>=year[0])
            const colorsMatch = !!colors.length?colors.includes(listing.color):true
            const transmissionsMatch = !!transmissions.length?transmissions.includes(listing.transmission):true
            const fuelTypesMatch = !!fuelTypes.length?fuelTypes.includes(listing.fuelType):true
            const conditionMatch = condition? listing.condition.toLowerCase()===condition.toLowerCase():true
            console.log('this listing: ',listing)
            console.log(`${!!year[1]}?(${listing.registered} >= ${year[0]} && ${listing.registered} <= ${year[1]} ):(${listing.registered}>=${year[0]}) year match:${yearMatch} ${typeof year[0]} ${typeof listing.registered}`)
            return makeMatch && modelMatch && conditionMatch && mileageMatch &&priceMatch && yearMatch && colorsMatch && transmissionsMatch && fuelTypesMatch && conditionMatch

        }).sort((a,b)=>{

            if(sortBy==='mileage'){
                if(sortType==='desc'){
                    return a.mileage<b.mileage?1:-1
                }else if(sortType==='asc'){
                    return a.mileage<b.mileage?-1:1
                }
            } else if(sortBy==='year'){
                if(sortType==='desc'){
                    return a.registered<b.registered?1:-1
                }else if(sortType==='asc'){
                    return a.registered<b.registered?-1:1
                }
                // otherwise its price
            } else {
                if(sortType==='desc'){
                    return parseInt(a.price)<parseInt(b.price)?1:-1
                }else if(sortType==='asc'){
                    return parseInt(a.price)<parseInt(b.price)?-1:1
                }

            }
        })
        console.log('visbile listings: ',results,{make,model,mileage,price,year,colors,transmissions,fuelTypes,condition,sortBy,sortType})
        return results
    }
)

export const filteredListingsLengthSelector = createSelector(
    filteredListingsSelector,
    listings=>listings?listings.length:0
)

