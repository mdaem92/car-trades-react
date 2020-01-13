import React,{useState} from 'react'
import { Cascader } from 'antd';
import {CascaderContainer} from "./inventory-results-sort-cascader.styles";

const options = [
    {
        value: 'mileage',
        label: 'Mileage',
        children: [
            {
                value: 'asc',
                label: 'Ascending',
            },
            {
                value: 'desc',
                label: 'Descending',
            },

        ],
    },
    {
        value: 'price',
        label: 'Price',
        children: [
            {
                value: 'asc',
                label: 'Ascending',
            },
            {
                value: 'desc',
                label: 'Descending',
            },

        ],
    },
    {
        value: 'year',
        label: 'Year',
        children: [
            {
                value: 'asc',
                label: 'Ascending',
            },
            {
                value: 'desc',
                label: 'Descending',
            },

        ],
    },

];


const InventoryResultsSortCascader=()=> {

    const[state,setState] = useState({
        text:''
    })

    const onChange = (value, selectedOptions) => {
        setState({
            text: selectedOptions.map(o => o.label).join(', '),
        });
    };

        return (
            <CascaderContainer id={'cascader'}>
                {state.text}
                &nbsp;
                <Cascader

                    className={'cascader'}
                    getPopupContainer={() => document.getElementById('cascader')}
                    popupClassName={'popup'}
                    options={options}
                    onChange={onChange}
                >
                    <a href="#">Change Sort</a>
                </Cascader>
            </CascaderContainer>
            );

}
export default  InventoryResultsSortCascader
