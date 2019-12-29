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

  .custom-tag {
    max-width: 100%;
    background: white;
    margin-bottom: 50px;
    //margin-top: 20px;
   }
// .carousel-control-prev-icon,
// .carousel-control-next-icon {
//   ${arrowStyles}
// }
  .carousel-indicators{
    //margin-top: 20px;
}

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