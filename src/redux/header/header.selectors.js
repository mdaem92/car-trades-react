import {createSelector} from 'reselect'

const headerSelector = state=>state.header

export const scrolledSelector = createSelector(
    headerSelector,
    (header)=>header.scrolled
)
