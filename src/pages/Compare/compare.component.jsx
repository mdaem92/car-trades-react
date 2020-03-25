import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { comparedListingsSelector } from "../../redux/compare/compare.selectors";
import { CompareTableContainer, CompareTable,BackgroundContainer} from './compare.styles'
import CompareTableVerticalHeader from '../../components/compare-table-vertical-header/compare-table-vertical-header.component'
import CompareListing from '../../components/compare-listing/compare-listing.component';
import FlipMove from 'react-flip-move'


const ComparePage = ({ comparedListings }) => {
    return (
        <BackgroundContainer>
            <CompareTableContainer>
                <CompareTable>
                    <CompareTableVerticalHeader />
                    <FlipMove
                        className={'compare-group'}
                        enterAnimation={'accordionHorizontal'}
                        leaveAnimation={'fade'}
                    >
                        {
                            comparedListings.length > 0 &&
                            (comparedListings.map((listingData) => <div key={listingData.id} ><CompareListing {...listingData} /></div>))
                        }
                    </FlipMove>


                    {
                        comparedListings.length < 3 && <CompareListing empty />
                    }

                </CompareTable>

            </CompareTableContainer>
        </BackgroundContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    comparedListings: comparedListingsSelector,
})
export default connect(mapStateToProps)(ComparePage)