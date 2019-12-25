import React from 'react'
import {GroupContainer,FormSelectContainer} from './form-select.styles';

const FormSelect = ({label,handleChange,...otherProps})=>(
    <GroupContainer>
        <FormSelectContainer onChange={handleChange} {...otherProps}/>
    </GroupContainer>
)
export default FormSelect