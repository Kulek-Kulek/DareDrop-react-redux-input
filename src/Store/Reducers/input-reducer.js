import * as actionTypes from '../Actions/actionTypes';


const initialState = {
    lettersTyped: ''
}

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LETTERS_TYPED:
            return {
                ...state,
                lettersTyped: action.letters
            }

        default: return state;
    }
}


export default inputReducer;