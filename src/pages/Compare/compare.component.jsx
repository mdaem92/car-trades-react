import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { comparedListingsSelector } from "../../redux/compare/compare.selectors";
import { CompareTableContainer, CompareTable } from './compare.styles'
import CompareTableVerticalHeader from '../../components/compare-table-vertical-header/compare-table-vertical-header.component'
import CompareListing from '../../components/compare-listing/compare-listing.component';
import FlipMove from 'react-flip-move'


const ComparePage = ({ comparedListings }) => {
    return (
        <CompareTableContainer>
            <CompareTable>
                <CompareTableVerticalHeader/>
                {
                    comparedListings.length>0 &&
                    (comparedListings.map((listingData)=><CompareListing key={listingData.id} {...listingData}/>))
                }
                
                {
                    comparedListings.length<3 && <CompareListing empty/>
                }
                
            </CompareTable>

        </CompareTableContainer>

    )
}

const mapStateToProps = createStructuredSelector({
    comparedListings: comparedListingsSelector,
})
export default connect(mapStateToProps)(ComparePage)