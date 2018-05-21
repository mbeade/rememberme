
import { combineReducers } from 'redux';
import tagsReducer from '../tags/tagsReducer';
import articlesReducer from '../articles/articlesReducer';

export default combineReducers(
    {
        tags: tagsReducer,
        articles: articlesReducer
    });