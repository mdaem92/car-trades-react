import React from 'react'
import {} from './listing-preview-specifications.styles'
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




const ListingPreviewSpecifications = ()=>{

    return (
        <ListingPreviewSpecificationsGrid>
            <SummaryItem description={'Engine Capacity'} title={'1.5 L'} isExtended>
                <Engine className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Fuel Type'} title={'Gas'} isExtended>
                <Fuel className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Transmission'} title={'Automatic'} isExtended>
                <Gear className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Fuel Economy'} title={'50MPG'} isExtended>
                <Gauge className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Body Type'} title={'Coupe'} isExtended>
                <Car className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Seats'} title={'2'} isExtended>
                <Seat className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'AC'} title={'Dual Automatic'} isExtended>
                <AC className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Engine Power'} title={'195hp'} isExtended>
                <Power className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem description={'Previous Owners'} title={'1'} isExtended>
                <CarKey className={'summary-icon'}/>
            </SummaryItem>
        </ListingPreviewSpecificationsGrid>
    )
}
export default ListingPreviewSpecifications