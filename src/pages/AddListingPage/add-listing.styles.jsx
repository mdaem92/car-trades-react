import styled,{keyframes} from 'styled-components'


const offGrey = '#fcfcfc'

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
`

export const PageTitleContainer = styled.div`
  font-size: 50px;
  padding: 20px 0;
  margin: 10px;
  font-weight: bold;
  animation: ${fadeKeyFrame} 2s ease-in-out 0s ;
`

