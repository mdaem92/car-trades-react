import React from 'react'
import { connect } from 'react-redux'
import { SignInContainer, ButtonsContainer } from './sign-in.styles'
import { emailSignInStart, googleSignInStart, checkUserSession } from '../../redux/auth/auth.actions'
import { authErrorMessageSelector, currentUserSelector } from '../../redux/auth/auth.selectors'
import { createStructuredSelector } from 'reselect'
import SigninSignupModal from '../signin-signup-modal/signin-signup-modal.component'
import { Redirect, withRouter } from 'react-router-dom'
import { Input, Button, Divider, Icon } from 'antd'


const SignIn = ({ emailSignIn, googleSignIn, errorMessage, currentUser, history }) => {



    const [state, setState] = React.useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault()
        const { email, password } = state
        console.log(email, password)
        await emailSignIn(email, password)
        console.log('error message from submit: ', errorMessage)
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        console.log(`[${name}]:${value}`);


        setState({
            ...state,
            [name]: value
        })
        console.log(state);

    }


    console.log('error message:', errorMessage, state.visible, typeof errorMessage === 'string', !!errorMessage)
    return !!currentUser ?
        (
            history.location.state ? <Redirect to={`${history.location.state.url}`} /> : <Redirect to={`/`} />
        )
        :
        (
            <SignInContainer>
                <h2 className={'signin-title'}>I already have an account</h2>
                <span className={'description'}>Sign in with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <Input
                        type='email'
                        name={'email'}
                        className={'input'}
                        placeholder="Email"
                        defaultValue={state.email}
                        required
                        onChange={handleChange}
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}

                    />
                    <Input
                        type={'password'}
                        name={'password'}
                        className={'input'}
                        placeholder="Password"
                        value={state.password}
                        required
                        onChange={handleChange}
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}

                    />
                    <ButtonsContainer>
                        <div className={'login-forgot-container'}>
                            <Button
                                type="primary"
                                htmlType={'submit'}
                                icon="login"
                                className={'button'}
                                // loading={this.state.iconLoading}
                            >
                                Log in
                            </Button>
                            <Button 
                                className={'forgot'}
                                type={'link'}
                            >
                                Forgot Password
                            </Button>
                        </div>

                        <Divider
                            className={'divider'}
                        >
                            Or
                        </Divider>
                        <Button
                            type="button"
                            icon="google"
                            className={'google-button'}
                            // loading={this.state.iconLoading}
                            onClick={() => googleSignIn()}
                        >
                            Log in with Google
                        </Button>
                    </ButtonsContainer>


                </form>
                <SigninSignupModal />
            </SignInContainer>
        )
}


const mapDispatchToProps = (dispatch) => ({
    emailSignIn: (email, password) => dispatch(emailSignInStart(email, password)),
    checkUserSession: () => dispatch(checkUserSession()),
    googleSignIn: () => dispatch(googleSignInStart()),
    // resetErrorMessage:()=>dispatch(resetAuthErrorMessage())
})

const mapStateToProps = createStructuredSelector({
    errorMessage: authErrorMessageSelector,
    currentUser: currentUserSelector
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))