import styled,{css} from 'styled-components'

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

const imageStyles = css`

  background-image: ${(props)=> `url(${props.image})`};
  background-position: center;
  background-size: cover;
`

export const Image1 = styled.div`
  grid-area: image1;
  height: 300px;
  ${imageStyles}
`
export const Image2 = styled.div`
  grid-area: image2;
  height: 145px;
  ${imageStyles}
`
export const Image3 = styled.div`
  grid-area: image3;
  height: 145px;
  ${imageStyles}
`