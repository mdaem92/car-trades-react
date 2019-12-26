import React from 'react'
import {HeaderContainer , LogoContainer , OptionLink , OptionsContainer  } from './header.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {NavLink} from 'reactstrap'
const Header = ()=>{
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink className={'anchor'} to='/inventory'>Inventory</OptionLink>
                <OptionLink className={'anchor'} to='/information'>Information</OptionLink>
                <OptionLink className={'anchor'} to='/add-listing'>Add Listing</OptionLink>
                <OptionLink className={'anchor'} to='/compare'>Compare</OptionLink>
            </OptionsContainer>
        </HeaderContainer>
    )
}
export default Header