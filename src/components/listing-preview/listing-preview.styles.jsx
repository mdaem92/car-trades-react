import styled, {css} from 'styled-components'
import Badge from 'reactstrap/lib/Badge'
import Button from 'reactstrap/lib/Button'
import Collapse from 'reactstrap/lib/Collapse'
import React from 'react'



const offGrey = '#f7f7f7'
const blue = '#0069d9'
const priceFontSize = '28px'

export const ListingContainer = styled.div`
  display: grid;
  //previously was auto 40% 20%
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: auto auto ;
  grid-template-areas: 
    "image name price"
    "summary summary button"
  ;
  
  padding: 10px;
  background-color: white;
 
  //margin-bottom: 20px;

  overflow:hidden;
  position: relative;
  
  .text{
    color: #58575f;
    font-size: 25px;
    font-weight: bolder;
    margin-top: 35px;
    @media screen and (max-width:800px){
      margin-top: 10px;
      font-size:15px;
      margin-top:unset;
    }
  }
  .ant-drawer{
    position:absolute;
    z-index:998;
    .ant-drawer-body{
      margin-top:20px;
      display:grid;
      grid-template-columns:1fr 6fr 1fr;
      grid-template-rows:1fr 6fr 1fr;
      padding:unset;
    }
    @media screen and (max-width:800px){
      
    }
  }
  @media screen and (max-width:800px){

grid-template-columns: 3fr 2fr ;
grid-template-rows: auto auto 1fr ;
grid-template-areas: 
  "image image "
  "name price"
  "summary button "
; 
}
  
`

export const ListingImage = styled.div`
  width: 100%;
  height: 150px;
  grid-area:image;
  //background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  overflow: hidden;
  padding: 5px;
   
`
export const ListingCondition = styled(Badge)`
  width: 100px;
  border-radius: 0;
  opacity:1;
  display:block;
  @media screen and (max-width:800px){
    opacity:0;
  }
`
export const ListingInfoCell = styled.div`
  width: 100%;
  grid-area:name;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  @media screen and (max-width:800px){
    height:max-content;
    padding-left:10px;
    
  }
`


// export const ToggleDetailsButton = styled(Button)`
export const ToggleDetailsButton = styled(({ isFooter, ...rest }) => <Button {...rest} />)`
  height: max-content;
  margin: auto;
  grid-area:button;
  ${props=>props.isFooter && FooterButtonStyles};
  @media (max-width:800px){
    display: none;
  }
  //grid-area: toggle;
  
`

export const CollapseContainer = styled(Collapse)`
  //grid-row-start: span;
`
export const CollapseContent = styled.div`
  width: 100%;
  display: inline-block;
  grid-row: span 3 / 1;
  
`

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  padding: 10px;
  border: 2px solid white;
  margin-bottom: 20px;
  ${props =>props.isOpen && css`
    border: 2px solid #357ae8;
    transition: border 100ms linear;  
  `}

  
`

export const TopRightPriceButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-area:price;
  font-size: ${priceFontSize};
  text-align: center;
  font-weight: bold;
  color:#58575f;
  //padding: 50px 30px;
  margin-bottom: 0;
  .price-tag-container{
    margin-top: 35px;
  }
  //margin-top: 50px;
  .currency{
 
    fill: #58575f;

    height: 25px;
    width: auto;
    margin-bottom: 5px;
    margin-right: -5px;
    
    
  }
  //background-image: linear-gradient(rgba(0, 123, 255, 0.6), white);
  @media screen and (max-width: 800px){
    font-size: 15px;
    margin: 10px;
    grid-area:unset;
    grid-column:1/span 1;
    grid-row:1/span 1;
    z-index:999;
  }
`


export const ListingInfoSummaryContainer = styled.div`
  grid-area: summary;
  //margin: 5px 10px;
  //padding-top: inherit;
  margin: 10px 10px 0 10px;
  background-color: ${offGrey};
`



export const ListingPreviewFooter = styled.div`
  display: grid;
  grid-template-columns: 60% auto auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "empty footer-price footer-button"
  ;
  grid-column-gap: 15px;
  align-items: center;
`

const FooterButtonStyles = css`
  grid-area: footer-button;
  //margin-right:15px;
`
export const ListingPreviewFooterPriceContainer=styled.h2`
  grid-area: footer-price;
  color: ${blue};
  font-weight: bold;
  font-size: ${priceFontSize};
  margin-bottom: 0;
  .currency{
 
    fill: ${blue};

    height: 25px;
    width: auto;
    margin-bottom: 5px;
    margin-right: -5px;
    
  }
  
  //margin-top: 10px;
  
`





