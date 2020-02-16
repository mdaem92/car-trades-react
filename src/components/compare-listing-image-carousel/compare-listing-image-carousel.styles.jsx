import styled from 'styled-components'
import { Carousel } from 'antd';


const blue ='#357ae8';
const offGrey = '#f7f7f7'
const grey = '#7f7f7f'
export const ImageCarouselContainer = styled.div`
    background-image:${({imageUrl})=>`url(${imageUrl})`};
    background-size: cover;
    background-position: center;
    grid-column:1/span 1;
    grid-row:1/span 1;
    /* display:flex; */
    /* color:${blue}; */
    /* font-size:30px; */
    /* font-weight:bold; */
    /* justify-content:center; */
    /* align-items:center; */
    /* border:1px solid green; */
`

export const ImageContainer = styled.div`
    background-image:${({imageUrl})=>`url(${imageUrl})`};
    background-size: cover;
    background-position: center;

`

export const CarouselContainer = styled(Carousel)`
    height:160px;
    /* position:relative; */
    width:250px;
    overflow:hidden;
    text-align: center;
    line-height: 160px;
    background: #364d79;

    .single-image{
        background-size: cover;
        background-position: center;  
        height:160px;
        width:250px;
    }
`
