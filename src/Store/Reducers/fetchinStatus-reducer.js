import * as actionTypes from '../Actions/actionTypes';


const initialState = {
    isLoading: false,
    error: false,
    message: ''
}

const fetchingStatusReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_STATUS:
            return {
                ...state,
                isLoading: action.isLoading,
                error: action.error,
                message: action.message
            }

        default: return state;
    }
}


export default fetchingStatusReducer;