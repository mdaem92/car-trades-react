import styled,{css} from 'styled-components'

const buttonStyles = css`
  background-color:black;
  color:white;
  border:none;
  &:hover{
    background-color: aliceblue;
    color: black;
    border: 1px solid black;
  }
`

const invertedButtonStyles = css`
  background-color: aliceblue;
    color: black;
    border: 1px solid black;

    &:hover{
      background-color: black;
      color: aliceblue;
      border: none;
    }
`

 const googleSignInStyles = css`
  background-color: #4285f4;
    color: white;
    &:hover{
      background-color: #357ae8;
      color: #000;
      border: none;
    }
`


const getButtonStyles = props =>{
  if(props.googleSignIn){
    return googleSignInStyles
  }
  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: aliceblue;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  ${getButtonStyles}
`
