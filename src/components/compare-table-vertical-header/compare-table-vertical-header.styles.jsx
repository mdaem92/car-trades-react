import styled from 'styled-components'


const blue ='#357ae8';
const offGrey = '#f7f7f7'
const grey = '#7f7f7f'
export const TableVerticalHeader = styled.div`
    grid-column:1/span 1;
    grid-row:1/span 1;
    /* border: 1px solid red; */
    display:grid;
    grid-template-rows:3fr 4fr;

`

export const HeaderLabel = styled.div`
    /* background:${({imageUrl})=>`url(${imageUrl})`} */
    grid-column:1/span 1;
    grid-row:1/span 1;
    display:flex;
    color:${blue};
    font-size:30px;
    font-weight:bold;
    justify-content:center;
    align-items:center;
    height:160px;
    width:250px;
    /* border:1px solid green; */
`

export const HeaderColumns=styled.div`
    /* background-color:${offGrey}; */
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    .column-item{
        text-align:start;
        border-bottom:1px solid ${offGrey};
        padding-left:5px;
        font-size:15px;
        color:${grey};
    }
`