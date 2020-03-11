import {createSelector} from "reselect";

const authSelector = state=>state.auth

export const currentUserSelector = createSelector(
    authSelector,
    (auth)=>auth.currentUser
)

export const authErrorMessageSelector = createSelector(
    authSelector,
    auth=>auth.errorMessage
)

export const isAuthLoadingSelector = createSelector(
    authSelector,
    auth=>auth.loading
)