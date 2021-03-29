import * as types from '../constant/ACTION_TYPE'
export const loginAction = (credential, token) => {
    return {
        type: types.LOGIN,
        credential: credential,
        token: token
    }

}