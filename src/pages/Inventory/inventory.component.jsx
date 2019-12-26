import React from 'react'
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation-bar/nagivation-bar.component";
import {BackgroundContainer,
    InventoryContainer,
    InventoryFiltersContainer,
    InventoryListingsContainer
} from './inventory.styles'
import{Row,Col}from 'reactstrap'
import ListingPreview from "../../components/listing-preview/listing-preview.component";

const InventoryPage = ()=>{
    return(
        <BackgroundContainer >
            <NavigationBar title={'Inventory'}/>
            <InventoryContainer body>
                <InventoryFiltersContainer>
                    filters container
                </InventoryFiltersContainer>
                <InventoryListingsContainer>
                    <ListingPreview/>

                </InventoryListingsContainer>
            </InventoryContainer>
            <Footer/>
        </BackgroundContainer>
    )
}
export default InventoryPage