import styled from 'styled-components'

const offGrey = '#f7f7f7'
export const MyListingsContainer = styled.div`
    width: 65%;
  //width: auto;
  display: flex;
  flex-direction: column;
  margin:10px 100px 10px 5px ;
 
  .pagination{
    justify-content: center;
  }
  @media screen and (max-width: 800px){

    width: 100%;
    margin: 10px 0 ;
    padding: 10px;
  }
  
`

export const BackgroundContainer = styled.div`
    background-color: ${offGrey};
    width: 100%;
    left: 0;
    min-height: calc(100vh - 150px);
`
export const InventoryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`
export const InventoryFiltersContainer = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  margin-bottom:10px ;
  margin-top: 10px;
  height: max-content;

  @media screen and (max-width: 800px){
    //display: none;
    width: 100%;
    margin: 10px 0 ;
    padding: 10px;
  }
`