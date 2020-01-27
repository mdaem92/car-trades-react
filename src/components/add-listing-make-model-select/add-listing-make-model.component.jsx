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
    seatCountSelector
} from "../../redux/add-listing-form/add-listing-form.selectors";
import {setFieldValue} from "../../redux/add-listing-form/add-listing-form.actions";
import moment from "moment";


const {Option} = Select

const AddListingMakeModel = ({condition,make,model,bodyType,seatCount,mileage,setFieldValue}) => {

    // const [state,setState] = useState({
    //     condition:'new',
    //     bodyType:undefined,
    //     seatCount:0,
    //     prevOwners:'',
    // })

    // useEffect(()=>{
    //     console.log('current state:',state)
    // },[state])

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
                    style={{width:'120px'}}
                    name={'condition'}
                    onChange={onChange}
                    defaultValue={condition}
                >
                    <Radio.Button style={{borderRadius:0,width:'60px'}} value="new">New</Radio.Button>
                    <Radio.Button style={{borderRadius:0,width:'60px'}} value="used">Used</Radio.Button>
                </Radio.Group>
                <DatePicker
                    onChange={(value)=>console.log(value.format('YYYY-MM-DD'))}
                    placeholder={'Select registered'}
                    onSearch={(value)=>console.log(value)}
                    title={'sdadsa'}
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
                    style={{ width: 120,borderRadius:0 }}
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
    mileage:mileageSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})

export default connect(mapStateToProps,mapDispatchToProps)(AddListingMakeModel) ;