import * as actionTypes from './actionTypes';
import * as actions from '../Actions/action-index';
import axios from 'axios';


export const matchingUsers = (lettersTyped, userPicked) => {
    return {
        type: actionTypes.MATCHING_USERS,
        lettersTyped,
        userPicked
    }
}


export const userPicked = userPicked => {
    return {
        type: actionTypes.USER_PICKED,
        userPicked
    }
}


export const fetchData = (users = []) => {
    return {
        type: actionTypes.FETCH_DATA,
        users
    }
}



export const fetchDataFromRemoteAPI = () => {
    return async dispatch => {
        const fetchUsernames = async () => {
            dispatch(actions.fetchingStatus(true, false, ''));
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const userData = await response.data;
            dispatch(actions.fetchingStatus(false, false, ''));
            return userData;
        };
        try {
            const users = await fetchUsernames();
            dispatch(fetchData(users));
        } catch (err) {
            dispatch(actions.fetchingStatus(false, true, 'Users have not been loaded.'));
            dispatch(actions.modalState(true, true));
        }
    }
}
