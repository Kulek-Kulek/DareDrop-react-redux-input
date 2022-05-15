import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import usersDataReducer from './Store/Reducers/users-reducer';
import inputReducer from './Store/Reducers/input-reducer';
import fetchingStatusReducer from './Store/Reducers/fetchinStatus-reducer';
import modalReducer from './Store/Reducers/modal-reducer';
import App from './App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    usersData: usersDataReducer,
    inputState: inputReducer,
    fetchingStatus: fetchingStatusReducer,
    modalStatus: modalReducer
});

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

