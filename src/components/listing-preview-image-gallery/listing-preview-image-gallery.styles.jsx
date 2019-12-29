import styled from 'styled-components'

export const ImageGalleryGridContainer = styled.div`
  display: grid;

  grid-template-columns: 60% auto;
  padding: 25px;
  grid-template-rows: 50% 50%;
  grid-template-areas: 
    "image1 image2 "
    "image1 image3"
  ;
  grid-gap: 5px 10px;
  grid-auto-rows: auto;

`

export const Image1 = styled.div`
  grid-area: image1;
  border: 1px solid red;
  height: 300px;
`
export const Image2 = styled.div`
  grid-area: image2;
  height: 145px;
  border: 1px solid blue;
`
export const Image3 = styled.div`
  grid-area: image3;
  border: 1px solid black;
  height: 145px;
`