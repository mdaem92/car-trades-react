import React from 'react'
import {HeaderContainer , LogoContainer , OptionLink , OptionsContainer  } from './header.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'

const Header = ()=>{
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/inventory'>Inventory</OptionLink>
                <OptionLink to='/information'>Information</OptionLink>
                <OptionLink to='/add-listing'>Add Listing</OptionLink>
                <OptionLink to='/compare'>Compare</OptionLink>
            </OptionsContainer>



        </HeaderContainer>
    )
}
export default Header