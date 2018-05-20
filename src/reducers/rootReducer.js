
import { combineReducers } from 'redux';
import mathReducer from './mathReducer';
import userReducer from './userReducer';
import tagsReducer from './tagsReducer';

export default combineReducers(
    {
        math: mathReducer,
        user: userReducer,
        tags: tagsReducer
    });