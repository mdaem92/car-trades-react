import React from 'react'
import {connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { SignInContainer, ButtonsContainer } from './sign-in.styles'
import { emailSignInStart,googleSignInStart,checkUserSession, resetAuthErrorMessage } from '../../redux/auth/auth.actions'
import {Modal, message} from 'antd'
import { authErrorMessageSelector, currentUserSelector } from '../../redux/auth/auth.selectors'
import{createStructuredSelector}from 'reselect'
import { useEffect } from 'react'
import SigninSignupModal from '../signin-signup-modal/signin-signup-modal.component'
import { Redirect,withRouter } from 'react-router-dom'

const SignIn = ({emailSignIn,googleSignIn,errorMessage,resetErrorMessage,checkUserSession,currentUser,history})=>{

    

    const [state,setState]=React.useState({
        email:'',
        password:'',
    })
    
    const handleSubmit= async(event)=>{

        event.preventDefault()
        const {email,password}=state
        console.log(email,password)
        await emailSignIn(email,password)
        console.log('error message from submit: ',errorMessage)        
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


      console.log('error message:',errorMessage,state.visible,typeof errorMessage==='string',!!errorMessage)
    return !!currentUser? 
        (
            <Redirect to={`${history.location.state.url}`}/>
        )
        :
        (
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
                <SigninSignupModal/>
            </SignInContainer>
        )
}


const mapDispatchToProps = (dispatch)=>({
    emailSignIn:(email,password)=>dispatch(emailSignInStart(email,password)),
    checkUserSession:()=>dispatch(checkUserSession()),
    googleSignIn:()=>dispatch(googleSignInStart()),
    // resetErrorMessage:()=>dispatch(resetAuthErrorMessage())
})

const mapStateToProps = createStructuredSelector({
    errorMessage:authErrorMessageSelector,
    currentUser:currentUserSelector
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SignIn))