import React from 'react'
import {ListingInfoSummaryContainer} from './listing-info-summary.styles'
import SummaryItem from "../summary-item/summary-item.component";
// import engine from '../../assets/car-engine.svg';
// import fuel from '../../assets/fuel.svg'
// import gear from '../../assets/manual-transmission.svg'
// import gauge from '../../assets/gauge.svg'
// import car from '../../assets/car.svg'
// import seat from '../../assets/seat.svg'
// import safetySeat from '../../assets/safety-seat.svg'


// import {ReactComponent as Engine} from '../../assets/car-engine.svg';
// import {ReactComponent as Fuel} from '../../assets/fuel.svg'
// import {ReactComponent as Gear} from '../../assets/manual-transmission.svg'
// import {ReactComponent as Gauge} from '../../assets/gauge.svg'
// import {ReactComponent as Car} from '../../assets/car.svg'
// import {ReactComponent as Seat} from '../../assets/seat.svg'

import {ReactComponent as Engine} from '../../assets/car icons/engine.svg';
import {ReactComponent as Fuel} from '../../assets/car icons/transportation.svg'
import {ReactComponent as Gear} from '../../assets/car icons/gearshift.svg'
import {ReactComponent as Gauge} from '../../assets/car icons/ui.svg'
import {ReactComponent as Car} from '../../assets/car icons/car.svg'
import {ReactComponent as Seat} from '../../assets/car icons/seat.svg'


const ListingInfoSummary = ()=>{
    return (
        <ListingInfoSummaryContainer>
            {/*<SummaryItem title={'1.5 L'} icon={engine}/>*/}
            {/*<SummaryItem title={'Hybrid'} icon={fuel}/>*/}
            {/*<SummaryItem title={'Automatic'} icon={gear}/>*/}
            {/*<SummaryItem title={'50 MPG'} icon={gauge}/>*/}
            {/*<SummaryItem title={'Coupe'} icon={car}/>*/}
            {/*<SummaryItem title={'2'} icon={seat}/>*/}
            <SummaryItem title={'1.5 L'} >
                <Engine className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={'Hybrid'} >
                <Fuel className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={'Automatic'} >
                <Gear className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={'50 MPG'} >
                <Gauge className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={'Coupe'} >
                <Car className={'summary-icon'}/>
            </SummaryItem>
            <SummaryItem title={'2'} >
                <Seat className={'summary-icon'}/>
            </SummaryItem>

        </ListingInfoSummaryContainer>
    )
}
export default ListingInfoSummary

