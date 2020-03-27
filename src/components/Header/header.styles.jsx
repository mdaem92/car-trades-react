import styled, { css } from 'styled-components'
import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const blue = ' #357ae8';


const webHeaderContainer = css`
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
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //margin-bottom: 25px;
  

`

const mobileHeaderContainer = css`

  display:grid;
  grid-template-columns : 2fr 1fr 2fr;
  align-items:center;
  height:60px;
  background-color:white;
 
`
export const BlueLogo = styled.div`
  height:51px;
  width:50px;
  background-size:cover;
  background-position:center;
  background-image:${({url})=>`url(${url})`};
`

export const HeaderContainer = styled.div`
  ${props => !!props.isMobile ? mobileHeaderContainer : webHeaderContainer};
`

const mobileLogoContainer = css`
  grid-column: 2/span 1;
  display:flex;
  justify-content:center;
  
  
`
const webLogoContainer = css`

  display:flex;
  justify-content:center;
  align-items:center;
  margin-left:50px;

`

export const LogoContainer = styled(({ isMobile, ...otherProps }) => <Link {...otherProps} />)`
  ${props => !!props.isMobile ? mobileLogoContainer : webLogoContainer};
  
`

const mobileOptionsContainer = css`
  grid-column:3/ span 1;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  .dropdown{
    width:100%;
    .anchor{
      text-decoration: none;
      font-size:12px;
      color: grey;
      &:hover{
        color:${blue}
      }
    }
    .active{
    font-weight: bold;
    color: #357ae8;
  }
  }
  .dropdown-toggle{
    padding: 5px 12px;
    font-size:12px;
  }

`
const webOptionsContainer = css`
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .anchor{
    text-decoration: none;
    font-size:15px;
    color: grey;
    ${props => props.scrolled && css`
    color:white;  
  `}
    &:hover{
      color:${props => props.scrolled ? 'grey' : blue}
    }
  }
  .anchor-signup{
    text-decoration: none;
    border: 1px solid black;
    font-size: 12px;
    color: grey;
    ${props => props.scrolled && css`
    color:white; 
    border-color: white; 
  `}
    &:hover{
      color:${props => props.scrolled ? 'grey' : blue};
    }
  }
  .active{
    font-weight: bold;
    color: darken(40%);
  }

`

export const OptionsContainer = styled.div`
  ${props => !!props.isMobile ? mobileOptionsContainer : webOptionsContainer}
  
`
export const OptionLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;

  
  //text-decoration: none;
  
`
