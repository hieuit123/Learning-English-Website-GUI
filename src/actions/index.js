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
    return{
        type: type,
        isShow: false
    }
}