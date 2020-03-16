import styled,{css} from 'styled-components'


const blue = '#357ae8'

const buttonStyles = css`
    max-width:max-content;
    display:flex;
    align-items:center;
    border-radius:0;
    margin:5px 0;
    
`
export const SignInContainer = styled.div`
  max-width: 380px;
  display: flex;
  flex-direction: column;
  .ant-input{
    max-width:220px;
    border-radius:0;
    margin: 5px 0;
  }
  .button{
    ${buttonStyles};

  }
  .google-button{
    ${buttonStyles};
    justify-content:flex-start;

  }
  .forgot{
    /* justify-content:flex-end; */
    display:flex;
    align-items:center;
    /* margin-left:25px; */
   padding:0;
  }
  .login-forgot-container{
    display:flex;
    flex-direction:column;
    /* justify-content:space-between; */
  }

  .signin-title{
    margin-bottom:20px;
    color:${blue};

  }

  .description{
    margin-bottom:20px;
  }

 
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between; 
  flex-direction:column;
 `