import React, { useState } from 'react'
import {connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignUpContainer } from './sign-up.styles'



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
            alert('Passwords dont match')
            return
        }
        // dispatch(signUpStart({email,password,displayName}))
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
            <h2>I do not have an account</h2>
            <span>Sign up with email and password</span>
            <form className='sign-up-form'  onSubmit={handleSubmit}>
                <FormInput
                    name='displayName'
                    type='text'
                    label='Display name'
                    value={state.displayName}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='email'
                    type='email'
                    label='email'
                    value={state.email}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='password'
                    type='password'
                    label='password'
                    value={state.password}
                    required
                    handleChange={handleChange}
                />
                <FormInput
                    name='confirmedPassword'
                    type='password'
                    label='Confirm Password'
                    value={state.confirmedPassword}
                    required
                    handleChange={handleChange}
                />


                <CustomButton type='submit' onClick={handleSignUp}>
                    Sign Up
                </CustomButton>


            </form>

        </SignUpContainer>

    )

}
export default connect() (SignUp)