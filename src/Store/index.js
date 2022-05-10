import { createStore } from 'redux';

const userDataReducer = (state = [], action) => {
    console.log(state);
}

const store = createStore(userDataReducer);

export default store;