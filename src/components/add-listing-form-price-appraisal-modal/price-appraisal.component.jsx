import React, {useState} from 'react';
import {Modal} from 'antd'

const PriceAppraisalModal = ({modalText,...otherProps}) => (
    <Modal {...otherProps}>
        {modalText}
    </Modal>
);

export default PriceAppraisalModal;