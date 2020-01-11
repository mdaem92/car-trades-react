import styled,{css} from 'styled-components'
import {Affix} from 'antd'

const offGrey = '#f7f7f7'
const borderColor = '#00000020'


export const BackgroundContainer = styled.div`
  background-color: ${offGrey};
  width: 100%;
  left: 0;
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

export const InventoryListingsContainer = styled.div`
  width: 65%;
  //width: auto;
  display: flex;
  //border: 1px solid ${borderColor};
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
export const FiltersContainer = styled.div`
  background-color: white;
  width: 100%;
`



// export const InventoryContainer = styled.div`
//    display: grid;
//    grid-template-columns: 1fr 3fr 1fr;
//
//    grid-template-areas:
//      "filters listings ads"
//    ;
//    grid-column-gap: 20px;
//
//
// `
//
// export const InventoryListingsContainer = styled.div`
//   grid-area: listings;
//   width: 900px;
//
// `
// export const InventoryFiltersContainer = styled.div`
//
//   position: fixed;
//   top: 170px;
//   left: 0;
//
// `
