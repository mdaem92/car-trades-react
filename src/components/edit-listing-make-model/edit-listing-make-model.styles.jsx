import styled from 'styled-components'

export const GridContainer = styled.div`
    *{
        border-radius: 0;
        font-size: 12px;
    }
    display: grid;
    grid-row-gap: 30px;
    margin-bottom: 32px;


    

    .ant-select{
        margin-right: 10px; 
    }
    .ant-radio-group{
        margin-right: 10px;
        .ant-radio-button-wrapper{
            padding:0 10px;
        }
    }
    .ant-calendar-picker{
        margin-right:10px;
    }
    .ant-input-number{
        margin-right: 10px;
    }

    .ant-cascader-picker{
        width:175px;
    }
    .ant-calendar-picker{
        width:175px;
    }
    @media screen and (max-width:800px){
        grid-row-gap:5px;
        margin-bottom:auto;
        height:230px;
    }
`

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width:800px){
        flex-direction:column;
    }

`