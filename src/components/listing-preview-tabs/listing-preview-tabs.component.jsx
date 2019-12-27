import React,{useState} from 'react'
import {TabContainer, NavItemContainer, NavLinkContainer} from './listing-preview-tabs.styles'
import classnames from 'classnames'
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    CardTitle,
    Card,
    CardText,
    Button
} from 'reactstrap'
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
                        <span>Tab1</span>
                    </NavLinkContainer>
                </NavItemContainer>
                <NavItemContainer>
                    <NavLinkContainer
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        Moar Tabs
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
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
                            </Card>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </TabContainer>
    )
}
export default ListingPreviewTabs