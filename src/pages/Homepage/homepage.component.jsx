import React, {useEffect} from 'react'
import {connect}from 'react-redux'
import {GridContainer,BackgroundImageContainer,SearchContainer,SearchLabelContainer} from "./homepage.styles";
import HomepageImageCarousel from "../../components/homepage-image-carousel/homepage-image-carousel.component";
import HomepageInventorySearch from "../../components/homepage-inventory-search/hompage-inventory-search.component";
import {fetchListingsStart} from "../../redux/listing/listing.actions";
import {createStructuredSelector} from "reselect";
import {isListingsCollectedSelector} from "../../redux/listing/listing.selectors";
import {resetFilters} from "../../redux/inventory-filters/inventory-filters.actions";


const Homepage = ({fetchListings,isListingsCollected})=>{
    useEffect(()=>{
        // resetForm()
        if(!isListingsCollected){
            fetchListings()
        }

    },[fetchListings,isListingsCollected])

    
    return (
        <GridContainer>
            <BackgroundImageContainer>
                <HomepageImageCarousel/>
            </BackgroundImageContainer>
            <SearchLabelContainer >
                Quick Search
            </SearchLabelContainer>

            <SearchContainer>
                {/*<InventoryFilters isHomepage/>*/}
                <HomepageInventorySearch/>
            </SearchContainer>

            {/* <Footer isHomepage/> */}

        </GridContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    isListingsCollected: isListingsCollectedSelector
})
const mapDispatchToProps =(dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart()),
    resetForm:()=>dispatch(resetFilters())
})
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)