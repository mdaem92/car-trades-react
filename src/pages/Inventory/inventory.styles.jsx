import styled from 'styled-components'
import {
    Card,
}from 'reactstrap'

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
`
export const InventoryFiltersContainer = styled.div`
  width: 20%;
  //max-width: 400px;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  margin-left: 50px;
  margin-bottom:10px ;
  margin-top: 10px;
  height: max-content;
  @media screen and (max-width: 800px){
    display: none;
  }
`

export const InventoryListingsContainer = styled.div`
  width: 65%;
  display: flex;
  //border: 1px solid ${borderColor};
  //background-color: white;
  flex-direction: column;
  margin:10px 100px 10px 5px ;
  @media screen and (max-width: 800px){
    
    width: 100%;  
    margin: 10px 0 ;
    padding: 10px;
  }
`