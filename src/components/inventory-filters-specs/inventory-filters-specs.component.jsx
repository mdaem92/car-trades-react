import React, {useEffect, useState} from 'react';
import {Menu,Slider,InputNumber} from 'antd'
import{connect}from 'react-redux'
import {CustomSlider} from './inventory-filters-specs.styles'
import {setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";
const {SubMenu} = Menu


const InventoryFiltersSpecs = ({name,min,max,isHomepage,setFieldValue,...otherProps}) => {
    const handleChange = (value,name)=>setFieldValue(name,value)
    const createMarks = ()=>{
        switch (name) {
            case 'year':
                return {
                    [min]:min,
                    [max]:max
                }
            case 'mileage' :
                return {
                    0:0,
                    50000:'50K',
                    100000:'100k',
                    [max]:'More'
                }
            case 'price':
                return {
                    0:0,
                    50000:'$50K',
                    100000:'$100K',
                    [max]:'More'

                }
            default:
                return null
        }
    }
    return (

        <CustomSlider
            {...otherProps}
            onChange={(value)=>handleChange(value,name)}
            marks={createMarks()}
            min={min}
            max={max}
        />

    );
};

const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
export default connect(undefined,mapDispatchToProps)(InventoryFiltersSpecs);