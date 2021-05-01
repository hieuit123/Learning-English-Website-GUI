import * as types from './../constant/ACTION_TYPE'

const initialState = {
    wordsData: null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case types.INIT_WORDS_DATA:
        let newWordsDataState = {...state}
        newWordsDataState.wordsData = action.wordsData
        return newWordsDataState
    default:
        return state
    }
}
