import React from 'react';
import {connect} from 'react-redux'
import { Menu } from 'antd'
import { MenuContainer } from './my-listings-sidebar.styles'
import SidebarUserAccount from '../sidebar-user-account/sidebar-user-account.component';
import { createStructuredSelector } from 'reselect';
import { userAccountCurrentPageSelector } from '../../redux/user-account/user-account.selectors';
import {setCurrent} from '../../redux/user-account/user-account-actions'
import {ReactComponent as ParkingIcon} from '../../assets/car-icons/parking.svg'
import {ReactComponent as CarIcon} from '../../assets/car-icons/car.svg'



const MyListingsSidebar = ({current,setCurrent}) => {

    const handleClick = ({key})=>{
        setCurrent(key)
    }

    return (
        <MenuContainer
            onClick={handleClick}
            defaultSelectedKeys={[current]}
            mode="inline"
        >
            <SidebarUserAccount/>
            <Menu.Item key="listings">
                <CarIcon className='icon'/>
                My Listings
            </Menu.Item>
            <Menu.Item key="parking">
                <ParkingIcon className='icon'/>
                My Parking
            </Menu.Item>
        
        </MenuContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    current:userAccountCurrentPageSelector
})
const mapDispatchToProps = (dispatch)=>({
    setCurrent:(current)=>dispatch(setCurrent(current))
})
export default connect(mapStateToProps,mapDispatchToProps)(MyListingsSidebar);