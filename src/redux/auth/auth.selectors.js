import {createSelector} from "reselect";

const authSelector = state=>state.auth

export const currentUserSelector = createSelector(
    authSelector,
    (auth)=>auth.currentUser
)