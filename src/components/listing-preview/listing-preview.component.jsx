import React from 'react'
import {ReactComponent as Dollar} from "../../assets/dollar-currency-sign.svg";
import {
    ListingContainer,
    ListingImage,
    ListingCondition,
    ListingInfoCell,
    ToggleDetailsButton,
    CollapseContainer,
    CollapseContent,
    Wrapper,
    TopLeftPriceButtonsContainer,
    ListingInfoSummaryContainer,
    ListingPreviewFooterPriceContainer,
    ListingPreviewFooter,
} from './listing-preview.styles'
import {message} from 'antd'
import ListingInfoSummary from "../listing-info-summary/listing-info-summary.component";
import ListingPreviewTabs from "../listing-preview-tabs/listing-preview-tabs.component";
import ListingPreviewContactModal from "../listing-preview-contact-modal/listing-preview-contact-modal.component";
import ListingPreviewUserButtons from "../listing-preview-user-buttons/listing-preview-user-buttons.component";


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
        registered,
        userName,
        id,
        color,
        isCompared,
        isParked

    })=>{
        const listingData = {
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
            registered,
            userName,
            id,
            color,
            isCompared,
            isParked

        }
    const [state,setState] = React.useState({
        isOpen:false,
        showModal:false,
        showConfirm:false
    })

    const {isOpen,showModal} =state
    return (
        <Wrapper isOpen={isOpen}>
        <ListingContainer >
            <ListingImage className='image' imageUrl={imageFileList?imageFileList[0].url:imageFileList} />
            <ListingInfoCell>
                <ListingCondition color={'primary'} >{condition.toUpperCase()}</ListingCondition>
                <span className={'text'}>{registered} {make} {model.trim()} </span>
            </ListingInfoCell>
            <TopLeftPriceButtonsContainer>
                <ListingPreviewUserButtons {...listingData}/>
                <div className={'price-tag-container'}>
                    <Dollar className={'currency'}>$</Dollar>
                    {price}
                </div>
            </TopLeftPriceButtonsContainer>
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
                        <ListingPreviewFooterPriceContainer><Dollar className={'currency'}>$</Dollar>{price}</ListingPreviewFooterPriceContainer>
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
                                console.log('closing')
                                setState({
                                ...state,
                                showModal: false,
                                })
                                message.success('Message sent.')
                            }}
                            onCancel={()=>{
                                console.log('cancelling')
                                setState({
                                ...state,
                                showModal: false
                                })
                            }}

                        />
                    </ListingPreviewFooter>

                    {/*</CardBody>*/}
                </CollapseContent>
            </CollapseContainer>
        </Wrapper>

    )
}
export default React.memo(ListingPreview)