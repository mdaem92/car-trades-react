import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import HeaderUserAccount from "../HeaderUserAccount/header-user-account.component";
import { Badge } from 'antd'
import { createStructuredSelector } from 'reselect'
import { comparedCountSelector } from '../../redux/compare/compare.selectors';
import { useLayoutEffect } from 'react';
import { MenuOutlined ,PoweroffOutlined, UserOutlined} from '@ant-design/icons'
import { Menu, Dropdown } from 'antd'
import { currentUserSelector } from '../../redux/auth/auth.selectors';
import { signOutStart} from '../../redux/auth/auth.actions';
import { withRouter } from 'react-router-dom';

const { SubMenu  } = Menu
const Header = ({ compareCount ,currentUser,signOut ,match}) => {

    const [scrolled, setScrolled] = useState(false)

    const listenScrollEvent = () => {
        if (window.scrollY) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
        return () => {
            window.removeEventListener('scroll', listenScrollEvent)
        }
    }, [scrolled])

    const useWindowSize = () => {
        const [innerWidth, setInnerWidth] = useState(window.innerWidth)
        useLayoutEffect(() => {
            function updateWidth(){
                setInnerWidth(window.innerWidth)
            }
            window.addEventListener('resize', updateWidth)
            updateWidth()
            return () => window.removeEventListener('resize', updateWidth)
        }, [])
        return innerWidth
    }

    const width = useWindowSize()
    // just here as a remind that there is unnecessary rerendering
    console.log('width: ', width)


    const menu = (
        <Menu >
            <Menu.Item>
                <OptionLink exact activeClassName={'active'} className={'anchor'} to='/'>Homepage</OptionLink>
            </Menu.Item>
            <Menu.Item>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/inventory'>Inventory</OptionLink>
            </Menu.Item>
            <Menu.Item>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/add-listing'>Add Listing</OptionLink>
            </Menu.Item>
            <Menu.Item>
                <OptionLink activeClassName={'active'} className={'anchor'} to='/compare'>Compare</OptionLink>
            </Menu.Item>
            
            <SubMenu
                key="sub2"
                mode={'inline'}
                title={   
                    <span>{`Hi ${!!currentUser && currentUser.displayName}`}</span> 
                }
            >
            <Menu.Item key="7">
                <OptionLink activeClassName={'active'} className={'anchor'} to={`${match.url}${currentUser.displayName}/my-account`}>
                    <UserOutlined />
                    View Account
                </OptionLink>
            </Menu.Item>
            <Menu.Item key="8" onClick={()=>signOut()}>
                <PoweroffOutlined/>
                Sign out
            </Menu.Item>

          </SubMenu>

            
        </Menu>
    );
    return width > 800 ?

        (

            <HeaderContainer scrolled={scrolled}>
                <LogoContainer to='/'>
                    <Logo className='logo' />
                </LogoContainer>
                <OptionsContainer scrolled={scrolled}>
                    <OptionLink exact activeClassName={'active'} className={'anchor'} to='/'>Homepage</OptionLink>
                    <OptionLink activeClassName={'active'} className={'anchor'} to='/inventory'>Inventory</OptionLink>
                    <OptionLink activeClassName={'active'} className={'anchor'} to='/add-listing'>Add Listing</OptionLink>
                    <Badge count={compareCount} style={scrolled ? { backgroundColor: 'white', color: '#357ae8' } : { backgroundColor: '#357ae8' }}>
                        <OptionLink activeClassName={'active'} className={'anchor'} to='/compare'>Compare</OptionLink>
                    </Badge>
                    <HeaderUserAccount scrolled={scrolled} />
                </OptionsContainer>
            </HeaderContainer >
        )
        :
        (
            <HeaderContainer isMobile scrolled={scrolled}>
                <LogoContainer isMobile to={'/'}>
                    <Logo className='logo' />
                </LogoContainer>
                <OptionsContainer isMobile scrolled={scrolled} id={'dropdown-container'}>
                    <Dropdown
                        overlay={menu}
                        placement="bottomCenter"
                        trigger={['click']}
                        // className={'dropdown'}
                        overlayClassName={'dropdown'}
                        getPopupContainer={() => document.getElementById('dropdown-container')}
                    >
                        <MenuOutlined />
                    </Dropdown>

                </OptionsContainer>
            </HeaderContainer>

        )
}


const mapStateToProps = createStructuredSelector({
    compareCount: comparedCountSelector,
    currentUser:currentUserSelector
})
const mapDispatchToProps = (dispatch)=>({
    signOut:()=>dispatch(signOutStart())
})

const WithRouterHeader = withRouter(Header)
export default connect(mapStateToProps,mapDispatchToProps)(WithRouterHeader)