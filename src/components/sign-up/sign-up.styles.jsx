import styled,{css} from 'styled-components'



const grey = '#7f7f7f'
const buttonStyles = css`
    max-width:max-content;
    display:flex;
    align-items:center;
    border-radius:0;
    margin:5px 0;
    
`

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  .ant-input{
    max-width:220px;
    border-radius:0;
    margin: 5px 0;
  }
  .button{
    ${buttonStyles};

  }
 
  .signup-title{
    margin-bottom:20px;
    color:${grey};

  }

  .description{
    margin-bottom:20px;
  }

@media screen and (max-width:800px){
  
}
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  
`