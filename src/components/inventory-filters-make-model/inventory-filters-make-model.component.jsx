import React from 'react';
import {connect}from 'react-redux';
import {Cascader, Radio} from "antd";
import {antDCarData} from "../../carData/arrayData";
import {GroupContainer} from "./inventory-filters-make-model.styles";
import {createStructuredSelector} from "reselect";
import {inventoryFiltersSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import {setFieldValue} from '../../redux/inventory-filters/inventory-filters.actions'
const InventoryFiltersMakeModel = ({isHomepage,filtersData,setFieldValue}) => {
    const {condition,make,model}=filtersData
    const onMakeModelChange = (value)=>{
        console.log(value)
        setFieldValue('make',value[0])
        setFieldValue('model',value[1])
    }
    const onRadioChange = (e)=>{
        console.log(e.target.value)
        const {value}=e.target
        setFieldValue('condition',value)
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <GroupContainer isHomepage={isHomepage}>
            {
                !isHomepage &&
                <Radio.Group
                    onChange={onRadioChange}
                    className={'item'}
                    value={condition}
                >
                    <Radio value={'new'}>New</Radio>
                    <Radio value={'used'}>Used</Radio>
                </Radio.Group>
            }
            <Cascader
                autoFocus
                value={(make&&model)?[make,model]:null}
                className={'item'}
                options={antDCarData}
                name={'make'}
                onChange={onMakeModelChange}
                changeOnSelect
                placeholder={'Select Make and Model'}
                placement={'bottomLeft'}
                showSearch={{filter}}
            />


        </GroupContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    filtersData:inventoryFiltersSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(InventoryFiltersMakeModel);