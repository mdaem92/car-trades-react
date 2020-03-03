import React from 'react';
import {connect} from 'react-redux'
import {SettingsContainer}from './user-account-settings.styles'
import { createStructuredSelector } from 'reselect';
import {currentUserSelector}from '../../redux/auth/auth.selectors'
// import {Icon,Input,Button} from 'antd'

const UserAccountSettings = ({currentUser}) => {

    // const handleEdit = ()=>{
    //     console.log('editting: ',currentUser)
    // }
    // const handleChange = (e)=>{
    //     console.log('changing: ',e);
        
    // }
    return (
        <SettingsContainer>
            {/* <form  onSubmit={handleSubmit}>
                <Input
                    name='displayName'
                    type='text'
                    placeholder='Display name'
                    defaultValue={'doodooli'}
                    disabled
                    className={'input'}
                    required
                    onChange={handleChange}
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
                />
                {console.log('disabled:',!!photoURL)}
                <SignupAvatarUpload
                    name="avatar"
                    listType="picture-card"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    customRequest={handleAvatarUpload}
                    onRemove={handleUploadRemove}
                    loading={avatarLoading}
                    avatarUrl={photoURL}
                />
                <Input
                    name='email'
                    className={'input'}
                    placeholder={'Email'}
                    type='email'
                    defaultValue={state.email}
                    required
                    onChange={handleChange}
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }}/>}

                />
                <Input
                    name='password'
                    className={'input'}
                    placeholder={'Password'}
                    type='password'
                    defaultValue={state.password}
                    required
                    onChange={handleChange}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}

                />
                <Input
                    name='confirmedPassword'
                    className={'input'}
                    type='password'
                    placeholder='Confirm Password'
                    defaultValue={state.confirmedPassword}
                    required
                    onChange={handleChange}
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>}

                />


                <Button 
                    type='primary'
                    htmlType={'submit'}
                    onClick={handleEdit}
                    className={'button'}
                    icon={'rocket'}
                >
                    Edit
                </Button>


            </form> */}

        </SettingsContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser:currentUserSelector
})

export default connect(mapStateToProps)(UserAccountSettings);