import styled from 'styled-components'
import {
    Card,
}from 'reactstrap'

const offGrey = '#f7f7f7'
const borderColor = '#00000020'


export const BackgroundContainer = styled.div`
  background-color: ${offGrey};
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
  margin-left: 100px;
  //border: 1px solid ${borderColor};
  margin-bottom:10px ;
  margin-top: 10px;
  height: max-content;
`

export const InventoryListingsContainer = styled.div`
  max-width: 60%;
  display: flex;
  //border: 1px solid ${borderColor};
  //background-color: white;
  flex-direction: column;
  margin:10px 100px 10px 5px ;
`