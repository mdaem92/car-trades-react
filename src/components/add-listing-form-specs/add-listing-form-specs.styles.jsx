import styled from 'styled-components'

export const GridContainer = styled.div`
  *{
    border-radius: 0;
    font-size: 12px;
  }
  display: grid;
  padding: 15px 20px;
  grid-row-gap: 5px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: 
    "engine-label e-selects"
    "fuel-label f-selects"
  ;
  .ant-select{
    margin-right: 10px; 
  }
  @media screen and (max-width:800px){
    display:flex;
    flex-direction:column;
    justify-content:space-between;
  }
  
`
export const LabelContainer = styled.h4`

  //text-align: center;
  align-content: center;
  color:grey;
  font-size: 18px;
  margin-bottom: 0;
  margin-top: 5px;
  @media screen and (max-width:800px){
    display:none;
  }
`

export const SelectsContainer = styled.div`
  
  display: flex;
  flex-direction: row;
  .ant-input-number{
   margin-right: 10px;
  }
  @media screen and (max-width:800px){
    /* flex-direction:column; */
    flex-wrap:wrap;
    margin-bottom:10px;
  }
  
`