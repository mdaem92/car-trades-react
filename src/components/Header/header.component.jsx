import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer ,BlueLogo} from './header.styles'
import { createStructuredSelector } from 'reselect'
import { comparedCountSelector } from '../../redux/compare/compare.selectors';
import { MenuOutlined } from '@ant-design/icons'
import { Menu, Dropdown , Badge } from 'antd'
import { currentUserSelector } from '../../redux/auth/auth.selectors';
import { signOutStart } from '../../redux/auth/auth.actions';
import { withRouter } from 'react-router-dom';
import NewHeaderAccount from '../new-header-account/new-header-account.component'
import {useWindowSize} from '../../hooks/useWindowSize'

const Header = ({ compareCount, currentUser, signOut, match , history }) => {

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



    const width = useWindowSize()
    // just here as a remind that there is unnecessary rerendering
    // console.log('width: ', width)


    const menu = (
        <Menu>
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
            <NewHeaderAccount width={width} activeClassName={'active'} anchorClassName={'anchor'}/>

           
        </Menu>
    );
    return width >800 ?

        (

            <HeaderContainer scrolled={scrolled}>
                <LogoContainer to='/'>
                    <BlueLogo url={require('../../assets/logoB.png')}/>
                </LogoContainer>
                <OptionsContainer scrolled={scrolled}>
                    <OptionLink exact activeClassName={'active'} className={'anchor'} to='/'>Homepage</OptionLink>
                    <OptionLink activeClassName={'active'} className={'anchor'} to='/inventory'>Inventory</OptionLink>
                    <OptionLink activeClassName={'active'} className={'anchor'} to='/add-listing'>Add Listing</OptionLink>
                    <Badge count={compareCount} style={scrolled ? { backgroundColor: 'white', color: '#357ae8' } : { backgroundColor: '#357ae8' }}>
                        <OptionLink activeClassName={'active'} className={'anchor'} to='/compare'>Compare</OptionLink>
                    </Badge>
                        <NewHeaderAccount isScrolled={scrolled} width={width} />
                </OptionsContainer>
            </HeaderContainer >
        )
        :
        (
            <HeaderContainer isMobile scrolled={scrolled}>
                <LogoContainer isMobile to={'/'}>
                    <BlueLogo url={require('../../assets/logoB.png')}/>

                </LogoContainer>
                <OptionsContainer isMobile scrolled={scrolled} id={'dropdown-container'}>
                    <Dropdown
                        overlay={menu}
                        placement="bottomCenter"
                        trigger={['click']}
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
    currentUser: currentUserSelector
})
const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(signOutStart())
})

const WithRouterHeader = withRouter(Header)
export default React.memo(connect(mapStateToProps, mapDispatchToProps)(WithRouterHeader))