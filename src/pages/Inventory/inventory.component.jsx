import React, {useEffect, useState} from 'react'
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

const InventoryPage = ()=>{


    return(
        <BackgroundContainer >
            <NavigationBar title={'Inventory'}/>
            <InventoryContainer body>
                <InventoryFiltersContainer >
                    <Affix
                        style={{width:'100%'}}
                        offsetTop={100}
                        onChange={affixed => console.log(affixed)}
                    >
                        <div>
                            <InventoryFilters/>

                        </div>

                    </Affix>
                </InventoryFiltersContainer>
                <InventoryListingsContainer>
                    <InventoryResultsOverview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <Pagination className={'pagination'} size="small" total={5000} showSizeChanger showQuickJumper />
                </InventoryListingsContainer>

            </InventoryContainer>
            <Footer/>
        </BackgroundContainer>
    )
}
export default InventoryPage