import React, {useEffect} from 'react';
import {connect}from 'react-redux'
import {createStructuredSelector} from "reselect";
import {inventoryListingsSelector} from "../../redux/listing/listing.selectors";
import ListingPreview from "../listing-preview/listing-preview.component";
import {fetchListingsStart} from "../../redux/listing/listing.actions";


const InventoryListingPreviewList = ({listings}) =>{

    return (
        listings.map(({loading,isAppraisalRequested,...otherProps})=>{
            return(<ListingPreview key={otherProps.id}{...otherProps}/>)
        })
    )

}


const mapStateToProps= createStructuredSelector({
    listings:inventoryListingsSelector
})
const mapDispatchToProps = (dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(InventoryListingPreviewList);
