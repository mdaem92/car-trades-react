import React from 'react'
import ErrorPage from '../error-page/error-page.component';

export default class ErrorBounday extends React.Component{
    constructor(props){
        super(props)
        this.state = {hasError:false}
    }
    

    static getDerivedStateFromError(error){
        console.log('getDerivedStateFromError');
        
        return {hasError:true }
    }

    componentDidCatch(error,info){
        console.log(error);
    }

    render(){

        if(this.state.hasError){

            return <ErrorPage/>
        }else{
            console.log(' no errors ');
            
            return this.props.children

        }
        
    }
}
