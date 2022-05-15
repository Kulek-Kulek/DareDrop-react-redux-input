import * as actionTypes from './actionTypes';

export const lettersTyped = letters => {
    return {
        type: actionTypes.LETTERS_TYPED,
        letters
    }
}