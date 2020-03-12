import styled from 'styled-components'


export const GridContainer = styled.div`
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: 4fr 1fr 0.5fr 5fr 0.5fr;
  grid-template-rows:  3fr auto 3fr;
  height:100%;
  @media screen and (max-width:800px){
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows:  3fr 3fr;
  }


`

export const BackgroundImageContainer = styled.div`
  grid-column: 1 /span 2 ;
  grid-row: 1/span 3;
  pointer-events: none;
  background-position:center;
  background-size:cover;
  // background-image: ${({imageUrl}) => `url(${imageUrl})`};
  @media screen and (max-width:800px){
    grid-column: 1 /span 3 ;
    grid-row: 1/span 3;
    height:500px;
  }

 
`
export const SearchContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-column: 4 /span 1;
  grid-row: 2 / span 1;
  //z-index: 999;

  @media screen and (max-width:800px){
    grid-column: 2 /span 1 ;
    grid-row: 2/span 1;
    z-index:999;
    background-color:unset;
  }
`
export const SearchLabelContainer = styled.div`
  grid-column: 4 /span 1;
  grid-row: 1 / span 1;
  display: flex;
  //justify-content: space-around;
  align-items: flex-end;
  font-size: 50px;
  font-weight: bold;
  color: grey;
  margin-bottom: 20px;
  @media screen and (max-width:800px){
    grid-column: 2 /span 1 ;
    grid-row: 1/span 1;
    z-index:999;
    color:white;
  }
  
`

export const ImageContainer = styled.div`
vertical-align: top;
 //display: flex;
  height: calc(100vh - 70px);
  background-position: center;
  background-size: cover;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  overflow: hidden;
`
export const LabelContainer = styled.div`
  font-size: 20px;
`