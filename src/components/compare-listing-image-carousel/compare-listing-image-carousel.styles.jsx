import styled from 'styled-components'
import { Carousel } from 'antd';


const blue ='#357ae8';
const offGrey = '#f7f7f7'
const grey = '#7f7f7f'

export const CarouselContainer = styled(Carousel)`

    height:160px;
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
