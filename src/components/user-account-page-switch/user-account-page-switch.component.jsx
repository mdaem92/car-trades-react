import React from 'react';
import {connect} from 'react-redux'
import MyListingsPreviewList from '../my-listings-preview-list/my-listings-preview-list.component'
import UserAccountParking from '../user-account-parking/user-account-parking.component';
import UserAccountSettings from '../user-account-settings/user-account-settings.component'
import {createStructuredSelector}from 'reselect'
import { userAccountCurrentPageSelector } from '../../redux/user-account/user-account.selectors';

const UserAccountPageSwitch = ({current}) => {
    switch(current){
        case 'parking':
            return <UserAccountParking/>
        case 'settings':
            return <UserAccountSettings/>
        case 'listings':
            return <MyListingsPreviewList/>
        default:
            return null
    }
};

const mapStateToProps = createStructuredSelector({
    current:userAccountCurrentPageSelector
})

export default connect(mapStateToProps)(UserAccountPageSwitch);