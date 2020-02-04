import React from 'react'
import {} from './listing-preview-specifications.styles'
import {Link}from 'react-router-dom'
import {ListingPreviewSpecificationsGrid} from "./listing-preview-specifications.styles";
import SummaryItem from "../summary-item/summary-item.component";
import {ReactComponent as Engine} from '../../assets/car icons/engine.svg';
import {ReactComponent as Fuel} from '../../assets/car icons/transportation.svg'
import {ReactComponent as Gear} from '../../assets/car icons/gearshift.svg'
import {ReactComponent as Gauge} from '../../assets/car icons/ui.svg'
import {ReactComponent as Car} from '../../assets/car icons/car.svg'
import {ReactComponent as Seat} from '../../assets/car icons/seat.svg'
import {ReactComponent as AC} from '../../assets/car icons/celsius.svg'
import {ReactComponent as Power} from '../../assets/car icons/power.svg'
import {ReactComponent as CarKey} from '../../assets/car icons/car-key.svg'
import {ReactComponent as User} from '../../assets/user.svg';
import {Icon} from 'antd'
import {OptionLink} from "../Header/header.styles";



const ListingPreviewSpecifications = (
    {
        mileage,
        fuelType,
        engineCapacity,
        seatCount,
        transmission,
        fuelEconomy,
        bodyType,
        enginePower,
        userName
    })=>{

    return (
        <ListingPreviewSpecificationsGrid>
            <SummaryItem description={'Engine Capacity'} title={`${engineCapacity}`} isExtended>
                <Engine className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Fuel Type'} title={`${fuelType}`} isExtended>
                <Fuel className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Transmission'} title={`${transmission}`} isExtended>
                <Gear className={'summary-icon'}/>
            </SummaryItem>
            {/*<SummaryItem description={'Fuel Economy'} title={`${fuelEconomy}`} isExtended>*/}
            {/*    <Gauge className={'summary-icon'}/>*/}
            {/*</SummaryItem>*/}
            <SummaryItem description={'Body Type'} title={`${bodyType}`} isExtended>
                <Car className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Seats'} title={`${seatCount}`} isExtended>
                <Seat className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={`AC`} title={`Dual Auto`} isExtended>
                <AC className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Engine Power'} title={`${enginePower} Hp`} isExtended>
                <Power className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Mileage'} title={`${mileage} Km`} isExtended>
                <Gauge className={'summary-icon'}/>
            </SummaryItem>
            {userName &&
            <SummaryItem
                description={'Uploaded by'}
                title={
                    <OptionLink
                        className={'anchor'}
                        style={{padding:'0'}}
                        to={`/${encodeURI(userName)}/listings`}
                    >
                        {userName}
                    </OptionLink>
                }
                isExtended
            >
                <User className={'summary-icon'}/>
            </SummaryItem>}
        </ListingPreviewSpecificationsGrid>
    )
}
export default ListingPreviewSpecifications