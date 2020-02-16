import styled from 'styled-components'

export const CompareTableContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-rows:1fr 5fr 1fr;

    .compare-table{
        grid-column:2/span 1;
        grid-row:2/span 1;
        grid-column-gap:20px;
    /* border: 1px solid blue; */
        height:400px;
    }
`

export const CompareTable = styled.div`

    grid-column:2/span 1;
    grid-row:2/span 1;
    grid-column-gap:20px;
    height:400px;
    display:grid;
    grid-template-columns:repeat(4,1fr);
    
    
    
`

