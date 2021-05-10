import * as types from './../constant/ACTION_TYPE'

const initialState = {
    accountData: null,
    wordbookData:null,
}

export default (state = initialState, action) => {
    switch (action.type) {
    case types.INIT_ACCOUNT_DATA:
        let newAccountDataState = {...state}
        newAccountDataState.accountData = action.accountData
        return newAccountDataState
    case types.INIT_WORDBOOK_DATA:
        let newWordbookDataState = {...state}
        newWordbookDataState.wordbookData = action.wordbookData
        return newWordbookDataState
    default:
        return state
    }
}
