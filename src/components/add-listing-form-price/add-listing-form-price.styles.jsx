import styled from 'styled-components'
import {Button, InputNumber} from 'antd'
export const PriceInputContainer = styled.div`
  display: grid;
  padding: 15px 20px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
`
export const LabelContainer = styled.h4`
  align-content: center;
  color:grey;
  font-size: 18px;
  //font-weight: bolder;
  margin-bottom: 0;
  margin-top: 5px;
`
export const AppraisalButton = styled(Button)`
  max-width: 100px;
  max-height: 30px;
  
`
export const CustomInputNumber = styled(InputNumber)`
  width: 100px;
`