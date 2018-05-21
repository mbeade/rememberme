export const GET_ALL_ARTICLES = 'GET_ALL_ARTICLES';
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