import React from 'react'
import {connect}from 'react-redux'
import {Route,Redirect} from 'react-router-dom' 
import { createStructuredSelector } from 'reselect'
import { currentUserSelector } from '../redux/auth/auth.selectors'

const PrivateRouter = ({
    isAuthenticated,
    component:Component,
    path,
    ...otherProps
})=>(
    <Route {...otherProps} component={(props)=>(
        !!isAuthenticated?(
            <Component {...props}/>
        ):(
            <Redirect to={{
                pathname: '/signin-signup',
                state: { url: path }
                }}
            />
        )
    )}/>
)

const mapStateToProps = createStructuredSelector({
    isAuthenticated:currentUserSelector
})
export default connect(mapStateToProps)(PrivateRouter)