import styled from 'styled-components'
import {
    Card, Button,FormGroup,Label
} from 'reactstrap';

export const FormGroupContainer = styled(FormGroup)`
  display: flex;
  flex-direction: row;
  width: 100%;
  //max-width: 800px;
  justify-content: space-around;
  
 
`
export const CardContainer = styled(Card)`
position: relative;
margin-bottom: 20px;
//padding-bottom: 50px;
 
`
export const StrapButton = styled(Button)`
  margin-left: auto ;
  margin-right: 10px;
  max-width: 150px;
  width: 100%;

`
export const LabelContainer = styled(Label)`
  //display: none;
  margin: 5px 10px;

`
