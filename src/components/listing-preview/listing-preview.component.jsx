import React,{useEffect} from 'react'
import{connect}from 'react-redux'
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
    TopLeftPriceButtonsContainer,
    ListingInfoSummaryContainer,
    ListingPreviewFooterPriceContainer,
    ListingPreviewFooter,
} from './listing-preview.styles'
import { message, Drawer ,Button} from 'antd'
import ListingInfoSummary from "../listing-info-summary/listing-info-summary.component";
import ListingPreviewTabs from "../listing-preview-tabs/listing-preview-tabs.component";
import ListingPreviewContactModal from "../listing-preview-contact-modal/listing-preview-contact-modal.component";
import ListingPreviewUserButtons from "../listing-preview-user-buttons/listing-preview-user-buttons.component";
import EditListingForm from '../edit-listing-form/edit-listing-form.component'
import { currentUserSelector } from '../../redux/auth/auth.selectors';
import {createStructuredSelector} from 'reselect'
import { setInitialValues } from '../../redux/edit-listing-form/edit-listing-form.actions';
import { doneEdittingSelector } from '../../redux/edit-listing-form/edit-listing-form.selectors';


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
        deleteModalVisible:false
    })


    const onDrawerClose = () => {
        console.log('closing')
        setState({
            ...state,
            drawerVisible: false
        })

    };
    const handleEdit = ()=>{
        const {isCompared,isParked,...formProps} = listingData
        setInitialValues({...formProps,doneEditting:false})
        setState({
            ...state,
            drawerVisible:true
        })
        // setDrawerVisibility(true)

    }
    const { isOpen, showModal,drawerVisible } = state
    // console.log('current username: ',currentUser.displayName ,' === ',userName , 'result: ',currentUser.displayName===userName)
    return (
        <Wrapper isOpen={isOpen}>
            <ListingContainer id={`listing-${id}`} >
                <ListingImage className='image' imageUrl={imageFileList ? imageFileList[0].url : imageFileList} />
                <ListingInfoCell>
                    <ListingCondition color={'primary'} >{condition.toUpperCase()}</ListingCondition>
                    <span className={'text'}>{registered.slice(0,4)} {make} {model.trim()} </span>
                </ListingInfoCell>
                <TopLeftPriceButtonsContainer >
                    {
                         (currentUser && currentUser.displayName!==userName) || !currentUser ?
                            <ListingPreviewUserButtons {...listingData} />
                            :
                            (
                                <div>
                                    <Drawer
                                        // title="Edit listing"
                                        placement="right"
                                        className={'drawer'}
                                        closable
                                        onClose={onDrawerClose}
                                        visible={drawerVisible && !doneEditting}
                                        getContainer={() => document.getElementById(`listing-${id}`)}
                                        afterVisibleChange={()=>console.log('after visibility change')}
                                        width={848}
                                    // style={{ position: 'absolute'}}
                                    >
                                        <EditListingForm listing={listingData}/>
                                    </Drawer>

                                    <Button type={'link'} onClick={handleEdit}>Edit</Button>
                                    <Button type={'link'} onClick={()=>setState({...state,deleteModalVisible:!state.deleteModalVisible})}>Delete</Button>

                                </div>
                            )

                            
                }
                <div className={'price-tag-container'}>
                <Dollar className={'currency'}>$</Dollar>
                {price}
            </div>
            </TopLeftPriceButtonsContainer>
        <ListingInfoSummaryContainer>
            <ListingInfoSummary {...listingData} />
        </ListingInfoSummaryContainer>
        <ToggleDetailsButton
            onClick={() => setState({
                ...state,
                isOpen: !state.isOpen
            })}
            color={'primary'}
        >
            {
                isOpen ?
                    `Show Less` : 'Show More'
            }
        </ToggleDetailsButton>
        </ListingContainer >
    <CollapseContainer isOpen={isOpen}>
        <CollapseContent >
            {/*<CardBody >*/}
            <ListingPreviewTabs {...listingData} />
            <ListingPreviewFooter>
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
                        console.log('closing')
                        setState({
                            ...state,
                            showModal: false,
                        })
                        message.success('Message sent.')
                    }}
                    onCancel={() => {
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
        </Wrapper >

    )
}
const mapStateToProps = createStructuredSelector({
    currentUser:currentUserSelector,
    doneEditting:doneEdittingSelector
})
const mapDispatchToProps = (dispatch)=>({
    setInitialValues:(values)=>dispatch(setInitialValues(values)),
})
export default React.memo(connect(mapStateToProps,mapDispatchToProps)(ListingPreview))