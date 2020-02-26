import { createSelector } from "reselect"

export const editListingFormSelector = state=>state.editListingForm

export const editListingFormFirstStepDataSelector = createSelector(
    editListingFormSelector,
    form=>{
        const {
            condition,
            make,
            model,
            bodyType,
            seatCount,
            mileage,
            color,
            registered
        }=form
        return {
            condition,
            make,
            model,
            bodyType,
            seatCount,
            mileage,
            color,
            registered
        }
    }
)

export const isSubmittingAllowedSelector = createSelector(
    editListingFormSelector,
    form=>{
        console.log('form values:',Object.values(form))
        console.log('form values:',Object.values(form).includes(undefined))
        return Object.values(form).includes(undefined) || Object.values(form).includes(null)
    }
)
export const editListingFormSecondStepDataSelector = createSelector(
    editListingFormSelector,
    form=>{
        const{
            fuelEconomy,
            fuelType,
            engineCapacity,
            enginePower,
            transmission
        }=form
        return{
            fuelEconomy,
            fuelType,
            engineCapacity,
            enginePower,
            transmission 
        }
    }
)
export const editListingImageFileListSelector = createSelector(
    editListingFormSelector,
    form=>form.imageFileList
)
export const editListingFormPriceSelector = createSelector(
    editListingFormSelector,
    form=>form.price
)
export const doneEdittingSelector = createSelector(
    editListingFormSelector,
    form=>form.doneEditting
)
