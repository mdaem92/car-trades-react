import React,{useState} from 'react'
import {TabContainer, NavItemContainer, NavLinkContainer} from './listing-preview-tabs.styles'
import classnames from 'classnames'
import {
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
} from 'reactstrap'
import ListingPreviewImageSlider from "../listing-preview-image-slider/listing-preview-image-slider.component";
import ListingPreviewSpecifications from "../listing-preview-specifications/listing-preview-specifications.component";
import {TabContentContainer} from "../listing-preview/listing-preview.styles";

const tabItems = [
    {
        tabId:'1',
        title:'Specifications'
    },
    {
        tabId:'2',
        title:'Image Gallery'
    },
    {
        tabId:'3',
        title:'Dealer Notes'
    },
    {
        tabId:'4',
        title:'Options List'
    }
]

const ListingPreviewTabs = ()=>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (

        <TabContainer>
            <Nav >
                {tabItems.map(({tabId,title})=>(
                    <NavItemContainer key={tabId}>
                        <NavLinkContainer
                            className={classnames({ active: activeTab === tabId })}
                            onClick={() => { toggle(tabId); }}
                            >
                            <span>{title}</span>
                        </NavLinkContainer>

                    </NavItemContainer>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <ListingPreviewSpecifications/>
                </TabPane>
                <TabPane tabId="2">
                   <ListingPreviewImageSlider/>
                </TabPane>
                <TabPane tabId="3">
                    third tab
                </TabPane>
                <TabPane tabId="4">
                    4th tab
                </TabPane>
            </TabContent>
        </TabContainer>
    )
}
export default ListingPreviewTabs