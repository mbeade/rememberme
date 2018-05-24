import { GET_ALL_ARTICLES, CREATE_ARTICLES } from './articlesActionCreator';

const initialSate = {
    index: 1,
    articles: []
};

export default (state = initialSate, action) => {
    switch (action.type) {
        case GET_ALL_ARTICLES:
            state = {
                ...state,
                articles: action.payload,
                index: action.payload.length
            }
            break;
        case CREATE_ARTICLES:
            state = {
                ...state
            }
            break;
    }

    return state;
}