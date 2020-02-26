import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Upload, Icon, Modal, message as AntMessage } from 'antd';
import firebase from '../../firebase/firebase.utils'
import { ImageUploadContainer } from "./image-upload.styles";
import { createStructuredSelector } from "reselect";
import { addImage, setFileList } from "../../redux/add-listing-form/add-listing-form.actions";
import { fileListSelector } from "../../redux/add-listing-form/add-listing-form.selectors";

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const PicturesWall = ({ uploadedList, addImage, setFileList }) => {
    const [state, setState] = useState({
        previewVisible: false,
        previewImage: '',
        fileList:[]
        // fileList: [
        //     // {
        //     //     uid: '-1',
        //     //     name: 'image.png',
        //     //     status: 'done',
        //     //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        //     // },
        // ],
    })
    useEffect(() => {
        console.log('current state:', state)
    }, [state])

    const handleRemove = async (file) => {
        console.log('file to delete:', file)
        console.log('uploaded list:', uploadedList)
        const storage = firebase.storage()
        const storageRef = await storage.ref()
        const uid = file.uid
        const imgFile = storageRef.child(`images/${uid}`)
        try {
            await imgFile.delete()
            const newUploadedList = uploadedList.filter((item) => item.uid !== uid)
            setFileList(newUploadedList)
        } catch (e) {
            console.log(e)
        }
    }

    const handlePreview = async file => {
        console.log('handlePreview', file.url)
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        // console.log('originFileObj url: ',file.originFileObj.url)
        console.log('file url: ', file.url)

        setState({
            ...state,
            previewImage: file.url || file.preview,
            previewVisible: true,
        });
    };

    const handleChange = ({fileList}) => {
        console.log('handleChange', fileList)
        // if(fileList.length>6){
        //     AntMessage.error('Only up to 6 images allowed')
        //     fileList=fileList.slice(-6)
        // }
        // fileList = fileList.map(file => {
        //     if (file.response) {
        //       // Component will show file.url as link
        //       file.url = file.response.url;
        //     }
        //     return file;
        //   });
      
        setState({
            ...state,
            fileList
        });


    }
    const handleCancel = () => {
        console.log('cancelling')
        setState({
            ...state,
            previewVisible: false
        })
    }
    const beforeUpload = (file) => {
        console.log('before upload: ', file)
        const isImage = file.type.indexOf('image/') === 0;
        if (!isImage) {
            AntMessage.error('You can only upload image file!');
            setState({
                ...state,
                fileList:state.fileList.pop()
            })

        }
        const isLt5M = file.size / 1024 / 1024 < 5;
        if (!isLt5M) {
            AntMessage.error('Image must be smaller than 5MB!');
            setState({
                ...state,
                fileList:state.fileList.pop()
            })
        }
        if(state.fileList.length>=7){
            AntMessage.error('You can only upload up to 6 images')
            setState({
                ...state,
                fileList:state.fileList.pop()
            })
        }
        console.log('about to upload: ',state.fileList.length<6 ," , ",state.fileList.length)
        return isImage && isLt5M && state.fileList.length<6 ;
    };

    const customUpload = async ({ onError, onSuccess,onProgress, file }) => {
        console.log('uploading', file)
        setState({
            ...state,
            progress:0
        })
        const storage = firebase.storage()
        const metadata = {
            contentType: 'image/jpeg'
        }
        const storageRef = await storage.ref()
        // const imageName = shortid.generate() //a unique name for the image
        const imageName = file.uid

        const imgFile = storageRef.child(`images/${imageName}`)

        try {

            const image = await imgFile.put(file, metadata)
  
            // const urltest = await uploadTaskPromise(`images/${imageName}`,file)
            console.log('image: ',image)

            const url = await imgFile.getDownloadURL()
            file.url = url
            console.log('setFileList:', file)
            addImage(file)
            console.log('file after upload: ', file)
            console.log('url', url)
            onSuccess(null, image)

        } catch (e) {
            console.log(e)
            onError(e);
        }
    };

    const onDownload = (file) => {
        console.log(file)
    }
    const { previewVisible, previewImage } = state;
    const uploadButton = (
        <div>
            <Icon type="upload" />
            <div className="ant-upload-text">Add Images</div>
        </div>
    );
    return (
        <ImageUploadContainer>
            <Upload
                multiple
                accept={'image'}
                listType="picture-card"
                defaultFileList={uploadedList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={beforeUpload}
                customRequest={customUpload}
                // action={customUpload}
                onDownload={onDownload}
                onRemove={handleRemove}
            >
                {uploadedList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </ImageUploadContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    uploadedList: fileListSelector
})
const mapDispatchToProps = (dispatch) => ({
    addImage: (image) => dispatch(addImage(image)),
    setFileList: (fileList) => dispatch(setFileList(fileList))
})
export default connect(mapStateToProps, mapDispatchToProps)(PicturesWall)