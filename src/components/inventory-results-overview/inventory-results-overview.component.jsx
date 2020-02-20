import React from 'react';
import {connect}from 'react-redux'
import {ListingContainer,Results,Sort,ActiveFilters} from "./inventory-results-overview.styles";
import ActiveFiltersGroup from '../inventory-results-active-filter/inventory-results-active-filters-group.component'
import InventorySortOptions from '../inventory-sort-options/inventory-sort-options.component'
import {createStructuredSelector} from "reselect";
import {filteredListingsLengthSelector} from "../../redux/listing/listing.selectors";

const InventoryResultsOverview = ({visibleListingsCount}) => {
    return (
        <div>
            <ListingContainer >
                <Results>
                    <h3 className={'text'}>{!!visibleListingsCount?visibleListingsCount:'No'} Results found </h3>
                </Results>
                <ActiveFilters>
                    <ActiveFiltersGroup/>
                </ActiveFilters>
                <Sort>
                    <InventorySortOptions/>
                </Sort>
            </ListingContainer>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    visibleListingsCount:filteredListingsLengthSelector,
})
export default connect(mapStateToProps)(InventoryResultsOverview);
