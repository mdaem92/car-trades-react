import React from 'react';
import {Cascader, Radio} from "antd";
import {antDCarData} from "../../carData/arrayData";

const InventoryFiltersMakeModel = () => {
    const onChange = (e)=>{
        console.log(e)
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <div className={'groupContainer'} key="8" >
            <Radio.Group className={'item'}
                         name={'condition'}
                         onChange={onChange}
                         // defaultValue={}
            >
                <Radio.Button value="new">New</Radio.Button>
                <Radio.Button value="used">Used</Radio.Button>
            </Radio.Group>
            <Cascader
                className={'item'}
                options={antDCarData}
                name={'make'}
                onChange={onChange}
                changeOnSelect
                placeholder={'Select Make and Model'}
                popupPlacement={'bottomLeft'}
                showSearch={{filter}}
            />

        </div>
    );
};

export default InventoryFiltersMakeModel;