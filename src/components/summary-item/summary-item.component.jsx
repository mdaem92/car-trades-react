import React from 'react'
import {SummaryItemContainer,TitleContainer} from "./summary-item.styles";

const SummaryItem = ({icon,title})=>(
    <SummaryItemContainer>
        <img className={'icon'} src={icon} alt={'icon'}  />
        <TitleContainer>{title}</TitleContainer>
    </SummaryItemContainer>
)
export default SummaryItem