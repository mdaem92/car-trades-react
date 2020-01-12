import React,{useState} from 'react';
import {Menu, Icon, Switch } from 'antd';
import {antDCarData} from "../../carData/arrayData";
import {MenuContainer,MakeModelContainer} from "./inventory-filters.styles";
import InventoryFiltersMakeModel from "../inventory-filters-make-model/inventory-filters-make-model.component";
import InventoryFiltersSpecs from "../inventory-filters-specs/inventory-filters-specs.component";
import moment from 'moment'
import InventoryFiltersOptionsTree from "../inventory-filters-options-tree/inventory-filters-options-tree.component";

const { SubMenu } = Menu
const SubMenuTitle = ({title,type})=>{
    return(
        <span>
            <Icon type={type} />
            <span>{title}</span>
        </span>
    )
}
const InventoryFilters = () => {

    const handleChange = (value,name)=>console.log(value,name)
    return (
            <MenuContainer
                mode="inline"
            >
                <SubMenu
                    key="makeModel"
                    title={<SubMenuTitle title={'Make & Model'} type={'car'}/>}
                >
                    <InventoryFiltersMakeModel/>
                </SubMenu>
                <SubMenu
                    key="specs"
                    title={<SubMenuTitle title={'Specifications'} type={'control'}/>}
                >
                    <SubMenu
                        key="price"
                        title={'Price'}
                    >
                        <InventoryFiltersSpecs
                            range
                            min={0}
                            max={150000}
                            name={'price'}
                            step={500}
                            tipFormatter={(value)=>`$${value}`}
                        />
                    </SubMenu>
                    <SubMenu key="mileage" title="Mileage">
                        <InventoryFiltersSpecs
                            range
                            min={0}
                            max={200000}
                            step={500}
                            tipFormatter={(value)=>`${value}Km`}
                            name={'mileage'}
                            // onChange={(value,name)=>handleChange(value,'mileage')}
                        />
                    </SubMenu>
                    <SubMenu key="year" title="Year">
                        <InventoryFiltersSpecs
                            range
                            min={1950}
                            max={parseInt(moment().format('YYYY'))}
                            step={1}
                            name={'year'}
                            tipFormatter={(value)=>`${value}`}
                            // onChange={(value,name)=>handleChange(value,'year')}
                        />
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="more"
                    title={<SubMenuTitle title={'More options'} type={'more'}/>}

                >
                    <InventoryFiltersOptionsTree/>
                </SubMenu>
            </MenuContainer>

    );
};

export default InventoryFilters;