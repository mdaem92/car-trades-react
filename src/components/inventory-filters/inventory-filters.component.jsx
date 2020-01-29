import React from 'react';
import {connect}from 'react-redux';
import {Menu, Icon} from 'antd';
import {MenuContainer} from "./inventory-filters.styles";
import InventoryFiltersMakeModel from "../inventory-filters-make-model/inventory-filters-make-model.component";
import InventoryFiltersSpecs from "../inventory-filters-specs/inventory-filters-specs.component";
import moment from 'moment'
import InventoryFiltersOptionsTree from "../inventory-filters-options-tree/inventory-filters-options-tree.component";
import {inventoryFiltersSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import {createStructuredSelector} from "reselect";

const { SubMenu } = Menu
const SubMenuTitle = ({title,type})=>{
    return(
        <span>
            <Icon type={type} />
            <span>{title}</span>
        </span>
    )
}
const InventoryFilters = ({isHomepage,filtersData}) => {

    const handleChange = (value,name)=>console.log(value,name)
    const {year,price,mileage} = filtersData
    return (
            <MenuContainer
                mode={isHomepage?"horizontal":"inline"}
                // inlineCollapsed={true}
            >
                <SubMenu
                    key="makeModel"
                    title={<SubMenuTitle title={'Make & Model'} type={'car'}/>}
                    popupClassName={'popup'}
                    className={'make-model'}
                    getPopupContainer={() => document.getElementById('make-model')}
                >
                    <InventoryFiltersMakeModel isHomepage={isHomepage} />
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
                            defaultValue={price}

                        />
                    </SubMenu>
                    <SubMenu key="mileage" title="Mileage">
                        <InventoryFiltersSpecs
                            isHomepage={isHomepage}
                            range
                            min={0}
                            max={200000}
                            step={500}
                            tipFormatter={(value)=>`${value}Km`}
                            name={'mileage'}
                            defaultValue={mileage}

                            // onChange={(value,name)=>handleChange(value,'mileage')}
                        />
                    </SubMenu>
                    <SubMenu key="year" title="Year">
                        <InventoryFiltersSpecs
                            isHomepage={isHomepage}
                            range
                            min={1950}
                            max={parseInt(moment().format('YYYY'))}
                            step={1}
                            name={'year'}
                            tipFormatter={(value)=>`${value}`}
                            defaultValue={year}
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

                {
                    isHomepage &&
                    <>
                        <Icon className={'search-icon'} type="search" onClick={()=>console.log('clicking')}/>
                    </>

                }
            </MenuContainer>

    );
};
const mapStateToProps = createStructuredSelector({
    filtersData:inventoryFiltersSelector
})
export default connect(mapStateToProps)(InventoryFilters);