import React from 'react';
import {TreeSelect} from 'antd'
import {connect}from 'react-redux'
import {treeData} from "./treeData";
import {createStructuredSelector} from "reselect";
import {inventoryFiltersSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import {appendOption, removeOption, setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";

const types = {
    '0-0':'colors',
    '0-1':'fuelTypes',
    '0-2':'transmissions',
    '0-3':'prevOwners'
}
const InventoryFiltersOptionsTree = ({setFieldValue,filtersData,appendOption,removeOption}) => {
   

    const onSelect = (value,{props:{eventKey}},data)=>{
        console.log('on select', value,eventKey,data)

        if(value){
            if(value==='color'){
                setFieldValue('colors',["white", "black", "silver", "red", "blue"])
            }else if(value==='transmission'){
                setFieldValue('transmissions',["auto", "manual", "semi-auto"])
            }else if(value==='fuel'){
                setFieldValue('fuelTypes',["diesel", "electric", "hybrid", "petrol", "lpg"])
            }else{
                console.log('value: ',value)
                console.log('treeNode',eventKey)
                const listName = types[eventKey.substring(0,3)]
                appendOption(listName,value)
            }

        }

    }
    const handleDelete = (value,title,data)=>{
        console.log('changing')
        console.log('on change:',value)
        console.log('on change:',title)
        console.log('on change:',data)
        const{preValue,allCheckedNodes}=data
        //signifies deletion
        console.log('preValue: ',preValue, 'allCheckedNodes: ',allCheckedNodes)
        //instead of value there was allCheckedNodes
        if( allCheckedNodes && preValue.length>value.length){
            const {key} = data.triggerNode
            if(key){
                console.log('key exists')
                const listName = types[key.substring(0,3)]
                const {triggerValue} = data
                console.log('on change: ',triggerValue,listName)
                removeOption(listName,triggerValue)
                // setFieldValue(listName,value)
            }else{
                console.log('key doesnt exist')
                const{eventKey}=data.triggerNode.props
                const name = types[eventKey.substring(0,3)]
                const {triggerValue} = data
                console.log('on change else part: ',triggerValue,name,value)
                removeOption(name,triggerValue)
                // setFieldValue(name,value)
            }

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
                value={[...colors,...fuelTypes,...transmissions]}
                // value={state.value}
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
                // onBlur={()=>console.log('blur')}
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