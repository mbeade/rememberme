
import { createStore, combineReducers, applyMiddleware } from 'redux';
import mathReducer from '../reducers/mathReducer';
import userReducer from '../reducers/userReducer';
import { createLogger} from 'redux-logger'
import rootReducer from '../reducers/rootReducer';
import reduxThunk from 'redux-thunk';

export default createStore(rootReducer, {}, applyMiddleware(reduxThunk, createLogger()));