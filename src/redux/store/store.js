
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger} from 'redux-logger'
import rootReducer from './rootReducer';
import reduxThunk from 'redux-thunk';

export default createStore(rootReducer, {}, applyMiddleware(reduxThunk, createLogger()));