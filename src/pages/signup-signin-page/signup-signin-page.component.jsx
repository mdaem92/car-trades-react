import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import {SigninSignupContainer,GridContainer}from './signup-signin-page.styles'

const SigninSignupPage = ()=>{

    return (
        <GridContainer>
            <SigninSignupContainer>
                <SignIn/>
                <SignUp/>
            </SigninSignupContainer>
        </GridContainer>
        
    )
}
export default SigninSignupPage