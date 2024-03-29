import styled from 'styled-components'


export const CarouselContainer = styled.div`
   
  .custom-tag {
    max-width: 100%;
    background: white;
    margin-bottom: 50px;
   }
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='{%58575f}' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
    //fill: red;
    margin-left: 100px;
  }
  
  .carousel-control-prev-icon {
   background-image : url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%343A40' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
    //left:-45px ;
    margin-right: 100px;
   }

 .ant-carousel .slick-slide {
  text-align: center;
  //height: 160px;
  //line-height: 160px;
  //background: #364d79;
  //overflow: hidden;
 
}
  .ant-carousel .slick-dots li {
    background-color: grey;
    
  }
 .ant-carousel .slick-dots li.slick-active button:hover,
 .ant-carousel .slick-dots li.slick-active button:focus ,
 .ant-carousel .slick-dots li.slick-active button{
  background-color: #357ae8  !important;
 }



`