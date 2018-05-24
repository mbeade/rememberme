export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
export const CREATE_ARTICLES = 'GET_ALL_ARTICLES';

import databaseRef from '../../firebase/firebase';
const articlesRef = databaseRef.child("articles");

export const getAllArticles = () => {
    return dispatch => {
        articlesRef.on('value', snapshot => {
            dispatch({
                type: GET_ALL_ARTICLES,
                payload: snapshot.val()
            });
        });
    }
}

export const createArticle = (article, key) => {
    if (key) {
        return (dispatch) => {
            databaseRef.child(`articles/${key}`).set({ article }, (error) => console.log('Error saving articles!')).then(() => {
                dispatch({
                    type: TAGS_ARTICLE
                });
            });
        }
    }
}