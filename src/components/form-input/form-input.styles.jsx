import styled from 'styled-components'


const subColor = 'grey'


export const GroupContainer = styled.div`
  position: relative;
  width: 270px;
  
`
export const FormInputContainer = styled.input`
  
  border-radius: 5px;
  height: 40px;
  width: 100%;
   max-width: 250px;
  // color: ${subColor};
  border: 1px solid rgba(195,189,188,0.96);
  //font-family: Roboto ;
  display: block;
  font-size:14px;
  margin: 5px 10px;
  &:focus ~ .form-input-label{
    display: none;
    color: red;
  }
  
  
  
`


export const FormInputLabel = styled.label`
  color: ${subColor};
 
    font-size: 14px;
    //font-family: Roboto;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 15px;
    
    

`