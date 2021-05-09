import * as types from './../constant/ACTION_TYPE'
const initialStateGameData = {
    currentQuestion: 1,
    questionData: null,
    arrayCorrectAnswer: [],
    finalGame:false
}
export const gameManage = (state = initialStateGameData, action) => {
    switch (action.type) {
        case types.INIT_GAME_DATA:
            let newStateGameData = { ...state }
            newStateGameData.questionData = action.data
            return newStateGameData
        case types.NEXT_QUESTION:
            let newState = { ...state }
            newState.currentQuestion = action.nextQuestion
            return newState
        case types.ADD_ID_CORRECT_ANSWER:
            let newStateAnswer = { ...state }
            newStateAnswer.arrayCorrectAnswer.push(action.correctAnswerID)
            return newStateAnswer
        case types.RESET_GAME_DATA:
            let newStateReset = { ...state }
            newStateReset.currentQuestion = 1
            newStateReset.questionData = null
            newStateReset.arrayCorrectAnswer = []
            newStateReset.finalGame = !newStateReset.finalGame
            return newStateReset
        case types.BACK_TO_QUESTION_ONE:
            let newStateBack = {...state}
            newStateBack.arrayCorrectAnswer = []
            newStateBack.currentQuestion = 1
            return newStateBack
        default:
            return state
    }
}