import React, {useState} from 'react';
import {Modal,Input,Button} from "antd";

const ListingPreviewContactModal = ({onCancel,onOk,...otherProps}) => {
    return (
        <Modal
            title="Contact dealer"
            centered
            footer={[
                <Button
                    key="back
                    " onClick={onCancel}
                >
                    Return
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onOk}
                >
                    Submit
                </Button>,
            ]}
            {...otherProps}
        >
            <Input.TextArea rows={4} defaultValue={`Hi, I'm interested in the vehicle... `} />

        </Modal>
    );
};

export default ListingPreviewContactModal;