import React, {useEffect} from 'react'
import {connect}from 'react-redux'
import Footer from "../../components/footer/footer.component";
import {GridContainer,BackgroundImageContainer,SearchContainer,SearchLabelContainer} from "./homepage.styles";
import HomepageImageCarousel from "../../components/homepage-image-carousel/homepage-image-carousel.component";
import HomepageInventorySearch from "../../components/homepage-inventory-search/hompage-inventory-search.component";
import {Drawer}from 'antd'
import {fetchListingsStart} from "../../redux/listing/listing.actions";
import {createStructuredSelector} from "reselect";
import {isListingsCollectedSelector} from "../../redux/listing/listing.selectors";


const Homepage = ({fetchListings,isListingsCollected})=>{
    useEffect(()=>{
        if(!isListingsCollected){
            fetchListings()
        }
    },[fetchListings])
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

const mapStateToProps = createStructuredSelector({
    isListingsCollected: isListingsCollectedSelector
})
const mapDispatchToProps =(dispatch)=>({
    fetchListings:()=>dispatch(fetchListingsStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Homepage)