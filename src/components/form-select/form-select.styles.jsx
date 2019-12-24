import styled, {css} from 'styled-components'
// import Select from '@material-ui/core/Select';
import Select from 'react-select'

const subColor = 'blue'
const mainColor= 'grey'

// const shrinkLabelText = css`
//   top: -14px;
//   font-size: 12px;
//   color: ${mainColor};
// `

export const GroupContainer = styled.div`
  width: 200px;
  position: relative;
  
`

export const FormSelectContainer = styled(Select)`
   //background: none;
   //background-color: white;
   color: ${mainColor};
   font-size: 18px;
   font-family: Roboto;
   display: block;
   width: 100%;
   height: 40px;
   border: none;
   border-radius: 0;
   //border-bottom: 1px solid ${subColor};
   //margin: 25px 0;
   &:focus {
      outline: none;
    }
    &:hover{
      //border-bottom: 1px solid ${subColor};
      //border: 1px solid ${subColor};
      //border-radius: 1;
    }
    option{
      //background-color: #4285f4;
    }
    &:after{
        //color: darkred;
    }
    
  
`
// export const FormSelectLabel = styled.label`
//   color: ${subColor};
//     font-size: 16px;
//     font-weight: normal;
//     position: absolute;
//     pointer-events: none;
//     left: 5px;
//     top: 10px;
//     transition: 300ms ease all;
//
//     &.shrink {
//       ${shrinkLabelText};
//     }
//
// `