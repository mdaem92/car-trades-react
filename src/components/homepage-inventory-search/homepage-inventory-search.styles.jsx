import styled,{css} from 'styled-components'
import {Button} from "antd";

export const InventorySearchContainer = styled.div`
 display: flex;
 flex-direction: row;
  /* justify-content: flex-start; */
  @media screen and (max-width:800px){
    flex-direction: column;

  }
  .mobile-group{
    display:none;
    flex-direction:row;
    justify-content:space-between;
    width:100%;
    .input{
      width:150px;
    }
  }
`

export const InputContainer = styled.div`

  width: 125px;
  ${props=>props.large && css`
      width: 300px;
  `}
  .ant-input{
    border-radius: 0;
    height: 42px;
    
  }
  .input{
  display: flex;
    .ant-input-number-input{
      margin-top: 5px;
      
    }
    border-left: none;
    border-radius: 0;
    height: 42px;
    width: 100%;
    @media screen and (max-width:800px){
    width:120px;
  }
  }
  .item{
    margin: unset;    
  }

  @media screen and (max-width:800px){
    flex-direction:row;
    margin-bottom:5px;
    width:unset;
  }
`
export const ButtonContainer = styled(Button)`
  border-radius: 0;
  //border:unset;
  height: 42px;
  //border-left: none;
  background-color: #357ae8;
  color: white;
  @media screen and (max-width:800px){
    width: 150px;
    justify-item:center;
  }
  
  
`
