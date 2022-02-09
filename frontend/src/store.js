import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import { authReducer, userReducer, forgotPasswordReducer } from './reducers/userReducers';
import {questionReducer, topicReducer} from './reducers/topicReducer'
const reducer = combineReducers({
    auth: authReducer,
    content: topicReducer,
    user: userReducer,
    questions: questionReducer,
    forgotPassword: forgotPasswordReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;