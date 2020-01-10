import React, {useEffect, useState} from 'react';
import {
    Row,
    Col,
    Radio,
    Select,
    Slider,
    InputNumber
} from 'antd'

import{GridContainer,
    LabelContainer,
    SelectsContainer
} from "./add-listing-form-specs.styles";

const {Option} = Select

const AddListingFormSpecs = () => {

    const [state,setState] = useState({
        fuelEconomy:30,
        fuelType:undefined,
        engineCapacity:undefined,
        enginePower:undefined,
        hpData:[...Array(1000).keys()]
    })
    useEffect(()=>{
        console.log(state)
    },[state])

    const onSelectChange = (value,metadata)=>{

        const{name} = metadata.props
        setState({
            ...state,
            [name]:value
        })



    }

    const onPowerChange  = (value)=>{
        setState({
            ...state,
            enginePower:value
        })
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    const onInputChange = (a,b)=>{
        console.log(a,b)
    }

    return (
        <GridContainer>

            <LabelContainer>Fuel</LabelContainer>
            <SelectsContainer>
                <Select
                    showSearch
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
                    defaultValue={state.fuelType}
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
                    placeholder="Engine Capacity"
                    optionFilterProp="children"
                    defaultValue={state.engineCapacity}
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
                {/*<InputNumber*/}
                {/*    defaultValue={state.enginePower}*/}
                {/*    min={10}*/}
                {/*    max={1000}*/}
                {/*    formatter={value => `${value}H`}*/}
                {/*    parser={value => value.replace(/(?:^|\W)H(?:$|\W)/, '')}*/}
                {/*    onChange={onPowerChange}*/}
                {/*/>*/}
                <Select
                    showSearch
                    style={{ width: 120 }}
                    placeholder="Engine Power"
                    optionFilterProp="children"
                    onChange={onSelectChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                >
                    {

                        state.hpData.map((i)=><Option name={'enginePower'} key={i} value={i}>{i} Hp</Option>)
                    }
                </Select>

                <Select
                    showSearch
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

export default AddListingFormSpecs;