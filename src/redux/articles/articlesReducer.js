import { GET_ALL_ARTICLES } from './articlesActionCreator';

const initialSate = {
    articles: []
};

export default (state = initialSate, action) => {
    switch (action.type) {
        case GET_ALL_ARTICLES:
            state = {
                ...state,
                articles: action.payload
            }
            break;
    }

    return state;
}