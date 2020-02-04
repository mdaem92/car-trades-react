import React from 'react'
import {GridContainer} from "../../components/add-listing-form-specs/add-listing-form-specs.styles";
import CompareListing from "../../components/compare-listing/compare-listing.component";

const ComparePage = ({listings})=>{
    return (
        <GridContainer>
            {
                // listings.map(listing=><CompareListing {...listing}/>)
            }
        </GridContainer>
    )
}

export default ComparePage