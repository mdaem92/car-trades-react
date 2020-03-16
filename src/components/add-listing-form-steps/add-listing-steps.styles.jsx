import styled,{keyframes} from 'styled-components'

const animateStep = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

export const StepsContentContainer = styled.div`
  margin-top: 35px;
  padding-top: 8px;
  padding-left: 8px;
  height: auto; 
  border: 1px dashed #e9e9e9;
  background-color: #fafafa;

  *{
    animation: ${animateStep} 0.3s linear;
  }
  @media screen and (max-width:800px){
    margin-top:15px;
    padding-top:5px;
    padding-left:5px;
  }

`

export const StepsActionContainer = styled.div`
    margin-top: 35px;
    .ant-btn{
      border-radius: 0;
    }
    @media screen and (max-width:800px){
    margin:15px 0;
   
  }
`
