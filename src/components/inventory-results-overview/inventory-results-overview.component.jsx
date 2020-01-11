import React from 'react';
import {ListingContainer,Results,Sort,ActiveFilters} from "./inventory-results-overview.styles";

const InventoryResultsOverview = () => {
    return (
        <div>
            <ListingContainer >
                <Results>
                    <h3 className={'text'}>35 Results found </h3>
                </Results>
                <ActiveFilters>
                    <span>Active filters </span>

                </ActiveFilters>
                <Sort>
                    sort
                </Sort>
            </ListingContainer>

        </div>
    );
};

export default InventoryResultsOverview;