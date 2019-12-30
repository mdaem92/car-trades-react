import React from 'react'
import {} from './listing-preview-specifications.styles'
import {ListingPreviewSpecificationsGrid} from "./listing-preview-specifications.styles";
import SummaryItem from "../summary-item/summary-item.component";
import engine from "../../assets/car-engine.svg";
import fuel from "../../assets/fuel.svg";
import gear from "../../assets/manual-transmission.svg";
import gauge from "../../assets/gauge.svg";
import car from "../../assets/car.svg";
import seat from "../../assets/seat.svg";
import ac from '../../assets/air-conditioning.svg'
import power from '../../assets/turbo-engine.svg'
import owner from '../../assets/owner.svg'

const ListingPreviewSpecifications = ()=>{

    return (
        <ListingPreviewSpecificationsGrid>
            <SummaryItem description={'Engine Capacity'} title={'1.5 L'} icon={engine} isExtended/>
            <SummaryItem description={'Fuel Type'} title={'Hybrid'} icon={fuel} isExtended/>
            <SummaryItem description={'Gear Type'} title={'Automatic'} icon={gear} isExtended/>
            <SummaryItem description={'Fuel Economy'} title={'50 MPG'} icon={gauge} isExtended/>
            <SummaryItem description={'Body Type'} title={'Coupe'} icon={car} isExtended/>
            <SummaryItem description={'Seats'} title={'2'} icon={seat} isExtended/>
            <SummaryItem description={'A/C'} title={'Dual auto'} icon={ac} isExtended/>
            <SummaryItem description={'Engine Power'} title={'195hp'} icon={power} isExtended/>
            <SummaryItem description={'Previous Owners'} title={'0'} icon={owner} isExtended/>

        </ListingPreviewSpecificationsGrid>
    )
}
export default ListingPreviewSpecifications