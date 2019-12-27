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
    ListingInfoSummaryContainer
} from './listing-preview.styles'
import {CardBody} from 'reactstrap'
import ListingInfoSummary from "../listing-info-summary/listing-info-summary.component";


const ListingPreview = ()=>{

    const [isOpen,setIsOpen] = React.useState(false)

    return (
        <Wrapper isOpen={isOpen}>
        <ListingContainer >
            <ListingImage className='image' imageUrl={'http://clipart-library.com/images/6Tp5kekyc.jpg'} />
            <ListingInfoCell>
                <ListingCondition pill color={'primary'} >Used</ListingCondition>
                <span className={'text'}>2016 Honda CRZ </span>
            </ListingInfoCell>
            <ListingPriceContainer>$16855</ListingPriceContainer>
            {/*<div>*/}
            {/*    sdfhsadkjf haksdhf adshf asdhjf asdjf opasdjf psoajf oj*/}
            {/*</div>*/}
            {/*<ListingInfoSummary/>*/}
            <ListingInfoSummaryContainer>
                <ListingInfoSummary/>
            </ListingInfoSummaryContainer>
            {/*<div>*/}
            {/*    sdfhsadkjf haksdhf adshf asdhjf asdjf opasdjf psoajf oj*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    sdfhsadkjf haksdhf adshf asdhjf asdjf opasdjf psoajf oj*/}
            {/*</div>*/}
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
                    <CardBody >
                        Anim pariatur cliche reprehenderit,
                        enim eiusmod high life accusamus terry richardson ad squid. Nihil
                        anim keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                    </CardBody>
                </CollapseContent>
            </CollapseContainer>
        </Wrapper>

    )
}
export default ListingPreview