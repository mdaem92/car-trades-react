export const editListing =(listings,idToEdit,updates)=>{

    const index = listings.findIndex((listing)=>listing.id===idToEdit)
    const edittedItem = {
        ...listings[index],
        ...updates
    }

    return [
        ...listings.slice(0,index),
        edittedItem,
        ...listings.slice(index+1)

    ]
    
}

export const removeListing =(listings,idToRemove)=>{
    return listings.filter(listing=>{
        return listing.id!==idToRemove
    })
}