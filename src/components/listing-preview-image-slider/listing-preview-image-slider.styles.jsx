import styled,{css} from 'styled-components'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
}from 'reactstrap'


const arrowStyles = css`
  //height: 100px;
  //width: 100px;
  outline: none;
  background-size: 100%, 100%;
  border-radius: 50%;
  //border: 1px solid black;
  background-image: none;
`

export const CarouselContainer = styled.div`
  //border: 1px solid black;
  //margin-top: 20px;
  .custom-tag {
   max-width: 100%;
   height: 500px;
   background: white;
   }
// .carousel-control-prev-icon,
// .carousel-control-next-icon {
//   ${arrowStyles}
// }

//.carousel-control-next-icon:after
//{
//  content: '\u2bc8';
//  font-size: 30px;
//  font-weight: bold;
//  color: grey;
//  //margin-left: 20px;
//}
////
//.carousel-control-prev-icon:after {
//  content: '\u2bc7';
//  font-size: 30px;
//  font-weight: bold;
//  color: grey;
//  margin-left: 20px;
//}

.carousel-indicators li {
  background-color: grey;
}

`