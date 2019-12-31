import React from 'react'
import ListingOption from "./listing-option.component";
import {OptionsListGridContainer} from './listing-preview-options-list.styles'


const items = [
        'ABS',
        'Adaptive Cruise Control',
        'Alloy wheels',
        'Arm rest',
        'Bluetooth',
        'CD player',
        'Central locking',
        'Daytime running lights',
        'Distance warning system',
]

const OptionsList = ()=>(
    <OptionsListGridContainer>
       {
          items.map((item,index)=><ListingOption description={item} key={index}/>)
       }
    </OptionsListGridContainer>
)
export default  OptionsList