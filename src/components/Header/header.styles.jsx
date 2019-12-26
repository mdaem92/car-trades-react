import styled from 'styled-components'
import {Link} from 'react-router-dom'

const blue =' #0069d9';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  
  @media and screen (max-width:800px){
    height:60px;
    padding:10px;
    margin-bottom:20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media and screen (max-width:800px){
    width:50px;
    padding: 0;
  }
`
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .anchor{
    text-decoration: none;
    color: grey;
    &:hover{
      color:${blue};
    }
    
  }
  @media and screen (max-width:800px){
   width:80%;
    
  }
`
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  //text-decoration: none;
`
