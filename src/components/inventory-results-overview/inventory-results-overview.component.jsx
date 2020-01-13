import React from 'react';
import {ListingContainer,Results,Sort,ActiveFilters} from "./inventory-results-overview.styles";
import ActiveFiltersGroup from '../inventory-results-active-filter/inventory-results-active-filters-group.component'
import InventorySortOptions from '../inventory-sort-options/inventory-sort-options.component'

const InventoryResultsOverview = () => {
    return (
        <div>
            <ListingContainer >
                <Results>
                    <h3 className={'text'}>35 Results found </h3>
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

export default InventoryResultsOverview;
