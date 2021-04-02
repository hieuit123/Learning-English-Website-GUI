import * as types from './../constant/ACTION_TYPE'


var initialState = {
    userName: null,
    token: null
}

export const loginReducer = (state = initialState, action) => {
    if (action.type === types.LOGIN) {
        var { username, token } = action.credential
        if (username && token) {
            //save token to localStorage
            localStorage.setItem("token", token)
            return { username, token }
        }
    }
    return state
}