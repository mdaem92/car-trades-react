import React, {useEffect, useState} from 'react';
import {Tree,TreeSelect} from 'antd'
import {connect}from 'react-redux'
import {treeData} from "./treeData";
import {createStructuredSelector} from "reselect";
import {inventoryFiltersSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import {appendOption, removeOption, setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";

// const {TreeNode} = TreeSelect
const types = {
    '0-0':'colors',
    '0-1':'fuelTypes',
    '0-2':'transmissions',
    '0-3':'prevOwners'
}
const InventoryFiltersOptionsTree = ({setFieldValue,filtersData,appendOption,removeOption}) => {
    const [state,setState] = useState({
        value:undefined,
        searchValue:undefined
    })

    useEffect(()=>{
        console.log('state: ',state)
    },[state])

    const onSelect = (value,{props:{eventKey}})=>{
        if(value){
            console.log('value: ',value)
            console.log('treeNode',eventKey)
            const listName = types[eventKey.substring(0,3)]
            appendOption(listName,value)
        }

    }
    const handleDelete = (value,title,data)=>{
        console.log('changing')
        console.log('on change:',value)
        console.log('on change:',title)
        console.log('on change:',data)
        const{preValue,allCheckedNodes}=data
        //signifies deletion
        // console.log(` conditional ${preValue.length}>${allCheckedNodes.length}`)
        if( allCheckedNodes && preValue.length>allCheckedNodes.length){
            const {key} = data.triggerNode
            console.log('key',key)
            const listName = types[key.substring(0,3)]
            const {triggerValue} = data
            console.log(triggerValue,listName)
            removeOption(listName,triggerValue)
        }
        else if(!allCheckedNodes){
            setFieldValue('fuelTypes',[])
            setFieldValue('transmissions',[])
            setFieldValue('colors',[])
        }
    }

    const {colors,fuelTypes,transmissions}=filtersData
    return (
        <div className={'inventory-filters-options-tree-container'}>
            <TreeSelect
                style={{ width: '187px' }}
                // value={value}
                value={[...colors,...fuelTypes,...transmissions]}

                allowClear
                multiple
                dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                treeData={treeData}
                placeholder="Additional Options"
                treeDefaultExpandAll
                treeCheckable
                showCheckedStrategy={TreeSelect.SHOW_CHILD}
                onChange={handleDelete}
                onSelect={onSelect}
                onBlur={()=>console.log('blur')}
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
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value)),
    appendOption:(listName,option)=>dispatch(appendOption(listName,option)),
    removeOption:(listName,option)=>dispatch(removeOption(listName,option))
})
export default connect(mapStateToProps,mapDispatchToProps)(InventoryFiltersOptionsTree);