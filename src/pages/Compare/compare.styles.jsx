import styled from 'styled-components'

export const CompareTableContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-rows:1fr 5fr 1fr;

   
`

export const CompareTable = styled.div`

    display:flex;
    flex-direction:row;
    height:400px;
    grid-column:2/span 1;
    grid-row:2/span 1;
    
    .compare-group{
        display: flex;
        flex-direction: row;
        margin:0;      
    }
           
        
    
`

