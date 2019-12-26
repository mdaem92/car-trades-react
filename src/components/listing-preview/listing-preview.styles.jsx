import styled from 'styled-components'

export const ListingContainer = styled.div`
  display: grid;
  grid-template-columns: auto 40% 20%;
  grid-template-rows: auto 40%;
  margin: 15px;
  
`

export const ListingImage = styled.div`
  width: 100%;
  height: 150px;
  //background-size: cover;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  overflow: hidden;
  padding: 5px;
`