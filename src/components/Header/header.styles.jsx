import styled, {css} from 'styled-components'
import {NavLink,Link} from 'react-router-dom'

const blue =' #357ae8';

export const HeaderContainer = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  background-color: white;
  ${props => props.scrolled && css`
    background-color:${blue};  
    -webkit-transition: background-color 500ms ease-in;
    -ms-transition: background-color 500ms ease-in;
    transition: background-color 500ms ease-in;
  `}
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //margin-bottom: 25px;
  
  @media and screen (max-width:800px){
    height:60px;
    padding:10px;
    margin-bottom:20px;
  }
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px 10px;
  margin-left: 50px;
  
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
    ${props => props.scrolled && css`
    color:white;  
  `}
    &:hover{
      color:${props => props.scrolled ? 'grey':blue}
    }
  }
  .active{
    font-weight: bold;
    color: darken(40%);
  }
  @media and screen (max-width:800px){
   width:80%;
    
  }
`
export const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
  
  //text-decoration: none;
  
`
