import React from 'react';
import{connect}from 'react-redux'
import { myListingsSelector } from '../../redux/listing/listing.selectors';
import ListingPreview from "../../components/listing-preview/listing-preview.component";
import { MyListingsContainer } from './my-listings.styles';

const MyListingsPage = ({myListings}) => {
    return (
        <MyListingsContainer>
            {myListings.map((listing)=><ListingPreview  key={listing.id} {...listing}/>)}
        </MyListingsContainer>
    );
};


const mapStateToProps = (state,{match:{params:{username}}})=>{
    console.log('mapStateToProps: ',username)
    return{
        myListings:myListingsSelector(state,username)

    }
}
export default connect(mapStateToProps)(MyListingsPage);