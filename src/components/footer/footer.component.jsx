import React from 'react'
import {FooterContainer,SocialsContainer} from "./footer.styles";
import {withRouter}from 'react-router-dom'
// import {Icon}from 'antd'
import {TwitterOutlined,FacebookOutlined,InstagramOutlined} from '@ant-design/icons'


const Footer = ({history:{location:{pathname}}})=>{


    return (
        <FooterContainer isHomepage={pathname==='/'}>
            <SocialsContainer>
                <TwitterOutlined className='icon' />
                <FacebookOutlined className='icon' />
                <InstagramOutlined className='icon'/>
            </SocialsContainer>
        </FooterContainer>
        )

}







export default withRouter(Footer)