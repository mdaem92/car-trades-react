import userAccountActionTypes from "./user-account.types";

export const setCurrent = (current)=>({
    type:userAccountActionTypes.SET_CURRENT,
    current
})