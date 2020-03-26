import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Menu} from 'antd'
import {
    HeaderMenu
} from "./new-header-account.styles";

import { createStructuredSelector } from "reselect";
import { checkUserSession, googleSignInStart, signOutStart } from "../../redux/auth/auth.actions";
import { currentUserSelector } from "../../redux/auth/auth.selectors";
import { parkingCountSelector } from '../../redux/parking/parking.selectors'
import { myListingsCountSelector, isOwnListingsCollectedSelector } from '../../redux/listing/listing.selectors'
import { fetchOwnListingsStart } from '../../redux/listing/listing.actions'
import {NavLink } from 'react-router-dom'


const { SubMenu } = Menu



const NewHeaderAccount = (
    {
        isScrolled,
        history,
        location,
        match,
        checkUserSession,
        currentUser,
        googleSignIn,
        signOut,
        parkingCount,
        myListingsCount,
        fetchOwnListings,
        isOwnListingsCollected,
        width,
        activeClassName        
    }) => {
    useEffect(() => {
        // checkUserSession()
        if (!isOwnListingsCollected) {
            if (currentUser) {
                fetchOwnListings(currentUser.id)
            }
        }
    }, [fetchOwnListings, currentUser, isOwnListingsCollected])


    const handleClick = (path) => {
        history.push(`${match.url}${currentUser.displayName}/${path}`)
    }

    
    return (
        <HeaderMenu
            mode={width > 800 ? 'horizontal' : 'inline'}
            isScrolled={isScrolled}
        >
            {currentUser ?
                (

                    <SubMenu title={`Hi ${currentUser.displayName}`} style={{border:'unset'}}>
                        <Menu.Item onClick={handleClick.bind(this, 'my-account')}>View Account</Menu.Item>
                        <Menu.Item onClick={() => signOut()}>Sign Out</Menu.Item>
                    </SubMenu>

                )
                :
                (
                    // <Menu.Item 
                    //     onClick={() => history.push('/signin-signup')}
                    //     className={'login'}
                    // >
                    //     <Icon type="poweroff" />
                    //     Login
                    // </Menu.Item>
                    // <SubMenu title={'Log in'} onClick={() => history.push('/signin-signup')} className={'login'}/>
                    <>
                        <NavLink activeClassName={activeClassName} className={'login'} to={'/signin-signup'} >
                            Log in
                        </NavLink>
                    </>
                    

                )}
        </HeaderMenu>
 




    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    parkingCount: parkingCountSelector,
    myListingsCount: myListingsCountSelector,
    isOwnListingsCollected: isOwnListingsCollectedSelector,

})
const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
    googleSignIn: () => dispatch(googleSignInStart()),
    signOut: () => dispatch(signOutStart()),
    fetchOwnListings: (id) => dispatch(fetchOwnListingsStart(id))
})
const WithRouterUserAccount = withRouter(NewHeaderAccount)
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterUserAccount)
