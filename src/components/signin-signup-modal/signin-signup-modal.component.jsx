import React,{useEffect} from 'react';
import{connect} from 'react-redux'
import{Modal} from 'antd'
import{createStructuredSelector} from 'reselect'
import {authErrorMessageSelector}from '../../redux/auth/auth.selectors'
import { resetAuthErrorMessage,setLoading } from '../../redux/auth/auth.actions';


const SigninSignupModal = ({errorMessage,resetErrorMessage,setAuthLoading}) => {
    const [state,setState]=React.useState({
        visible:''
    })


    useEffect(()=>{
        resetErrorMessage()
        return ()=>{
            setState({visible:errorMessage})
        }
    },[errorMessage,resetErrorMessage])
    useEffect(()=>{
        console.log('state: ',state)
    },[state])
    const handleOk = e => {
        setState({
            ...state,
            visible:''
        })     
        setAuthLoading(false)   
      };
      
    const handleCancel = e => {
        setState({
            ...state,
            visible:''
        })    
        setAuthLoading(false)   
   
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
    resetErrorMessage:()=>dispatch(resetAuthErrorMessage()),
    setAuthLoading:(isLoading)=>dispatch(setLoading(isLoading))
})
export default connect(mapStateToProps,mapDispatchToProps)(SigninSignupModal);