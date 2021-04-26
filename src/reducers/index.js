import {loginReducer} from './loginReducer'
import { combineReducers} from 'redux'
import {showComponentReducer} from './showComponentReducer'
import {gameManage} from './gameManage'
const rootReducer = combineReducers({loginReducer, showComponentReducer, gameManage})

export default rootReducer
