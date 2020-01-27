import React,{useState} from 'react'
import {TabContainer, NavItemContainer, NavLinkContainer} from './listing-preview-tabs.styles'
import classnames from 'classnames'
import {
    Nav,
    TabContent,
    TabPane,
} from 'reactstrap'
import ListingPreviewImageSlider from "../listing-preview-image-slider/listing-preview-image-slider.component";
import ListingPreviewSpecifications from "../listing-preview-specifications/listing-preview-specifications.component";
import tabItems from "./tabItems";
import DealerNotes from '../listing-preview-dealer-notes/listing-preview-dealer-notes.component'
import OptionsList from "../listing-preview-options-list/listing-preview-options-list.component";


const ListingPreviewTabs = (props)=>{
    const {imageFileList,...specs} = props
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
                <TabPane  tabId="1">
                    <ListingPreviewSpecifications {...specs}/>
                </TabPane>
                <TabPane  tabId="2">
                   <ListingPreviewImageSlider images={imageFileList}/>
                </TabPane>
                <TabPane tabId="3">
                    <DealerNotes/>
                </TabPane>
                <TabPane tabId="4">
                    <OptionsList/>
                </TabPane>
            </TabContent>
        </TabContainer>
    )
}
export default ListingPreviewTabs