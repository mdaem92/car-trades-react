import styled,{keyframes} from 'styled-components'
import {Menu} from 'antd'
import React from 'react'

const darkBlue = '#10153b'
const blue = '#357ae8'


export const MenuContainer = styled(Menu)`

  background-color:${blue};
   //background: linear-gradient(to bottom, #10153b 0%, #357ae8 100%);
 color: white;
  .ant-menu-submenu-title{
    &:hover{
      color: grey;
    }
  }
 
 .ant-menu-sub{
  //background-color:#10153b ;
  background-color:${blue} ;
  // background: linear-gradient(to bottom, #10153b 0%, #357ae8 100%);
  color: white;
 }
 .active{
  border: 1px solid white;
 }
 .groupContainer{
  .item{
    margin: 5px 30px ;
  }
 }
 // 
`
export const MakeModelContainer = styled.div`

  .item{
    margin: 5px 30px ;
  }
  
`