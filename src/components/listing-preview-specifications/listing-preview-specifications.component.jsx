import React from 'react'
import {} from './listing-preview-specifications.styles'
import {ListingPreviewSpecificationsGrid} from "./listing-preview-specifications.styles";
import SummaryItem from "../summary-item/summary-item.component";
// import engine from "../../assets/car-engine.svg";
// import fuel from "../../assets/fuel.svg";
// import gear from "../../assets/manual-transmission.svg";
// import gauge from "../../assets/gauge.svg";
// import car from "../../assets/car.svg";
// import seat from "../../assets/seat.svg";
import ac from '../../assets/air-conditioning.svg'
import power from '../../assets/turbo-engine.svg'
import owner from '../../assets/owner.svg'
import {ReactComponent as Engine} from '../../assets/car icons/engine.svg';
import {ReactComponent as Fuel} from '../../assets/car icons/transportation.svg'
import {ReactComponent as Gear} from '../../assets/car icons/gearshift.svg'
import {ReactComponent as Gauge} from '../../assets/car icons/ui.svg'
import {ReactComponent as Car} from '../../assets/car icons/car.svg'
import {ReactComponent as Seat} from '../../assets/car icons/seat.svg'




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
            <SummaryItem description={'A/C'} title={'Dual auto'} icon={ac} isExtended/>
            <SummaryItem description={'Engine Power'} title={'195hp'} icon={power} isExtended/>
            <SummaryItem description={'Previous Owners'} title={'0'} icon={owner} isExtended/>

        </ListingPreviewSpecificationsGrid>
    )
}
export default ListingPreviewSpecifications