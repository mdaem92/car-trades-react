import React from 'react'
import {CardContainer} from "../add-listing-form/add-listing-form.styles";
import { Upload, Icon, Modal,message as AntMessage } from 'antd';
import firebase from '../../firebase/firebase.utils'
import shortid from 'shortid'
import {ImageUploadContainer} from "./image-upload.styles";

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

class PicturesWall extends React.Component {
    state = {
        previewVisible: false,
        previewImage: '',
        fileList: [
            // {
            //     uid: '-1',
            //     name: 'image.png',
            //     status: 'done',
            //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            // },

        ],
    };

    handleCancel = () => this.setState({previewVisible: false});

    handlePreview = async file => {
        console.log('handlePreview',file)
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    handleChange = ({fileList}) =>{
        console.log('handleChange',fileList)
        this.setState({fileList});
    }
    beforeUpload = (file) => {
        const isImage = file.type.indexOf('image/') === 0;
        if (!isImage) {
            AntMessage.error('You can only upload image file!');
        }

        // You can remove this validation if you want
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            AntMessage.error('Image must smaller than 5MB!');
        }
        return isImage && isLt5M;
    };
    customUpload = async ({ onError, onSuccess, file }) => {
        const storage = firebase.storage()
        const metadata = {
            contentType: 'image/jpeg'
        }
        const storageRef = await storage.ref()
        const imageName = shortid.generate() //a unique name for the image
        const imgFile = storageRef.child(`images/${imageName}.png`)
        try {
            const image = await imgFile.put(file, metadata);
            onSuccess(null, image)
        }catch(e) {
            onError(e);
        }
    };
    onDownload = (file)=>{
        console.log(file)
    }

    render() {
        const {previewVisible, previewImage, fileList} = this.state;
        const uploadButton = (
            <div>
                <Icon type="upload"/>
                <div className="ant-upload-text">Add Images</div>
            </div>
        );
        return (
            <ImageUploadContainer>
                <Upload
                    multiple
                    accept={'image'}
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    beforeUpload={this.beforeUpload}
                    customRequest={this.customUpload}
                    onDownload={this.onDownload}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{width: '100%'}} src={previewImage}/>
                </Modal>
            </ImageUploadContainer>
        );
    }
}
export default PicturesWall