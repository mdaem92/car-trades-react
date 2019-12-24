import React from 'react'
import {GroupContainer,FormSelectContainer,FormSelectLabel} from './form-select.styles';
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

const FormSelect = ({label,handleChange,...otherProps})=>(
    <GroupContainer>
        {/*<FormSelectContainer onChange = {handleChange}{...otherProps}>*/}
        {/*    <option value={''} disabled >{label}</option>*/}
        {/*    {options.map((option)=><option key={option} value={option}>{option}</option>)}*/}
        {/*</FormSelectContainer>*/}

        <FormSelectContainer onChange={handleChange} {...otherProps}/>
    </GroupContainer>
)
export default FormSelect