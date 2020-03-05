import React from 'react';
import {withRouter} from 'react-router-dom'
import { EmptyBoxContainer, LinkTitleContainer, MessageContainer } from './empty-list-box.styles'

const EmptyListBox = ({ message, to, linkTitle ,history}) => {
    return (
        <EmptyBoxContainer>
            <MessageContainer>{message}</MessageContainer>
            <LinkTitleContainer type={'link'} onClick={()=>history.push(`${to}`)}>
                {linkTitle}
            </LinkTitleContainer>
        </EmptyBoxContainer>

    );
};

export default withRouter(EmptyListBox);