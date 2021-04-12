import * as types from './../constant/ACTION_TYPE'

const showComponentInitialState = {
    isShowWBDetail: false,
    idItem: null,
    isShowWordDetail: false
}

export const showComponentReducer = (state = showComponentInitialState, action) => {
    switch (action.type) {
        case types.SHOW_WB_DETAIL:
         
        state.isShowWBDetail = action.isShow
            state.idItem = action.id
            return {...state, isShowWBDetail:action.isShow, idItem:action.id}
        case types.SHOW_WORD_DETAIL:
            return state
        default:
            return state
    }
}