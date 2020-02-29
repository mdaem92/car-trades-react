import React from 'react';
import {connect} from 'react-redux'
import { SidebarAccountContainer,UserImageContainer } from './sidebar-user-account.styles';
import { createStructuredSelector } from 'reselect';
import { currentUserSelector } from '../../redux/auth/auth.selectors';

const SidebarUserAccount = ({currentUser}) => {
    const{photoURL,displayName}=currentUser
    return (
        <SidebarAccountContainer>
            <UserImageContainer imageUrl ={!!photoURL?photoURL:require('../../assets/avatar.png')}/>
            <span className={'username'}>{displayName}</span>
        </SidebarAccountContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser:currentUserSelector
})
export default connect(mapStateToProps)(SidebarUserAccount);