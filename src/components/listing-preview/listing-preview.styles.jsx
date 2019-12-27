import styled, {css} from 'styled-components'
import Badge from 'reactstrap/lib/Badge'
import Button from 'reactstrap/lib/Button'
import Collapse from 'reactstrap/lib/Collapse'

import {ReactComponent as PriceTag} from '../../assets/price-tag.svg'


const offGrey = '#f7f7f7'

export const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: auto 40% 20%;
  grid-template-rows: auto auto ;
  grid-template-areas: 
    "image name price"
    "summary summary button"
  ;
  //grid-template-rows: repeat(2, 1fr);;
  //margin: 15px;
  padding: 10px;
  background-color: white;
 
  //margin-bottom: 20px;

  
  .text{
    color: #58575f;
    font-size: 25px;
    font-weight: bolder;
    margin-top: 35px;
  }
  
`

export const ListingImage = styled.div`
  width: 100%;
  height: 150px;
  //background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  overflow: hidden;
  padding: 5px;
`
export const ListingCondition = styled(Badge)`
  width: 100px;
`
export const ListingInfoCell = styled.div`
  width: 100%;
  // for the pill border
  //border-radius: 20%/50%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  
  
`
export const ToggleDetailsButton = styled(Button)`

  //position: center;
  width: 150px;
  height: 50px ;
  margin: auto;
  //grid-area: toggle;
  
`
export const CollapseContainer = styled(Collapse)`
  //grid-row-start: span;
`
export const CollapseContent = styled.div`
  width: 100%;
  display: inline-block;
  grid-row: span 3 / 1;
  //border: 1px solid black;
  
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

export const ListingPriceContainer = styled.h3`

  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  margin: 20px 10px;
  @media screen and (max-width: 800px){
    font-size: 15px;
    margin: 10px;
  }

`
export const ListingInfoSummaryContainer = styled.div`
  grid-area: summary;
  margin: 5px 10px;
  //padding: 5px;
  //border: 1px  solid black;
  background-color:${offGrey};
`


