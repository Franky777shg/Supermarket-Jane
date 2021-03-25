// NOTE storage itu redux
import { combineReducers } from 'redux'

// nyambungin nya itu pake react redux
import { userReducer } from './userReducer'
import { prodReducer } from './prodReducer'
import { carouselReducer } from './carouselReducer'

const allReducer = combineReducers({
    user: userReducer,
    product: prodReducer,
    carousel: carouselReducer
})

export default allReducer