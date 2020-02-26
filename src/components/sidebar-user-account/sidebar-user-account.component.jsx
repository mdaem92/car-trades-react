import React from 'react';
import { SidebarAccountContainer,UserImageContainer } from './sidebar-user-account.styles';

const SidebarUserAccount = ({imageUrl}) => {
    return (
        <SidebarAccountContainer>
            <UserImageContainer imageUrl ={require('../../assets/avatar.png')}/>
            <span className={'username'}>Ame nane</span>
        </SidebarAccountContainer>
    );
};

export default SidebarUserAccount;