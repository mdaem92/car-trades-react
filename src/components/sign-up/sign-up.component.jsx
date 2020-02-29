import React, { useState, useEffect } from 'react'
import {connect } from 'react-redux'
import {Input,Button} from 'antd'
import { SignUpContainer } from './sign-up.styles'
import{message }from 'antd'
import{signUpStart}from '../../redux/auth/auth.actions'
import SignupAvatarUpload from '../signup-avatar-upload/signup-avatar-upload.component'
import Icon from 'antd/lib/icon';
import firebase,{ firestore } from '../../firebase/firebase.utils'

const SignUp =({dispatch})=>{
    const [state,setState] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmedPassword:'',
        photoURL:'',
        avatarLoading:false
    })
    const handleChange = (event)=>{
        const {value,name} = event.target
        setState({
            ...state,
            [name]:value
        })
    }
    const handleSubmit = async (event)=>{
        event.preventDefault()
        console.log('submitting',state);
        const {displayName,email,password,confirmedPassword,photoURL} = state
        if(password !== confirmedPassword){
            message.error('Passwords dont match')
            return
        }
        dispatch(signUpStart(email,password,displayName,photoURL))

    }
    const handleSignUp = ()=>{
        console.log('signing up',state);

    }

    const handleAvatarUpload =async ({onError,onProgress,onSuccess,file})=>{
        console.log('uploading: ',file)
        setState({
            ...state,
            avatarLoading:true
        })
        const storage = firebase.storage()
        const storageRef = await storage.ref()
        const imageName = file.uid
        const imageFile = storageRef.child(`avatars/${imageName}`)

        try{
            const image =await imageFile.put(file)
            const imageUrl = await imageFile.getDownloadURL()
            console.log('image url: ',imageUrl)
            file.url = imageUrl
            setState({
                ...state,
                photoURL:imageUrl,
                avatarLoading:false
            })
            onSuccess(null,image)
            console.log('uploaded file',file)
        }catch(e){
            console.log('error:',e)
            onError(e)
        }
        

    }

    const beforeUpload = (file)=>{
        console.log('before upload')
        const isImage = file.type.indexOf('image/')===0;
        if(!isImage){
            message.error('You can only upload image file!')
        }
        const isLt5M = file.size / 1024/1024<5
        if(!isLt5M){
            message.error('Image must be smaller than 5MB')
        }
        return isImage && isLt5M
    }
    

    const handleUploadRemove = (data)=>{
        console.log('handle remove: ',data)
    }
    
    useEffect(()=>{
        setState({
            displayName:'',
            email:'',
            password:'',
            confirmedPassword:'',
            photoURL:''
        })
    },[])
    const {photoURL,avatarLoading}=state
    return (
        <SignUpContainer>
            <h2 className={'signup-title'}>I do not have an account</h2>
            <span className={'description'}>Sign up with email and password</span>
            <form  onSubmit={handleSubmit}>
                <Input
                    name='displayName'
                    type='text'
                    placeholder='Display name'
                    defaultValue={state.displayName}
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
                    onClick={handleSignUp}
                    className={'button'}
                    icon={'rocket'}
                >
                    Sign Up
                </Button>


            </form>

        </SignUpContainer>

    )

}


export default connect()(SignUp)