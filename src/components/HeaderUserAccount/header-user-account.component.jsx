import React, {useEffect, useState} from 'react'
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


const HeaderUserAccount = ({scrolled,history,location,match})=>{
    const [currentUser,setCurrentUser] = useState(undefined)
    useEffect(()=>{
        const unsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
            console.log(user)
            setCurrentUser(user)
        })
        return ()=>{
            unsubscribeFromAuth()
        }
    },[setCurrentUser])

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
                            <DropdownItem onClick={()=>auth.signOut()}>
                                Sign out
                            </DropdownItem>
                        </DropdownMenu>
                    </DropdownContainer>
                </div>
            ):(
                <div>
                    <Button variant="outline-success" onClick={signInWithGoogle}>Login</Button>
                </div>
            )}
        </div>
    )
}

export default withRouter(HeaderUserAccount)
