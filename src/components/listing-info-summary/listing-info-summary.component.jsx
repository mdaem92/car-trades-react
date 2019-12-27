import React from 'react'
import {ListingInfoSummaryContainer} from './listing-info-summary.styles'
import SummaryItem from "../summary-item/summary-item.component";
import engine from '../../assets/car-engine.svg';
import fuel from '../../assets/fuel.svg'
import gear from '../../assets/manual-transmission.svg'
import gauge from '../../assets/gauge.svg'
import car from '../../assets/car.svg'

const ListingInfoSummary = ()=>{
    return (
        <ListingInfoSummaryContainer>
            <SummaryItem title={'1.5 L'} icon={engine}/>
            <SummaryItem title={'Hybrid'} icon={fuel}/>
            <SummaryItem title={'Automatic'} icon={gear}/>
            <SummaryItem title={'50 MPG'} icon={gauge}/>
            <SummaryItem title={'Coupe'} icon={car}/>
            <SummaryItem title={'1.5 L'} icon={engine}/>
                {/*<CarEngine/>*/}


        </ListingInfoSummaryContainer>
    )
}
export default ListingInfoSummary

