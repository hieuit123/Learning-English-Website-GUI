import {loginReducer} from './loginReducer'
import { combineReducers} from 'redux'
import {showComponentReducer} from './showComponentReducer'
const rootReducer = combineReducers({loginReducer, showComponentReducer})

export default rootReducer
