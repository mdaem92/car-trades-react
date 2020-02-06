import {Pagination} from "antd";
import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {setFieldValue} from "../../redux/inventory-filters/inventory-filters.actions";
import {
    paginationCurrentPageSelector,
    paginationPageSizeSelector
} from "../../redux/inventory-filters/inventory-filters.selectors";
import {filteredListingsLengthSelector} from "../../redux/listing/listing.selectors";
const CustomPagination = ({setFieldValue,currentPage,pageSize,totalLength})=>{
    return (
        <Pagination
            defaultCurrent={currentPage}
            defaultPageSize={pageSize}
            hideOnSinglePage
            pageSizeOptions={['2','10','20','30','40','50']}
            className={'pagination'}
            size="small"
            total={totalLength}
            showSizeChanger
            showQuickJumper
            onChange={(number)=>setFieldValue('currentPage',number)}
            onShowSizeChange={(current,size)=>{
                setFieldValue('currentPage',1)
                setFieldValue('pageSize',size)

            }}
        />
    )
}
const mapStateToProps=createStructuredSelector({
    currentPage:paginationCurrentPageSelector,
    pageSize:paginationPageSizeSelector,
    totalLength:filteredListingsLengthSelector
})
const mapDispatchToProps = (dispatch)=>({
    setFieldValue:(name,value)=>dispatch(setFieldValue(name,value))
})
export default connect(mapStateToProps,mapDispatchToProps)(CustomPagination)
