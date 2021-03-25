const INITIAL_STATE = {
    data: []
}

export const carouselReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_CAROUSEL': 
            return {
                data: action.payload
            }
            default: 
                return state
    }
}