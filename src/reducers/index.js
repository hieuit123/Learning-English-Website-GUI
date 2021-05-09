import {loginReducer} from './loginReducer'
import { combineReducers} from 'redux'
import {showComponentReducer} from './showComponentReducer'
import {gameManage} from './gameManage'
import wordsManage from './wordsManage'
import accountManage from './accountManage'
const rootReducer = combineReducers({loginReducer, showComponentReducer, gameManage, wordsManage, accountManage})

export default rootReducer
