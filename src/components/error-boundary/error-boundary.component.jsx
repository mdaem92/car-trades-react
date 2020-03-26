import React from 'react'
import ErrorPage from '../error-page/error-page.component';

export default class ErrorBounday extends React.Component{
    state = {
        hassError:false
    }

    static getDerivedStateFromError(error){
        return {hasError:true }
    }

    componentDidCatch(error,info){
        console.log(error);
    }

    render(){
        if(this.state.hassError){
            return <ErrorPage/>
        }
        return this.props.children
    }
}
