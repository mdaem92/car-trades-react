import styled,{css} from 'styled-components'
import {Carousel} from "antd";

const switchImage = css`
  
`
export const GridContainer = styled.div`
  background-color: #f7f7f7;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 3fr 3fr;
  grid-template-rows:  1fr 2fr 1fr;
  
  //grid-template-areas: 
  //  "L L R R R"
  //  "L S S S R"
  //  "L L R R R"
  //;
   #image1{
    //display: none;
   }
   #image2{
   //display: none;
   }
   #image3{
   //display: none;
   }
   #image4{
   display: none;
   
   }
   
`

export const BackgroundImageContainer = styled.div`
 
  //background-color: #357ae8;
  grid-column: 1 /span 2 ;
  grid-row: 1/span 3;
  //height: 89.5vh;
  //position: fixed;
  // background-position: center;
  // background-size: cover;
      vertical-align: top;

  // background-image: ${({imageUrl}) => `url(${imageUrl})`};
  .carousel{
    //height:89.5vh;
    //position: absolute;
    //height: 100vh;
    //border: 1px solid black;
    //display: block;
    overflow: hidden;
    vertical-align: top;

  }
   
   
`
export const SearchContainer = styled.div`
  //grid-area:S;
  //background-color: red;
  
  background-color: white;
  //border: 1px dashed black ;
  grid-column: 2 /span 3;
  grid-row: 2 / span 2;
  height: 150px;
  z-index: 999;
  
`
// export const BestDealsContainer = styled.div`
//   border: 1px dashed black ;
//   grid-column: 3 /span 2;
//   grid-row: 3/span 2;
//   height: 150px;
// `
export const ImageContainer = styled.div`
vertical-align: top;
 //display: flex;
  height: calc(100vh - 70px);
  background-position: center;
  background-size: cover;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  overflow: hidden;
`