import styled from 'styled-components'

export const ErrorPageContainer = styled.div`

    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;

    
`
export const ImageContainer = styled.div`
    margin:50px 0 ;
    height:200px;
    width:300px;
    background-size:cover;
    background-position:center;
    background-image:${({url})=>`url(${url})`};

`

export const TextContainer = styled.div`
    text-align:center;

`