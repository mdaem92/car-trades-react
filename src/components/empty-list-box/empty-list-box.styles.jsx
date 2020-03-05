import styled from 'styled-components'
import { Button } from 'antd'

export const EmptyBoxContainer = styled.div`
    /* height:235px;
    background-color:white; */

    display:flex;
    flex-direction:column;
    justify-content:center;
    align-self:center;
    margin:auto 0;

`

export const MessageContainer = styled.div`
    color:grey;
    text-align:center;
`

export const LinkTitleContainer = styled(Button)`
    border-radius:0;
`