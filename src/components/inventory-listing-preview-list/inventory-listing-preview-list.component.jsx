import React from 'react';
import {connect}from 'react-redux'
import {createStructuredSelector} from "reselect";
import {
    paginatedFilteredListingsSelector
} from "../../redux/listing/listing.selectors";
import ListingPreview from "../listing-preview/listing-preview.component";
import {fetchListingsStart} from "../../redux/listing/listing.actions";
import FlipMove from 'react-flip-move'

const InventoryListingPreviewList = ({listings}) =>{

    return (
        <FlipMove>
            {
                listings.map(({loading ,isAppraisalRequested,...otherProps})=>{
                    return(
                        <div key={otherProps.id}>
                            <ListingPreview {...otherProps}/>
                        </div>
                    )
                })
            }


        </FlipMove>
    )

}


const mapStateToProps= createStructuredSelector({
    // listings:inventoryListingsSelector
    // listings:filteredListingsSelector
    listings:paginatedFilteredListingsSelector

})
const mapDispatchToProps = (dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(InventoryListingPreviewList);
