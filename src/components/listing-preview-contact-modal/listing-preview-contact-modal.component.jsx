import React from 'react';
import {Modal,Input,Button} from "antd";

const ListingPreviewContactModal = ({onCancel,onOk,...otherProps}) => {
    return (
        <Modal
            title="Contact dealer"
            centered
            closable={false}
            getContainer={document.getElementById('preview-footer')}
            footer={[
                <Button
                    key="back" 
                    onClick={onCancel}
                >
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    onClick={onOk}
                >
                    Submit
                </Button>
            ]}
            {...otherProps}
        >
            <Input.TextArea rows={4} defaultValue={`Hi, I'm interested in the vehicle... `} />

        </Modal>
    );
};

export default ListingPreviewContactModal;