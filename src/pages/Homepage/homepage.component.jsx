import React from 'react'
import Footer from "../../components/footer/footer.component";
import {GridContainer,BackgroundImageContainer,SearchContainer,SearchLabelContainer} from "./homepage.styles";
import HomepageImageCarousel from "../../components/homepage-image-carousel/homepage-image-carousel.component";
import HomepageInventorySearch from "../../components/homepage-inventory-search/hompage-inventory-search.component";
import {Drawer}from 'antd'


const Homepage = ()=>{

    const [isOpen,setisOpen]=React.useState(false)

    const showDrawer = ()=>{
        setisOpen(true)
    }
    const onClose = ()=>{
        setisOpen(false)
    }
    return (
        <GridContainer>
            <BackgroundImageContainer onClick={showDrawer}>
                <HomepageImageCarousel/>
            </BackgroundImageContainer>
            <SearchLabelContainer >
                Quick Search
            </SearchLabelContainer>

            <SearchContainer>
                {/*<InventoryFilters isHomepage/>*/}
                <HomepageInventorySearch/>
            </SearchContainer>

            <Footer isHomepage/>

        </GridContainer>
    )
}
export default Homepage