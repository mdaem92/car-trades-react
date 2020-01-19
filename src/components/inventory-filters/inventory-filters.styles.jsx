import styled,{keyframes,css} from 'styled-components'
import {Menu} from 'antd'
import React from 'react'

const darkBlue = '#10153b'
const blue = '#357ae8'


export const MenuContainer = styled(Menu)`

  .make-model{
    .ant-menu-submenu-popup{
      display: none;
    }
    
  }
  background-color:${blue};
   //background: linear-gradient(to bottom, #10153b 0%, #357ae8 100%);
 color: white;
  .ant-menu-submenu-title{
    &:hover{
      color: grey;
      
    }
  }
  .ant-radio-wrapper{
      color: white;
  }
 
 .ant-menu-sub{
  /* //background-color:#10153b ; */
  background-color:${blue} ;
  /* // background: linear-gradient(to bottom, #10153b 0%, #357ae8 100%); */
  color: white;
 }
 .ant-slider-mark-text{
 
  color: white;
 }
 .active{
  border: 1px solid white;
 }
 .inventory-filters-options-tree-container{
  /* //margin-bottom: 10px; */
  /* //margin-left: 20px; */
  margin: 0 20px 10px 30px;
  .ant-tree-title{
    color: white;
  }
 
 }
 .groupContainer{

  .item{
    margin: 5px 30px ;
  }

 }

 
 .search-icon{
  //display: none;
  margin-left:20px;
  margin-right: 20px;
  font-size: 20px;
  &:hover{
    font-size: 25px;
    transition: font-size 300ms ease-in-out;
  }
 }
 
`
export const MakeModelContainer = styled.div`

  .item{
    margin: 5px 30px ;
  }
  
`