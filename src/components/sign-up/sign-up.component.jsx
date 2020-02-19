import React, { useState } from 'react'
import {connect } from 'react-redux'
import {Input,Icon,Button} from 'antd'
import { SignUpContainer } from './sign-up.styles'
import{message}from 'antd'
import{signUpStart}from '../../redux/auth/auth.actions'


const SignUp =({dispatch})=>{
    const [state,setState] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmedPassword:''
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
        const {displayName,email,password,confirmedPassword} = state
        if(password !== confirmedPassword){
            message.error('Passwords dont match')
            return
        }
        dispatch(signUpStart(email,password,displayName))
        // try{

        //   // const {user} = await auth.createUserWithEmailAndPassword(email,password)
        //   // await createUserProfile(user,{displayName})
        setState({
            displayName:'',
            email:'',
            password:'',
            confirmedPassword:''
        })
        // }catch(error){
        //   console.log(error);

        // }
    }
    const handleSignUp = ()=>{
        console.log('signing up',state);

    }
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