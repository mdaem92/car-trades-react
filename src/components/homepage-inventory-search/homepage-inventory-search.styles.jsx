import styled,{css} from 'styled-components'
import {Button} from "antd";

export const InventorySearchContainer = styled.div`
 display: flex;
 flex-direction: row;
justify-content: flex-start;

`

export const InputContainer = styled.div`
  //border: 1px solid #f7f7f7f7;
  //border: none;
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
  }
  .item{
    margin: unset;    
  }
`
export const ButtonContainer = styled(Button)`
  border-radius: 0;
  //border:unset;
  height: 42px;
  //border-left: none;
  background-color: #357ae8;
  color: white;
  
  
`
