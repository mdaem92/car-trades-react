import React from 'react';
import { connect } from 'react-redux'
import FlipMove from 'react-flip-move'
import { createStructuredSelector } from 'reselect'
import { isOwnListingsLoadingSelector, myListingsSelector } from '../../redux/listing/listing.selectors';
import ListingPreview from '../listing-preview/listing-preview.component';
import WithSpinner from '../spinner/with-spinner.component';
import EmptyListBox from '../empty-list-box/empty-list-box.component';



const MyListingsPreviewList = ({ myListings }) => {
    console.log('my own listings: ', myListings)

    return myListings.length > 0 ?
        (
            <FlipMove>
                {
                    myListings.map((listing) =>
                        <div key={listing.id} >
                            <ListingPreview isOwnListing {...listing} />
                        </div>)
                }

            </FlipMove>
        )
        :
        (
            <EmptyListBox className={'emptyBox'} message={'No listings'} to={'/add-listing'} linkTitle={'Add your first listing'} />
        )
};

const mapStateToProps = createStructuredSelector({
    isLoading: isOwnListingsLoadingSelector,
    myListings: myListingsSelector
})
export default connect(mapStateToProps)(WithSpinner(MyListingsPreviewList));