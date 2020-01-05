import styled,{css} from 'styled-components'
import React from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,

} from 'reactstrap'
export const DropdownContainer = styled(UncontrolledDropdown)`
  
   list-style-type: none;
   
   .dropdown-menu{
    border-radius: 0;
    .dropdown-item{
      color: grey;
    }
   }
   
`
//DropdownToggle
export const DropdownToggleContainer = styled(({isScrolled,...otherProps})=>< DropdownToggle {...otherProps}/>)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
   color: grey;
  &:hover{
    color: #357ae8;
    //font-weight: bold;
  }
  ${props=>props.isScrolled && css`
    color: white;
    &:hover{
    color: grey;
    
    }
  `}
  
`
export const UserAccountImage =styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-image: ${({imageUrl})=>`url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  border: 1px solid black;
`
