import styled,{css} from 'styled-components'
import {Carousel} from "antd";


export const GridContainer = styled.div`
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: 4fr 1fr 0.5fr 5fr 0.5fr;
  grid-template-rows:  3fr auto 3fr;
 
`

export const BackgroundImageContainer = styled.div`
  grid-column: 1 /span 2 ;
  grid-row: 1/span 3;
  vertical-align: top;
  pointer-events: none;
  // background-image: ${({imageUrl}) => `url(${imageUrl})`};
  .carousel{
    overflow: hidden;
    vertical-align: top;

  }
 
`
export const SearchContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 4 /span 1;
  grid-row: 2 / span 1;
  z-index: 999;
  
`

export const ImageContainer = styled.div`
vertical-align: top;
 //display: flex;
  height: calc(100vh - 70px);
  background-position: center;
  background-size: cover;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  overflow: hidden;
`
export const LabelContainer = styled.div`
  font-size: 20px;
`