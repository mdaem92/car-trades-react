import React from 'react';
import { TableVerticalHeader,HeaderLabel,HeaderColumns , MobileHeader } from './compare-table-vertical-header.styles';
import {useWindowSize} from '../../hooks/useWindowSize'

const CompareTableVerticalHeader = () => {
    const width = useWindowSize()
    return width > 500?
    (
        <TableVerticalHeader>
            <HeaderLabel>Compare</HeaderLabel>
            <HeaderColumns>
                {
                    ['Condition','Make','Model','Mileage','Price','Year','Body type','Fuel Type','Fuel Economy']
                    .map((column,index)=><div key={index} className={'column-item'}>{column}</div>)
                }
            </HeaderColumns>
        </TableVerticalHeader>
    )
    :
    (
        <MobileHeader>
            <HeaderLabel>Compare</HeaderLabel>
        </MobileHeader>
    )
};

export default CompareTableVerticalHeader;