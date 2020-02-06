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
margin-top: 24px;
  padding-top: 8px;
  padding-left: 8px;
  height: auto;
  
  //margin-top: 16px;
  border: 1px dashed #e9e9e9;
  //border-radius: 6px;
  background-color: #fafafa;
  //min-height: 200px;
  //text-align: center;
  //padding-top: 80px;
  
  *{
    animation: ${animateStep} 0.3s linear;
  }
  

`

export const StepsActionContainer = styled.div`
    margin-top: 24px;
    .ant-btn{
      border-radius: 0;
    }
`
