import React from 'react';
import {
    InputNumber,
    Select,
} from 'antd'

import{GridContainer,
    LabelContainer,
    SelectsContainer
} from "./add-listing-form-specs.styles";
import connect from "react-redux/es/connect/connect";
import {setFieldValue} from "../../redux/add-listing-form/add-listing-form.actions";
import {createStructuredSelector} from "reselect";
import {
    engineCapacitySelector, enginePowerSelector,
    fuelEconomySelector,
    fuelTypeSelector, transmissionSelector
} from "../../redux/add-listing-form/add-listing-form.selectors";

const {Option} = Select

const AddListingFormSpecs = ({fuelEconomy,fuelType,engineCapacity,enginePower,transmission,setFieldValue}) => {

    const onSelectChange = (value,metadata)=>{

        const{name} = metadata.props
        setFieldValue(name,value)

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

            <LabelContainer>Fuel</LabelContainer>
            <SelectsContainer>
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
            </SelectsContainer>

            <LabelContainer>Engine</LabelContainer>
            <SelectsContainer>
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
            </SelectsContainer>


        </GridContainer>
    );
};


const mapStateToProps = createStructuredSelector({
    fuelEconomy:fuelEconomySelector,
    fuelType:fuelTypeSelector,
    engineCapacity:engineCapacitySelector,
    enginePower:enginePowerSelector,
    transmission:transmissionSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(AddListingFormSpecs);