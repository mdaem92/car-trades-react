import React from 'react'
import{BackgroundContainer ,InventoryContainer,InventoryFiltersContainer,MyListingsContainer}from './user-account.styles'
import MyListingsSidebar from '../../components/my-listings-sidebar/my-listings-sidebar.component'
import UserAccountPageSwitch from '../../components/user-account-page-switch/user-account-page-switch.component'

const UserAccountPage = ()=>{

    return (

        <BackgroundContainer>
            <InventoryContainer>
                <InventoryFiltersContainer >
                    <MyListingsSidebar/>
                </InventoryFiltersContainer>
                <MyListingsContainer>
                    <UserAccountPageSwitch />
                </MyListingsContainer>
            </InventoryContainer>
        </BackgroundContainer>
    )
}




export default UserAccountPage