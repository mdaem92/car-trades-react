import React,{useState} from 'react'
import { Cascader } from 'antd';
import {CascaderContainer} from "./inventory-results-sort-cascader.styles";
import {options} from "./sort-cascader-data";
import {createStructuredSelector} from "reselect";
import {sortSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import {setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";
import{connect}from 'react-redux'

const InventoryResultsSortCascader=({sortData,setFieldValue})=> {

    const[state,setState] = useState({
        text:''
    })
    const {sortBy,sortType}=sortData

    const onChange = (value, selectedOptions) => {
        console.log(value,selectedOptions)
        const [sortBy,sortType]=value
        setFieldValue('sortBy',sortBy)
        setFieldValue('sortType',sortType)
        setState({
            text: selectedOptions.map(o => o.label).join(', '),
        });
    };

        return (
            <CascaderContainer id={'cascader'}>
                {`${sortBy[0].toUpperCase()+sortBy.slice(1)} , ${sortType==='asc'?'Ascending':'Descending'}`}
                &nbsp;
                <Cascader

                    className={'cascader'}
                    getPopupContainer={() => document.getElementById('cascader')}
                    popupClassName={'popup'}
                    options={options}
                    onChange={onChange}
                    defaultValue={[sortBy,sortType]}
                >
                    <a href="#">Edit</a>
                </Cascader>
            </CascaderContainer>
            );

}
const mapStateToProps = createStructuredSelector({
    sortData:sortSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(InventoryResultsSortCascader)
