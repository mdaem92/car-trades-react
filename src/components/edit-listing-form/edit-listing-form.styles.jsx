import styled from 'styled-components'

export const EditListingFormContainer = styled.div`
    /* display:flex; */
    grid-column:2 /span 1;
    grid-row:2/span 1; 
    @media screen and (max-width:800px){
        /* width:50px; */
    }
`
export const ButtonsContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    margin-top:10px;
    .ant-btn{
        margin-right:5px;
        border-radius:0;
    }
    @media screen and (max-width:800px){
        justify-content:flex-start;
        grid-row:3/span 1;
    }
`