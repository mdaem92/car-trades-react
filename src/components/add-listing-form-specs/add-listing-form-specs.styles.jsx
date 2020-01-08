import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  padding: 15px 20px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "engine-label e-selects"
    "fuel-label f-selects"
  ;
  
`
export const LabelContainer = styled.h4`
  text-align: center;
  align-content: center;
  color:grey;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 5px;
`

export const SelectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: auto;
  //grid-column-gap: 10px;
  //justify-content: space-around;
`