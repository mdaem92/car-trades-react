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


const ListingPreview = (
    {
        condition,
        make,
        model,
        mileage,
        bodyType,
        seatCount,
        fuelEconomy,
        fuelType,
        engineCapacity,
        enginePower,
        imageFileList,
        transmission,
        price,
        year

    })=>{
        const listingData = {
            mileage,
            bodyType,
            seatCount,
            fuelEconomy,
            fuelType,
            engineCapacity,
            enginePower,
            imageFileList,
            transmission,
        }
    const [state,setState] = React.useState({
        isOpen:false,
        showModal:false,
        showConfirm:false
    })

    const {isOpen,showModal,showConfirm} =state
    return (
        <Wrapper isOpen={isOpen}>
        <ListingContainer >
            <ListingImage className='image' imageUrl={imageFileList?imageFileList[0].url:imageFileList} />
            <ListingInfoCell>
                <ListingCondition pill color={'primary'} >{condition.toUpperCase()}</ListingCondition>
                <span className={'text'}>{year} {make} {model.trim()} </span>
            </ListingInfoCell>
            <ListingPriceContainer>${price}</ListingPriceContainer>
            <ListingInfoSummaryContainer>
                <ListingInfoSummary {...listingData}/>
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
                    <ListingPreviewTabs {...listingData}/>
                    <ListingPreviewFooter>
                        <ListingPreviewFooterPriceContainer>${price}</ListingPreviewFooterPriceContainer>
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