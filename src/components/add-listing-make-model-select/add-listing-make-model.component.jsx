import React,{useState} from 'react';
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
            console.log(`{${selectData.props.name}} = ${e}`)
            setState({
                ...state,
                [name]:e,
            })
        }
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <>
            Condition:
            <Radio.Group name={'condition'} onChange={onChange} defaultValue={state.condition}>
                <Radio.Button value="new">New</Radio.Button>
                <Radio.Button value="used">Used</Radio.Button>
            </Radio.Group>
            Body type:
            <Select
                name={'bodyType'}
                showSearch
                style={{ width: 120 }}
                placeholder="Select body"
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
            Seat Count:
            <Select
                showSearch
                style={{ width: 120 }}
                placeholder="Select body"
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
            prev owners:
            <Radio.Group name={'prevOwners'} onChange={onChange} defaultValue={state.condition}>
                <Radio.Button value={'1'}>1</Radio.Button>
                <Radio.Button value={'2'}>2</Radio.Button>
                <Radio.Button value={'3'}>3</Radio.Button>
                <Radio.Button value={'more'}>More</Radio.Button>
            </Radio.Group>
            <Cascader
                options={antDCarData}
                onChange={onChange}
                changeOnSelect
                placeholder={'Select Make and Model'}
                popupPlacement={'bottomLeft'}
                showSearch={{filter}}
            />
        </>
    );
};

export default AddListingMakeModel;