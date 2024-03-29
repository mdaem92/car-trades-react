import React, { useCallback,useMemo } from 'react'
import { connect } from 'react-redux'
import { ReactComponent as Dollar } from "../../assets/dollar-currency-sign.svg";
import {
    ListingContainer,
    ListingImage,
    ListingCondition,
    ListingInfoCell,
    ToggleDetailsButton,
    CollapseContainer,
    CollapseContent,
    Wrapper,
    TopRightPriceButtonsContainer,
    ListingInfoSummaryContainer,
    ListingPreviewFooterPriceContainer,
    ListingPreviewFooter,
} from './listing-preview.styles'
import { message, Drawer, Button } from 'antd'
import ListingInfoSummary from "../listing-info-summary/listing-info-summary.component";
import ListingPreviewTabs from "../listing-preview-tabs/listing-preview-tabs.component";
import ListingPreviewContactModal from "../listing-preview-contact-modal/listing-preview-contact-modal.component";
import ListingPreviewUserButtons from "../listing-preview-user-buttons/listing-preview-user-buttons.component";
import EditListingForm from '../edit-listing-form/edit-listing-form.component'
import { currentUserSelector } from '../../redux/auth/auth.selectors';
import { createStructuredSelector } from 'reselect'
import { setInitialValues } from '../../redux/edit-listing-form/edit-listing-form.actions';
import { doneEdittingSelector } from '../../redux/edit-listing-form/edit-listing-form.selectors';
import {DownOutlined,UpOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'

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
        isParked,
        isOwnListing,
        currentUser,
        setInitialValues,
        doneEditting



    }) => {
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
    const [state, setState] = React.useState({
        isOpen: false,
        showModal: false,
        showConfirm: false,
        drawerVisible: false,
        deleteModalVisible: false
    })
    const { isOpen, showModal, drawerVisible } = state

    const onDrawerClose = useCallback(() => {
        setState({
            ...state,
            drawerVisible: false
        })

    },[state]);
    const handleEdit = useCallback(() => {
        const { isCompared, isParked, ...formProps } = listingData
        setInitialValues({ ...formProps, doneEditting: false })
        setState({
            ...state,
            drawerVisible: true
        })

    },[state,listingData,setInitialValues])

    const toggleMoreDetails = useCallback(() => setState({
        ...state,
        isOpen: !state.isOpen
    }),[state])
    
    
    return (
        <Wrapper isOpen={isOpen}>
            <ListingContainer id={`listing-${id}`} >
                <ListingImage className='image' imageUrl={imageFileList ? imageFileList[0].url : imageFileList} />
                <ListingInfoCell>
                    <ListingCondition color={'primary'} >{condition.toUpperCase()}</ListingCondition>
                    <span className={'text'}>{registered.slice(0, 4)} {make} {model.trim()} </span>
                </ListingInfoCell>
                <div className={'mobile-price-tag-container'}>
                    <Dollar className={'currency'}>$</Dollar>
                    {price}
                </div>
                <TopRightPriceButtonsContainer >
                    {
                        (currentUser && currentUser.displayName !== userName) || !currentUser ?
                            <ListingPreviewUserButtons {...listingData} />
                            :
                            (
                                <div className={'buttons-container'}>
                                    <Drawer
                                        placement="right"
                                        className={'drawer'}
                                        closable
                                        onClose={onDrawerClose}
                                        open={drawerVisible && !doneEditting}
                                        getContainer={() => document.getElementById(`listing-${id}`)}

                                        // afterVisibleChange={() => console.log('after visibility change')}
                                        width={window.innerWidth>800? 848 : 277}
                                    >
                                        <EditListingForm listing={listingData} />
                                    </Drawer>

                                    <Button type={'link'} icon={<EditOutlined/>} onClick={handleEdit}/>
                                    <Button type={'link'} icon={<DeleteOutlined/>} onClick={() => setState({ ...state, deleteModalVisible: !state.deleteModalVisible })}/>

                                </div>
                            )


                    }
                    <div className={'price-tag-container'}>
                        <Dollar className={'currency'}>$</Dollar>
                        {price}
                    </div>
                </TopRightPriceButtonsContainer>
                <ListingInfoSummaryContainer>
                    <ListingInfoSummary {...listingData} />
                </ListingInfoSummaryContainer>
                <ToggleDetailsButton
                    onClick={toggleMoreDetails}
                    color={'primary'}
                    type={'link'}
                    isFooter={false}
                    // icon={isOpen?'up':'down'}
                    icon={isOpen?<UpOutlined/>:<DownOutlined/>}

                >
                    
                    {
                        isOpen?"View less" : "View more"
                    }
                </ToggleDetailsButton>
            </ListingContainer >
            <CollapseContainer isOpen={isOpen}>
                <CollapseContent >
                    <ListingPreviewTabs {...listingData} />
                    <ListingPreviewFooter id={'preview-footer'}>
                        <ListingPreviewFooterPriceContainer><Dollar className={'currency'}>$</Dollar>{price}</ListingPreviewFooterPriceContainer>
                        <ToggleDetailsButton
                            color={'primary'}
                            isFooter={true}
                            onClick={() => setState({
                                ...state,
                                showModal: true
                            })}
                        >
                            Contact owner
                        </ToggleDetailsButton>
                        <ListingPreviewContactModal
                            visible={showModal}
                            onOk={() => {
                                setState({
                                    ...state,
                                    showModal: false,
                                })
                                message.success('Message sent.')
                            }}
                            onCancel={() => {
                                setState({
                                    ...state,
                                    showModal: false
                                })
                            }}

                        />
                    </ListingPreviewFooter>

                </CollapseContent>
            </CollapseContainer>
        </Wrapper >

    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    doneEditting: doneEdittingSelector
})
const mapDispatchToProps = (dispatch) => ({
    setInitialValues: (values) => dispatch(setInitialValues(values)),
})
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(ListingPreview))