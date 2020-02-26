import React from 'react';
import { Menu, Icon } from 'antd'
import { MenuContainer } from './my-listings-sidebar.styles'
import SidebarUserAccount from '../sidebar-user-account/sidebar-user-account.component';
import SidebarAccountEditForm from '../sidebar-account-edit-form/sidebar-account-edit-form.component';
const { SubMenu } = Menu


const MyListingsSidebar = () => {

    const handleClick = (e) => {
        console.log('clicking', e)
    }
    return (
        <MenuContainer
            onClick={handleClick}
            style={{ width: 256 }}
            // defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            mode="inline"
        >
            <SidebarUserAccount/>
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="setting" />
                        <span>Account Settings</span>
                    </span>
                }
            >
                <SidebarAccountEditForm/>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        {/* <Icon type="appstore" /> */}
                        <Icon type="unordered-list" />
                        <span>Listings Settings</span>
                    </span>
                }
            >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                className={'arrow-disabled'}
                key="sub4"
                title={
                    <span>
                        <Icon type="phone" />
                        <span>Contact Support</span>
                    </span>
                }
            />
        </MenuContainer>
    );
};

export default MyListingsSidebar;