const INITIAL_STATE = {
    data: []
}

export const prodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_PROD': 
            return {
                data: action.payload
            }
            default: 
                return state
    }
}