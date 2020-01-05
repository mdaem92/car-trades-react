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
} from './listing-preview.styles'
import {message} from 'antd'
import ListingInfoSummary from "../listing-info-summary/listing-info-summary.component";
import ListingPreviewTabs from "../listing-preview-tabs/listing-preview-tabs.component";
import ListingPreviewContactModal from "../listing-preview-contact-modal/listing-preview-contact-modal.component";


const ListingPreview = ()=>{
    const [state,setState] = React.useState({
        isOpen:false,
        showModal:false,
        showConfirm:false
    })
    // const [isOpen,setIsOpen] = React.useState(false)
    const {isOpen,showModal,showConfirm} =state
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
                onClick={()=>setState({
                    ...state,
                    isOpen:!state.isOpen
                })}
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
                        <ToggleDetailsButton
                            color={'primary'}
                            isFooter={true}
                            onClick={()=>setState({
                                ...state,
                                showModal: true
                            })}
                        >
                            Contact owner
                        </ToggleDetailsButton>
                        <ListingPreviewContactModal
                            visible={showModal}
                            onOk={()=>{
                                setState({
                                ...state,
                                showModal: false,
                                })
                                message.success('Message sent.')
                            }}
                            onCancel={()=>setState({
                                ...state,
                                showModal: false
                            })}
                        />
                    </ListingPreviewFooter>

                    {/*</CardBody>*/}
                </CollapseContent>
            </CollapseContainer>
        </Wrapper>

    )
}
export default ListingPreview