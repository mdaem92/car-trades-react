import styled from 'styled-components'
import React from 'react'
import {Carousel} from "antd";

export const CustomCarousel = styled(Carousel)`
  width: 100%;
  height: auto;
 
`
export const CarouselImage = styled.div`
  
  overflow: hidden;
  //width: 100%;
  height: 89.5vh;
  background-size: cover;
  background-position: center;
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
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