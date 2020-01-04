import React from 'react';
import {SelectContainer} from "./add-listing-make-model.styles";
import {Cascader} from "antd";
import {antDCarData} from "../../carData/arrayData";

const AddListingMakeModel = () => {
    const onChange = (value)=> {
        console.log(value);
    }
    const filter = (inputValue, path) =>{
        return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    return (
        <SelectContainer>
            <Cascader
                options={antDCarData}
                onChange={onChange}
                changeOnSelect
                placeholder={'Select Make and Model'}
                popupPlacement={'bottomLeft'}
                showSearch={{filter}}
            />
        </SelectContainer>
    );
};

export default AddListingMakeModel;