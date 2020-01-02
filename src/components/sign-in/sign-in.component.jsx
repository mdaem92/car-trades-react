import React from 'react'
import {connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignInContainer, ButtonsContainer } from './sign-in.styles'

const SignIn = ({emailSignIn,googleSignIn})=>{

    const [state,setState]=React.useState({
        email:'',
        password:''
    })

    const handleSubmit=async(event)=>{

        event.preventDefault()
        const {email,password}=state
        console.log(email,password)
        emailSignIn(email,password)

    }

    const handleChange = (event)=>{
        const {value,name} = event.target
        console.log(`[${name}]:${value}`);


        setState({
            ...state,
            [name]:value
        })
        console.log(state);

    }
    return (
        <SignInContainer>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
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
                <ButtonsContainer>
                    <CustomButton
                        type='submit'
                        value='Submit Form'
                        children='Sign in'
                    />
                    <CustomButton
                        onClick={()=>googleSignIn()}
                        googleSignIn
                        type='button'
                    >
                        Sign in With Google
                    </CustomButton>
                </ButtonsContainer>

            </form>

        </SignInContainer>
    )
}



export default connect()(SignIn)