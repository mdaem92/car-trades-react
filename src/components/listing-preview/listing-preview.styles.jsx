import styled from 'styled-components'
import Badge from 'reactstrap/lib/Badge'
import Button from 'reactstrap/lib/Button'
import Collapse from 'reactstrap/lib/Collapse'

export const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: auto 40% 20%;
  grid-template-rows: auto auto ;
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
  max-width: 150px;
  margin: 20px 10px;
  //grid-area: toggle;
  
`
export const CollapseContainer = styled(Collapse)`
  //grid-row-start: span;
`
export const CollapseContent = styled.div`
  width: 100%;
  grid-row: span 3 / 1;
  border: 1px solid black;
  
`

export const Wrapper = styled.div`
  background-color: white;
  padding: 10px;
  margin-bottom: 20px;
`