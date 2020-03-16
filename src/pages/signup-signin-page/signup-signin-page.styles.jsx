import styled from 'styled-components'

export const GridContainer = styled.div`
    display:grid;
    grid-template-columns:1fr 6fr 1fr;
    grid-template-rows:1fr 4fr 1fr; 
    @media screen and (max-width:800px){
        display:flex;
        justify-content:space-around;
    }
`
export const SigninSignupContainer = styled.div`
    grid-column:2/span 1;
    grid-row:2/span 1;
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;

    @media screen and (max-width:800px){
        flex-direction:column;
        padding:10px;
        justify-content:space-between;

    }
`