import styled from "styled-components";

export const ListingPreviewSpecificationsGrid = styled.div`
  //margin-top: 50px;
  //background-color: #f7f7f7f7;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-auto-rows: auto;
  grid-gap: 1px 20px;
  padding: 25px;

  @media screen and (max-width:800px){
    grid-template-columns: 1fr;
    
  }
`

