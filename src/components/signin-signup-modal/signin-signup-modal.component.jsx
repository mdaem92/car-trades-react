import React,{useEffect} from 'react';
import{connect} from 'react-redux'
import{Modal} from 'antd'
import{createStructuredSelector} from 'reselect'
import {authErrorMessageSelector}from '../../redux/auth/auth.selectors'
import { resetAuthErrorMessage } from '../../redux/auth/auth.actions';


const SigninSignupModal = ({errorMessage,resetErrorMessage}) => {
    const [state,setState]=React.useState({
        visible:''
    })


    useEffect(()=>{
        resetErrorMessage()
        return ()=>{
            setState({visible:errorMessage})
        }
    },[errorMessage])
    useEffect(()=>{
        console.log('state: ',state)
    },[state])
    const handleOk = e => {
        setState({
            ...state,
            visible:''
        })        
      };
      
    const handleCancel = e => {
        setState({
            ...state,
            visible:''
        })       
    };
    return (
        
        <Modal 
            title="Error"
            visible={!!state.visible }
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>{state.visible}</p>
        </Modal>
        
        
        
    );
};

const mapStateToProps = createStructuredSelector({
    errorMessage:authErrorMessageSelector
})
const mapDispatchToProps = (dispatch)=>({
    resetErrorMessage:()=>dispatch(resetAuthErrorMessage())
})
export default connect(mapStateToProps,mapDispatchToProps)(SigninSignupModal);