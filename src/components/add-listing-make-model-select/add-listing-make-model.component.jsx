import React, {useEffect, useState} from 'react';
import {Cascader, InputNumber, Radio, Select,DatePicker} from "antd";
import {antDCarData} from "../../carData/arrayData";
import {GridContainer,SelectContainer,LabelContainer} from "./add-listing-make-model.styles";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {
    bodyTypeSelector,
    conditionSelector, makeSelector, modelSelector,
    mileageSelector,
    seatCountSelector, colorSelector, registeredSelector
} from "../../redux/add-listing-form/add-listing-form.selectors";
import {setFieldValue} from "../../redux/add-listing-form/add-listing-form.actions";
import moment from "moment";


const {Option} = Select

const AddListingMakeModel = (
    {
        condition,
        make,
        model,
        bodyType,
        seatCount,
        mileage,
        setFieldValue,
        color,
    }) => {

    const onChange = (e)=>{

        if(e.target){
            const{name,value} = e.target
            console.log(`{${name},${value}} = ${e.target}`)
            setFieldValue(name,value)
        }
    }
    const onSelectChange = (value,name)=>{
        console.log(name,value)
        setFieldValue(name,value)
    }


    const onCascaderChange = (value)=>{
        console.log(value)
        const [make,model]=value
        setFieldValue('make',make)
        setFieldValue('model',model)
       
    }

    const filter = (inputValue, path) =>{

        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <GridContainer>
            <LabelContainer>Condition & Title</LabelContainer>
            <SelectContainer>
                <Radio.Group
                    style={{width:'110px'}}
                    name={'condition'}
                    onChange={onChange}
                    defaultValue={condition}
                >
                    <Radio.Button style={{borderRadius:0,width:'55px'}} value="new">New</Radio.Button>
                    <Radio.Button style={{borderRadius:0,width:'55px'}} value="used">Used</Radio.Button>
                </Radio.Group>
                <DatePicker
                    // onChange={(value)=>console.log(value.format('YYYY-MM-DD'))}
                    onChange={(value)=>value?setFieldValue('registered',parseInt(value.format('YYYY'))):setFieldValue('registered',undefined)}
                    placeholder={'Select registered'}
                    onSearch={(value)=>console.log(value)}
                    // defaultValue={registered}

                />
                <Cascader
                    style={{borderRadius:0}}
                    options={antDCarData}
                    defaultValue={(make && model )?[make,model]:null}
                    name={'make'}
                    onChange={onCascaderChange}
                    changeOnSelect
                    placeholder={'Select Make and Model'}
                    popupPlacement={'bottomLeft'}
                    showSearch={{filter}}
                />
            </SelectContainer>
            <LabelContainer>Body & Mileage</LabelContainer>
            <SelectContainer>
                <Select
                    // labelInValue
                    defaultValue={bodyType}
                    name={'bodyType'}
                    showSearch
                    style={{ width: 120,borderRadius:0}}
                    placeholder="Body Type"
                    optionFilterProp="children"
                    onChange={(value)=>onSelectChange(value,'bodyType')}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        ['Coupe','Limo','Sedan','Suv','Truck','Other']
                            .map((i)=><Option key={i} name={'bodyType'} value={i}>{i}</Option>)
                    }
                </Select>
                <Select
                    showSearch
                    defaultValue={seatCount}
                    style={{ width: 120,borderRadius:0 }}
                    placeholder="Seat Count"
                    optionFilterProp="children"
                    onChange={(value)=>onSelectChange(value,'seatCount')}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        [1,2,3,4,5,6,7]
                            .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                    }
                </Select>
                <InputNumber
                    style={{borderRadius:0}}
                    precision={0}
                    type={'number'}
                    min={0}
                    max={500000}
                    step={500}
                    defaultValue={mileage}
                    onChange={(value)=>onSelectChange(value,'mileage')}
                    placeholder={'Mileage'}
                />
                <Select
                    style={{ width: 120,borderRadius:0 }}
                    showSearch
                    defaultValue={color}
                    placeholder="Select Color"
                    optionFilterProp="children"
                    onChange={(value)=>setFieldValue('color',value)}
                    onSearch={(val)=>console.log(val)}
                    filterOption={(input, option) =>
                        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    {
                        ['White','Silver','Black','Grey','Blue','Red','Brown','Green','Yellow','Other']
                            .map(color=><Option value={color.toLowerCase()} key={color}>{color}</Option>)
                    }
                </Select>
            </SelectContainer>
        </GridContainer>
    );
};
const mapStateToProps = createStructuredSelector({
    condition: conditionSelector,
    make:makeSelector,
    model:modelSelector,
    bodyType:bodyTypeSelector,
    seatCount:seatCountSelector,
    mileage:mileageSelector,
    color:colorSelector,
    registered:registeredSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddListingMakeModel) ;