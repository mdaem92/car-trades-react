import styled from 'styled-components'

const grey = '#f7f7f7'
export const CompareTableContainer = styled.div`
    display:grid;
    grid-template-columns: 1fr 7fr 1fr;
    grid-template-rows:1fr 7fr 1fr;
    min-height: calc(100vh - 150px);
    @media screen and (max-width:800px){
        /* overflow-y:hidden; */
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        align-items:center
    }
   
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
        @media screen and (max-width:800px){
            flex-direction:column;
        }   
    }

    @media screen and (max-width:800px){
        flex-direction:column;
        grid-column:unset;
        grid-row:unset;
        height:max-content;
        
    }
        
    
`

export const BackgroundContainer = styled.div`
    background-color:${grey};
`