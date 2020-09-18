import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import authenticate from '../reducers/loginReducer';

const store = createStore(authenticate, applyMiddleware(thunk));

export default store;
