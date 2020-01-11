import styled from "styled-components";

export const ListingContainer = styled.div`
  display: grid;
  background-color: #357ae8;
  //previously was auto 40% 20%
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: 
    "results empty"
    "active sort"
    
  
  ;
  padding: 10px;
  margin-bottom: 20px;
  height: max-content;
 `
export const Results = styled.div`
grid-area:results;
display: flex;

align-items:center;
  .text{
    height:max-content;
    margin: 0 10px;
    padding: 0;
    color: white;
    font-weight: bolder;
    
  }
`
export const ActiveFilters = styled.div`
  grid-area: active;
`
export const Sort = styled.div`
  grid-area:sort;
`
