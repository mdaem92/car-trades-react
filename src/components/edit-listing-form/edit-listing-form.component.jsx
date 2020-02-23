import React, { useState } from 'react';
import { Button } from 'antd';
import EditListing from '../edit-listing/edit-listing.component'
import { EditListingFormContainer,ButtonsContainer } from './edit-listing-form.styles'

const EditListingForm = ({ listing }) => {
    const [state, setState] = useState({
        step: 0,
        loading: false
    })
    const { step, loading } = state

    return (
        <EditListingFormContainer>
            <EditListing step={step} listing={listing}/>
            <ButtonsContainer>
                <Button
                    type="secondary"
                    onClick={() => setState({ ...state, step: state.step + 1 })}
                    disabled={step === 3}
                >
                    Next
                </Button>
                <Button
                    type="secondary"
                    onClick={() => setState({ ...state, step: state.step - 1 })}
                    disabled={step === 0}
                >
                    Previous
                </Button>
                <Button
                    type="primary"
                    loading={loading}
                    onClick={console.log('clicking')}
                >
                    Done
                </Button>
            </ButtonsContainer>

        </EditListingFormContainer>
    )
};

export default EditListingForm;