export const editListing =(listings,idToEdit,updates)=>{
    return listings.map(listing=>{
        if(listing.id===idToEdit){
            return {
                ...listing,
                ...updates

            }
        }
    })
}

export const removeListing =(listings,idToRemove)=>{
    return listings.filter(listing=>{
        return listing.id!==idToRemove
    })
}