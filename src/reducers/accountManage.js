import * as types from './../constant/ACTION_TYPE'

const initialState = {
    accountData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
    case types.INIT_ACCOUNT_DATA:
        let newAccountDataState = {...state}
        newAccountDataState.accountData = action.accountData
        return newAccountDataState
    default:
        return state
    }
}
