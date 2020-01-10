import React,{useState} from 'react';
import {PriceInputContainer,LabelContainer,AppraisalButton,CustomInputNumber} from "./add-listing-form-price.styles";
import {message} from "antd";
import PriceAppraisalModal from "../add-listing-form-price-appraisal-modal/price-appraisal.component";

const AddListingFormPrice = () => {
    const [state,setState] = useState({
        price:null,
        modalText: 'Your car data will be sent to our servers and you will be notified shortly with our appraisal results',
        modalVisible: false,
        modalConfirmLoading: false,
    })
    const onChange = (value)=>{
        console.log(value)
        setState({
            ...state,
            price:value
        })
    }
    const {price,modalText,modalConfirmLoading,modalVisible} = state
    const handleOk = ()=>{
        setState({
            ...state,
            // modalText: 'communicating...',
            modalConfirmLoading: true,
        });
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
                defaultValue={state.price}
                placeholder={'Price'}
                min={100}
                step={500}
                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                onChange={onChange}
            />
            <LabelContainer>Or our appraisal </LabelContainer>
            <>
                <AppraisalButton type="primary" onClick={()=>setState({
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

export default AddListingFormPrice;