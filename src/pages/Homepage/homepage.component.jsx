import React from 'react'
import Footer from "../../components/footer/footer.component";
import {GridContainer,BackgroundImageContainer,SearchContainer} from "./homepage.styles";
import HomepageImageCarousel from "../../components/homepage-image-carousel/homepage-image-carousel.component";
const Homepage = ()=>{
    return (
        <GridContainer>
            <BackgroundImageContainer>
                <HomepageImageCarousel/>
            </BackgroundImageContainer>
            <SearchContainer>
                Search
            </SearchContainer>

            <Footer isHomepage/>

        </GridContainer>
    )
}
export default Homepage