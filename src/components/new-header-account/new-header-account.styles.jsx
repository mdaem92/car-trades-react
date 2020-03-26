import styled,{css} from 'styled-components'
import React from 'react'
import {
    UncontrolledDropdown,
    DropdownToggle,

} from 'reactstrap'
import { Menu } from 'antd'


const blue = '#357ae8'
export const DropdownContainer = styled(UncontrolledDropdown)`
  
   list-style-type: none;
   
   .dropdown-menu{
    border-radius: 0;
    .dropdown-item{
      color: grey;
      display:flex;
      justify-content:space-between;
      .ant-badge{
      }
    }

    @media screen and (max-width:800){
      flex-direction:row;
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
export const ButtonContainer = styled.div`
  .button{
    display:flex;
    height:max-content;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    font-size:15px;
    ${props=>props.isScrolled && css`
      color: white;
      &:hover{
      color: grey;
    
      }
    `}
  }

`

export const HeaderMenu = styled(({isScrolled,...otherProps})=><Menu {...otherProps}/>)`
  
  width:max-content;
  background-color:white; 
  color:grey;
  height:30px;
  font-size:15px;
  border:unset;
  display: flex;
  justify-content:center;
  align-items:center;
  transition:background-color 0ms;
  ${props=>props.isScrolled && css`
      color: white;
      background-color:${blue};
      transition:background-color 500ms ease-in;
      
      &:hover{
      color: grey;
      
    
      }
    `};

  .login{
    text-decoration:none;
    color:grey;
    width:30px;
    ${props=>props.isScrolled && css`
      color:white;
    `}
    
  }
  
 @media screen and (max-width:800px){
   height:unset;
 }
 
`

