import { createStore } from 'redux'
import {loginAction} from './actions'
import rootReducer from './reducers'
const store = createStore(rootReducer)
export default store