import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {GridContainer} from "./compare.styles";
import {comparedListingsSelector} from "../../redux/compare/compare.selectors";


const ComparePage = ()=>{
    return (
        <GridContainer>

        </GridContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    comparedListings:comparedListingsSelector,
})
export default connect(mapStateToProps)(ComparePage)