import React,{useEffect} from 'react';
import{connect} from 'react-redux'
import{Modal} from 'antd'
import{createStructuredSelector} from 'reselect'
import {authErrorMessageSelector}from '../../redux/auth/auth.selectors'
import { resetAuthErrorMessage } from '../../redux/auth/auth.actions';


const SigninSignupModal = ({errorMessage,resetErrorMessage}) => {
    const [state,setState]=React.useState({
        visible:false
    })


    useEffect(()=>{
        // checkUserSession()
        resetErrorMessage()
        
    },[state])
    const handleOk = e => {
        setState({
            ...state,
            visible:false
        })        
      };
      
    const handleCancel = e => {
        setState({
            ...state,
            visible:false
        })       
    };
    return (
        <Modal 
            title="Error"
            visible={!!errorMessage || state.visible}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p>{errorMessage}</p>
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