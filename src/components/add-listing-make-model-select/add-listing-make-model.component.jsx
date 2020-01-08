import React, {useEffect, useState} from 'react';
import {SelectContainer} from "./add-listing-make-model.styles";
import {Cascader, Col, Radio, Select} from "antd";
import {antDCarData} from "../../carData/arrayData";
const {Option} = Select

const AddListingMakeModel = () => {



    const [state,setState] = useState({
        condition:'new',
        bodyType:undefined,
        seatCount:0,
        prevOwners:'',
    })

    useEffect(()=>{
        console.log('current state:',state)
    },[state])

    const onChange = (e,selectData)=>{

        if(e.target){
            const{name,value} = e.target
            console.log(`{${name},${value}} = ${e.target}`)
            setState({
                ...state,
                [name]:value,
            })
        }else{
            const {name} = selectData.props
            console.log(e)
            setState({
                ...state,
                [name]:e.label,
            })
        }
    }

    // const onChange = (e)=>{
    //     const {name,value} = e.target
    //     setState({
    //         ...state,
    //         [name]:value
    //     })
    // }
    // const onSelectChange = (value,metadata)=>{
    //     console.log(value)
    //     const{name}=metadata.props
    //     setState({
    //         ...state,
    //         [name]:value
    //     })
    //
    // }

    const onCascaderChange = (value)=>{
        console.log(value)
        setState({
            ...state,
            make:value[0],
            model:value[1]
        })
       
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <>
            <Radio.Group
                name={'condition'}
                onChange={onChange}
                defaultValue={state.condition}
            >
                <Radio.Button value="new">New</Radio.Button>
                <Radio.Button value="used">Used</Radio.Button>
            </Radio.Group>
            <Select
                labelInValue
                name={'bodyType'}
                showSearch
                style={{ width: 120 }}
                placeholder="Body Type"
                optionFilterProp="children"
                onChange={onChange}
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
                style={{ width: 120 }}
                placeholder="Seat Count"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    [1,2,3,4,5,6,7]
                        .map((i)=><Option name={'seatCount'} key={i} value={i}>{i}</Option>)
                }
            </Select>
            <Select
                showSearch
                style={{ width: 120 }}
                placeholder="Prev Owners"
                optionFilterProp="children"
                onChange={onChange}
                filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
            >
                {
                    [1,2,3]
                        .map((i)=><Option name={'prevOwners'} key={i} value={i}>{i}</Option>)
                }
                <Option name={'prevOwners'} key={4} value={4}>More</Option>
            </Select>
            <Cascader
                options={antDCarData}
                name={'make'}
                onChange={onCascaderChange}
                changeOnSelect
                placeholder={'Select Make and Model'}
                popupPlacement={'bottomLeft'}
                showSearch={{filter}}
            />
        </>
    );
};

export default AddListingMakeModel;