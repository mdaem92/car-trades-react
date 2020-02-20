import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { myListingsSelector, isOwnListingsCollectedSelector } from '../../redux/listing/listing.selectors';
import { MyListingsContainer } from './my-listings.styles';
import { createStructuredSelector } from 'reselect'
import { fetchOwnListingsStart } from '../../redux/listing/listing.actions';
import { currentUserSelector } from '../../redux/auth/auth.selectors';
import MyListingsPreviewList from '../../components/my-listings-preview-list/my-listings-preview-list.component';
import{BackgroundContainer ,InventoryContainer,InventoryFiltersContainer}from './my-listings.styles'
import { isFixedSelector } from '../../redux/inventory-filters/inventory-filters.selectors';
import MyListingsSidebar from '../../components/my-listings-sidebar/my-listings-sidebar.component';

const MyListingsPage = ({ fetchOwnListings, currentUser, isListingsCollected }) => {

    useEffect(() => {
        console.log('calling', isListingsCollected)
        if (!isListingsCollected) {
            const { id } = currentUser
            fetchOwnListings(id)
        }

    }, [isListingsCollected,fetchOwnListings,currentUser])

    return (
        <BackgroundContainer>
            <InventoryContainer>
                <InventoryFiltersContainer >
                    <MyListingsSidebar />
                </InventoryFiltersContainer>
                <MyListingsContainer>
                    <MyListingsPreviewList />
                </MyListingsContainer>
            </InventoryContainer>
        </BackgroundContainer>

    );
};


const mapStateToProps = createStructuredSelector({
    myListings: myListingsSelector,
    currentUser: currentUserSelector,
    isListingsCollected: isOwnListingsCollectedSelector,
    affixed:isFixedSelector
})
const mapDispatchToProps = (dispatch) => ({
    fetchOwnListings: (id) => dispatch(fetchOwnListingsStart(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(MyListingsPage);