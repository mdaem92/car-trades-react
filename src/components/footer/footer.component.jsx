import React from 'react'
import {FooterContainer,SocialsContainer} from "./footer.styles";
import {withRouter}from 'react-router-dom'
// import {Icon}from 'antd'
import Icon from 'antd/lib/icon';


const Footer = ({history:{location:{pathname}}})=>{
    console.log('footer history pathname: ',pathname)
    return (
        <FooterContainer isHomepage={pathname==='/'}>
            <SocialsContainer>
                <Icon type="twitter" />
                <Icon type="facebook" />
                <Icon type="instagram" />
            </SocialsContainer>
        </FooterContainer>
        )

}






export default withRouter(Footer)