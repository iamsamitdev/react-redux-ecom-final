import {combineReducers} from 'redux'
import ProductReducer from './productReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    productReducer: ProductReducer,
    cartReducer: cartReducer
})

export default rootReducer