import React from 'react'
import {NavigationContainer,TitleContainer} from './navigation-bar.styles'
const NavigationBar = ({title})=>{
    return (
        <NavigationContainer>
            <TitleContainer>{title}</TitleContainer>

        </NavigationContainer>
    )
}
export default NavigationBar