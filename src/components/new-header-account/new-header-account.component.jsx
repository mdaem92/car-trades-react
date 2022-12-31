import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Menu } from 'antd'
import UserOutlined from '@ant-design/icons'
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
    const setHeaderTitle = (userName)=>{
        return(
            <div style={{display:'flex',alignItems:'center'}}>
                <UserOutlined />
                <span>Hi, {userName}</span>
            </div>
        )
    }

    
    return (
        <HeaderMenu
            mode={width > 800 ? 'horizontal' : 'inline'}
            isScrolled={isScrolled}
        >
            {currentUser ?
                (

                    <SubMenu title={setHeaderTitle(currentUser.displayName)} style={{border:'unset'}}>
                        <Menu.Item onClick={handleClick.bind(this, 'my-account')}>View Account</Menu.Item>
                        <Menu.Item onClick={() => signOut()}>Sign Out</Menu.Item>
                    </SubMenu>

                )
                :
                (
                    
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
