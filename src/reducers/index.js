import {loginReducer} from './loginReducer'
import { combineReducers} from 'redux'
import {showComponentReducer} from './showComponentReducer'
import {gameManage} from './gameManage'
import wordsManage from './wordsManage'
const rootReducer = combineReducers({loginReducer, showComponentReducer, gameManage, wordsManage})

export default rootReducer
