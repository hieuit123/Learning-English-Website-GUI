import * as types from './../constant/ACTION_TYPE'

const initialState = {
    wordsData: null,
    statesWordbook: null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case types.INIT_WORDS_DATA:
        console.log(state);
        let newWordsDataState = {...state}
        newWordsDataState.wordsData = action.wordsData
        if(action.statesWordbook) newWordsDataState.statesWordbook = action.statesWordbook
        return newWordsDataState
    case types.RESET_WORDS_DATA:
        let resetData = {...state}
        resetData.statesWordbook = null
        resetData.wordsData = null
        return resetData
    default:
        return state
    }
}
