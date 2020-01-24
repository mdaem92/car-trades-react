import {createSelector} from 'reselect'
// condition: conditionSelector,
//     bodyType:bodyTypeSelector,
//     seatCount:seatCountSelector,
//     prevOwners:prevOwnersSelector
export const addListingFormSelector = state=>state.addListingForm

export const stepSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.currentStep
)
export const loadingSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.loading
)
export const conditionSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.condition
)
export const bodyTypeSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.bodyType
)
export const seatCountSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.seatCount
)
export const mileageSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.mileage
)
export const makeSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.make
)
export const modelSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.model
)


export const fuelEconomySelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.fuelEconomy
)
export const fuelTypeSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.fuelType
)
export const engineCapacitySelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.engineCapacity
)
export const enginePowerSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.enginePower
)
export const transmissionSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.transmission
)
export const fileListSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.imageFileList?addListingForm.imageFileList:[]
)
export const priceSelector = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.price
)
export const isAppraisalRequested = createSelector(
    addListingFormSelector,
    addListingForm=>addListingForm.isAppraisalRequested
)