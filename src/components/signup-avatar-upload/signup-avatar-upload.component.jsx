import React from 'react';
import { UploadContainer } from './signup-avatar-upload.styles';
import { Upload } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

const SignupAvatarUpload = ({avatarUrl,loading,...props}) => {
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div className="ant-upload-text">Upload Avatar</div>
        </div>
      );
    return (
        <UploadContainer >
            {/* <Upload {...props} className={'upload-list-inline'}>
                <Button >
                    <UploadOutlined/> Upload your Avatar
                </Button>
            </Upload> */}
            <Upload
                // name="avatar"
                // listType="picture-card"
                // className="avatar-uploader"
                // showUploadList={false}
                // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                // beforeUpload={beforeUpload}
                // onChange={this.handleChange}
                {...props}
            >
                {avatarUrl ? <img src={avatarUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </UploadContainer>
    );
};

export default SignupAvatarUpload;