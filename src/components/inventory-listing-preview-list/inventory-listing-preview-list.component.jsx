import React from 'react';
import {connect}from 'react-redux'
import {createStructuredSelector} from "reselect";
import {inventoryListingsSelector} from "../../redux/listing/listing.selectors";
import ListingPreview from "../listing-preview/listing-preview.component";

const InventoryListingPreviewList = ({listings}) =>
    listings.map(({loading,isAppraisalRequested,...otherProps})=>{
        console.log('listings props',otherProps)
        return(<ListingPreview key={otherProps.id}{...otherProps}/>)
    })

const mapStateToProps= createStructuredSelector({
    listings:inventoryListingsSelector
})

export default connect(mapStateToProps)(InventoryListingPreviewList);
