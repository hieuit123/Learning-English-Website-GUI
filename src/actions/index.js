import * as types from '../constant/ACTION_TYPE'
export const loginAction = (credential) => {
    return {
        type: types.LOGIN,
        credential: credential
    }
}

export const openComponentDetailAction = (type, id) => {
    return {
        type: type,
        isShow: true,
        id: id
    }
}

export const closeComponentDetailAction = (type) => {
    return {
        type: type,
        isShow: false
    }
}
export const initGameDataAction = (data) => {
    return {
        type: types.INIT_GAME_DATA,
        data: data
    }
}
export const nextQuestion = (nextQuestion) => {
    return {
        type: types.NEXT_QUESTION,
        nextQuestion: nextQuestion
    }
}
export const resetGameDataAction = () => {
    return { type: types.RESET_GAME_DATA }
}

export const addCorrectAnswerIDAction = (correctAnswerID) => {
    return {
        type: types.ADD_ID_CORRECT_ANSWER,
        correctAnswerID: correctAnswerID
    }
}

export const backToQuestionOne = () => {
    return { type: types.BACK_TO_QUESTION_ONE }
}
export const initWordsDataAction = (data) => {
    return {
        type: types.INIT_WORDS_DATA,
        wordsData: data
    }
}

export const initAccountDataAction = (data) => {
    return {
        type: types.INIT_ACCOUNT_DATA,
        accountData: data
    }
}
export const initWordbookDataAction = (data) => {
    return {
        type: types.INIT_WORDBOOK_DATA,
        wordbookData: data
    }
}