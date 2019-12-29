import styled,{css} from 'styled-components'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
}from 'reactstrap'

const arrowColor = '#58575f'

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
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='{%58575f}' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    //fill: red;
    margin-left: 100px;
  }
  }
  .carousel-control-prev-icon {
   background-image : url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%343A40' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    //left:-45px ;
    margin-right: 100px;
   }
   .carousel-control-prev{
    

   }
   .carousel-control-next{

    
   }
   
   

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