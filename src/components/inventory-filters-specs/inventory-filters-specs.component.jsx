import React, {useEffect, useState} from 'react';
import {Menu,Slider,InputNumber} from 'antd'
import {CustomSlider} from './inventory-filters-specs.styles'
const {SubMenu} = Menu


const InventoryFiltersSpecs = ({name,min,max,...otherProps}) => {
    const handleChange = (value,name)=>console.log(value,name)

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
        <>
            <CustomSlider
                {...otherProps}
                onChange={(value)=>handleChange(value,name)}
                marks={createMarks()}
                min={min}
                max={max}
            />
        </>

    );
};

export default InventoryFiltersSpecs;