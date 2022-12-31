import React,{useState} from 'react';
import {connect} from 'react-redux'
import {PriceInputContainer,LabelContainer,AppraisalButton,CustomInputNumber} from "./add-listing-form-price.styles";
import {message} from "antd";
import PriceAppraisalModal from "../add-listing-form-price-appraisal-modal/price-appraisal.component";
import {createStructuredSelector} from "reselect";
import {setPrice,requestAppraisal} from "../../redux/add-listing-form/add-listing-form.actions";
import {isAppraisalRequested, priceSelector} from "../../redux/add-listing-form/add-listing-form.selectors";
// test commit
const AddListingFormPrice = ({price,setPrice,isAppraisalRequested,requestAppraisal}) => {
    const [state,setState] = useState({
        // price:null,
        modalText: 'Your car data will be sent to our servers and you will be notified shortly with our appraisal results',
        modalVisible: false,
        modalConfirmLoading: false,
    })
    const onChange = (value)=>{
        console.log(value)
        // setState({
        //     ...state,
        //     price:value
        // })
        setPrice(value)
    }
    const {modalText,modalConfirmLoading,modalVisible} = state
    const handleOk = ()=>{
        setState({
            ...state,
            // modalText: 'communicating...',
            modalConfirmLoading: true,
        });
        requestAppraisal()
        setTimeout(() => {
            setState({
                modalVisible: false,
                modalConfirmLoading: false,
            });
            message.success('Appraisal applied')
        }, 2000);
    }
    const handleCancel= ()=>{
        setState({
            ...state,
            modalVisible: false
        })
    }

    return (
        <PriceInputContainer>
            <LabelContainer>Your Price</LabelContainer>
            <CustomInputNumber
                defaultValue={price}
                placeholder={'Price'}
                min={100}
                step={500}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
            />
            <LabelContainer>Or our appraisal </LabelContainer>
            <>
                <AppraisalButton type="primary" disabled={isAppraisalRequested} onClick={()=>setState({
                    ...state,
                    modalVisible: true
                })} >
                    Apply
                </AppraisalButton>
                <PriceAppraisalModal
                    title="Appraisal"
                    modalText={modalText}
                    visible={modalVisible}
                    onOk={handleOk}
                    confirmLoading={modalConfirmLoading}
                    onCancel={handleCancel}
                />
            </>

        </PriceInputContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    price:priceSelector,
    isAppraisalRequested:isAppraisalRequested
})
const mapDispatchToProps = (dispatch) => ({
    setPrice: (price) => dispatch(setPrice(price)),
    requestAppraisal: () => dispatch(requestAppraisal())
});

export default connect(mapStateToProps,mapDispatchToProps)(AddListingFormPrice);