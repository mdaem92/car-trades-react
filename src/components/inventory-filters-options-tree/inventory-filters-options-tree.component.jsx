import React, {useEffect, useState} from 'react';
import {Tree,TreeSelect} from 'antd'
const {TreeNode} = TreeSelect

const treeData = [
    {
        title: 'Color',
        value: 'color',
        key: '0-0',
        children: [
            {
                title: 'White',
                value: 'white',
                key: '0-0-1',
            },
            {
                title: 'Black',
                value: 'black',
                key: '0-0-2',
            },
            {
                title: 'Silver',
                value: 'silver',
                key: '0-0-3',
            },
            {
                title: 'Red',
                value: 'red',
                key: '0-0-4',
            },
            {
                title: 'Blue',
                value: 'blue',
                key: '0-0-5',
            },
        ],
    },
    {
        title: 'Fuel',
        value: 'fuel',
        key: '0-1',
        children: [
            {
                title: 'Diesel',
                value: 'diesel',
                key: '0-1-0',
            },
            {
                title: 'Electric',
                value: 'electric',
                key: '0-1-1',
            },
            {
                title: 'Hybrid',
                value: 'hybrid',
                key: '0-1-2',
            },
            {
                title: 'Petrol',
                value: 'petrol',
                key: '0-1-3',
            },
            {
                title: 'LPG',
                value: 'lpg',
                key: '0-1-4',
            },
        ]
    },
    {
        title: 'Transmission',
        value: 'transmission',
        key: '0-2',
        children: [
            {
                title: 'Automatic',
                value: 'automatic',
                key: '0-2-0',
            },
            {
                title: 'Manual',
                value: 'manual',
                key: '0-2-1',
            },
            {
                title: 'Semi-Automatic',
                value: 'semi-automatic',
                key: '0-2-2',
            },
        ]
    },
    {
        title: 'Previous Owners',
        value: 'previous owners',
        key: '0-3',
        children: [
            {
                title: '1',
                key: '0-3-0',
                value: '0-3-0',
            },
            {
                title: '2',
                key: '0-3-1',
                value: '0-3-1',
            },
            {
                title: '3',
                key: '0-3-2',
                value: '0-3-2',
            },
            {
                title: 'More',
                key: '0-3-3',
                value: '0-3-3',
            },

        ]
    },
];

const InventoryFiltersOptionsTree = () => {

    const [state,setState] = useState({
        value:undefined,
        searchValue:undefined
    })
    useEffect(()=>{
        console.log(state)
    },[state])
    const onSelect = (selectedKeys, info) => {
        console.log('selected', selectedKeys, info);
    };
    const onCheck = (checkedKeys, info) => {
        console.log('onCheck', checkedKeys, info);
    };
    const onChange = (value,title,data)=>{

        console.log(data.allCheckedNodes)
        setState({
            ...state,
            value
        })
    }
    const onSearch=(value,path)=>{
        console.log(value)
        console.log(path)
        setState({
            searchValue: value
        })
    }
    const filter = (inputValue, path) =>{
        console.log('input value',inputValue)
        console.log('path',path)
        // return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
        return true
    }
    const {value,searchValue}=state
    return (
        <div className={'inventory-filters-options-tree-container'}>
            <TreeSelect
                style={{ width: '187px' }}
                value={value}
                allowClear
                multiple
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Additional Options"
                treeDefaultExpandAll
                treeCheckable
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                onChange={onChange}
                // onSearch={onSearch}
                // showSearch={false}
            />
        </div>
    );
};

export default InventoryFiltersOptionsTree;