import React, {useEffect, useState} from 'react'
import{connect}from 'react-redux'
import {HeaderContainer , LogoContainer , OptionLink , OptionsContainer  } from './header.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import HeaderUserAccount from "../HeaderUserAccount/header-user-account.component";
import {Badge} from 'antd'
import{createStructuredSelector}from 'reselect'
import { comparedCountSelector } from '../../redux/compare/compare.selectors';

const Header = ({compareCount})=>{

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
                <OptionLink exact activeClassName={'active'} className={'anchor'} to='/'>Homepage</OptionLink>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/inventory'>Inventory</OptionLink>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/add-listing'>Add Listing</OptionLink>
                <Badge count={compareCount} style={scrolled?{backgroundColor:'white',color:'#357ae8'}:{backgroundColor:'#357ae8'}}>
                    <OptionLink activeClassName={'active'} className={'anchor'} to='/compare'>Compare</OptionLink>
                </Badge>
                <HeaderUserAccount scrolled={scrolled}/>
            </OptionsContainer>
        </HeaderContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    compareCount:comparedCountSelector
})

export default connect(mapStateToProps)(Header)