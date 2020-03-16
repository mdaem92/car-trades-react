import styled from 'styled-components'
import { Carousel } from 'antd';

export const CompareListingContainer = styled.div`
    .icon{
        position:absolute;
        top:70px;
    }
`

export const CarouselContainer = styled(Carousel)`

    height:160px;
    width:250px;
    text-align: center;
    line-height: 160px;
    background: #364d79;
    grid-row:1/span 1;

    
    

    .single-image{
        background-size: cover;
        background-position: center;  
        height:160px;
        width:250px;
        overflow:hidden;

    }
`
