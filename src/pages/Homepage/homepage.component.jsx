import React from 'react'
import Footer from "../../components/footer/footer.component";
import {GridContainer,BackgroundImageContainer,SearchContainer,LabelContainer} from "./homepage.styles";
import HomepageImageCarousel from "../../components/homepage-image-carousel/homepage-image-carousel.component";
import HomepageInventorySearch from "../../components/homepage-inventory-search/hompage-inventory-search.component";

const Homepage = ()=>{
    return (
        <GridContainer>
            <BackgroundImageContainer>
                <HomepageImageCarousel/>
            </BackgroundImageContainer>
            <SearchContainer>
                {/*<InventoryFilters isHomepage/>*/}
                <HomepageInventorySearch/>
            </SearchContainer>

            <Footer isHomepage/>

        </GridContainer>
    )
}
export default Homepage