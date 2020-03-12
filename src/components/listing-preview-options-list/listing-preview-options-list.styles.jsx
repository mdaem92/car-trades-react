import styled from 'styled-components'

const offGrey = '#f7f7f7'

export const OptionsListGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: auto;
  padding: 25px;
  grid-row-gap: 5px;
  grid-column-gap: 20px;
  @media screen and (max-width:800px){
    grid-template-columns:1fr;
    padding:25px 5px;
  }
`

export const ListingOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid ${offGrey};
  .check-icon{
    width: 15px;
    height: auto;
    
    circle{
    fill: #357ae8 !important;
      
    }
    
  }
  
`
export const ListingOptionText = styled.span`
  color: grey;
  font-size: 14px;
  //font-weight: bolder;
  justify-content: flex-end;
  align-content: center;
  margin-left: 10px;
`