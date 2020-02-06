import React from 'react'
import {Progress} from 'reactstrap'
import{ProgressBarContainer} from './add-listing-progress-bar.styles'

const AddListingProgressBar = ({value,max})=>{

    return (
        <ProgressBarContainer>
            <Progress value={value} max={max}> Step 1</Progress>

        </ProgressBarContainer>
    )
}
export default AddListingProgressBar