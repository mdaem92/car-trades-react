import React from 'react';
import { ValuesContainer} from "./compare-listing.styles";
import {GridContainer} from "./compare-listing.styles";
const CompareListing = ({condition,make,model,mileage,price,registered,color,transmission,fuelType,fuelEconomy,isTableColumn}) => {

    const data = {condition,make,model,mileage,price,registered,color,transmission,fuelType}
    const values = isTableColumn?(['Condition','Make','Model','Mileage','Price','Transmission','Fuel type','Fuel Economy','Registered',]):(Object.values(data))
    console.log('values: ',values)
    return (
        <GridContainer>
            {/*<CompareImageCarousel/>*/}
            <ValuesContainer>
                {values.map((value,index)=><div key={index} className={'compare-value'}>{value}</div>)}
                {/*{values.toString()}*/}
            </ValuesContainer>
        </GridContainer>
    );
};

export default CompareListing;
