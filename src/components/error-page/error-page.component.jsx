import React from 'react';
import {ErrorPageContainer , ImageContainer ,TextContainer}from './error-page.styles'
// import {ReactComponent as Logo} from '../../assets/engine-light.svg'

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            {/* <Logo className={'logo'}/> */}
            <ImageContainer url={require('../../assets/errorImage.png')}/>
            <TextContainer>It appears that the engine light is On! Our mechanics will fix it up shortly</TextContainer>
        </ErrorPageContainer>
    );
};

export default ErrorPage;