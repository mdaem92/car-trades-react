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


const ListingPreviewTabs = ()=>{
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <TabContainer>
            <Nav >
                <NavItemContainer>
                    <NavLinkContainer
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        <span>Specifications</span>
                    </NavLinkContainer>
                </NavItemContainer>
                <NavItemContainer>
                    <NavLinkContainer
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2') }}
                    >
                        <span>Image Gallery</span>
                    </NavLinkContainer>
                </NavItemContainer>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <h4>Tab 1 Contents</h4>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                   <ListingPreviewImageSlider/>
                </TabPane>
            </TabContent>
        </TabContainer>
    )
}
export default ListingPreviewTabs