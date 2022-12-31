import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { SignInContainer, ButtonsContainer } from './sign-in.styles'
import { emailSignInStart, googleSignInStart, checkUserSession ,setLoading} from '../../redux/auth/auth.actions'
import { authErrorMessageSelector, currentUserSelector, isAuthLoadingSelector } from '../../redux/auth/auth.selectors'
import { createStructuredSelector } from 'reselect'
import SigninSignupModal from '../signin-signup-modal/signin-signup-modal.component'
import { Redirect, withRouter } from 'react-router-dom'
import { Input, Button, Divider } from 'antd'
// import Icon from 'antd/lib/icon';
import {UserOutlined,LockOutlined,LoginOutlined,GoogleOutlined} from '@ant-design/icons'

const SignIn = ({ emailSignIn, googleSignIn, errorMessage, currentUser, history ,isAuthLoading ,setAuthLoading}) => {



    const [state, setState] = React.useState({

        email: '',
        password: '',
    })

    const handleSubmit = async (event) => {
        
        // setAuthLoading(true)
        event.preventDefault()
        const { email, password } = state
        await emailSignIn(email, password)
        
    }

    const handleChange = (event) => {
        const { value, name } = event.target
        setState({
            ...state,
            [name]: value
        })

    }


    useEffect(()=>{
        setAuthLoading(false)
    },[setAuthLoading])
    return !!currentUser ?
        (
            history.location.state ?
            <Redirect to={`${history.location.state.url.includes('/:username')?history.location.state.url.replace('/:username',currentUser.displayName):history.location.state.url}`} />
            : 
            <Redirect to={`/`} />
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
                        prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}

                    />
                    <Input
                        type={'password'}
                        name={'password'}
                        className={'input'}
                        placeholder="Password"
                        value={state.password}
                        required
                        onChange={handleChange}
                        prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}

                    />
                    <ButtonsContainer>
                        <div className={'login-forgot-container'}>
                            <Button
                                type="primary"
                                htmlType={'submit'}
                                icon={<LoginOutlined/>}
                                className={'button'}
                                loading={isAuthLoading}
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
                            icon={<GoogleOutlined/>}
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
    setAuthLoading:(isLoading)=>dispatch(setLoading(isLoading))
})

const mapStateToProps = createStructuredSelector({
    errorMessage: authErrorMessageSelector,
    currentUser: currentUserSelector,
    isAuthLoading:isAuthLoadingSelector
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))