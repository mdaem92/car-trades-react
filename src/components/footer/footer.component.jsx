import React from 'react'
import {FooterContainer,SocialsContainer} from "./footer.styles";
// import {Icon}from 'antd'
import Icon from 'antd/lib/icon';


const Footer = ({isHomepage})=>{

    return (
        <FooterContainer isHomepage={isHomepage}>
            <SocialsContainer>
                <Icon type="twitter" />
                <Icon type="facebook" />
                <Icon type="instagram" />
            </SocialsContainer>
        </FooterContainer>
        )

}






export default Footer