import * as types from './../constant/ACTION_TYPE'

var initialState = {
    userName: null,
    token: null,
    accountID:null
}

export const loginReducer = (state = initialState, action) => {
    if (action.type === types.LOGIN) {
        var { username, token, accountID } = action.credential
        if (username && token) {
            //save token to localStorage
            window.localStorage.setItem("tokenlve", token)
            window.localStorage.setItem("accountIDlve", accountID)
            return { username, token,accountID }
        }
    }
    return state
}