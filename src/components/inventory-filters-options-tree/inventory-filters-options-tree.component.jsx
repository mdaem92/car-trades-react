import React, {useEffect, useState} from 'react';
import {Tree,TreeSelect} from 'antd'
import {connect}from 'react-redux'
import {treeData} from "./treeData";
import {createStructuredSelector} from "reselect";
import {inventoryFiltersSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import{setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";

// const {TreeNode} = TreeSelect

const InventoryFiltersOptionsTree = ({setFieldValue,filtersData}) => {
    const [state,setState] = useState({
        value:undefined,
        searchValue:undefined
    })
    useEffect(()=>{
        console.log(state)
    },[state])
    const mapChildrenToParents = (values,nodes)=>{
        const types = {
            '0-0':'colors',
            '0-1':'fuelTypes',
            '0-2':'transmissions',
            '0-3':'prevOwners'
        }
        console.log('nodes ',nodes)

        return nodes.map(({pos},index)=>{
                // console.log(`${[types[pos.substr(0,2)]]}:${values[index]}`)
                // console.log(pos.substring(0,3))
            const name = types[pos.substring(0,3)]
            const value = values[index]

            return {
                    // [types[pos.substring(0,3)]]:values[index]
                name,
                value

            }
        })


    }

    const onChange = (value,title,data)=>{
        console.log('value',value)
        console.log('data ',data)
        const {allCheckedNodes}=data
        console.log('all checked nodes:',data.allCheckedNodes)
        const selectedItems = mapChildrenToParents(value,allCheckedNodes)
        console.log('selected items',selectedItems)
        selectedItems.forEach(({name,value})=>setFieldValue(name,value))
        setState({
            ...state,
            value
        })
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
const mapStateToProps = createStructuredSelector({
    filtersData:inventoryFiltersSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(InventoryFiltersOptionsTree);