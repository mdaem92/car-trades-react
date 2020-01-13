import React from 'react';
import {SortOptionsContainer} from "./inventory-sort-options.styles";
import {Switch} from "antd";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {isFixedSelector} from "../../redux/inventory-filters/inventory-filters.selectors";
import {toggleFixed} from "../../redux/inventory-filters/inventory-filters.actions";
import InventoryResultsSortCascader from "../inventory-results-sort-cascader/inventory-results-sort-cascader.component";

const InventorySortOptions = ({isFixed,toggleFixed}) => {
    return (
        <SortOptionsContainer>
            {/*<span className={'label'}>Search options</span>*/}
            <div className={'options'}>
                <div>
                    <span className={'label'}>Fixed Sidebar</span>
                    <Switch
                        className={'select'}
                        checkedChildren="On"
                        unCheckedChildren={'Off'}
                        checked={isFixed}
                        onChange={()=>toggleFixed()}
                        size={'small'}
                    />
                </div>
                <div >
                    <InventoryResultsSortCascader/>
                </div>
            </div>



        </SortOptionsContainer>
    );
};

const mapStateToProps=createStructuredSelector({
    isFixed:isFixedSelector
})

const mapDispatchToProps = (dispatch)=>({
    toggleFixed:()=>dispatch(toggleFixed())
})
export default connect(mapStateToProps,mapDispatchToProps)(InventorySortOptions);
