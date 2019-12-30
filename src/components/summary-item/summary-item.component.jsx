import React from 'react'
import {SummaryItemContainer,TitleContainer,DescriptionContainer,InfoContainer} from "./summary-item.styles";

const SummaryItem = ({icon,title,isExtended,description})=>(
    <SummaryItemContainer isExtended={isExtended}>
        <img className={'icon'} src={icon} alt={'icon'}  />
        {
            isExtended? (
                <InfoContainer>
                    <DescriptionContainer>{description}</DescriptionContainer>
                    <TitleContainer isExtended={isExtended}>{title}</TitleContainer>
                </InfoContainer>

            ):(
                <TitleContainer isExtended={isExtended}>{title}</TitleContainer>

            )
        }
    </SummaryItemContainer>
)
export default SummaryItem