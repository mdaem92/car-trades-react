import React from 'react'
import {createStructuredSelector} from "reselect";
import {isListingsLoadingSelector} from "../../redux/listing/listing.selectors";
import InventoryListingPreviewList from './inventory-listing-preview-list.component'
import{compose} from "redux";
import WithSpinner from "../spinner/with-spinner.component";
import{connect} from'react-redux'

const mapStateToProps = createStructuredSelector({
    isLoading:isListingsLoadingSelector
})

const InventoryListingPreviewListContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(InventoryListingPreviewList)
export default InventoryListingPreviewListContainer