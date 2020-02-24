import React, {  useEffect } from 'react';
import{connect} from 'react-redux'
import {GridContainer,SelectContainer}from './edit-listing-make-model.styles'
import {DatePicker,Radio,Cascader,Select,InputNumber}from 'antd'
import { antDCarData } from '../../carData/arrayData';
import { createStructuredSelector } from 'reselect';
import { editListingFormFirstStepDataSelector } from '../../redux/edit-listing-form/edit-listing-form.selectors';
import { setEditListingFieldValue } from '../../redux/edit-listing-form/edit-listing-form.actions';
import moment from 'moment';

const EditListingMakeModel = ({formData,setFieldValue}) => {

    const {Option} = Select
    const {
        condition,
        make,
        model,
        bodyType,
        seatCount,
        mileage,
        color,
        registered
    }= formData

    const onDateChange = (value)=>{
        const convertedDate = value? value.format("YYYY-MM-DD"):value
        setFieldValue('registered',convertedDate)
    }
    const onRadioChange = (e)=>{
        const {value}=e.target
        console.log(e.target.value)
        setFieldValue('condition',value)
    }
    const onCascaderChange = (values)=>{
        
        const[make,model]=values
        console.log(make,' , ',model)
        
        setFieldValue('make',make)
        setFieldValue('model',model)
    }
    const onSelectChange = (value,name)=>{
        console.log(name,value)
        setFieldValue(name,value)
    }
    const filter = (inputValue, path) =>{

        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }

    useEffect(()=>{
        console.log(formData)
    },[formData])
    return (
        <GridContainer>
            {/* <LabelContainer>Condition & Title</LabelContainer> */}
            <SelectContainer>
                <Radio.Group
                    style={{width:'110px'}}
                    name={'condition'}
                    onChange={onRadioChange}
                    defaultValue={condition}
                >
                    <Radio.Button style={{borderRadius:0,width:'55px'}} value="new">New</Radio.Button>
                    <Radio.Button style={{borderRadius:0,width:'55px'}} value="used">Used</Radio.Button>
                </Radio.Group>
                <DatePicker
                    // onChange={(value)=>console.log(value.format('YYYY-MM-DD'))}
                    onChange={onDateChange}
                    placeholder={'Select registered'}
                    onSearch={(value)=>console.log(value)}
                    defaultValue={registered?moment(registered,"YYYY-MM-DD"):null}

                />
                <Cascader
                    style={{borderRadius:0}}
                    options={antDCarData}
                    defaultValue={[make,model]}
                    name={'make'}
                    onChange={onCascaderChange}
                    changeOnSelect
                    placeholder={'Select Make and Model'}
                    popupPlacement={'bottomLeft'}
                    showSearch={{filter}}
                />
            </SelectContainer>
            {/* <LabelContainer>Body & Mileage</LabelContainer> */}
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
                    onChange={(value)=>onSelectChange('color',value)}
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
    formData:editListingFormFirstStepDataSelector
})

const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setEditListingFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(EditListingMakeModel);