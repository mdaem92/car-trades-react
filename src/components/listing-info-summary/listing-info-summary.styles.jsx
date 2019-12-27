import styled from 'styled-components'

const offGrey = '#f7f7f7'
export const ListingInfoSummaryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  grid-gap: 1px;
  border-top: 1px solid ${offGrey};
  border-bottom: 1px solid ${offGrey};
  
`
