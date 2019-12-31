import React from 'react'
import {
    ListingContainer,
    ListingImage,
    ListingCondition,
    ListingInfoCell,
    ToggleDetailsButton,
    CollapseContainer,
    CollapseContent,
    Wrapper,
    ListingPriceContainer,
    ListingInfoSummaryContainer,
    ListingPreviewFooterPriceContainer,
    ListingPreviewFooter,
    PriceBackground
} from './listing-preview.styles'
import ListingInfoSummary from "../listing-info-summary/listing-info-summary.component";
import ListingPreviewTabs from "../listing-preview-tabs/listing-preview-tabs.component";


const ListingPreview = ()=>{

    const [isOpen,setIsOpen] = React.useState(false)

    return (
        <Wrapper isOpen={isOpen}>
        <ListingContainer >
            <ListingImage className='image' imageUrl={require('../../assets/t1.jpg')} />
            <ListingInfoCell>
                <ListingCondition pill color={'primary'} >Used</ListingCondition>
                <span className={'text'}>2016 Honda CRZ </span>
            </ListingInfoCell>
            <ListingPriceContainer>$1685500</ListingPriceContainer>
            <ListingInfoSummaryContainer>
                <ListingInfoSummary/>
            </ListingInfoSummaryContainer>
            <ToggleDetailsButton
                onClick={()=>setIsOpen(!isOpen)}
                color={'primary'}
            >
                {
                isOpen?
                `Show Less`: 'Show More'
                }
            </ToggleDetailsButton>
        </ListingContainer>
            <CollapseContainer isOpen={isOpen}>
                <CollapseContent >
                    {/*<CardBody >*/}
                    <ListingPreviewTabs/>
                    <ListingPreviewFooter>
                        <ListingPreviewFooterPriceContainer>$16855</ListingPreviewFooterPriceContainer>
                        <ToggleDetailsButton color={'primary'} isFooter={true}>
                            Contact owner
                        </ToggleDetailsButton>
                    </ListingPreviewFooter>


                    {/*</CardBody>*/}
                </CollapseContent>
            </CollapseContainer>
        </Wrapper>

    )
}
export default ListingPreview