import React from 'react'
import Footer from "../../components/footer/footer.component";
import {GridContainer,BackgroundImageContainer,SearchContainer} from "./homepage.styles";
import HomepageImageCarousel from "../../components/homepage-image-carousel/homepage-image-carousel.component";
import InventoryFilters from "../../components/inventory-filters/inventory-filters.component";

const Homepage = ()=>{
    return (
        <GridContainer>
            <BackgroundImageContainer>
                <HomepageImageCarousel/>
            </BackgroundImageContainer>
            <SearchContainer>
                {/*<HomepageInventorySearch/>*/}
                <InventoryFilters isHomepage/>
            </SearchContainer>

            <Footer isHomepage/>

        </GridContainer>
    )
}
export default Homepage