import * as actionTypes from '../Actions/actionTypes';


const initialState = {
    modalIsActive: false,
    backdropIsActive: false
}

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_MODAL:
            return {
                ...state,
                modalIsActive: action.modal,
                backdropIsActive: action.backdrop
            }

        default: return state;
    }
}


export default modalReducer;