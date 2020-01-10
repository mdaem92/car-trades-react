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

const InventoryPage = ()=>{
    const [scrolled,setScrolled] = useState(false)

    const listenScrollEvent = ()=>{
        if(window.scrollY>100){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',listenScrollEvent)
        return ()=>{
            window.removeEventListener('scroll',listenScrollEvent)
        }
    },[scrolled])
    return(
        <BackgroundContainer >
            <NavigationBar title={'Inventory'}/>
            <InventoryContainer body>
                <InventoryFiltersContainer scrolled={scrolled}>

                    <InventoryFilters/>


                </InventoryFiltersContainer>
                <InventoryListingsContainer>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                    <ListingPreview/>
                </InventoryListingsContainer>
            </InventoryContainer>
            <Footer/>
        </BackgroundContainer>
    )
}
export default InventoryPage