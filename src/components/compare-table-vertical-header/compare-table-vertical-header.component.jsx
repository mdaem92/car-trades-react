import React from 'react';
import { TableVerticalHeader,HeaderLabel,HeaderColumns } from './compare-table-vertical-header.styles';

const CompareTableVerticalHeader = () => {
    return (
        <TableVerticalHeader>
            <HeaderLabel>Compare</HeaderLabel>
            <HeaderColumns>
                {
                    ['Condition','Make','Model','Mileage','Price','Year','Body type','Fuel Type','Fuel Economy']
                    .map((column,index)=><div key={index} className={'column-item'}>{column}</div>)
                }
            </HeaderColumns>
        </TableVerticalHeader>
    );
};

export default CompareTableVerticalHeader;