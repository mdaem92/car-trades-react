import React, {useEffect, useState} from 'react'
import {HeaderContainer , LogoContainer , OptionLink , OptionsContainer  } from './header.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import HeaderUserAccount from "../HeaderUserAccount/header-user-account.component";


const Header = ()=>{

    const [scrolled,setScrolled] = useState(false)

    const listenScrollEvent = ()=>{
        if(window.scrollY){
            setScrolled(true)
        }else{
            setScrolled(false)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',listenScrollEvent)

        return ()=>{
            window.removeEventListener('scroll',listenScrollEvent)

        }
    },[scrolled])

    return (
        <HeaderContainer scrolled={scrolled}>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer scrolled={scrolled}>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/inventory'>Inventory</OptionLink>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/information'>Information</OptionLink>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/add-listing'>Add Listing</OptionLink>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/compare'>Compare</OptionLink>
                {/*<OptionLink activeClassName={'active'} className={'anchor-signup'} to='/signin-signup'>LOGIN or REGISTER</OptionLink>*/}
                <HeaderUserAccount scrolled={scrolled}/>
            </OptionsContainer>
        </HeaderContainer>
    )
}




export default Header