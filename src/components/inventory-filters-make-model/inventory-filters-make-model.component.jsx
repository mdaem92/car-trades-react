import React from 'react';
import {Cascader, Radio, Select, TreeSelect} from "antd";
import {antDCarData,treeSelectCarData} from "../../carData/arrayData";
import {GroupContainer} from "./inventory-filters-make-model.styles";

const InventoryFiltersMakeModel = ({isHomepage}) => {
    const onChange = (e)=>{
        console.log(e)
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <GroupContainer isHomepage={isHomepage}>
            {
                !isHomepage &&
                <Radio.Group
                    className={'item'}
                >
                    <Radio value={'new'}>New</Radio>
                    <Radio value={'used'}>Used</Radio>
                </Radio.Group>
            }
            <Cascader
                autoFocus
                className={'item'}
                options={antDCarData}
                name={'make'}
                onChange={onChange}
                changeOnSelect
                placeholder={'Select Make and Model'}
                popupPlacement={'bottomLeft'}
                showSearch={{filter}}
            />


        </GroupContainer>
    );
};

export default InventoryFiltersMakeModel;