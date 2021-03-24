// NOTE storage itu redux
import { combineReducers } from 'redux'

// nyambungin nya itu pake react redux
import { userReducer } from './userReducer'
import { prodReducer } from './prodReducer'

const allReducer= combineReducers ({
    user: userReducer,
    product: prodReducer
})

export default allReducer