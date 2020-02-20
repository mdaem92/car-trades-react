import styled from 'styled-components'
import { Carousel } from 'antd';



export const CarouselContainer = styled(Carousel)`

    height:160px;
    width:250px;
    text-align: center;
    line-height: 160px;
    background: #364d79;
    

    .single-image{
        background-size: cover;
        background-position: center;  
        height:160px;
        width:250px;
        overflow:hidden;

    }
`
