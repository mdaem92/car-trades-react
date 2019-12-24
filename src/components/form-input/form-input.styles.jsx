import styled,{css} from 'styled-components'
import {Input} from 'reactstrap'


const subColor = 'grey'
const mainColor= 'black'

const shrinkLabelText = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};
`
export const GroupContainer = styled.div`
  position: relative;
  width: 200px;
  
`
export const FormInputContainer = styled.input`
  width: 100%;
  border-radius: 5px;
  height: 40px;
  color: ${subColor};
  border: 1px solid ${subColor};
  font-family: Roboto ;
  display: block;
  font-size:18px;
  &:focus ~ .form-input-label{
    display: none;
    
  }
  ::placeholder{

    margin-left: 10px;
    
  }
  
  
`


export const FormInputLabel = styled.label`
  color: ${subColor};
 
    //font-size: 18px;
    //font-family: Roboto;
    //font-weight: normal;
    //position: absolute;
    //pointer-events: none;
    //left: 10px;
    //top: 10px;
    

`