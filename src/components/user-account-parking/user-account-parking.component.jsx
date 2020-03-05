import React from 'react';
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { parkingSelector } from '../../redux/parking/parking.selectors';
import FlipMove from 'react-flip-move'
import ListingPreview from '../listing-preview/listing-preview.component';
import EmptyListBox from '../empty-list-box/empty-list-box.component';


const UserAccountParking = ({parkedListings}) => {
    return parkedListings.length > 0 ?
        (
            <FlipMove>
                {
                    parkedListings.map((listing) =>
                        <div key={listing.id} >
                            <ListingPreview isOwnListing {...listing} />
                        </div>)
                }

            </FlipMove>
        )
        :
        (
            <EmptyListBox message={'No Listings'} to={'/inventory'} linkTitle={'View Inventory'} />
        );
};

const mapStateToProps = createStructuredSelector({
    parkedListings:parkingSelector
})
export default connect(mapStateToProps)(UserAccountParking);