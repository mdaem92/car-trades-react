import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation-bar/nagivation-bar.component";
import {BackgroundContainer,
    InventoryContainer,
    InventoryFiltersContainer,
    InventoryListingsContainer,
    FiltersContainer
} from './inventory.styles'
import InventoryFilters from "../../components/inventory-filters/inventory-filters.component";
import ListingPreview from "../../components/listing-preview/listing-preview.component";
import InventoryResultsOverview from "../../components/inventory-results-overview/inventory-results-overview.component";
import {Pagination,Affix} from 'antd'
import {createStructuredSelector} from "reselect";
import {isFixedSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import InventoryListingPreviewList
    from "../../components/inventory-listing-preview-list/inventory-listing-preview-list.component";
import InventoryListingPreviewListContainer
    from "../../components/inventory-listing-preview-list/inventory-listing-preview-list-container";
import {fetchListingsStart} from "../../redux/listing/listing.actions";


const InventoryPage = ({affixed,fetchListings})=>{
    useEffect(()=>{
        fetchListings()
    },[fetchListings])
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
                                    // onChange={affixed => console.log(affixed)}
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
                    <Pagination className={'pagination'} size="small" total={5000} showSizeChanger showQuickJumper />
                </InventoryListingsContainer>

            </InventoryContainer>
            <Footer/>
        </BackgroundContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    affixed:isFixedSelector
})
const mapDispatchToProps = (dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(InventoryPage)