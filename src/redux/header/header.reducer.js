const headerDefaultState = {
    scrolled:false
}

export default (state=headerDefaultState,action)=>{
    switch (action.type) {
        case 'SET_IS_SCROLLED':
            return {
                ...state,
                scrolled:action.isScrolled
            }
        default:
            return state

    }
}