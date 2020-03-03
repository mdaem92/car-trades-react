import styled from 'styled-components'
import {Menu} from 'antd'


const blue = '#357ae8'


export const MenuContainer = styled(Menu)`

    background-color:${blue};
    color:white;
    .ant-menu-sub{
        /* background-color: lighten(${blue},10%); */
        background-color:${blue};
    }
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
 
 .ant-menu-item-group-title{
    color:white
 }
 .arrow-disabled{
  .ant-menu-submenu-arrow{
      display: none;
    }
 }

   svg{
     width:20px;
     height:20px;
     margin-right:10px;
     path{
       fill:white;
       
     }
   }
   .ant-menu-item-selected{
    svg{
     width:20px;
     height:20px;
     margin-right:10px;
     path{
       fill:${blue};
     }
   }
   }
 .anticon{
   margin-right:unset;
 }

`