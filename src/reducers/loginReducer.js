import * as types from './../constant/ACTION_TYPE'
var initialState = {
        userName: null,
        passWord: null,
        token:null
}

export const loginReducer = (state = initialState, action) => {
 
    if (action.type === types.LOGIN) {
        var {username, password} = action.credential
        
        var token = action.token
        console.log(username);
        if (username && password) {        
            return {username, password, token}
        }
    }
    return state
}