import React from 'react'
import {SummaryItemContainer,TitleContainer,DescriptionContainer,InfoContainer,ImageContainer} from "./summary-item.styles";

const SummaryItem = ({title,isExtended,description,children})=>(
    <SummaryItemContainer isExtended={isExtended}>
        {/*<img className={'icon'} src={icon} alt={'icon'}  />*/}
        <ImageContainer isExtended={isExtended}>{children}</ImageContainer>

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