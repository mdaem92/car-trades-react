import styled from 'styled-components'
import Select from 'react-select'


const mainColor= 'grey'



export const GroupContainer = styled.div`
  width: 270px;
  position: relative;
  
`

export const FormSelectContainer = styled(Select)`

   color: ${mainColor};
   font-size: 14px;
   display: block;
   width: 100%;
   max-width: 250px;
   height: 40px;
   border: none;
   border-radius: 0;
   margin: 5px 10px;

   &:focus {
      outline: none;
    }
    &:hover{

    }
    option{
    
    }
    &:after{
        //color: darkred;
    }
    
`
