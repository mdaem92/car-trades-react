import React, {useState} from 'react'
import{ Carousel} from 'antd'
import {CarouselContainer, StepsActionContainer, StepsContentContainer} from './add-listing-steps.styles'
import PicturesWall from "../image-upload/image-upload.component";
import { Steps, Button, message } from 'antd';
import NewAddListing from "../new-add-listing-form/new-add-listing-form.component";

const { Step } = Steps;

const steps = [
    {
        title: 'Choose Make and Model',

    },
    {
        title: 'Choose Specs',
        // content: 'Second-content',
    },
    {
        title: 'Upload Images',

    },
    {
        title:'Choose Price'
    }
];
const AddListingSteps = ()=>{
    const [state,setState]= useState({current:0,status:''})

    const next=()=> {
        const current = state.current + 1;
        setState({ current });
    }

    const prev = ()=> {
        const current = state.current - 1;
        setState({current});
    }
    const {current,status} = state
    return (

        <div>
            <Steps progressDot current={current}>
                {steps.map(item => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <StepsContentContainer><NewAddListing step={current}/></StepsContentContainer>
            <StepsActionContainer>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </StepsActionContainer>
        </div>

    )
}

export default AddListingSteps