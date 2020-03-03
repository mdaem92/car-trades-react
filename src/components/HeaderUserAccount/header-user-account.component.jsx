import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
    DropdownMenu,
    DropdownItem,

} from 'reactstrap'

import { Button } from 'antd'
import {
    DropdownContainer,
    DropdownToggleContainer,
    ButtonContainer
} from "./header-user-account.styles";

import { createStructuredSelector } from "reselect";
import { checkUserSession, googleSignInStart, signOutStart } from "../../redux/auth/auth.actions";
import { currentUserSelector } from "../../redux/auth/auth.selectors";
import { parkingCountSelector } from '../../redux/parking/parking.selectors'
import { myListingsCountSelector, isOwnListingsCollectedSelector } from '../../redux/listing/listing.selectors'
import { fetchOwnListingsStart } from '../../redux/listing/listing.actions'


const HeaderUserAccount = (
    {
        scrolled,
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
        isOwnListingsCollected
    }) => {
    useEffect(() => {
        // checkUserSession()
        if(!isOwnListingsCollected){
            if(currentUser){
                fetchOwnListings(currentUser.id)
            }
        }
    }, [fetchOwnListings,currentUser,isOwnListingsCollected])

    const handleClick = ({ target: { value: path } }) => {
        history.push(`${match.url}${currentUser.displayName}/${path}`)
    }

    return (
        <div>
            {currentUser ? (
                <div>
                    <DropdownContainer nav inNavbar>
                        <DropdownToggleContainer isScrolled={scrolled} nav caret>
                            Hi {currentUser.displayName}
                        </DropdownToggleContainer>
                        <DropdownMenu right>
                            <DropdownItem value={'my-account'} onClick={handleClick}>
                                View Account
                            </DropdownItem>
                            {/* <DropdownItem value={'my-listings'} onClick={handleClick}>
                                My listings
                                <Badge
                                    count={myListingsCount}
                                    style={{ backgroundColor: '#357ae8' }}
                                />
                            </DropdownItem> */}
                            
                            {/* <DropdownItem value={'my-parking'} onClick={handleClick}>
                                My parking
                                <Badge
                                    count={parkingCount}
                                    style={{ backgroundColor: '#357ae8' }}
                                />
                            </DropdownItem> */}
                            {/* <DropdownItem value={'my-settings'} onClick={handleClick}>
                                Account settings
                            </DropdownItem> */}
                            <DropdownItem divider />
                            <DropdownItem onClick={() => signOut()}>
                                Sign out
                            </DropdownItem>
                        </DropdownMenu>
                    </DropdownContainer>
                </div>
            ) : (
                    <ButtonContainer isScrolled={scrolled}>
                        <Button
                            className={'button'}
                            type="link"
                            icon="login"
                            onClick={() => history.push('/signin-signup')}
                        >
                            Login
                    </Button>
                    </ButtonContainer>
                )}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: currentUserSelector,
    parkingCount: parkingCountSelector,
    myListingsCount:myListingsCountSelector,
    isOwnListingsCollected: isOwnListingsCollectedSelector,

})
const mapDispatchToProps = (dispatch) => ({
    checkUserSession: () => dispatch(checkUserSession()),
    googleSignIn: () => dispatch(googleSignInStart()),
    signOut: () => dispatch(signOutStart()),
    fetchOwnListings:(id)=>dispatch(fetchOwnListingsStart(id))
})
const WithRouterUserAccount = withRouter(HeaderUserAccount)
export default connect(mapStateToProps, mapDispatchToProps)(WithRouterUserAccount)
