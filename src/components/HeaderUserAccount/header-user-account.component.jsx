import React, {useEffect, useState} from 'react'
import {connect}from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
    DropdownMenu,
    DropdownItem,
    Button
} from 'reactstrap'
import {DropdownContainer,
    DropdownToggleContainer,
} from "./header-user-account.styles";
import{auth} from '../../firebase/firebase.utils'
import {signInWithGoogle} from "../../firebase/firebase.utils";
import {createStructuredSelector} from "reselect";
import {checkUserSession, googleSignInStart, signOutStart} from "../../redux/auth/auth.actions";
import {currentUserSelector} from "../../redux/auth/auth.selectors";


const HeaderUserAccount = (
    {
        scrolled,
        history,
        location,
        match,
        checkUserSession,
        currentUser,
        googleSignIn,
        signOut
    })=>{
    useEffect(()=>{
        checkUserSession()
    },[checkUserSession])

    const handleClick = ({target:{value :path}})=>{
        history.push(`${match.url}${currentUser.displayName}/${path}`)
    }

    return (
        <div>
            {currentUser?(
                <div>
                    <DropdownContainer nav inNavbar>
                        <DropdownToggleContainer isScrolled={scrolled} nav caret>
                            Hi {currentUser.displayName}
                        </DropdownToggleContainer>
                        <DropdownMenu right>
                            <DropdownItem value={'my-listings'}  onClick={handleClick}>
                                My listings
                            </DropdownItem>
                            <DropdownItem value={'my-favorites'} onClick={handleClick}>
                                My favorites
                            </DropdownItem>
                            <DropdownItem value={'my-settings'} onClick={handleClick}>
                                Account settings
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={()=>signOut()}>
                                Sign out
                            </DropdownItem>
                        </DropdownMenu>
                    </DropdownContainer>
                </div>
            ):(
                <div>
                    <Button variant="outline-success" onClick={()=>googleSignIn()}>Login</Button>
                </div>
            )}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser:currentUserSelector
})
const mapDispatchToProps = (dispatch)=>({
    checkUserSession:()=>dispatch(checkUserSession()),
    googleSignIn:()=>dispatch(googleSignInStart()),
    signOut:()=>dispatch(signOutStart())
})
const WithRouterUserAccount = withRouter(HeaderUserAccount)
export default connect(mapStateToProps,mapDispatchToProps)(WithRouterUserAccount)
