import {createSelector} from 'reselect'

const userAccountSelector = state=>state.userAccount

export const userAccountCurrentPageSelector = createSelector(
    userAccountSelector,
    (userAccount)=>{
        console.log('user account: ',userAccount);
        return userAccount.current
    }
)