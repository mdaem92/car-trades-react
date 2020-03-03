import React from 'react'
import {ListingInfoSummaryContainer} from './listing-info-summary.styles'
import SummaryItem from "../summary-item/summary-item.component";
import {ReactComponent as Engine} from '../../assets/car-icons/engine.svg';
import {ReactComponent as Fuel} from '../../assets/car-icons/transportation.svg'
import {ReactComponent as Gear} from '../../assets/car-icons/gearshift.svg'
import {ReactComponent as Gauge} from '../../assets/car-icons/ui.svg'
import {ReactComponent as Car} from '../../assets/car-icons/car.svg'
import {ReactComponent as Seat} from '../../assets/car-icons/seat.svg'


const ListingInfoSummary = (
    {
        engineCapacity,
        fuelType,
        transmission,
        fuelEconomy,
        bodyType,
        seatCount,
        mileage
    })=>{
    return (
        <ListingInfoSummaryContainer>
            <SummaryItem title={`${engineCapacity}`} >
                <Engine className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={`${fuelType}`} >
                <Fuel className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={`${transmission}`} >
                <Gear className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={`${mileage} Km`} >
                <Gauge className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={`${bodyType}`} >
                <Car className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={`${seatCount}`} >
                <Seat className={'summary-icon'}/>
            </SummaryItem>

        </ListingInfoSummaryContainer>
    )
}



export default ListingInfoSummary

