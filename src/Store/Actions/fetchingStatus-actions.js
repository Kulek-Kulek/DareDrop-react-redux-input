import * as actionTypes from './actionTypes';

export const fetchingStatus = (isLoading, error, message) => {
    return {
        type: actionTypes.FETCHING_STATUS,
        isLoading,
        error,
        message
    }
}