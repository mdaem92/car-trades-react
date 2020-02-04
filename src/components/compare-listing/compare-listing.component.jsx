import React from 'react';
import {Image, ValuesContainer} from "./compare-listing.styles";
import {GridContainer} from "./compare-listing.styles";
import CompareImageCarousel from "../compare-image-carousel/compare-image-carousel.component";

const CompareListing = (props) => {
    const{condition,make,model,mileage,price,year,color,transmission,fuelType,isTableColumn}=props
    const data = {condition,make,mileage,price,year,color,transmission,fuelType}
    const values = isTableColumn?(Object.values(data)):(Object.keys(data))
    return (
        <GridContainer>
            <CompareImageCarousel/>
            <ValuesContainer>
                {values.map((value,index)=><div key={index} className={'compare-value'}>{value}</div>)}
            </ValuesContainer>
        </GridContainer>
    );
};

export default CompareListing;
