import React,{useState} from 'react';
import {Menu, Icon, Button, Cascader, InputNumber, Radio} from 'antd';
import {antDCarData} from "../../carData/arrayData";
import {MenuContainer,MakeModelContainer} from "./inventory-filters.styles";
import InventoryFiltersMakeModel from "../inventory-filters-make-model/inventory-filters-make-model.component";
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

    return (
        
            <MenuContainer
                mode="inline"
                // theme={'dark'}
            >
                <SubMenu
                    key="sub1"
                    title={<SubMenuTitle title={'Make & Model'} type={'car'}/>}
                >
                    <InventoryFiltersMakeModel/>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={<SubMenuTitle title={'Specifications'} type={'control'}/>}
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={<SubMenuTitle title={'More options'} type={'more'}/>}


                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub5" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </MenuContainer>

    );
};

export default InventoryFilters;