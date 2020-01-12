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
import {Pagination,Affix,Switch} from 'antd'

const InventoryPage = ()=>{
    const [affixed,setAffixed]=useState(false)

    return(
        <BackgroundContainer >
            {/*<NavigationBar title={'Inventory'}/>*/}
            <InventoryContainer body>
                <InventoryFiltersContainer >
                    <div>
                        <Switch checkedChildren="fixed"  checked={affixed} onChange={()=>setAffixed(!affixed)}/>
                    </div>
                    {
                        affixed?
                            (
                                <Affix
                                    style={{width:'100%'}}
                                    offsetTop={80}
                                    onChange={affixed => console.log(affixed)}
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