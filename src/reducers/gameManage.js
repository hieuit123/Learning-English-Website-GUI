import * as types from './../constant/ACTION_TYPE'
import axios from 'axios'
const initialStateGameData = {
    currentQuestion:1,
    questionData:null
}
var tmpData = null;
export const gameManage = (state = initialStateGameData, action) => {
    switch (action.type) {
        case types.INIT_GAME_DATA:
            return state            
        case types.NEXT_QUESTION:
            let newState = {...state}
            newState.currentQuestion = action.nextQuestion
            return newState
        default:
            return state
    }
}