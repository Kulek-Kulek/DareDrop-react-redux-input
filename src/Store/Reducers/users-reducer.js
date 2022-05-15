import * as actionTypes from '../Actions/actionTypes';

const initialState = {
    users: [],
    userPicked: {},
    matchingUsers: []
}

const usersDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA:
            return {
                ...state,
                users: state.users.concat(action.users)
            }

        case actionTypes.USER_PICKED:
            const updatedMatchedUsers = [...state.matchingUsers];
            let updatedUserPicked;
            if (action.userPicked) {
                updatedUserPicked = updatedMatchedUsers.find(user => user.id.toString() === action.userPicked.toString());
            } else updatedUserPicked = {};

            return {
                ...state,
                userPicked: updatedUserPicked
            }

        case actionTypes.MATCHING_USERS:
            const updatedUsers = [...state.users];
            const updatedMatchingUsers = action.lettersTyped && !action.userPicked ?
                updatedUsers.filter(username => username.username.toLowerCase().startsWith(action.lettersTyped.toLowerCase())) :
                [];
            return {
                ...state,
                matchingUsers: updatedMatchingUsers
            }

        default: return state;
    }
}


export default usersDataReducer;