import React from 'react';
import { connect } from 'react-redux'
import FlipMove from 'react-flip-move'
import { createStructuredSelector } from 'reselect'

import { isOwnListingsLoadingSelector, myListingsSelector } from '../../redux/listing/listing.selectors';
import ListingPreview from '../listing-preview/listing-preview.component';
import WithSpinner from '../spinner/with-spinner.component';
import InventoryResultsOverview from '../inventory-results-overview/inventory-results-overview.component';



const MyListingsPreviewList = ({ myListings }) => {
    console.log('my own listings: ', myListings)
    return (
        <>
            <InventoryResultsOverview/>
            <FlipMove>
                {
                    myListings.map((listing) =>
                        <div key={listing.id} >
                            <ListingPreview isOwnListing {...listing} />
                        </div>)
                }

            </FlipMove>
        </>

    );
};

const mapStateToProps = createStructuredSelector({
    isLoading: isOwnListingsLoadingSelector,
    myListings: myListingsSelector
})
export default connect(mapStateToProps)(WithSpinner(MyListingsPreviewList));