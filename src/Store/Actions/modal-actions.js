import * as actionTypes from './actionTypes';

export const modalState = (modal, backdrop) => {
    return {
        type: actionTypes.TOGGLE_MODAL,
        modal,
        backdrop
    }
}