import React from 'react';
import {CompareListingContainer, Columns,EmptyImageContainer}from './compare-listing.styles'
import CompareListingImageCarousel from '../compare-listing-image-carousel/compare-listing-image-carousel.component';
import {Tooltip}from 'antd'
import Icon from 'antd/lib/icon';
import {withRouter}from 'react-router-dom'



const CompareListing = ({history,empty,make,condition,model,mileage,bodyType,fuelEconomy,id,fuelType,imageFileList,price,registered}) => {

    return !empty? (
        <CompareListingContainer >
            <CompareListingImageCarousel images={imageFileList} id={id} />
            <Columns>
                <div className={'column-item'}> {condition[0].toUpperCase()+condition.slice(1)}</div>
                <div className={'column-item'}>{make}</div>
                <div className={'column-item'}>{model}</div>
                <div className={'column-item'}>{mileage} Km</div>
                <div className={'column-item'}>${price}</div>
                <div className={'column-item'}>{registered}</div>
                <div className={'column-item'}>{bodyType}</div>
                <div className={'column-item'}>{fuelType}</div>
                <div className={'column-item'}>{fuelEconomy} Mpg</div>
            </Columns>  
        </CompareListingContainer>
    )
    :
    (
        <CompareListingContainer isEmpty>
            <EmptyImageContainer>
                <Tooltip title={'Add to compare'}>
                    <Icon className={'plus-icon'} type="plus" onClick={()=>history.push('/inventory')} />
                </Tooltip>
            </EmptyImageContainer>
        </CompareListingContainer>
       
    )

};

export default withRouter(CompareListing);