import React, {useEffect} from 'react';
import {connect}from 'react-redux'
import {createStructuredSelector} from "reselect";
import {filteredListingsSelector, inventoryListingsSelector} from "../../redux/listing/listing.selectors";
import ListingPreview from "../listing-preview/listing-preview.component";
import {fetchListingsStart} from "../../redux/listing/listing.actions";
import FlipMove from 'react-flip-move'
import uuid from 'uuid'

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
    listings:filteredListingsSelector
})
const mapDispatchToProps = (dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(InventoryListingPreviewList);
