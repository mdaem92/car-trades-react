import styled,{keyframes} from 'styled-components'


const offGrey = '#fcfcfc'
const blue = '#357ae8'

const fadeKeyFrame = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
export const AddListingContainer = styled.div`

  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: auto;

`
export const BackgroundContainer = styled.div`
  background-color: ${offGrey};
  width: 100%;
  min-height: calc(100vh - 150px)
`

export const PageTitleContainer = styled.h3`
  /* font-size: 20px; */
  padding: 20px 0;
  color:${blue};
  /* display:flex; */
  /* justify-content:center; */
  margin: 10px;
  font-weight: bold;
  animation: ${fadeKeyFrame} 1s linear  ;
`

