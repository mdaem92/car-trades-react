import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import Footer from "../../components/footer/footer.component";
import {BackgroundContainer,
    InventoryContainer,
    InventoryFiltersContainer,
    InventoryListingsContainer,
} from './inventory.styles'
import InventoryFilters from "../../components/inventory-filters/inventory-filters.component";
import InventoryResultsOverview from "../../components/inventory-results-overview/inventory-results-overview.component";
import {Affix} from 'antd'
import {createStructuredSelector} from "reselect";
import {isFixedSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import InventoryListingPreviewListContainer
    from "../../components/inventory-listing-preview-list/inventory-listing-preview-list-container";
import {fetchListingsStart} from "../../redux/listing/listing.actions";
import {isListingsCollectedSelector} from "../../redux/listing/listing.selectors";
import CustomPagination from "../../components/inventory-pagination/inventory-pagination.component";


const InventoryPage = ({affixed,fetchListings,isListingsCollected})=>{
    useEffect(()=>{
        if(!isListingsCollected){
            fetchListings()
        }
    },[fetchListings,isListingsCollected])
    return(
        <BackgroundContainer >
            <InventoryContainer body>
                <InventoryFiltersContainer >
                    {
                        affixed?
                            (
                                <Affix
                                    style={{width:'100%'}}
                                    offsetTop={80}
                                >
                                    <div>
                                        <InventoryFilters/>
                                    </div>
                                </Affix>
                            )
                            :
                            (
                                <InventoryFilters/>
                            )
                    }
                </InventoryFiltersContainer>
                <InventoryListingsContainer>
                    <InventoryResultsOverview/>
                    {/*<InventoryListingPreviewList/>*/}
                    <InventoryListingPreviewListContainer/>
                    <CustomPagination/>
                </InventoryListingsContainer>

            </InventoryContainer>
            {/* <Footer/> */}
        </BackgroundContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    affixed:isFixedSelector,
    isListingsCollected:isListingsCollectedSelector
})
const mapDispatchToProps = (dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(InventoryPage)