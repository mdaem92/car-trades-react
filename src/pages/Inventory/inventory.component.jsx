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
import {isListingsCollectedSelector} from "../../redux/listing/listing.selectors";
import CustomPagination from "../../components/inventory-pagination/inventory-pagination.component";


const InventoryPage = ({affixed,fetchListings,isListingsCollected})=>{
    useEffect(()=>{
        if(!isListingsCollected){
            fetchListings()
        }
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
                    {/*<Pagination*/}
                    {/*    defaultCurrent={5}*/}
                    {/*    defaultPageSize={20}*/}
                    {/*    hideOnSinglePage*/}
                    {/*    pageSizeOptions={['10','20','30','40','50']}*/}
                    {/*    className={'pagination'}*/}
                    {/*    size="small"*/}
                    {/*    total={500}*/}
                    {/*    showSizeChanger*/}
                    {/*    showQuickJumper*/}
                    {/*    onChange={(number,size)=>console.log(number,size)}*/}
                    {/*    onShowSizeChange={(current,size)=>{*/}
                    {/*        console.log('on size change' ,size)*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <CustomPagination/>
                </InventoryListingsContainer>

            </InventoryContainer>
            <Footer/>
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