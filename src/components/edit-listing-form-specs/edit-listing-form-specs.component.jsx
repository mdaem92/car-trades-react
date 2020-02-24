import React from 'react';
import {connect} from 'react-redux'
import {GridContainer , SelectContainer } from '../edit-listing-make-model/edit-listing-make-model.styles'
import{Select,InputNumber}from 'antd'
import { createStructuredSelector } from 'reselect';
import { editListingFormSecondStepDataSelector } from '../../redux/edit-listing-form/edit-listing-form.selectors';
import { setEditListingFieldValue } from '../../redux/edit-listing-form/edit-listing-form.actions';

const {Option} = Select

const EditListingFormSpecs = ({formData,setFieldValue}) => {
    
    const {fuelEconomy,fuelType,engineCapacity,enginePower,transmission}=formData
    const onSelectChange = (value,metadata)=>{

        const{name} = metadata.props
        setFieldValue(name,value)
        console.log(`name: ${name}, value: ${value}`)

    }
    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }


    const onInputChange = (value)=>{
        if(typeof value==='number'){
            console.log('setting')
            setFieldValue('enginePower',value)
        }
    }
    return (
        <GridContainer>
            <SelectContainer>
                <Select
                    showSearch
                    defaultValue={fuelEconomy}
                    style={{ width: 120 }}
                    placeholder="Fuel Economy"
                    optionFilterProp="children"
                    onChange={onSelectChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                >
                    {
                        [...Array(100).keys()]
                            .map((i)=><Option name={'fuelEconomy'} key={i} value={i}>{i} MPG</Option>)
                    }
                </Select>

                <Select
                    showSearch
                    style={{ width: 120 }}
                    placeholder="Fuel Type"
                    optionFilterProp="children"
                    onChange={onSelectChange}
                    defaultValue={fuelType}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        ['Diesel','Electric','Hybrid','LPG','Petrol','Others']
                            .map((i)=><Option name={'fuelType'} key={i} value={i}>{i}</Option>)
                    }
                </Select>
            </SelectContainer>

            <SelectContainer>
                <Select
                    showSearch
                    style={{ width: 120 }}
                    placeholder="Capacity"
                    optionFilterProp="children"
                    defaultValue={engineCapacity}
                    onChange={onSelectChange}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        [1,1.6,1.8,2,2.5,3,3.5,4,5,6,7]
                            .map((i)=><Option name={'engineCapacity'} key={i} value={i}>{i}</Option>)
                    }
                    <Option name={'engineCapacity'} key={8} value={8}>Other</Option>
                </Select>
                <InputNumber
                    type={'number'}
                    min={10}
                    max={2000}
                    step={50}
                    precision={0}
                    defaultValue={enginePower}
                    onChange={onInputChange}
                    placeholder={'Power'}
                />

                <Select
                    showSearch
                    defaultValue={transmission}
                    style={{ width: 120 }}
                    placeholder="Transmission"
                    optionFilterProp="children"
                    onChange={onSelectChange}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        ['Auto','Manual','Semi-automatic']
                            .map((i)=><Option name={'transmission'} key={i} value={i}>{i}</Option>)
                    }
                </Select>
            </SelectContainer>


        </GridContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    formData:editListingFormSecondStepDataSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setEditListingFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditListingFormSpecs);